import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListSubheader from "@mui/material/ListSubheader";

const style = {
    p: 0,
    width: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
}
function TradingTips() {
    return (
        <List sx={style}
              subheader={
                  <ListSubheader component="div" id="nested-list-subheader" style={{fontSize: "1.5rem", color: '#121926'}}>
                      매매 TIPS
                  </ListSubheader>
              }>
            <ListItem>
                <ListItemText primary={"1. 삼각 수렴의 특징"}/>
            </ListItem>
            <Divider component={"li"}/>
            <ListItem>
                <ListItemText primary={"2. 2파 특징.."}/>
            </ListItem>
            <Divider component={"li"}/>
            <ListItem>
                <ListItemText primary={"3. 파동의 끝에서의 특징.."}/>
            </ListItem>
            <Divider component={"li"}/>
            <ListItem>
                <ListItemText primary={"4. 알트 불장 특징.."}/>
            </ListItem>
        </List>
    )
}

export default TradingTips;