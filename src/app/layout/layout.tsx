import React from 'react';
import './layout.scss';
import { HeaderComponent } from '../../widgets/header/header';
import { FooterComponent } from '../../widgets/footer/footer';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
    return (
        <div className='layout__wrapper'>
            <HeaderComponent />
            <main className='layout__content'>
                <Outlet />
            </main>
            <FooterComponent />
        </div>
    );
};

