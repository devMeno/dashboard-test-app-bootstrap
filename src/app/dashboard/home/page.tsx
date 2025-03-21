"use client"
import React from 'react';
import DetailsCard from "@/components/detailsCard";
import {fakeOrganizationsData} from "@/utils/datas/fakeOrganizationsData";
import {getOrganizationsStatusBadgeStyle} from "@/utils/functions";
import {getInitials} from "@/utils/functions";
import {style} from "@/utils/modalStyle";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const activesOrganizationsData = fakeOrganizationsData.slice(18,22)
const Page = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div style={{padding:'0 40px',marginTop:'40px'}}>
                <div className={'row align-items-center'} style={{marginBottom:'24px'}}>
                    <div className={'col-3'}>
                        <DetailsCard
                            iconUrl="/icons/blueIcons/buildings.svg"
                            title="Organisations"
                            value="121"
                        />
                    </div>
                    <div className={'col-3'}>
                        <DetailsCard
                            iconUrl="/icons/blueIcons/people.svg"
                            title="Utilisateurs"
                            value="9 234"
                        />
                    </div>
                    <div className={'col-3'}>
                        <DetailsCard
                            iconUrl="/icons/blueIcons/archive.svg"
                            title="Documents"
                            value="213 098"
                        />
                    </div>
                    <div className={'col-3'}>
                        <DetailsCard
                            iconUrl="/icons/blueIcons/maximize.svg"
                            title="Tailles des fichiers"
                            value="32 GB"
                        />
                    </div>
                </div>
                <p style={{fontSize:'20px',fontWeight:700}}>Dernières organisations actives</p>
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
                            <tr className={'tr'} key={index}>
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
                                            <button onClick={handleOpen} className={'deleteButton'}><img src="/icons/trash.png" alt="Delete button"/></button>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
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
                                                    <button onClick={handleClose} className={'deleteButton closeButton'}><img src="/icons/close.png" alt="Close button" style={{width:'27px',height:'27px'}}/></button>
                                                    <span className={'dialogTitle'}>Supprimer une organisation</span>
                                                    <p id="parent-modal-description" className={'dialogContent'}>
                                                        Voulez-vous supprimer l’organisation <span className={'fw-bold'}>Pentatonic</span> ?
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
            </div>
        </>
    );
};

export default Page;