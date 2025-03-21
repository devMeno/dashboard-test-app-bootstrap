"use client"
import React, {useState} from 'react';
import EditOrganizationButton from "@/components/dialogButtons/editOrganizationButton";
import DeblockOrganizationButton from "@/components/dialogButtons/deblockOrganizationButton";
import DeleteOrganizationButton from "@/components/dialogButtons/deleteOrganizationButton";
import BlockOrganizationButton from "@/components/dialogButtons/blockOrganizationButton";
import ResetPasswordButton from "@/components/dialogButtons/resetPasswordButton";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 624,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const SetAdminInfos = () => {
    const [isBlock,setIsBlock] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        console.log('Modal button closed');
        setOpen(false);
    };
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const handleOpenDeleteDialog = () => {
        setOpenDeleteDialog(true);
    };
    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };
    return (
        <div>
            <form action="" style={{marginBottom:'24px'}}>
                <div className={'edit-profile-box'}>
                    <div style={{position:'relative'}}>
                        <input
                            type="text"
                            id="nom"
                            className={'inputStyle'}
                            placeholder="Nom de l'organisation"
                        />
                        <label
                            htmlFor="nom"
                            className={'labelStyle'}
                        >
                            Nom de l'organisation
                        </label>
                    </div>
                    <div style={{position:'relative'}}>
                        <input
                            type="text"
                            id="nom"
                            className={'inputStyle'}
                            placeholder="Adresse e-mail de l'admin"
                        />
                        <label
                            htmlFor="nom"
                            className={'labelStyle'}
                        >
                            Adresse e-mail de l'admin
                        </label>
                    </div>
                    <div style={{position:'relative'}}>
                        <input
                            type="text"
                            id="nom"
                            className={'inputStyle'}
                            placeholder="Nom de l'admin"
                        />
                        <label
                            htmlFor="nom"
                            className={'labelStyle'}
                        >
                            Nom de l'admin
                        </label>
                    </div>
                    <div style={{position:'relative'}}>
                        <input
                            type="text"
                            id="nom"
                            className={'inputStyle'}
                            placeholder="Prénom de l'admin"
                        />
                        <label
                            htmlFor="nom"
                            className={'labelStyle'}
                        >
                            Prénom de l'admin
                        </label>
                    </div>
                </div>
            </form>
            <div style={{display:'flex',gap:'16px'}}>
                <EditOrganizationButton />
                {isBlock ? (
                    <ResetPasswordButton />
                ) : (
                    <DeblockOrganizationButton />
                )}
                {isBlock ? (
                    <BlockOrganizationButton />
                ) : (
                    <DeleteOrganizationButton />
                )}
            </div>
        </div>
    );
};

export default SetAdminInfos;