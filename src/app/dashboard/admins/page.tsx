"use client"
import React from 'react';
import {useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {fakeAdminsData} from "@/utils/datas/fakeAdminsData";
import {getOrganizationsStatusBadgeStyle} from "@/utils/functions";
import PaginationComponent from "@/components/paginationComponent";
import {style} from "@/utils/modalStyle";
import {getInitials} from "@/utils/functions";


const itemsPerPage = 5;

const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };


    // Calcul des données à afficher
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = fakeAdminsData.slice(startIndex, endIndex);

    // Nombre total de pages
    const totalPages = Math.ceil(fakeAdminsData.length / itemsPerPage);

    // Gestion du changement de page
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const handleOpenDeleteDialog = (admin) => {
        setSelectedAdmin(admin);
        setOpenDeleteDialog(true);
    };
    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const handleOpenEditDialog = (admin) => {
        setSelectedAdmin(admin);
        setOpenEditDialog(true);
    };
    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
    };

    const [selectedAdmin, setSelectedAdmin] = useState(null);


    return (
        <>
            <div style={{padding:'40px'}}>
                <div className={'dashboard-top-line'}>
                    <div className={'select-and-checkbox-Box'}>
                        <div className="form-check">
                            <input className="form-check-input checkbox" type="checkbox" value=""
                                   id="flexCheckDefault"/>
                        </div>
                        <select name="" id="">
                            <option value="">Sélectionner une action</option>
                        </select>
                    </div>
                    <div className={'searchBox'}>
                        <div>
                            <button className={'add-admin-button'} style={{backgroundColor:'#246BFD',color:'white'}} onClick={handleOpen}>Ajouter un admin</button>
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
                                <Box sx={{ ...style, borderRadius: '8px', textAlign: 'center', padding:'48px 0', position:'relative'}}>
                                    <button onClick={handleClose} className={'deleteButton closeButton'}><img src="/icons/close.png" alt="Close button" style={{width:'27px',height:'27px'}}/></button>
                                    <span className={'dialogTitle'}>Ajouter un admin</span>
                                    <div style={{display:'flex', marginInline:'auto', width:'fit-content'}}>
                                        <form action="" className={'dialogFormStyle'}>
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
                                                    Nom
                                                </label>
                                            </div>
                                            <div style={{position:'relative'}}>
                                                <input
                                                    type="text"
                                                    id="prenom"
                                                    className={'inputStyle'}
                                                    placeholder="Prénom de l'admin"
                                                />
                                                <label
                                                    htmlFor="prenom"
                                                    className={'labelStyle'}
                                                >
                                                    Prénom
                                                </label>
                                            </div>
                                            <div style={{position:'relative'}}>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className={'inputStyle'}
                                                    placeholder="Adresse e-mail de l'admin"
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className={'labelStyle'}
                                                >
                                                    E-mail
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                    <div style={{display: 'flex', gap:'24px',width:'fit-content', margin:'auto'}}>
                                        <button className={'dialogButton'} style={{backgroundColor:'#246BFD',color:'white'}}>Créer un compte</button>
                                    </div>
                                </Box>
                            </Modal>
                        </div>
                        <div className="search-container">
                            <div className="left-icon">
                                <img src="/icons/loupe.svg" alt="Loupe icon" className="icon" style={{width:'16px',height:'16px'}}/>
                            </div>
                            <input type="text" placeholder="Rechercher un utilisateur" className="search-input"/>
                            <div className="right-icon">
                                <img src="/icons/setting-3.svg" alt="Settings icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={'tableContainer'}>
                    <table>
                        <thead>
                        <tr className="thead-tr">
                            <th style={{width:'4%',borderTopLeftRadius:'8px',padding:'16px'}}></th>
                            <th style={{width:'32%',padding:'16px'}}>Administrateurs</th>
                            <th style={{width:'36%',padding:'16px'}}>Adresse e-mail</th>
                            <th style={{width:'20%',padding:'16px'}}>Statut</th>
                            <th style={{width:'auto',borderTopRightRadius:'8px',padding:'16px'}}></th>
                        </tr>
                        </thead>
                        <tbody>
                        {pageData.map((item, index) => (
                            <tr className={'tr'} key={index}>
                                <td className="cellStyle">
                                    <div className="form-check">
                                        <input className="form-check-input checkbox" type="checkbox" value=""
                                               id="flexCheckDefault"/>
                                    </div>
                                </td>
                                <td className="cellStyle">
                                    <div style={{display: 'flex', gap:'10px',alignItems:'center'}}>
                                        <div className={'initials'}><span className={'mx-auto'}>{getInitials(item.name)}</span></div>
                                        {item.name}
                                    </div>
                                </td>
                                <td className="cellStyle">{item.email}</td>
                                <td className="cellStyle">
                                    <div className={`${getOrganizationsStatusBadgeStyle(item.status)} badgeStyle`}>{item.status}</div>
                                </td>
                                <td className="cellStyle">
                                    <div style={{float:'right',display:'flex',justifyContent:'center'}}>
                                        <div>
                                            <button onClick={() => handleOpenEditDialog(item)} className={'deleteButton'}><img src="/icons/edit-2.svg" alt="Delete button"/></button>
                                            <Modal
                                                open={openEditDialog}
                                                onClose={handleCloseEditDialog}
                                                aria-labelledby="parent-modal-title"
                                                aria-describedby="parent-modal-description"
                                                slotProps={{
                                                    backdrop: {
                                                        style: {
                                                            backgroundColor: 'rgba(4, 6, 15, 0.8)',
                                                            opacity: '0.4',
                                                        }
                                                    }
                                                }}
                                            >
                                                <Box sx={{ ...style, borderRadius: '8px', textAlign: 'center', padding:'48px 0', position:'relative'}}>
                                                    <button onClick={handleCloseEditDialog} className={'deleteButton closeButton'}><img src="/icons/close.png" alt="Close button" style={{width:'27px',height:'27px'}}/></button>
                                                    <span className={'dialogTitle'}>Modifier un admin</span>
                                                    <div style={{display:'flex', marginInline:'auto', width:'fit-content'}}>
                                                        <form action="" className={'dialogFormStyle'}>
                                                            <div style={{position:'relative'}}>
                                                                <input
                                                                    type="text"
                                                                    id="nom"
                                                                    className={'inputStyle'}
                                                                    placeholder="Nom de l'admin"
                                                                    value={selectedAdmin?.name}
                                                                />
                                                                <label
                                                                    htmlFor="nom"
                                                                    className={'labelStyle'}
                                                                >
                                                                    Nom
                                                                </label>
                                                            </div>
                                                            <div style={{position:'relative'}}>
                                                                <input
                                                                    type="text"
                                                                    id="prenom"
                                                                    className={'inputStyle'}
                                                                    placeholder="Prénom de l'admin"
                                                                    value={selectedAdmin?.name}
                                                                />
                                                                <label
                                                                    htmlFor="prenom"
                                                                    className={'labelStyle'}
                                                                >
                                                                    Prénom
                                                                </label>
                                                            </div>
                                                            <div style={{position:'relative'}}>
                                                                <input
                                                                    type="email"
                                                                    id="email"
                                                                    className={'inputStyle'}
                                                                    placeholder="Adresse e-mail de l'admin"
                                                                    value={selectedAdmin?.email}
                                                                />
                                                                <label
                                                                    htmlFor="email"
                                                                    className={'labelStyle'}
                                                                >
                                                                    E-mail
                                                                </label>
                                                            </div>
                                                            <div style={{position:'relative'}}>
                                                                <select className={'inputStyle'} name="" id="" style={{padding:'0 16px',textAlign:'left'}}>
                                                                    <option value="actif">Actif</option>
                                                                    <option value="bloqué">Bloqué</option>
                                                                </select>
                                                                <label
                                                                    htmlFor="nom"
                                                                    className={'labelStyle'}
                                                                >
                                                                    Statut
                                                                </label>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div style={{display: 'flex', gap:'24px',width:'fit-content', margin:'auto'}}>
                                                        <button className={'dialogButton'} style={{backgroundColor:'#246BFD',color:'white'}}>Modifier</button>
                                                    </div>
                                                </Box>
                                            </Modal>
                                        </div>
                                        <div>
                                            <button onClick={() => handleOpenDeleteDialog(item)} className={'deleteButton'}><img src="/icons/trash.png" alt="Close button"/></button>
                                            <Modal
                                                open={openDeleteDialog}
                                                onClose={handleCloseDeleteDialog}
                                                aria-labelledby="parent-modal-title"
                                                aria-describedby="parent-modal-description"
                                                slotProps={{
                                                    backdrop: {
                                                        style: {
                                                            backgroundColor: 'rgba(4, 6, 15, 0.8)',
                                                            opacity: '0.4',
                                                        }
                                                    }
                                                }}
                                            >
                                                <Box sx={{ ...style, borderRadius: '8px', textAlign: 'center', padding:'48px 0', position:'relative'}}>
                                                    <button onClick={handleCloseDeleteDialog} className={'deleteButton closeButton'}><img src="/icons/close.png" alt="Close button" style={{width:'27px',height:'27px'}}/></button>
                                                    <span className={'dialogTitle'}>Supprimer une organisation</span>
                                                    <p id="parent-modal-description" className={'dialogContent'}>
                                                        Voulez-vous supprimer l’admin <span className={'fw-bold'}>{selectedAdmin?.name}</span> ?
                                                    </p>
                                                    <div style={{display: 'flex', gap:'24px',width:'fit-content', margin:'auto'}}>
                                                        <button className={'dialogButton'} style={{backgroundColor:'#E7EBF3',color:'#9FA8BC'}}>Annuler</button>
                                                        <button className={'dialogButton'} style={{backgroundColor:'#F33F19',color:'white'}}>Supprimer</button>
                                                    </div>
                                                </Box>
                                            </Modal>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <PaginationComponent
                    totalPages={totalPages}
                    currentPage={currentPage}
                    goToPage={goToPage}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                />
            </div>
        </>
    );
};

export default Page;