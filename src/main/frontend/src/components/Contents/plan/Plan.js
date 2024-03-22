import * as React from 'react';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    TextField
} from "@mui/material";
import TradingPlanExecute from "./TradingPlanExecute";
import TradingScenario from "./TradingScenario";

function Plan() {
    return (
        <Paper component={"form"} elevation={3} sx={{height: "98%", padding: "inherit"}}>
            <Grid container spacing={2}>
                <Grid item md={9}>
                    <InputLabel id="title-label" sx={{fontWeight: "bold", padding: "0.5rem 0rem"}}>타이틀</InputLabel>
                    <TextField labelId="title-label"
                               InputLabelProps={{ shrink: true }}
                               fullWidth
                               size={"small"}
                               placeholder={"2024/04/01 $70,500 웻지 숏 전략"}/>
                </Grid>
                <Grid item container md={12} columnSpacing={3}>
                    <Grid item md={1}>
                        <InputLabel id="ticker-label" sx={{fontWeight: "bold", padding: "0.5rem 0rem"}}>Ticker</InputLabel>
                        <Select
                            labelId="ticker-label"
                            InputLabelProps={{ shrink: true }}
                            id="demo-simple-select"
                            value="10"
                            size={"small"}
                        >
                            <MenuItem value={10}>BTCUSDT</MenuItem>
                            <MenuItem value={20}>ETHUSDT</MenuItem>
                            <MenuItem value={30}>XRPUSDT</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item md={1}>
                        <InputLabel id="position-label" sx={{fontWeight: "bold", padding: "0.5rem 0rem"}}>Position</InputLabel>
                        <Select
                            labelId="position-label"
                            InputLabelProps={{ shrink: true }}
                            id="demo-simple-select"
                            value="LONG"
                            size={"small"}
                        >
                            <MenuItem value={"LONG"}>LONG</MenuItem>
                            <MenuItem value={"SHORT"}>SHORT</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item md={5.5}>
                        <InputLabel id="demo-simple-select-label"  sx={{fontWeight: "bold", padding: "0.5rem 0rem"}}>진입 근거</InputLabel>
                        <FormControl style={{flexDirection: "row"}}>
                            <FormControlLabel control={<Checkbox />} label="카운팅"/>
                            <FormControlLabel control={<Checkbox/>} label="다이버전스"/>
                            <FormControlLabel control={<Checkbox/>} label="매물대"/>
                            <FormControlLabel control={<Checkbox />} label="피보나치"/>
                            <FormControlLabel control={<Checkbox />} label="지지/저항"/>
                            <FormControlLabel control={<Checkbox/>} label="추세선"/>
                            <FormControlLabel control={<Checkbox/>} label="캔들패턴"/>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <InputLabel id="demo-row-radio-buttons-group-label" sx={{fontWeight: "bold", padding: "0.5rem 0rem"}}>결과</InputLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="WAITING" control={<Radio/>} label="대기"/>
                            <FormControlLabel value="WIN" control={<Radio/>} label="승"/>
                            <FormControlLabel value="LOSE" control={<Radio/>} label="패"/>
                        </RadioGroup>
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    <TradingPlanExecute title={"매매 계획"}/>
                </Grid>
                <Grid item md={12}>
                    <TradingPlanExecute title={"매매 실행"}/>
                </Grid>
                <Grid item container md={12}>
                    <Grid md={4}>
                        <TextField
                            required
                            id="outlined-required"
                            label="1차 진입가격"
                            defaultValue="Hello World"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="2차 진입가격"
                            defaultValue="Hello World"
                        />
                    </Grid>
                    <Grid md={4}>
                        <TextField
                            required
                            id="outlined-required"
                            label="1차 익절가격"
                            defaultValue="Hello World"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="2차 익절가격"
                            defaultValue="Hello World"
                        />
                    </Grid>
                    <Grid md={4}>
                        <TextField
                            required
                            id="outlined-required"
                            label="1차 손절가격"
                            defaultValue="Hello World"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="2차 손절가격"
                            defaultValue="Hello World"
                        />
                    </Grid>
                </Grid>
                <Grid item container md={12}>
                    <Grid md={6}>
                        <h3>잘한 점</h3>
                        <div style={{padding: "1rem 1rem"}}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                rows={5}
                                defaultValue="Default Value"
                            />
                        </div>
                    </Grid>
                    <Grid md={6}>
                        <h3>부족한 점</h3>
                        <div style={{padding: "1rem 1rem"}}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                rows={5}
                                defaultValue="Default Value"
                            />
                        </div>
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    <TradingScenario title={"단기 시나리오"}/>
                </Grid>
                <Grid item md={12}>
                    <TradingScenario title={"중ㆍ단기 시나리오"}/>
                </Grid>
                <Grid item md={12}>
                    <TradingScenario title={"중기 시나리오"}/>
                </Grid>
                <Grid item md={12}>
                    <TradingScenario title={"장기 시나리오"}/>
                </Grid>
            </Grid>;
        </Paper>
    );
}

export default Plan;