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
function TradingPrinciple() {
    return (
        <List sx={style}
              subheader={
                  <ListSubheader component="div" id="nested-list-subheader" style={{fontSize: "1.5rem", color: '#121926'}}>
                      매매원칙
                  </ListSubheader>
              }>
            <ListItem>
                <ListItemText primary={"0. 잃지않는 매매하기"}/>
            </ListItem>
            <Divider component={"li"}/>
            <ListItem>
                <ListItemText primary={"1. 반익절, 반본절"}/>
            </ListItem>
            <Divider component={"li"}/>
            <ListItem>
                <ListItemText primary={"2. 매물대에서 거래하기"}/>
            </ListItem>
            <Divider component={"li"}/>
            <ListItem>
                <ListItemText primary={"3. 추세전환 확인하기"}/>
            </ListItem>
            <Divider component={"li"}/>
            <ListItem>
                <ListItemText primary={"4. 진입 근거는 최소 3개"}/>
            </ListItem>
        </List>
    )
}

export default TradingPrinciple;