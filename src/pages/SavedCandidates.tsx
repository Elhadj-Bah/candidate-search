import React, { useState, useEffect } from "react";
import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates: React.FC = () => {
  const savedCandidates = useState<Candidate[]>(() => {
    const saved = localStorage.getItem("savedCandidates");
    return saved ? JSON.parse(saved) : [];
  })[0];

  useEffect(() => {
    const SaveCandidates = () => {
      localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
    };
    SaveCandidates();
  }, [savedCandidates]);

  return (
    <div>
      <h1>Potential Candidates</h1>

      {savedCandidates.length === 0 ? (
        <h2>No saved candidates</h2>
      ) : (
        <ul>
          {savedCandidates.map((candidate) => (
            <li key={candidate.id}>
              <img src={candidate?.avatar_url} alt={candidate?.name} />
              <a href={candidate?.html_url} target="_blank" rel="noreferrer">
                {candidate.name} {candidate.bio}
              </a>
              <p>{candidate.login}</p>
              <p>{candidate.location}</p>
              <p>{candidate.avatar_url}</p>
              <p>{candidate.email}</p>
              <p>{candidate.company}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedCandidates;
