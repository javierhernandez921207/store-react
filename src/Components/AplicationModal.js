import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from "react-redux";
import { addProduct } from "../features/product/productSlice";

export default function FormDialog(props) {

    const [open, setOpen] = React.useState(false);

    const [product, setProduct] = React.useState({
        id: 0,
        name: '',
        price: 0,
        cost: 0,
        units: 0,
        description: ""
    });

    const dispatch = useDispatch();

    const handleChange = e => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //...product mantiene los datos del objeto y solo modifica su id
    const handleSubmit = (e, action) => {
        e.preventDefault();
        setProduct({ ...product, id: Math.floor(Math.random() * 500) })
        console.log(product);
        dispatch(addProduct(product));
        e.target.reset();
        handleClose();
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add product
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Product</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <div style={{ padding: '5px' }}>
                            <TextField
                                required
                                autoFocus
                                id="name"
                                name='name'
                                label="Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ padding: '5px' }}>
                            <TextField
                                required
                                id="cost"
                                name='cost'
                                label="Cost"
                                type="number"
                                style={{ width: '35%', paddingRight: '1%' }}
                                variant="outlined"
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                id="price"
                                name='price'
                                label="Price"
                                type="number"
                                style={{ width: '35%', paddingRight: '1%' }}
                                variant="outlined"
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                id="unit"
                                name='units'
                                label="Unit"
                                type="number"
                                style={{ width: '28%' }}
                                variant="outlined"
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ padding: '5px' }}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                name='description'
                                multiline
                                rows={4}
                                fullWidth
                                onChange={handleChange}
                            />
                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} >Cancel</Button>
                        <Button type='submit' color='primary' >Register</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}