import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Product = () => {
    const [products, listProducts] = useState([]);

    useEffect(() => {
        loadProducts().then((response) => {console.log(response)});
    }, []);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:9123/products");
        listProducts(result.data);
        console.log(result.data);
    }

    return (
        <TableContainer sx={{minWidth: 650, maxWidth: 1200, mx: 'auto', mt: 4}} component={Paper}>
            <Table sx={{minWidth: 650, maxWidth: 1200}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>No</TableCell>
                        <TableCell align="right">Code</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Created At</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product, index) => (
                        <TableRow
                            key={index}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {index+1}
                            </TableCell>
                            <TableCell align="right">{product.code}</TableCell>
                            <TableCell align="right">{product.name}</TableCell>
                            <TableCell align="right">{product.price}</TableCell>
                            <TableCell align="right">{product.quantity}</TableCell>
                            <TableCell align="right">{product.description}</TableCell>
                            <TableCell align="right">{product.createdAt}</TableCell>
                            <TableCell align="right">
                                <Stack sx={{display: 'flex'}}>
                                    <Button sx={{margin: 0.5}} variant="outlined" startIcon={<EditIcon />}>
                                        Edit
                                    </Button>
                                    <Button sx={{margin: 0.5}} variant="outlined" startIcon={<DeleteIcon />} color="error">
                                        Delete
                                    </Button>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Product;