import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import MenuItem from "./MenuItem";
import Stack from "@mui/material/Stack";
import ChecklistIcon from '@mui/icons-material/Checklist';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import Divider from "@mui/material/Divider";


function MenuList() {
    const [menuGroupList, setMenuGroupList] = React.useState([
        {
            id: '1',
            title: 'Plan',
            menuList: [
                {
                    id: '11',
                    title: 'Plans',
                    icon: <ChecklistIcon/>,
                    href:'/plans'
                },
                {
                    id: '12',
                    title: 'Statistics',
                    icon: <StackedBarChartOutlinedIcon/>,
                    href:'/statistics'
                }
            ]
        },
        {
            id: '2',
            title: 'Analyze',
            menuList: [
                {
                    id: '21',
                    title: 'Elliot',
                    icon: <SsidChartOutlinedIcon/>,
                    subMenuList: [{
                        id: 1,
                        title: '파동마스터',
                        href: '/elliot/list'
                    },{
                        id: 2,
                        title: '파동등록',
                        href: '/elliot/list'
                    },{
                        id: 3,
                        title: '파동동계',
                        href: '/elliot/list'
                    }]
                },
                {
                    id: '22',
                    title: 'Harmonic',
                    icon: <QueryStatsOutlinedIcon/>,
                    href:'/harmonic'
                }
            ]
        },
        {
            id: '3',
            title: 'Settings',
            menuList: [
                {
                    id: '31',
                    title: 'Users',
                    icon: <PersonIcon/>,
                    href:'/users'
                }
            ]
        }
    ]);

    return (
            <Stack direction="column" spacing={1}>
                {menuGroupList.map((menuGroup) => (
                    <List
                        key={menuGroup.id}
                        sx={{backgroundColor: 'background.paper'}}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader" style={{fontSize: "1.1rem", fontWeight: "bold"}}>
                                {menuGroup.title}
                            </ListSubheader>
                        }
                    >
                        {menuGroup.menuList.map((menu) => (
                            <div style={{marginLeft: "1rem"}} key={menu.id} >
                                <MenuItem title={menu.title} icon={menu.icon} href={menu.href} subMenuList={menu.subMenuList}/>
                            </div>
                        ))}
                        <Divider component="li" style={{borderColor: "#e3e8ef"}}/>
                    </List>
                    ))}
            </Stack>
    )
}

export default MenuList;