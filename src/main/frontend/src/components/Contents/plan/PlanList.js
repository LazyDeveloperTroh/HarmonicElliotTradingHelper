import React from 'react'
import {
    Paper,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination,
    InputLabel, Select, MenuItem, Button, IconButton, Grid
} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useNavigate} from "react-router-dom";
import TradingPrinciple from "../TradingPrinciple";
import TradingTips from "../TradingTips";


const columns =[
    {id: 'no', label: 'NO', width: '5%'},
    {id: 'result', label: '결과', width: '5%'},
    {id: 'ticker', label: '종목', width: '5%'},
    {id: 'title', label: '제목', width: '15%'},
    {id: 'basis', label: '매매 근거', width: '10%'},
    {id: 'plan', label: '매매 계획', width: '20%'},
    {id: 'review', label: '복기 내용', width: '20%'},
    {id: 'created', label: '생성일', width: '7%'},
    {id: 'modified', label: '종료일', width: '7%'}
]

function createData(no,result,ticker,title, basis, plan, review, created, modified) {
    return {no,result,ticker,title, basis, plan, review, created, modified};
}

const rows = [
    createData('1', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다111', '2024-03-01', '2024-03-12'),
    createData('2', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다222', '2024-03-01', '2024-03-12'),
    createData('3', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('4', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('5', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('6', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('7', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('8', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('9', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('10', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('11', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('12', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('13', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('14', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('15', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('16', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('17', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('18', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('19', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('20', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
    createData('21', '승', 'BTCUSDT', '2024-03-09 매매계획', '다이버전스, 파동', '63000$ 반익절', '복기합니다333', '2024-03-01', '2024-03-12'),
];

function PlanList() {
    const [page, setPage] = React.useState(0);
    const [ticker, setTicker] = React.useState('BTCUSDT');
    const [result, setResult] = React.useState('');
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [startDate, setStartDate] = React.useState(dayjs('2022-04-17'));
    const [endDate, setEndDate] = React.useState(dayjs('2022-04-17'));
    const navigate = useNavigate();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }
    const handleTicker = (event) => {
        setTicker(event.target.value);
    }
    const handleResult = (event) => {
        setResult(event.target.value ? event.target.value : "");
    }
    const handleAddBtn = () => {
        navigate("/plans/add");
    }

    return (
        <Paper sx={{height: "100%", padding: "inherit"}}>
            <Grid container spacing={2} height={"10%"}>
                <Grid item md={12}>
                    <form>
                        <div style={{display: "flex", gap: "1rem", alignItems: "baseline", }}>
                            <FormControl >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                                        <DatePicker
                                            label="Start Date"
                                            value={startDate}
                                            slotProps={{textField: {size : 'small'}}}
                                            onChange={(newValue) => setStartDate(newValue)}
                                        />
                                        <DatePicker
                                            label="End Date"
                                            value={endDate}
                                            slotProps={{textField: {size : 'small'}}}
                                            onChange={(newValue) => setEndDate(newValue)}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </FormControl>

                            <FormControl size={"small"}>
                                <InputLabel id="demo-simple-select-autowidth-label">종목</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-controlled-open-select"
                                    value={ticker}
                                    label="종목"
                                    onChange={handleTicker}
                                >
                                    <MenuItem value={'BTCUSDT'}>BTCUSDT</MenuItem>
                                    <MenuItem value={'ETHUSDT'}>ETHUSDT</MenuItem>
                                    <MenuItem value={'XRPUSDT'}>XRPUSDT</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl size={"small"} sx={{minWidth: 120 }} >
                                <InputLabel id="demo-simple-select-helper-label" shrink={true}>결과</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-controlled-open-select"
                                    value={result}
                                    displayEmpty
                                    onChange={handleResult}
                                >
                                    <MenuItem value={''}><em>전체</em></MenuItem>
                                    <MenuItem value={'WAIT'}>대기</MenuItem>
                                    <MenuItem value={'WIN'}>승</MenuItem>
                                    <MenuItem value={'LOSE'}>패</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <Button variant="contained">검색</Button>
                            </FormControl>
                        </div>
                    </form>
                </Grid>
                <Grid item md={12}>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{width: column.width, fontWeight: "bold"}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                                <TableCell align={"center"}>
                                    <IconButton onClick={handleAddBtn}>
                                        <AddCircleIcon sx={{color:"#2196f3", verticalAlign: "middle"}}/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role={"checkbox"} tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {value}
                                                    </TableCell>
                                                )
                                            })}
                                            <TableCell align={"center"}><EditIcon/></TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOption={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Grid>

            </Grid>
        </Paper>
    )
}

export default PlanList;