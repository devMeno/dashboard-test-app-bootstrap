import React, {useState} from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {style} from "@/utils/modalStyle";

const DeblockOrganizationButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        console.log('Modal button closed');
        setOpen(false);
    };

    return (
        <div>
            <button className={'add-admin-button'} style={{border:'1px solid #246BFD',color:'#246BFD',backgroundColor:'white'}} onClick={handleOpen}>Débloquer</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                slotProps={{
                    backdrop: {
                        style: {
                            backgroundColor: 'rgba(4, 6, 15, 0.8)',
                            opacity: '0.8',
                        }
                    }
                }}
            >
                <Box sx={{ ...style, borderRadius: '8px', textAlign: 'center', padding:'48px 0', position:'relative'}}>
                    <button onClick={handleClose} className={'deleteButton closeButton'}><img src="/icons/close.png" alt="" style={{width:'27px',height:'27px'}}/></button>
                    <span className={'dialogTitle'}>Débloquer une organisation</span>
                    <p id="parent-modal-description" className={'dialogContent'}>
                        Voulez-vous débloquer l’organisation <span className={'fw-bold'}>Administrateur</span> ?
                    </p>
                    <div style={{display: 'flex', gap:'24px',width:'fit-content', margin:'auto'}}>
                        <button className={'dialogButton'} style={{backgroundColor:'#E7EBF3',color:'#9FA8BC'}}>Annuler</button>
                        <button className={'dialogButton'} style={{backgroundColor:'#F33F19',color:'white'}}>Débloquer</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default DeblockOrganizationButton;