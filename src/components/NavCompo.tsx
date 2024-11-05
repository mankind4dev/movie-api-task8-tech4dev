import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavCompo = ({
  name,
  link,
  isActive,
}: {
  name: string;
  link: string;
  isActive: boolean;
}) => {
  return (
    <>
      <Box mr={3}>
        <Box>
          <Link to={link}>
            <Typography
              fontSize={24}
              fontWeight={600}
              p={0.5}
              borderRadius={1}
              color={"rgba(68, 68, 68, 1)"}
              sx={{
                position: "relative",
                "&:hover": {
                  "&::before": {
                    content: '""',
                    width: "50%",
                    height: "3px",
                    position: "absolute",
                    left: "5px",
                    bottom: "0",
                    bgcolor: "purple",
                  },
                },
                "&:active": {
                  color: "pink",
                },
                "&:focus": {
                  bgcolor: "red",
                },
              }}
            >
              {name}
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default NavCompo;
