import { useState, useEffect } from "react";
import { searchGithub } from "../api/API";
import CandidateCard from "../components/CandidateCard";
import { Candidate } from "../interfaces/Candidate.interface";

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    id: null,
    login: null,
    email: null,
    html_url: null,
    name: null,
    bio: null,
    company: null,
    location: null,
    avatar_url: null,
  });

  const [currentCandidateIndex, setCurrentCandidateIndex] = useState<number>(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await searchGithub();
        setCandidates(data);
        setCurrentCandidate(data[currentCandidateIndex]);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCandidates();
  }, []);

  useEffect(() => {
    const saveCandidates = () => {
      localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
    };
    saveCandidates();
  }, [savedCandidates]);

  const handleSaveCandidate = () => {
    const currentCandidate = candidates[currentCandidateIndex];
    setSavedCandidates([...savedCandidates, currentCandidate]);
    handleNextCandidate();
  };

  const handleNextCandidate = () => {
    console.log("Next Candidate");
    if (currentCandidateIndex === candidates.length - 1) {
      console.log("Out Of Candidates");
      setCurrentCandidateIndex(0);
    }
    setCurrentCandidateIndex((prevIndex) => prevIndex + 1);
    setCurrentCandidate(candidates[currentCandidateIndex]);
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {
        <CandidateCard
          candidate={currentCandidate}
          saveCandidate={handleSaveCandidate}
          nextCandidate={handleNextCandidate}
        />
      }
    </div>
  );
};
export default CandidateSearch;
