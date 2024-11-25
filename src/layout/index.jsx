import { Box } from "@mui/material";
import React  from "react"; 

const Layout = ({ children }) => {
  return (
    <>
      <Box overflowX={"hidden"} maxWidth={"large"} mx={"auto"}>
        {/* {children} */}
      </Box>
    </>
  );
};

export default Layout;
