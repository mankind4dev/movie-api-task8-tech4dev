import { Box, Typography } from "@mui/material";
import { Button } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// interface Movie {
//   Title: string;
//   Year: string;
//   imdbID: string;
//   Type: string;
//   Poster: string;
// }

const HeroCompo = () => {
  const [data, setData] = useState([]);
  // const fetchMovies = async () => {
  //   const url =
  //     "https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-key": "c5b69ce011msh12e0ed9933cd648p1d7167jsn384c6952569f",
  //       "x-rapidapi-host": "movie-database-alternative.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, []);
  return (
    <>
      <Box
        display={"flex"}
        width={"100%"}
        height={{ lg: "900px", bs: "900px" }}
        flexDirection={{ lg: "row", md: "column", sm: "column", bs: "column" }}
        px={5}
        flexGrow={1}
        position={"relative"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"center"}
          width={"100%"}
          flex={1}
          pl={1}
        >
          <h1 className="text-[65px] text-[600] text-nowrap ">Find Movies</h1>
          <p className="leading-none tracking-normal text-[30px] sm:text-[50px] uppercase font-babas whitespace-nowrap mb-2 text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
            TV shows and more
          </p>
          <p className="w-[100%] text-wrap  text-[22px] md:w-full">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <button className="flex text-center gap-2 py-3 px-5 mt-20 rounded border ">
            <img
              src="images/youtube.png"
              alt="youtube-icon"
              width={30}
              height={30}
            />
            Watch Tutorial
          </button>
        </Box>
        <Box display={"flex"} 
        flex={1} 
        width={"100%"}>
          <Box className="heroImg">
            <img src="/images/spiderMan.png" alt="spiderMan" />
            <img src="/images/gurdians.png" alt="gurdians" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroCompo;
