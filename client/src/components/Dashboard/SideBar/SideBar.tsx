import { Box, List, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SideBarItem from "./SideBarItem";
import { getUserInfo } from "@/services/actions/auth.services";
const SideBar = () => {
  const [userRole,setUserRole] = useState('')

  useEffect(()=>{
    const {role} = getUserInfo() as any
    setUserRole(role)

  },[])
  // console.log(userInfo);
  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        component={Link}
        href={"/"}
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Image src={assets.svgs.logo} alt="logo" width={40} height={40} />
        <Typography
          sx={{
            cursor: "pointer",
          }}
          variant="h6"
          component="h1"
        >
          PH Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SideBarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
