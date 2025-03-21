import React from 'react';

interface ProfilDataProps {
    iconUrl: string;
    title: string;
    value: string;
}

const ProfileData: React.FC<ProfilDataProps> = ({iconUrl,title,value}) => {
    return (
        <div className={'profile-data-box'}>
            <div className={'circular-box'}>
                <img src={iconUrl} alt="" style={{ fill: "blue", width:'24px',height:'24px' }} />
            </div>
            <div>
                <span style={{fontWeight:'bold',fontSize:'14px',color:'#04060F'}}>{title}</span><br/>
                <span style={{fontSize:'16px',color:'#04060F'}}>{value}</span>
            </div>
        </div>
    );
};

export default ProfileData;