import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState<number>(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {

 // Retrieve saved candidates from local storage

  const saved = localStorage.getItem('savedCandidates');
  return saved ? JSON.parse(saved) : [];
  
});
  
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await searchGithub();
        setCandidates(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCandidates();
  }, []);

 
  useEffect(() => {
    const saveCandidates = () => {
      localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    };
    saveCandidates();
  }, [savedCandidates]);

  const handleSaveCandidate = () => {
    const currentCandidate = candidates[currentCandidateIndex];
    setSavedCandidates([...savedCandidates, currentCandidate]);
    handleNextCandidate();
  };

  const handleNextCandidate = () => {
    setCurrentCandidateIndex((prevIndex) => (prevIndex + 1) % candidates.length);
  };  


  const currentCandidate = candidates[currentCandidateIndex];
  return (
    <div>
      <h1>Candidate Search</h1>
  
      <button onClick={handleSaveCandidate}>Save Candidate</button>
      <button onClick={handleNextCandidate}>Next Candidate</button>
      {currentCandidate && <CandidateCard />}
    </div>
  );
  

}
export default CandidateSearch;
