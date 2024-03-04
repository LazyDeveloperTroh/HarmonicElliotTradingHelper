import React from 'react'
import {ListItemButton, makeStyles} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";

function MenuItem({title, icon, subMenuList}) {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <div>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon sx={{minWidth: '2em'}}>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={title}/>
                {subMenuList &&
                    (open ? <ExpandLess/> : <ExpandMore />)}
            </ListItemButton>

            {subMenuList &&
                <Collapse in={open}  timeout="auto" unmountOnExit>
                    {subMenuList.map((subMenu) => (
                        <List component={'div'} sx={{marginLeft: '1em'}} disablePadding>
                            <ListItemButton>
                                ㆍ<ListItemText primary={subMenu.title} sx={{fontSize: '0.7em'}}></ListItemText>
                            </ListItemButton>
                        </List>
                    ))}
                </Collapse>
            }
        </div>
    );
}

export default MenuItem;