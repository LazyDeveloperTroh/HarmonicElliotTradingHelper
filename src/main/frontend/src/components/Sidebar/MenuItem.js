import React from 'react'
import {ListItemButton, makeStyles} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import StartBorder from "@mui/icons-material/StarBorder";
import createTheme from '@mui/system/createTheme';


function MenuItem({title, icon, subMenuList}) {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <div>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon sx={{minWidth: 30}}>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={title} primaryTypographyProps={{fontSize: '0.7rem'}} />
                {subMenuList &&
                    (open ? <ExpandLess sx={{fontSize: '1rem', marginLeft: '5px'}}/> : <ExpandMore sx={{fontSize: '1rem'}}/>)}
            </ListItemButton>

            {subMenuList &&
                <Collapse in={open}  timeout="auto" unmountOnExit>
                    {subMenuList.map((subMenu) => (
                        <List component={'div'} disablePadding>
                            <ListItemButton sx={{p1: 4}}>
                                <ListItemText primary={subMenu.title} primaryTypographyProps={{fontSize: '0.7rem'}}></ListItemText>
                            </ListItemButton>
                        </List>
                    ))}
                </Collapse>
            }
        </div>
    );
}

export default MenuItem;