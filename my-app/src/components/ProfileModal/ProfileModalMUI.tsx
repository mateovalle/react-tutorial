import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from "@mui/material/Avatar";
import {CircularProgress} from "@mui/material";
import {useNavigate} from "react-router-dom";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const center = {
    width: '100%',
}

const BasicModal = ({open, handleClose, user}) => {

    const navigate = useNavigate()
    return (

        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {user.picture ?
                    <Box sx={style}>
                        <Avatar alt={user.lastName}  src={user.picture}/>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {user.firstName + " " + user.lastName}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <b>Gender: </b>{user.gender}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <b>Date of birth: </b>{new Date(user.dateOfBirth).toDateString()}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <b>Register date: </b>{new Date(user.registerDate).toDateString()}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <b>Email: </b>{user.email}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <b>Phone: </b>{user.phone}
                        </Typography>
                        <Button sx={center} variant="contained" onClick={() => navigate('/posts/'+ user.id)}>See posts</Button>
                    </Box> : <Box sx={style}><CircularProgress /></Box>
                }

            </Modal>
        </div>
    );
}

export default BasicModal;