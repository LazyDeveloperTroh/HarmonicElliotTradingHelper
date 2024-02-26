import React from 'react';
import Stack from '@mui/material/Stack';
import MenuList from './MenuList';

function Navigator() {
    const group1 = [
        {'name':'plans', 'icon':'p-icon1'},
        {'name':'statistics', 'icon':'p-icon2'}
    ]
    const group2 = [
        {'name':'elliot wave', 'icon':'a-icon1'},
        {'name':'harmonic', 'icon':'a-icon2'}
    ]
    const group3 = [
        {'name':'users', 'icon':'s-icon1'}
    ]
    return (
        <Stack direction="column" spacing={3}>
            <MenuList groupName="Plan" menuItems={group1}/>
            <MenuList groupName="Analysis" menuItems={group2}/>
            <MenuList groupName="Settings" menuItems={group3}/>
        </Stack>
        )
}

export default Navigator;