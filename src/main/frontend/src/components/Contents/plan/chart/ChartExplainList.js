import * as React from 'react';
import {Grid, IconButton, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import "./ChartExplainList.css";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DragFileUpload from "../../../Util/DragFileUpload";

function ChartExplainList({title, chartInfoList, handleChartInfoList, handlerChartDetail}) {
    const onRemove = (event, id) => {
        event.stopPropagation();
        handleChartInfoList(
            chartInfoList.filter(item => {
                return item.id !== id;})
        )
    }

    const addChart = (event) => {
        event.stopPropagation();
        event.preventDefault();

        let uploadFiles = [];
        Array.from(event.dataTransfer.files).map((file) => {
            uploadFiles.push({
                id: crypto.randomUUID(),
                title: '',
                img: URL.createObjectURL(file),
                desc: ''
            })
        })
        handleChartInfoList([...chartInfoList, ...uploadFiles]);
    }

    return <div>
        <h3>{title}</h3>
        <Grid container sx={{border: "solid 1px #e3e8ef", padding: "1rem 0.5rem"}}>
            <ImageList sx={{
                gridAutoFlow: "column",
                gridTemplateColumns: "repeat(auto-fill,minmax(400px,1fr)) !important",
                gridTemplateRows: "300px !important",
                gridAutoColumns: "minmax(400px, 1fr)"
            }}>
                {chartInfoList.map((chart) => (
                    <ImageListItem key={chart.id} className={"chartItem"}
                                   onClick={() => handlerChartDetail(chart.id, chart.title, chart.img, chart.desc)}>
                        <img
                            src={chart.img}
                            alt={chart.title}
                            loading="lazy"
                            style={{cursor: "pointer", borderRadius: "4px"}}
                        />
                        <ImageListItemBar
                            title={chart.title}
                            actionIcon={
                                <IconButton
                                    sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                                    aria-label={`info about ${chart.title}`}
                                >
                                    <RemoveCircleOutlineIcon onClick={(event) => {
                                        onRemove(event, chart.id)
                                    }}/>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
                <ImageListItem key={""}>
                    <DragFileUpload onChange={addChart}/>
                </ImageListItem>
            </ImageList>
        </Grid>
    </div>;
}

export default ChartExplainList;