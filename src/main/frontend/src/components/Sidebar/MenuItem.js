import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {ListItemButton} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import StartBorder from "@mui/icons-material/StarBorder";

function MenuItem({title, subItem}) {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <SendIcon fontSize={'small'}/>
                </ListItemIcon>
                <ListItemText primary={title}/>
                {subItem ? open ? <ExpandLess/> : <ExpandMore /> : <></> }
            </ListItemButton>

            <Collapse in={open}  timeout="auto" unmountOnExit>
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
    );
}

export default MenuItem;