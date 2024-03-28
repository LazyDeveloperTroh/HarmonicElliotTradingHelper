import * as React from 'react';
import {Box, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, TextField} from "@mui/material";
import "./ChartExplainList.css";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {Modal} from "@mui/base";
import DragFileUpload from "../../../Util/DragFileUpload";

function ChartExplainList({title}) {
    const [open, setOpen] = React.useState(false);
    const [expandImageSrc, setExpandImageSrc] = React.useState("");
    const [itemData, setItemData] = React.useState([]);

    const handleOpen = function(imgSrc) {
        setOpen(true);
        setExpandImageSrc(imgSrc)
    };
    const handleClose = () => setOpen(false);

    const onRemove = (event, id) => {
        event.stopPropagation();
        setItemData(
            itemData.filter(item => {
                return item.id !== id;})
        )
    }

    const addChart = (event) => {
        event.stopPropagation();
        event.preventDefault();

        let uploadFiles = [];
        Array.from(event.dataTransfer.files).map((file) => {
            uploadFiles.push({
                id: file.name,
                img: URL.createObjectURL(file),
                title: file.name
            })
        })
        setItemData([...itemData, ...uploadFiles]);
    }

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
                        <ImageListItem key={item.id} className={"chartItem"} onClick={() => handleOpen(item.img)}>
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                style={{cursor: "pointer", borderRadius: "4px"}}
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <RemoveCircleOutlineIcon onClick={(event) => {
                                            onRemove(event, item.id)
                                        }}/>
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                    <ImageListItem key={""} >
                        <DragFileUpload onChange={addChart} />
                    </ImageListItem>
                </ImageList>
            </Grid>
            <Grid item md={3}>
                <div style={{padding: "1rem 1rem"}}>
                    <TextField
                        id="outlined-multiline-static"
                        label="참고"
                        multiline
                        fullWidth
                        rows={13}
                    />
                </div>
            </Grid>
        </Grid>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: "90%",
                height: "90%",
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 1,
                zIndex: 2
            }}>
                <img
                    id={"expandImage"}
                    src={expandImageSrc}
                    width={"100%"}
                    height={"100%"}
                    alt={""}
                    loading="lazy"
                />
            </Box>
        </Modal>
    </div>;
}

export default ChartExplainList;