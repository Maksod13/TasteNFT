import React, { useState } from 'react';
import { ViewProfilePopUp } from '../profilePopUps/profileShow';
import { EditProfile } from '../../profile/profilePopUps/profileEdit/profileEditPop';
import { IconamoonProfileFill } from '../profileSvgIcon/profileSvgIcon';
import { IcSharpClose } from '../profileSvgIcon/profileCloseSvgIcon';
import './profileButton.scss';

export const ProfileButton: React.FC = () => {
    const [isProfilePopUpOpen, setIsProfilePopUpOpen] = useState(false);
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

    const handleProfileButtonClick = () => {
        setIsProfilePopUpOpen(prevState => !prevState);
    };

    const handleCloseProfilePopUp = () => {
        setIsProfilePopUpOpen(false);
    };

    const handleOpenEditProfile = () => {
        setIsEditProfileOpen(true);
        setIsProfilePopUpOpen(false);
    };

    const handleCloseEditProfile = () => {
        setIsEditProfileOpen(false);
    };

    return (
        <>
            <button className='profileButton' onClick={handleProfileButtonClick}>
                {isProfilePopUpOpen ? <IcSharpClose /> : <IconamoonProfileFill />}
            </button>
            {isProfilePopUpOpen && <ViewProfilePopUp onClose={handleCloseProfilePopUp} onEditProfile={handleOpenEditProfile} />}
            {isEditProfileOpen && <EditProfile onClose={handleCloseEditProfile} />}
        </>
    );
};
