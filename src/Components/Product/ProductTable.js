import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Grid, IconButton } from '@mui/material';
import { deleteProduct } from '../../features/product/productSlice';
import AplicationModal from '../../Components/AplicationModal';
import AplicationBar2 from "../../Components/AplicationBar2";

export default function BasicTable() {
    const productState = useSelector(state => state.products)
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    }
    return (
        <AplicationBar2>
            <div style={{ height: 600, width: '100%', marginTop: 10 }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <AplicationModal ></AplicationModal>
                </Grid>
                <TableContainer component={Paper} style={{ marginTop: 20 }}>
                    <Table stickyHeader size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Cost</TableCell>
                                <TableCell align="right">Units</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productState.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{row.cost}</TableCell>
                                    <TableCell align="right">{row.units}</TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="edit" size="small">
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton aria-label="delete" size="small" onClick={() => handleDelete(row.id)}>
                                            <DeleteIcon fontSize="small" color='error' />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </AplicationBar2>
    );
}