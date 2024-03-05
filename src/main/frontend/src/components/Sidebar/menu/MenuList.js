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


function MenuList() {
    const [menuGroupList, setMenuGroupList] = React.useState([
        {
            title: 'Plan',
            menuList: [
                {
                    title: 'Plans',
                    icon: <ChecklistIcon/>,
                    href:'/plans',
                    subMenuList: [{
                        title: '매매계획',
                        href: '/plans/list'
                    },{
                        title: '매매계획등록',
                        href: '/plans/list'
                    },{
                        title: '매매계획',
                        href: '/plans/list'
                    }]
                },
                {
                    title: 'Statistics',
                    icon: <StackedBarChartOutlinedIcon/>,
                    href:'/statistics'
                }
            ]
        },
        {
            title: 'Analyze',
            menuList: [
                {
                    title: 'Elliot',
                    icon: <SsidChartOutlinedIcon/>,
                    href:'/elliot wave',
                    subMenuList: [{
                        title: '파동마스터',
                        href: '/elliot/list'
                    },{
                        title: '파동등록',
                        href: '/elliot/list'
                    },{
                        title: '파동동계',
                        href: '/elliot/list'
                    }]
                },
                {
                    title: 'Harmonic',
                    icon: <QueryStatsOutlinedIcon/>,
                    href:'/harmonic'
                }
            ]
        },
        {
            title: 'Settings',
            menuList: [
                {
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
                        sx={{backgroundColor: 'background.paper'}}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                {menuGroup.title}
                            </ListSubheader>
                        }
                    >
                        {menuGroup.menuList.map((menu) => (
                            <MenuItem title={menu.title} icon={menu.icon} subMenuList={menu.subMenuList}/>
                        ))}
                    </List>
                    ))}
            </Stack>
    )
}

export default MenuList;