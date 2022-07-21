import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper';
import {
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';
import axios from '../../../axios';
function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
        const id = randomId();
        setRows((oldRows) => [...oldRows, { id, name: '', price: '', stock: '', category: '', status: '', isNew: true }]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
                Add record
            </Button>
        </GridToolbarContainer>
    );
}

EditToolbar.propTypes = {
    setRowModesModel: PropTypes.func.isRequired,
    setRows: PropTypes.func.isRequired,
};

export default function ProductTable() {
    const [rows, setRows] = React.useState([]);
    const [rowModesModel, setRowModesModel] = React.useState({});
    const [currentPage, setCurrentPage] = React.useState(1);
    const [total, setTotal] = React.useState(0);
    const handlePageChange = (page) => {
        setCurrentPage(page + 1);
    }
    React.useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/product', {
                params: {
                    page: currentPage,
                }
            });
            const { data } = response.data;
            const { total } = response.data.pagination;
            setTotal(total);
            const processedData = data.map(({ _id: id, name, category: { name: categoryName }, stock, status, price }) => ({ id, name, categoryName, stock, status, price }));
            console.log(processedData);
            setRows(processedData);
        }
        fetchData();
    }, [currentPage]);
    const handleRowEditStart = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleRowEditStop = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            editable: true
        },
        {
            field: 'categoryName',
            headerName: 'Category',
            flex: 0.5,
            editable: true,
        },
        {
            field: 'stock',
            headerName: 'Stock',
            type: 'number',
            flex: 0.3,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 0.3,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'string',
            flex: 0.3,
            editable: true
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        <Box
            component={Paper}
            sx={{
                height: 500,
                width: '100%',
                '& .actions': {
                    color: 'text.secondary',
                },
                '& .textPrimary': {
                    color: 'text.primary',
                },
                mt: 2,
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                pageSize={12}
                rowsPerPageOptions={[12]}
                rowCount={total}
                pagination
                paginationMode="server"
                onPageChange={handlePageChange}
                rowModesModel={rowModesModel}
                onRowEditStart={handleRowEditStart}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                components={{
                    Toolbar: EditToolbar,
                }}
                componentsProps={{
                    toolbar: { setRows, setRowModesModel },
                }}
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box >
    );
}
