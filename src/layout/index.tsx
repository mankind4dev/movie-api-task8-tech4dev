import { Box } from '@mui/material'
import React from 'react'
import { ReactNode } from 'react'

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <Box overflow={"hidden "} maxWidth={"large"} mx={"auto"}>
      {children}
    </Box>
  )
}

export default Layout