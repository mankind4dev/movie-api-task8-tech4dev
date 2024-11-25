import {   Box, Typography } from "@mui/material"; 
import React from "react";
import { Link } from "react-router-dom";

const details = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Explore",
    link: "/explore",
  },
  {
    title: "Genre",
    link: "/genre",
  },
  {
    title: "News",
    link: "/news",
  },
  {
    title: "Movies",
    link: "/movies",
  },
  {
    title: "TV Shows",
    link: "/tvShows",
  }, 
];

const NavCompo = () => {
  return (
    <>
      <Box display={"flex"}>
        {details.map((nav, index) => (
          <Box key={index}>
            <Link to={nav.link}>
              <Typography
                fontSize={24}
                fontWeight={600}
                mr={4}
                borderRadius={1}
                color={"rgba(68, 68, 68, 1)"}
                sx={{
                  position: "relative",
                  transition:"transform .7s ease-in-out ",
                  "&:hover": {
                    "&::before": {
                      content: '""',
                      width: "50%",
                      height: "3px",
                      position: "absolute",
                      left: "2px",
                      bottom: "0",
                      bgcolor: "purple",
                    },
                  },
                  "$:focus": {
                    bgcolor: "green",
                    opacity: "0.9",
                  },
                  "&:active": {
                    color: "pink",
                  },
                }}
              >
                {nav.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default NavCompo;
