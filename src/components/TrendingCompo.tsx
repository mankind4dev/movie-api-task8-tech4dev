import { Box } from "@mui/material";
import React from "react"; 
import { useEffect } from "react";
import { useState } from "react";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const TrendingCompo = () => {
  const [data, setData] = useState<Movie[]>([]);
  const fetchMovies = async () => {
    const url =
      "https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c5b69ce011msh12e0ed9933cd648p1d7167jsn384c6952569f",
        "x-rapidapi-host": "movie-database-alternative.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result :any = await response.text();
      console.log(result);
      setData(result)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="w-full px-12 mb-5">
      <div className="flex w-full gap-4 text-center justify-around mb-10">
        <img src="/images/trending.png" alt="Trending" />
        <p className="flex whitespace-nowrap text-center justify-center self-center text-[38px] font-[700]">
          Trending
        </p>
        <div className="rounded self-center w-full h-[1px] bg-slate-500"> </div>
        <a
          href="#"
          className="whitespace-nowrap   self-center text-slate-800 text-[24px] font-[400]"
        >
          see more
        </a>
      </div>
      <Box   >
        <Box width={"100%"}   display={"flex"} gap={5}  flexWrap={"wrap"}>
          <Box  width={"210px"}>
            <Box>
              <img src="/images/gurdians.png" alt="gurdian" width={"100%"} />
            </Box>
            <p className="text-[25] font-[500] mt-6">Guardians of the..</p>
            <Box display={"flex"} mt={3} gap={3}>
              <p className="">2023</p>
              <p className="flex gap-1">
                <span className="flex text-center self-center  rounded w-1 h-1  p-[2px] bg-red-500  "></span>
                104m
              </p>
            </Box>
          </Box>
           
          
        </Box>
      </Box>
    </div>
  );
};

export default TrendingCompo;
