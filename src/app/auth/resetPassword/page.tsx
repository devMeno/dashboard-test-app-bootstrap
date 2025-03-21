import React from 'react';
import Header from "@/components/header";

const Page = () => {
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
                    <span className={'auth-title'}>Changez votre mot de passe</span>
                    <form action="" className={'auth-form'}>
                        <div style={{position:'relative'}}>
                            <input
                                type="text"
                                id="nom"
                                className={'inputStyle'}
                                placeholder="Entrez un nouveau mot de passe"
                            />
                            <label
                                htmlFor="nom"
                                className={'labelStyle'}
                            >
                                Nouveau mot de passe
                            </label>
                            <div className={'eyeStyle'}>
                                <img src="/icons/eye-slash.svg" alt="Eye icon" className="size-[24px]" />
                            </div>
                        </div>
                        <div style={{position:'relative'}}>
                            <input
                                type="text"
                                id="mdp"
                                className={'inputStyle'}
                                placeholder="Confirmez le mot de passe"
                            />
                            <label
                                htmlFor="mdp"
                                className={'labelStyle'}
                            >
                                Confirmation de mot de passe
                            </label>
                            <div className={'eyeStyle'}>
                                <img src="/icons/eye-slash.svg" alt="Eye icon" className="size-[24px]" />
                            </div>
                        </div>
                        <div className={'flex justify-center'} style={{display: 'flex', justifyContent: 'center'}}>
                            <button type={"submit"} className={'auth-button'}>Connexion</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;