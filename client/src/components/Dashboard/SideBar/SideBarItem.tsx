import Link from 'next/link';

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { DrawerItem } from '@/types';
import { usePathname } from 'next/navigation';


type IProps={
    item: DrawerItem,
   
}


const SideBarItem = ({item}:IProps) => {
    const linkPath = 
    `/dashboard/${item.path}`;
const  pathName = usePathname()
// console.log(pathName)

    return (
      <Link href={linkPath}>
        <ListItem disablePadding sx={{
            ...(pathName ===linkPath ? {borderRight:"3px solid #1586FD","& svg":{
                color:"#1586FD"
            } }:{}),
            mb:1
        }}>
          <ListItemButton>
            <ListItemIcon>
            {
                item.icon && <item.icon/>
            }
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      </Link>
    );
};

export default SideBarItem;