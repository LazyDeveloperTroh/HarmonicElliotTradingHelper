import * as React from 'react';
import {Box, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, TextField} from "@mui/material";
import "./ChartExplainList.css";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {Modal} from "@mui/base";


function ChartExplainList({title, }) {
    const [open, setOpen] = React.useState(false);
    const [expandImageSrc, setExpandImageSrc] = React.useState("");
    const [itemData, setItemData] = React.useState([
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast'
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger'
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera'
        },
        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee'
        },
        {
            id: 5,
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats'
        },
        {
            id: 6,
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey'
        },
        {
            id: 7,
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball'
        },
        {
            id: 8,
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern'
        },
        {
            id: 9,
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms'
        },
        {
            id: 10,
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil'
        },
        {
            id: 11,
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star'
        },
        {
            id: 12,
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike'
        }
    ]);

    const handleOpen = function(imgSrc) {
        setOpen(true);
        setExpandImageSrc(imgSrc)
    };
    const handleClose = () => setOpen(false);

    const onRemove = (id) => {
        setItemData(
            itemData.filter(item => {
                return item.id !== id;})
        )
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
                                srcSet={`${item.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=300&fit=crop&auto=format`}
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
                                        <RemoveCircleOutlineIcon onClick={() => {
                                            onRemove(item.id)
                                        }}/>
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
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
                        defaultValue="Default Value"
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
                    loading="lazy"
                />
            </Box>
        </Modal>
    </div>;
}

export default ChartExplainList;