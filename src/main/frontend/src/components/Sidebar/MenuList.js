import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import {ListItemButton} from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StartBorder from '@mui/icons-material/StarBorder';
import MenuItem from "./MenuItem";
import Stack from "@mui/material/Stack";


function MenuList(props) {
    const [menuList, setMenuList] = React.useState([
        {
            title: 'Plan',
            items: [
                {
                    title: 'plans',
                    href:'/plans'
                },
                {
                    title: 'statistics',
                    href:'/statistics'
                }
            ]
        },
        {
            title: 'Analysis',
            items: [
                {
                    title: 'elliot wave',
                    href:'/elliot wave'
                },
                {
                    title: 'harmonic',
                    href:'/harmonic'
                }
            ]
        },
        {
            title: 'Settings',
            items: [
                {
                    title: 'users',
                    href:'/users'
                }
            ]
        }
    ]);

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    return (
            <Stack direction="column" spacing={3}>
                {menuList.map((menu) => (
                    <List
                        sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                {menu.title}
                            </ListSubheader>
                        }
                    >

                        {menu.items.map((menuItem) => (
                            <MenuItem title={menuItem.title} subItem={false}/>
                        ))}
                    </List>
                    ))}
            </Stack>
    )
}

export default MenuList;