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
import { TablePagination } from '@mui/material';

/* Creating mock data */
function createData(orderId, name, phone, email, address, status, cancelReason) {
    return {
        orderId,
        name,
        phone,
        email,
        address,
        status,
        cancelReason,
        orderDate: new Date().toLocaleDateString(),
        history: [
            {
                product: 'Product 1',
                amount: 1,
            },
            {
                product: 'Product 2',
                amount: 2,
            },
        ],
    };
}

const rows = [
    createData(1, 'John Smith', '+1 (234) 567-890', 'mail@mail.com', '123 Main St', 'Pending', '', new Date().toLocaleDateString()),
    createData(2, 'John Smith 2', '+1 (234) 567-890', 'mail@mail.com', '123 Main St', 'Pending', '', new Date().toLocaleDateString()),
    createData(3, 'John Smith 3', '+1 (234) 567-890', 'mail@mail.com', '123 Main St', 'Pending', '', new Date().toLocaleDateString()),
    createData(4, 'John Smith 4', '+1 (234) 567-890', 'mail@mail.com', '123 Main St', 'Pending', '', new Date().toLocaleDateString()),
    createData(5, 'John Smith 5', '+1 (234) 567-890', 'mail@mail.com', '123 Main St', 'Pending', '', new Date().toLocaleDateString()),
    createData(6, 'John Smith 6', '+1 (234) 567-890', 'mail@mail.com', '123 Main St', 'Pending', '', new Date().toLocaleDateString()),
    createData(7, 'John Smith 7', '+1 (234) 567-890', 'mail@mail.com', '123 Main St', 'Pending', '', new Date().toLocaleDateString()),
    createData(8, 'John Smith 8', '+1 (234) 567-890', 'mail@mail.com', '123 Main St', 'Pending', '', new Date().toLocaleDateString()),
    createData(9, 'John Smith 9', '+1 (234) 567-890', 'mail@mail.com', '123 Main St', 'Pending', '', new Date().toLocaleDateString()),
    createData(10, 'John Smith 10', '+1 (234) 567-890', 'mail@mail.com', '123 Main St', 'Pending', '', new Date().toLocaleDateString()),
    createData(11, 'John Smith 11', '+1 (234) 567-890', 'mail@mail.com', '123 Main St', 'Pending', '', new Date().toLocaleDateString()),
];
/* End of creating mock data */
function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

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
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.cancelReason}</TableCell>
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
                                    {row.history.map((historyRow) => (
                                        <TableRow>
                                            <TableCell>{historyRow.product}</TableCell>
                                            <TableCell>{historyRow.amount}</TableCell>
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
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }
    return (
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
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <Row key={row.id} row={row} />
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPage={rowsPerPage}
                count={rows.length}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
}
