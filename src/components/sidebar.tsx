"use client"
import React from 'react';
import { BuildingsIcon } from '@/utils/svgIcons/buildings';
import {useDashboardTab} from "@/context/dashboardTabContext";
import {useRouter} from "next/navigation";
import {Profile2UsersIcon} from "@/utils/svgIcons/profile2Users";
import {Home2Icon} from "@/utils/svgIcons/home2";

const Sidebar = () => {
    const {tab, setTab} = useDashboardTab();
    const router = useRouter();
    const handleGoToHome = () => {
        setTab("home");
        router.push("/dashboard/home");
    }
    const handleGoToOrganizations = () => {
        setTab("organizations");
        router.push("/dashboard/organizations");
    }
    const handleGoToAdmins = () => {
        setTab("admins");
        router.push("/dashboard/admins");
    }
    return (
        <div className={'sidebar'}>
            <div className={'tabContainer'}>
                <button className={'sidebar-inactive-tab-button'} onClick={handleGoToHome}>
                    <img src="/pictures/logo.png" alt="" style={{width:'40px',height:'45px',margin:'0 auto'}} />
                </button>
                <div style={{gap: '60px',display: 'flex', alignItems: 'center',flexDirection: 'column', marginTop: '-160px'}}>
                    <button
                        className={`${tab === 'home' ? 'sidebar-tab-button' : 'sidebar-inactive-tab-button'}`}
                        onClick={handleGoToHome}
                    >
                        <div style={{margin:'0 auto',width:'fit-content'}}><Home2Icon color={`${tab === 'home' ? '#246BFD' : '#9FA8BC'}`}/></div>
                    </button>
                    <button
                        className={`${tab === 'organizations' ? 'sidebar-tab-button' : 'sidebar-inactive-tab-button'}`}
                        onClick={handleGoToOrganizations}
                    >
                        <div style={{margin:'0 auto',width:'fit-content'}}><BuildingsIcon color={`${tab === 'organizations' ? '#246BFD' : '#9FA8BC'}`}/></div>
                    </button>
                    <button
                        className={`${tab === 'admins' ? 'sidebar-tab-button' : 'sidebar-inactive-tab-button'}`}
                        onClick={handleGoToAdmins}
                    >
                        <div style={{margin:'0 auto',width:'fit-content'}}><Profile2UsersIcon color={`${tab === 'admins' ? '#246BFD' : '#9FA8BC'}`}/></div>
                    </button>
                </div>
                <button className={'sidebar-inactive-tab-button'}>
                    <img src="/icons/logout.png" alt="" style={{width:'24px',height:'24px',margin:'0 auto'}} />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;