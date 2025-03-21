"use client"
import React from 'react';
import Header from "@/components/header";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter();
    const handleGoToDashboard = () => {
        router.push('/dashboard/home');
    }
    return (
        <div className={'vh-100 d-flex flex-column'}>
            <Header />
            <div style={{
                display: 'flex',
                flexGrow: 1,
                alignItems: 'center',
                backgroundColor: '#E9F0FF',
            }}>
                <div className={'auth-page-white-box'}>
                    <span className={'auth-title'}>Connexion</span>
                    <form action="" className={'auth-form'}>
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
                                id="mdp"
                                className={'inputStyle'}
                                placeholder="Mot de passe"
                            />
                            <label
                                htmlFor="mdp"
                                className={'labelStyle'}
                            >
                                Mot de passe
                            </label>
                            <div className={'eyeStyle'}>
                                <img src="/icons/eye.png" alt="Eye icon" className="size-[24px]" />
                            </div>
                        </div>
                        <div className={'flex justify-center'} style={{display: 'flex', justifyContent: 'center'}}>
                            <button type={"submit"} className={'auth-button'} onClick={handleGoToDashboard}>Connexion</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;