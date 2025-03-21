import React, {useState} from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {style} from "@/utils/modalStyle";

const ResetPasswordButton = () => {
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
            <button className={'add-admin-button'} style={{border:'1px solid #246BFD',color:'#246BFD',backgroundColor:'white'}} onClick={handleOpen}>Mot de passe</button>
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
                    <span className={'dialogTitle'}>Réinitilaliser le mot de passe </span>
                    <p id="parent-modal-description" className={'dialogContent'} style={{width:'80%'}}>
                        Voulez-vous envoyer à <span className={'fw-bold'}>Charles Beaudelaire</span> un lien de réinitialisation de son mot de passe à son adresse e-email?
                    </p>
                    <div style={{display: 'flex', gap:'24px',width:'fit-content', margin:'auto'}}>
                        <button className={'dialogButton'} style={{backgroundColor:'#E7EBF3',color:'#9FA8BC'}}>Annuler</button>
                        <button className={'dialogButton'} style={{backgroundColor:'#F33F19',color:'white'}}>Envoyer</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default ResetPasswordButton;