import {Box, Button, CircularProgress, Modal, Typography} from "@mui/material";
import './ItemModal.css'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#f8f8f8',
    border: '4px outset #6f697e',
    boxShadow: 24,
    p: 4,
};

const ItemModal = ({open, handleClose, item}) => {
    console.log(item)
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {item.name?
                    <Box sx={style}>
                        <img src={item.sprites.default} className={'item-modal-img'}/>
                        <span id="modal-modal-title" variant="h6" component="h2" className={'item-modal-title'}>
                            &gt;{item.name}
                        </span>
                        <span id="modal-modal-description" sx={{ mt: 2 }} className={'item-modal-atribute'}>
                            <b>Cost: </b>{item.cost}
                        </span>
                        <span id="modal-modal-description" sx={{ mt: 2 }} className={'item-modal-atribute'}>
                            <b>Category: </b>{item.category.name}
                        </span>
                        <span id="modal-modal-description" sx={{ mt: 2 }} className={'item-modal-atribute'}>
                            <b>Attributes: </b>{item.attributes.map((attribute) => attribute.name + ' / ')}
                        </span>
                        <span id="modal-modal-description" sx={{ mt: 2 }} className={'item-modal-atribute'}>
                            <b>Description: </b>{item.flavor_text_entries[0].text}
                        </span>
                    </Box> : <Box sx={style}><CircularProgress /></Box>
                }

            </Modal>
        </div>
    )
}

export default ItemModal;