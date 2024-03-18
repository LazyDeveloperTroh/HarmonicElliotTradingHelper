import React from 'react'
import {ListItemButton} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import {useNavigate} from "react-router-dom";

function MenuItem({title, icon, href, subMenuList}) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const moveToPage = (e) => {
        const href = e.currentTarget.dataset.href;
        alert(href)
        navigate(href)
    }

    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <div>
            <ListItemButton onClick={subMenuList ? handleClick : moveToPage} data-href={href}>
                <ListItemIcon sx={{minWidth: '2rem'}}>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={title}/>
                {subMenuList &&
                    (open ? <ExpandLess/> : <ExpandMore />)}
            </ListItemButton>

            {subMenuList &&
                <Collapse in={open}  timeout="auto" unmountOnExit>
                    {subMenuList.map((subMenu) => (
                        <List component={'div'} sx={{marginLeft: '1rem'}} disablePadding>
                            <ListItemButton onClick={moveToPage} data-href={subMenu.href}>
                                ㆍ<ListItemText primary={subMenu.title} sx={{fontSize: '0.7rem'}}></ListItemText>
                            </ListItemButton>
                        </List>
                    ))}
                </Collapse>
            }
        </div>
    );
}

export default MenuItem;