import React from "react";
import axiosInstance from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import Person from "../person/person";
import { v4 as uuidv4 } from "uuid";

const fetchPeople = async () => {
  const res = await axiosInstance.get("/people");
  return res.data;
};

const People = () => {
  const { data, status } = useQuery({
    queryKey: ["people"],
    queryFn: fetchPeople,
  });

  return (
    <div>
      <h2>People</h2>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person person={person} key={uuidv4()} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
