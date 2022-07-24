import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TablePagination, Checkbox, Button, Select, MenuItem } from '@mui/material';
import axios from '../../../axios';
function Row(props) {
    let { row } = props;
    const [open, setOpen] = React.useState(false);
    const { setSelectedRows, selectedRows } = props;
    const handleChange = (event) => {
        if (event.target.checked) {
            setSelectedRows([...selectedRows, row]);
        }
        else {
            setSelectedRows(selectedRows.filter(item => item.id !== row.id));
        }
    }
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    <Checkbox onChange={handleChange} />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.cancelReason ? row.cancelReason : null}</TableCell>
                <TableCell align="right">{row.orderDate}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product</TableCell>
                                        <TableCell>Amount</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.products.map((historyRow, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{historyRow.product.name}</TableCell>
                                            <TableCell>{historyRow.quantity}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function OrderTable() {

    const [page, setPage] = React.useState(0);
    const [status, setStatus] = React.useState('');
    const [selectedRows, setSelectedRows] = React.useState([]);
    const [orders, setOrders] = React.useState([]);
    const handleChange = (event) => {
        setStatus(event.target.value);
    }
    async function fetchData() {
        const response = await axios.get('/admin/order', {
            params: {
                page: page + 1,
            }
        });
        setOrders(response.data);
    }
    const handleClick = async () => {
        selectedRows.forEach(async (row) => {
            let cancelReason;
            if (status === 'cancelled') {
                cancelReason = 'Cancelled by admin';
            }
            else {
                cancelReason = '';
            }
            await axios.put(`/admin/order/${row._id}`, {
                name: row.name,
                phone: row.phone,
                email: row.email,
                address: row.address,
                status: status,
                cancelReason: cancelReason,
            });
        })
        fetchData();
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }
    React.useEffect(() => {
        fetchData();
    }, [page]);
    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Cancel Reason</TableCell>
                            <TableCell align="right">Order Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <Row key={row._id} row={row} setSelectedRows={setSelectedRows} selectedRows={selectedRows} />
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPage={12}
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                />
            </TableContainer>
            <Button onClick={handleClick}>Mark selected orders as</Button>
            <Select value={status} onChange={handleChange} label="Status" defaultValue="pending">
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="cancelled">Cancelled</MenuItem>
            </Select>
        </>
    );
}
