import React from 'react';
import ProfileData from "@/components/profileData";

const AdminInfos = () => {
    return (
        <div>
            <span className={'text-[16px] font-semibold'} style={{fontWeight:'600',fontSize:'16px'}}>Détails de l’admin</span>
            <div className={'admin-data-box'}>
                <ProfileData
                    iconUrl="/icons/blueIcons/sms.svg"
                    title="Adresse e-mail"
                    value="bcharles@pentatonic.com"
                />
                <div className={'admin-infos-box'}>
                    <div className={'circular-box'}>
                        <img src="/icons/blueIcons/personalcard.svg" alt="" style={{width:'24px',height:'24px'}} />
                    </div>
                    <div style={{display:'flex',gap:'100px'}}>
                        <div>
                            <span style={{fontWeight:'bold',fontSize:'14px',color:'#04060F'}}>Prénom</span><br/>
                            <span style={{fontSize:'16px',color:'#04060F'}}>Charles</span>
                        </div>
                        <div>
                            <span style={{fontWeight:'bold',fontSize:'14px',color:'#04060F'}}>Nom</span><br/>
                            <span style={{fontSize:'16px',color:'#04060F'}}>Baudelaire</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className={'profile-data-bottom-box'}>
                <ProfileData
                    iconUrl="/icons/blueIcons/files.svg"
                    title="Documents"
                    value="123"
                />
                <ProfileData
                    iconUrl="/icons/blueIcons/people.svg"
                    title="Utilisateurs"
                    value="24"
                />
                <ProfileData
                    iconUrl="/icons/blueIcons/maximize.svg"
                    title="Taille des fichiers"
                    value="3,41 GB"
                />
                <ProfileData
                    iconUrl="/icons/blueIcons/clock.svg"
                    title="Dernière utilisation"
                    value="26 Jan 2024 - 14h15"
                />
            </div>
        </div>
    );
};

export default AdminInfos;