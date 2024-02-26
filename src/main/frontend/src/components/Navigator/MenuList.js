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


function MenuList(props) {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    }


    const groupName = props.groupName;
    const menusItems = props.menuItems;
    return (
        <List
            sx = {{width: '100%', maxWidth: 360, bgcolor:'background.paper'}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    {groupName}
                </ListSubheader>
            }
        >
            {
                menusItems.map((item) => (
                    <div>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <SendIcon/>
                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                            {open ? <ExpandLess/> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component={'div'} disablePadding>
                                <ListItemButton sx={{p1: 4}}>
                                    <ListItemIcon>
                                        <StartBorder />
                                    </ListItemIcon>
                                    <ListItemText primary={'Starred'}></ListItemText>
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </div>
                ))
            }
        </List>
    )
}

export default MenuList;