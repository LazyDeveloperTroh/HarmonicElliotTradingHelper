import * as React from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    TextField
} from "@mui/material";
import ChartExplainList from "./chart/ChartExplainList";
import './Plan.css';
import {useState} from "react";
import ChartInfoDialog from "./chart/ChartInfoDialog";

function Plan() {
    const [title, setTitle] = useState("");
    const [ticker, setTicker] = useState("BTCUSDT");
    const [position, setPosition] = useState("LONG");
    const [basisList, setBasisList] = useState([
        {name: "카운팅",code: "COUNTING", check: false},
        {name: "다이버전스",code: "DIVERGENCE", check: false},
        {name: "매물대",code: "VOLUME PROFILE", check: false},
        {name: "피보나치",code: "FIBONACCI RATIO", check: true},
        {name: "지지/저항",code: "SUPPORT/RESISTANCE", check: false},
        {name: "추세",code: "TREND", check: false},
        {name: "캔들",code: "CANDLE", check: false}
    ]);
    const [result, setResult] = useState('WAITING');
    const [tickerOpen, setTickerOpen] = useState(false);
    const [positionOpen, setPositionOpen] = useState(false);

    // modal 차트상세정보
    const [chartDetailOpen, setChartDetailOpen] = useState(false);
    const [chartDetail, setChartDetail] = useState({});
    const handleChartDetail = (newChartDetail) => {
        setChartDetail(newChartDetail)
        let newChartInfoList = []
        for (let i = 0; i < chartInfoList.length; i++) {
            if(chartInfoList[i].id === newChartDetail.id) {
                newChartInfoList.push(newChartDetail);
            } else {
                newChartInfoList.push(chartInfoList[i])
            }
        }
        setChartInfoList(newChartInfoList);
    }
    const handlerChartDetail = (id, title, img, desc) => {
        setChartDetailOpen(true);
        setChartDetail({
            "id": id,
            "title": title,
            "img": img,
            "desc": desc
        })
    }
    const handleChartDetailClose = () => {
        setChartDetailOpen(false);
        setChartDetail({});
    }

    // 차트정보 리스트
    const [chartInfoList, setChartInfoList] = useState([]);
    const handleChartInfoList = (chartInfoList) => setChartInfoList(chartInfoList);

    const save = () => {
        console.log(title);
        console.log(ticker);
        console.log(position);
        console.log(basisList);
        console.log(result);
    }


    return (
        <Paper component={"form"} elevation={3} sx={{height: "98%", padding: "inherit"}}>
            <div className={"float-button-container"}>
                <Button variant="contained" onClick={save}>저장하기</Button>
            </div>
            <Grid container spacing={2}>
                <Grid item md={9}>
                    <InputLabel id="title-label" sx={{fontWeight: "bold", padding: "0.5rem 0rem"}}>타이틀</InputLabel>
                    <TextField
                        fullWidth
                        size={"small"}
                        placeholder={"2024/04/01 $70,500 웻지 숏 전략"}
                        defaultValue={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Grid>
                <Grid item container md={12} columnSpacing={3}>
                    <Grid item md={1}>
                        <InputLabel id="ticker-label"
                                    sx={{fontWeight: "bold", padding: "0.5rem 0rem"}}>Ticker</InputLabel>
                        <Select
                            value={ticker}
                            size={"small"}
                            open={tickerOpen}
                            onClose={() => setTickerOpen(false)}
                            onOpen={() => setTickerOpen(true)}
                            onChange={(e) => setTicker(e.target.value)}
                        >
                            <MenuItem value={"BTCUSDT"}>BTCUSDT</MenuItem>
                            <MenuItem value={"ETHUSDT"}>ETHUSDT</MenuItem>
                            <MenuItem value={"XRPUSDT"}>XRPUSDT</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item md={1}>
                        <InputLabel id="position-label"
                                    sx={{fontWeight: "bold", padding: "0.5rem 0rem"}}>Position</InputLabel>
                        <Select
                            value={position}
                            size={"small"}
                            open={positionOpen}
                            onClose={() => setPositionOpen(false)}
                            onOpen={() => setPositionOpen(true)}
                            onChange={(e) => setPosition(e.target.value)}
                        >
                            <MenuItem value={"LONG"}>LONG</MenuItem>
                            <MenuItem value={"SHORT"}>SHORT</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item md={5.5}>
                        <InputLabel id="basis-label" sx={{fontWeight: "bold", padding: "0.5rem 0rem"}}>진입근거</InputLabel>
                        <FormControl style={{flexDirection: "row"}}>
                            {basisList.map((basis) =>
                                <FormControlLabel
                                    key={basis.code}
                                    label={basis.name}
                                    control={<Checkbox
                                        value={basis.code}
                                        checked={basis.check}
                                        onChange={(e) => {
                                            let newBasisList = []
                                            for (let i = 0; i < basisList.length; i++) {
                                                if (basisList[i].code !== e.target.value) {
                                                    newBasisList.push(basisList[i])
                                                } else {
                                                    newBasisList.push({
                                                        'code': basis.code,
                                                        'name': basis.name,
                                                        'check': !basis.check
                                                    });
                                                }
                                            }
                                            setBasisList(newBasisList);
                                        }}
                                    />}
                                />)
                            }
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <InputLabel id="result-label"
                                    sx={{fontWeight: "bold", padding: "0.5rem 0rem"}}>결과</InputLabel>
                        <RadioGroup
                            row
                            name="result-buttons-group"
                            value={result}
                            onChange={(event) => setResult(event.target.value)}
                        >
                            <FormControlLabel control={<Radio value="WAITING"/>} label="대기"/>
                            <FormControlLabel control={<Radio value="WIN"/>} label="승"/>
                            <FormControlLabel control={<Radio value="LOSE"/>} label="패"/>
                        </RadioGroup>
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    <ChartExplainList title={"매매 계획"}
                                      chartInfoList={chartInfoList}
                                      handleChartInfoList={handleChartInfoList}
                                      handlerChartDetail={handlerChartDetail}/>
                </Grid>
                <Grid item md={12}>
                    {/*<ChartExplainList title={"매매 실행"}/>*/}
                </Grid>
                <Grid item container md={12}>
                    <Grid item md={4}>
                        <TextField
                            type="number"
                            id="outlined-required"
                            label="1차 진입가격"
                            InputProps={{
                                endAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                        <TextField
                            required
                            type="number"
                            id="outlined-required"
                            label="2차 진입가격"
                            InputProps={{
                                endAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            type="number"
                            id="outlined-required"
                            label="1차 익절가격"
                            InputProps={{
                                endAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />

                        <TextField
                            type="number"
                            id="outlined-required"
                            label="2차 익절가격"
                            InputProps={{
                                endAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            type="number"
                            id="outlined-required"
                            label="1차 손절가격"
                            InputProps={{
                                endAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />

                        <TextField
                            type="number"
                            id="outlined-required"
                            label="2차 손절가격"
                            InputProps={{
                                endAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container md={12}>
                    <Grid item md={6}>
                        <h3>잘한 점</h3>
                        <div style={{padding: "1rem 1rem"}}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                rows={5}
                            />
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <h3>부족한 점</h3>
                        <div style={{padding: "1rem 1rem"}}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                rows={5}
                            />
                        </div>
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    {/*<ChartExplainList title={"단기 시나리오"}/>*/}
                </Grid>
                <Grid item md={12}>
                    {/*<ChartExplainList title={"중ㆍ단기 시나리오"}/>*/}
                </Grid>
                <Grid item md={12}>
                    {/*<ChartExplainList title={"중기 시나리오"}/>*/}
                </Grid>
                <Grid item md={12}>
                    {/*<ChartExplainList title={"장기 시나리오"}/>*/}
                </Grid>
            </Grid>
            <ChartInfoDialog
                open={chartDetailOpen}
                handleClose={handleChartDetailClose}
                chartDetail = {chartDetail}
                handleChartDetail = {handleChartDetail}/>
        </Paper>
    );
}

export default Plan;