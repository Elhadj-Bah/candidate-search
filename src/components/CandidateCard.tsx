import { Candidate } from "../interfaces/Candidate.interface";

interface CandidateCardProps {
  candidate: Candidate;
  saveCandidate: (candidate: Candidate) => void;
  nextCandidate: () => void;
}

export function CandidateCard({
  candidate,
  saveCandidate,
  nextCandidate,
}: CandidateCardProps) {
  return (
    <div>
      <h1>Candidate</h1>

      {candidate ? (
        <div>
          <ul>
            <li key={candidate.id}>
              {candidate.avatar_url && <img src={candidate.avatar_url} />}

              {candidate.html_url && (
                <a href={candidate.html_url} target="_blank" rel="noreferrer">
                  {candidate.login}
                </a>
              )}
              <p>{candidate.name}</p>
              <p>{candidate.location}</p>
              <p>{candidate.avatar_url}</p>
              <p>{candidate.email}</p>
              <p>{candidate.bio}</p>
              <p>{candidate.company}</p>
            </li>
          </ul>

          <button onClick={() => saveCandidate(candidate)}>Save</button>
          <button onClick={() => nextCandidate()}>Next</button>
        </div>
      ) : (
        <h2>No current candidate</h2>
      )}
    </div>
  );
}
export default CandidateCard;
