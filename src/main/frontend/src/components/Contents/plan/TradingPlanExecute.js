import * as React from 'react';
import {Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, TextField} from "@mui/material";
import "./TradingPlanExecute.css";
import ListSubheader from "@mui/material/ListSubheader";
import InfoIcon from '@mui/icons-material/Info';

function TradingPlanExecute({title, }) {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
            cols: 2,
        },
    ];

    return <div>
        <h3>{title}</h3>
        <Grid container sx={{border: "solid 1px #e3e8ef", padding: "1rem 0.5rem"}}>
            <Grid item md={9}>
                <ImageList sx={{
                    gridAutoFlow: "column",
                    gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr)) !important",
                    gridTemplateRows: "300px !important",
                    gridAutoColumns: "minmax(300px, 1fr)"
                }}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} >
                            <img
                                srcSet={`${item.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <InfoIcon/>
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                {/*<div style={{display: "flex", overflow: "auto", flexWrap: "nowrap", gap: "1rem"}}>*/}
                {/*    {itemData.map((item) => (*/}
                {/*        <div style={{textAlign: "center"}}>*/}
                {/*            <img*/}
                {/*                srcSet={`${item.img}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}*/}
                {/*                src={`${item.img}?w=300&h=300&fit=crop&auto=format`}*/}
                {/*                loading="lazy"*/}
                {/*                style={{border: "solid 2px gray"}}*/}
                {/*            />*/}
                {/*            <h4>이미지 이름</h4>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*    <div*/}
                {/*        className={"addBtn"}*/}
                {/*        style={{minWidth: "300px", height: "300px", border: "1px solid #e3e8ef", position: "relative", cursor: "pointer"}}>*/}
                {/*        <div*/}
                {/*            style={{*/}
                {/*                position: "absolute", top: "50%", left: "50%", fontSize: "5rem",*/}
                {/*                fontWeight: "bold", transform: "translate(-50%, -50%)"*/}
                {/*            }}>*/}
                {/*            +*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Grid>
            <Grid item md={3}>
                <div style={{padding: "1rem 1rem"}}>
                    <TextField
                        id="outlined-multiline-static"
                        label="참고"
                        multiline
                        fullWidth
                        rows={13}
                        defaultValue="Default Value"
                    />
                </div>
            </Grid>
        </Grid>
    </div>;
}

export default TradingPlanExecute;