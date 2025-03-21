import React from 'react';

interface detailsCardProps {
    iconUrl: string;
    title: string;
    value: string;
}

const DetailsCard: React.FC<detailsCardProps> = ({iconUrl,title,value}) => {
    return (
        <div className={'detailsCard'}>
            <div className={'detailsCardImage'}>
                <img src={iconUrl} alt=""/>
            </div>
            <div>
                <span style={{fontWeight: '700',fontSize:'16px',color:'#9FA8BC'}}>{title}</span><br/>
                <span style={{fontWeight:'700',fontSize:'24px'}}>{value}</span>
            </div>
        </div>
    );
};

export default DetailsCard;