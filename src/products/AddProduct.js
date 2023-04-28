import React, {useState} from 'react';
import {
    Box, Button, FilledInput,
    FormControl,
    InputLabel,
    TextField
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
    let navigate = useNavigate();
    const [product, setProduct] = useState({
        code: "",
        name: "",
        price: 0,
        quantity: 0,
        description: "",
    });
    const {code, name, price, quantity, description} = product;
    const onInputChange = (e) => {
        setProduct({...product, [e.target.id]: e.target.value});
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:9123/products", product)
        navigate("/");
    };

    return (
        <Box sx={{width: '700px', justifyContent: 'center', flexWrap: 'wrap', ml: '2rem', mt: '3rem', mr: '2rem'}}>
            <form onSubmit={(e) => onSubmit(e)}>
                <div>
                    <TextField
                        required
                        label="Code"
                        id="code"
                        size="small"
                        sx={{m: 1, width: '25ch'}}
                        variant="filled"
                        value={code}
                        onChange={(e) => onInputChange(e)}
                    />
                    <TextField
                        required
                        label="Name"
                        id="name"
                        size="small"
                        sx={{m: 1, width: '25ch'}}
                        variant="filled"
                        value={name}
                        onChange={(e) => onInputChange(e)}
                    />
                    <FormControl fullWidth variant="filled">
                        <InputLabel htmlFor="description">Description</InputLabel>
                        <FilledInput
                            id="description"
                            size="small"
                            sx={{m: 1, width: '52ch'}}
                            value={description}
                            onChange={(e) => onInputChange(e)}
                        />
                    </FormControl>
                    <TextField
                        required
                        label="Price"
                        id="price"
                        size="small"
                        type="number"
                        sx={{m: 1, width: '25ch'}}
                        variant="filled"
                        value={price}
                        onChange={(e) => onInputChange(e)}
                    />
                    <TextField
                        required
                        label="Quantity"
                        id="quantity"
                        size="small"
                        type="number"
                        sx={{m: 1, width: '25ch'}}
                        variant="filled"
                        value={quantity}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div sx={{mr: '2rem', mt: '2rem'}}>
                    <Button
                        type="submit"
                        sx={{m: 1, width: '10ch'}}
                        variant="outlined"
                        size="small"
                        color="success"
                    >
                        Submit
                    </Button>
                    <Link to="/products">
                        <Button
                            style={{m: 1, width: '10ch'}}
                            variant="outlined"
                            size="small"
                            color="error"
                        >
                            Cancel
                        </Button>
                    </Link>
                </div>
            </form>
        </Box>
    );
};

export default AddProduct;