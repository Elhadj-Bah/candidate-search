
import React, {useState , useEffect} from 'react';
import { Candidate } from '../interfaces/Candidate.interface';



const SavedCandidates: React.FC = () => {
  const savedCandidates = useState<Candidate[]>(() => {
   const saved = localStorage.getItem('savedCandidates');
   return saved ? JSON.parse(saved) : []; })[0];

 useEffect(() => {
  const SaveCandidates = () => {
   localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
   };
    SaveCandidates();
  }, [savedCandidates]);

 return (
    <div>

       <h1>Potential Candidates</h1>
      <ul>
         {savedCandidates.map((candidate) => (
          <li key={candidate.id}>
            <img src={candidate.avatar} alt={candidate.firstName} />
            <a href={candidate.html_url} target="_blank" rel="noreferrer">
              {candidate.firstName} {candidate.lastName}
            </a>
            <p>{candidate.userName}</p> 
             <p>{candidate.location}</p>
               <p>{candidate.avatar}</p>
            <p>{candidate.email}</p>
            <p>{candidate.company}</p>
          </li>
         ))}
      </ul>
     </div>
  );
 };

 export default  SavedCandidates;

