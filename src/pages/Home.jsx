import { Box } from "@mui/material";
import React from "react"; 
import HeroCompo from "../components/HeroCompo";
import TrendingCompo from "../components/TrendingCompo";
import MayLikeCompo from "../components/MayLikeCompo";

const Home = () => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <HeroCompo />
        <TrendingCompo />
        <MayLikeCompo />
      </Box>
    </>
  );
};

export default Home;
