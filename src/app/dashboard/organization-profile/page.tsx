"use client"
import React from 'react';
import SetAdminInfos from "@/components/setAdminInfos";
import AdminInfos from "@/components/adminInfos";
import {useState} from "react";

const Page = () => {
    const [editProfileState, setEditProfileState] = useState(false)

    return (
        <div className={'organization-profile-box'}>
            <div className={'welcome-admin-box'}>
                <span style={{fontSize:'20px',marginInline:'auto'}}>Bienvenue, Andri A.</span>
                {editProfileState ? (
                    <button className={'floating-button'} style={{backgroundColor:'#E7EBF3',color:'#9FA8BC'}}
                        onClick={() => setEditProfileState(false)}
                    >Annuler</button>
                ) : (
                    <button className={'floating-button'}
                            onClick={() => setEditProfileState(true)}
                    >Modifier</button>
                )}

            </div>
            <div style={{margin:'40px 24px'}}>
                {editProfileState ? (
                    <SetAdminInfos />
                ) : (
                    <AdminInfos />
                )}
            </div>
        </div>
    );
};

export default Page;