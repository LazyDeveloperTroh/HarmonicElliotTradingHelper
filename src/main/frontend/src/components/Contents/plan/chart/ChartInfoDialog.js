import {Box, Grid, InputLabel, TextField} from "@mui/material";
import {Modal} from "@mui/base";
import * as React from "react";

function ChartInfoDialog({open, handleClose, chartDetail, handleChartDetail}) {
    return <Modal
        open={open}
        onClose={handleClose}
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
            p: 3,
            zIndex: 2
        }}>
            <Grid container spacing={1}>
                <Grid item md={10}>
                    <img
                        src={chartDetail.img}
                        alt={""}
                        loading="lazy"
                        style={{maxHeight: "800px", maxWidth: "1400px", width: "auto", height: "auto", objectFit: "fill"}}
                    />
                </Grid>
                <Grid container item md={2} direction={"column"} spacing={2}>
                    <Grid item md={1}>
                        <InputLabel id="chart-title-label" sx={{fontWeight: "bold", padding: "0.5rem 0rem"}}>제목</InputLabel>
                        <TextField
                            fullWidth
                            size={"small"}
                            placeholder={"2024/04/01 $70,500 웻지 숏 전략"}
                            defaultValue={chartDetail.title}
                            onChange={(e) => handleChartDetail({
                                "id": chartDetail.id,
                                "title": e.target.value,
                                "img": chartDetail.img,
                                "desc": chartDetail.desc
                            })}
                        />
                    </Grid>
                    <Grid item md={9}>
                        <InputLabel id="chart-desc-label" sx={{fontWeight: "bold", padding: "0.5rem 0rem"}}>설명</InputLabel>
                        <TextField
                            fullWidth
                            multiline
                            rows={20}
                            autoFocus
                            margin="dense"
                            defaultValue={chartDetail.desc}
                            onChange={(e) => handleChartDetail({
                                "id": chartDetail.id,
                                "title": chartDetail.title,
                                "img": chartDetail.img,
                                "desc": e.target.value
                            })}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Modal>
}

export default ChartInfoDialog;