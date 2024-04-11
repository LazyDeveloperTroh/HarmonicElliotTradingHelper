import React, {useEffect, useState} from 'react'
import {
    Button,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import dayjs from 'dayjs';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {GET_PLAN_PATH} from "configuration/ApiPath";
import {format} from "date-fns";
import {ko} from "date-fns/locale";
import {NumericFormat} from "react-number-format";


const columns =[
    {id: 'id', label: 'NO', width: '3%'},
    {id: 'title', label: '제목', width: '14%'},
    {id: 'ticker', label: '종목', width: '3%'},
    {id: 'position', label: '포지션', width: '5%'},
    {id: 'entryPrice', label: '진입', width: '6%'},
    {id: 'targetPrice', label: '목표', width: '6%'},
    {id: 'stopLossPrice', label: '손절', width: '6%'},
    {id: 'goodComment', label: '잘한점', width: '15%'},
    {id: 'badComment', label: '개선점', width: '15%'},
    {id: 'createdAt', label: '생성일', width: '11%'},
    {id: 'modifiedAt', label: '종료일', width: '11%'}
]


function PlanList() {
    const [page, setPage] = React.useState(0);
    const [ticker, setTicker] = React.useState('BTCUSDT');
    const [result, setResult] = React.useState('');
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [startDate, setStartDate] = React.useState(dayjs());
    const [endDate, setEndDate] = React.useState(dayjs());
    const navigate = useNavigate();
    const [planList, setPlanList] = useState([]);
    useEffect(() => {
        axios.post(GET_PLAN_PATH, {})
            .then((response) => {
                setPlanList(response.data.data.content);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

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

    const onClickSearch = () => {
        axios.post(GET_PLAN_PATH, {
            ticker: ticker,
            startDate: startDate.format("YYYY-MM-DD"),
            endDate: endDate.format("YYYY-MM-DD"),
            result: result
        }).then((response) => {
            console.log(response.data.data.content)
            setPlanList(response.data.data.content);
        }).catch((error) => {
            console.log(error);
        });
    }

    const dateFormat = (date) => {
        return format(new Date(date), 'PPP EEE p', {locale: ko});
    }

    return (
        <Paper sx={{height: "100%", padding: "inherit"}}>
            <Grid container spacing={2} height={"10%"}>
                <Grid item md={12}>
                    <form>
                        <div style={{display: "flex", gap: "1rem", alignItems: "baseline",}}>
                            <FormControl>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                                        <DatePicker
                                            label="Start Date"
                                            format={"YYYY-MM-DD"}
                                            value={startDate}
                                            slotProps={{textField: {size: 'small'}}}
                                            onChange={(date) => setStartDate(date)}
                                        />
                                        <DatePicker
                                            label="End Date"
                                            format={"YYYY-MM-DD"}
                                            value={endDate}
                                            slotProps={{textField: {size: 'small'}}}
                                            onChange={(date) => setEndDate(date)}
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

                            <FormControl size={"small"} sx={{minWidth: 120}}>
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
                                <Button variant="contained" onClick={onClickSearch}>검색</Button>
                            </FormControl>
                        </div>
                    </form>
                </Grid>
                <Grid item md={12}>
                    <TableContainer>
                        <Table>
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
                                            <AddCircleIcon sx={{color: "#2196f3", verticalAlign: "middle"}}/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {planList
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((plan) => {
                                        return (
                                            <TableRow hover role={"checkbox"} tabIndex={-1} key={plan.id}>
                                                <TableCell>{plan.id}</TableCell>
                                                <TableCell>{plan.title}</TableCell>
                                                <TableCell>{plan.ticker}</TableCell>
                                                <TableCell>{plan.position}</TableCell>
                                                <TableCell>
                                                    <NumericFormat value={plan.entryPrice1} displayType={'text'}
                                                                   thousandSeparator={true}
                                                                   prefix={'$'}/>
                                                </TableCell>
                                                <TableCell>
                                                    <NumericFormat value={plan.targetPrice1} displayType={'text'}
                                                                   thousandSeparator={true}
                                                                   prefix={'$'}/>
                                                </TableCell>
                                                <TableCell>
                                                    <NumericFormat value={plan.stopLossPrice1} displayType={'text'}
                                                                   thousandSeparator={true}
                                                                   prefix={'$'}/>
                                                </TableCell>
                                                <TableCell>{plan.goodComment}</TableCell>
                                                <TableCell>{plan.badComment}</TableCell>
                                                <TableCell>{dateFormat(plan.createdAt)}</TableCell>
                                                <TableCell>{dateFormat(plan.modifiedAt)}</TableCell>
                                                <TableCell align={"center"}><EditIcon/></TableCell>
                                            </TableRow>
                                        );
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50, 100]}
                        component="div"
                        count={planList.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Grid>

            </Grid>
        </Paper>
    );
}

export default PlanList;