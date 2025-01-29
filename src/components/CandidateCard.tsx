import { Candidate } from "../interfaces/Candidate.interface";


  interface CandidateCardProps {  
    candidate: Candidate;
    saveCandidate: (candidate: Candidate) => void;
    nextCandidate: () => void;
 }

export function CandidateCard({ candidate, saveCandidate, nextCandidate }: CandidateCardProps) {
  return (
    <div>
      <h1>Candidate</h1>
      <ul>
  
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

      </ul>

      <button onClick={() => saveCandidate(candidate)}>Save</button>
      <button onClick={nextCandidate}>Next</button>
    </div>
  );

}
export default CandidateCard;