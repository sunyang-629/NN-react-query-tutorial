import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import axiosInstance from "../../utils/axios";
import Planet from "../planet/planet";
import { v4 as uuidv4 } from "uuid";

const fetchPlanets = async ({ queryKey }) => {
  const [_key, { page }] = queryKey;
  const res = await axiosInstance.get(`/planets?page=${page}`);
  return res.data;
};

const Planets = () => {
  const [page, setPage] = React.useState<number>(1);
  const { data, status, isPreviousData } = useQuery({
    queryKey: ["planets", { page }],
    queryFn: fetchPlanets,
    keepPreviousData: true,
  });

  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous page
          </button>
          <span>{page}</span>
          <button
            disabled={isPreviousData || !data?.next}
            onClick={() => {
              if (!isPreviousData && Boolean(data.next))
                setPage((old) => old + 1);
            }}
          >
            Next page
          </button>
          <div>
            {data.results.map((planet) => (
              <Planet planet={planet} key={uuidv4()} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
