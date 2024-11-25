import { Box } from "@mui/material";
import React from "react";
import NavCompo from "./NavCompo";
import { FaHamburger } from "react-icons/fa";



const Header = () => {
  return (
    <>
      <Box
        display={"flex"} 
        alignItems={"center"}
        width={"100vw"}
      >
        <Box
          display={"flex"}
          p={3}
          justifyContent={"space-around"}
          alignItems={"center"}
          width={"100%"}
        >
          <Box display={"flex"} gap={1.5} alignItems={"center"}>
            <img src="/images/logo1.png" alt="Logo-1" width={65} height={65} />
            <img
              src="/images/logo2.png"
              alt="Logo-2"
              width={102}
              height={64}
              style={{ marginBottom: "20px" }}
            />
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            <NavCompo /> 
          </Box>
          {/* <Box display={{ lg: "none", bs: "block" }} ml={"auto"}>
            <FaHamburger />
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default Header;
