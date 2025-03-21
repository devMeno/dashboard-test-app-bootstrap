"use client"
import React, {useContext, createContext, useState} from "react";

type DashboardTab = 'home' | 'organizations' | 'admins'

interface DashboardTabContextType {
    tab: DashboardTab;
    setTab: (tab: DashboardTab) => void;
}

const DashboardTabContext = createContext<DashboardTabContextType | undefined>(undefined)

export const useDashboardTab = () => {
    const context = useContext(DashboardTabContext);
    if (!context) {
        throw new Error('useDashboardTab doit être utilisé dans un DashboardTabProvider');
    }
    return context;
};

interface DashboardTabProviderProps {
    children: React.ReactNode;
}

export const DashboardTabProvider: React.FC<DashboardTabProviderProps> = ({ children }) => {
    const [tab, setTab] = useState<DashboardTab>('home');

    return (
        <DashboardTabContext.Provider value={{ tab, setTab }}>
            {children}
        </DashboardTabContext.Provider>
    );
};