import React from "react";

interface IPersonProps {
  person: {
    name: string;
    gender: string;
    birth_year: string;
  };
}

const Person: React.FC<IPersonProps> = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Birth year - {person.birth_year}</p>
    </div>
  );
};

export default Person;
