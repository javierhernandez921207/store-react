import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function FormDialog( props ) {
    const [open, setOpen] = React.useState(false);
    const {register, handleSubmit} = useForm();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data, e) => {
        data.id = 10
        data.name = 'asdas'
        data.price = 23
        data.cost = 20
        data.description = 'null'
        console.log(data)
        props.addProduct(data)
        e.target.reset();
    }


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add product
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Product</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <div style={{ padding: '5px' }}>
                            <TextField
                                required
                                autoFocus
                                id="name"
                                label="Nombre"
                                type="text"
                                fullWidth
                                variant="outlined"                                                                
                            />
                        </div>
                        <div style={{ padding: '5px' }}>
                            <TextField
                                required
                                id="cost"
                                label="Cost"
                                type="number"
                                style={{ width: '35%', paddingRight: '1%' }}
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="price"
                                label="Price"
                                type="number"
                                style={{ width: '35%', paddingRight: '1%' }}
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="unit"
                                label="Unit"
                                type="number"
                                style={{ width: '28%' }}
                                variant="outlined"
                            />
                        </div>
                        <div style={{ padding: '5px' }}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                fullWidth
                            />
                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type='submit' color='primary' preve>Register</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}