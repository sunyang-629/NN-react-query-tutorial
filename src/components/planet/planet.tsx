import React from "react";

interface IPlanetProps {
  planet: {
    name: string;
    population: string;
    terrain: string;
  };
}

const Planet: React.FC<IPlanetProps> = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
