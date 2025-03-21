"use client"
import React from 'react';
import {useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {getOrganizationsStatusBadgeStyle} from "@/utils/functions";
import {fakeOrganizationsData} from "@/utils/datas/fakeOrganizationsData";
import PaginationComponent from "@/components/paginationComponent";
import {useRouter} from "next/navigation";
import {style} from "@/utils/modalStyle";
import {getInitials} from "@/utils/functions";

const itemsPerPage = 5;


const Page = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };


    // Calcul des données à afficher
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const activesOrganizationsData = fakeOrganizationsData.slice(startIndex, endIndex);

    // Nombre total de pages
    const totalPages = Math.ceil(fakeOrganizationsData.length / itemsPerPage);

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
    const handleOpen = (organization) => {
        setSelectedOrganization(organization);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const handleOpenDeleteDialog = (organization) => {
        setSelectedOrganization(organization);
        setOpenDeleteDialog(true);
    };
    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    const handleGoToOrganizationProfile = () => {
        router.push("/dashboard/organization-profile");
    }

    const [selectedOrganzation, setSelectedOrganization] = useState(null);

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
                            <button className={'add-admin-button'} style={{backgroundColor:'#246BFD',color:'white'}} onClick={handleOpen}>Ajouter une organisation</button>
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
                                    <span className={'dialogTitle'}>Ajouter une organisation</span>
                                    <div style={{display:'flex', marginInline:'auto', width:'fit-content'}}>
                                        <form action="" className={'dialogFormStyle'}>
                                            <div style={{position:'relative'}}>
                                                <input
                                                    type="text"
                                                    id="nom"
                                                    className={'inputStyle'}
                                                    placeholder="Nom de l'entreprise"
                                                />
                                                <label
                                                    htmlFor="nom"
                                                    className={'labelStyle'}
                                                >
                                                    Nom de l'entreprise
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
                            <input type="text" placeholder="Rechercher une organisation" className="search-input"/>
                            <div className="right-icon">
                                <img src="/icons/setting-3.svg" alt="Setting icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={'tableContainer'}>
                    <table>
                        <thead className="bg-[#E9F0FF] sticky top-0 z-10">
                        <tr className="thead-tr">
                            <th style={{width:'4%',borderTopLeftRadius:'8px',padding:'16px'}}></th>
                            <th style={{width:'21%',padding:'16px'}}>Organisation</th>
                            <th style={{width:'9%',padding:'16px'}}>Utilisateurs</th>
                            <th style={{width:'22%',padding:'16px'}}>Administrateurs</th>
                            <th style={{width:'22%',padding:'16px'}}>Adresse e-mail</th>
                            <th style={{width:'182px',padding:'16px'}}>Statut</th>
                            <th style={{width:'auto',borderTopRightRadius:'8px',padding:'16px'}}></th>
                        </tr>
                        </thead>
                        <tbody>
                        {activesOrganizationsData.map((item, index) => (
                            <tr className={'tr'} key={index} onClick={handleGoToOrganizationProfile}>
                                <td className="cellStyle">
                                    <div className="form-check">
                                        <input className="form-check-input checkbox" type="checkbox" value=""
                                               id="flexCheckDefault"/>
                                    </div>
                                </td>
                                <td className="cellStyle">{item.organization_name}</td>
                                <td className="cellStyle" style={{fontWeight:'500'}}>{item.users}</td>
                                <td className="cellStyle">
                                    <div style={{display: 'flex', gap:'10px',alignItems:'center'}}>
                                        <div className={'initials'}><span className={'mx-auto'}>{getInitials(item.admin)}</span></div>
                                        {item.admin}
                                    </div>
                                </td>
                                <td className="cellStyle">{item.e_mail}</td>
                                <td className="cellStyle">
                                    <div className={`${getOrganizationsStatusBadgeStyle(item.status)} badgeStyle`}>{item.status}</div>
                                </td>
                                <td className="cellStyle">
                                    <div style={{float:'right'}}>
                                        <div>
                                            <button onClick={() => handleOpenDeleteDialog(item)} className={'deleteButton'}><img src="/icons/trash.png" alt="Delete icon"/></button>
                                            <Modal
                                                open={openDeleteDialog}
                                                onClose={handleCloseDeleteDialog}
                                                aria-labelledby="parent-modal-title"
                                                aria-describedby="parent-modal-description"
                                                slotProps={{
                                                    backdrop: {
                                                        style: {
                                                            backgroundColor: 'rgba(4, 6, 15, 0.8)',
                                                            opacity: '0.45',
                                                        }
                                                    }
                                                }}
                                            >
                                                <Box sx={{ ...style, borderRadius: '8px', textAlign: 'center', padding:'48px 0', position:'relative'}}>
                                                    <button onClick={handleCloseDeleteDialog} className={'deleteButton closeButton'}><img src="/icons/close.png" alt="" style={{width:'27px',height:'27px'}}/></button>
                                                    <span className={'dialogTitle'}>Supprimer une organisation</span>
                                                    <p id="parent-modal-description" className={'dialogContent'}>
                                                        Voulez-vous supprimer l’organisation <span className={'fw-bold'}>{selectedOrganzation?.organization_name}</span> ?
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