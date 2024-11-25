import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// interface Movie {
//   name: string;
//   Year: string;
//   imdbID: string;
//   Type: string;
//   Poster: string;
// }

const TrendingCompo = () => {
  const [data, setData] = useState([]); 

  const fetchMovies = async () => {
    const url = "https://api.themoviedb.org/3/trending/movie/week";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGI2MjcwYjk4M2M1MDhjOGI1NzA0MDA5YmQxYzNjZSIsIm5iZiI6MTczMjA0NTAwMy4zMjczNDc4LCJzdWIiOiI2NzMwYzcxMDQ0NWVmZTc4MTg0M2Q2MjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EOHolbEAwVNDqU9272tR0V3RxSwS6v6iEpOJ_s1YcrA",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="w-full p-5 mx-auto mb-5">
      <div className="flex w-full gap-4 text-center justify-around mb-10">
        <img src="/images/trending.png" alt="Trending" />
        <p className="flex whitespace-nowrap text-center justify-center self-center text-[28px] font-[700]">
          Trending
        </p>
        <div className="rounded self-center w-full h-[1px] bg-slate-500"></div>
        <a
          href="#"
          className="whitespace-nowrap self-center text-slate-800 text-[20px] font-[400]"
        >
          see more
        </a>
      </div>
      <Box>
        <Box width={"100%"} display={"flex"} gap={5} flexWrap={"wrap"}>
          {data?.length > 0 ? (
            data.map((movie, index) => (
              <Box
                width={"210px"}
                key={index}
                sx={{
                  "&:hover img": {
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              >
                <Box>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={"100%"}
                    style={{
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </Box>
                <p className="text-[25] font-[500] mt-6" mb-2>
                  {movie.title}
                </p>
                <p className="truncate " trunc>
                  {movie.overview}
                </p>
                <Box display={"flex"} mt={2} gap={3}>
                  <p>{new Date(movie.release_date).getFullYear()}</p>
                  <p className="flex gap-1">
                    <span className="flex text-center self-center rounded w-1 h-1 p-[2px] bg-red-500"></span>
                    {movie.runtime || "134"}m
                  </p>
                </Box>
              </Box>
            ))
          ) : (
            <div className="loader"> </div>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default TrendingCompo;
