"use client"
import React from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {useState} from "react";
import {style} from "@/utils/modalStyle";

const EditOrganizationButton = () => {
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
            <button className={'add-admin-button'} style={{backgroundColor:'#246BFD',color:'white'}} onClick={handleOpen}>Modifier</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                slotProps={{
                    backdrop: {
                        style: {
                            backgroundColor: 'rgba(4, 6, 15, 0.8)',
                            opacity: '0.9',
                        }
                    }
                }}
            >
                <Box sx={{...style, borderRadius: '8px', textAlign: 'center', padding: '48px 0', position: 'relative'}}>
                    <button onClick={handleClose} className={'deleteButton closeButton'}><img src="/icons/close.png" alt="" style={{width: '27px', height: '27px'}}/></button>
                    <div className="success-box">
                        <div className="inner-circle">
                            <img src="/icons/Vector(Stroke).svg" alt="" className="icon"/>
                        </div>
                    </div>
                    <p className="message">Vos informations ont bien été mises à jour !</p>
                </Box>
            </Modal>
        </div>
    );
};

export default EditOrganizationButton;