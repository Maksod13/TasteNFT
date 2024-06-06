import React, { useState } from 'react';
import { ViewProfilePopUp } from '../profilePopUps/profileShow';
import { EditProfile } from '../../profile/profilePopUps/profileEdit/profileEditPop';
import { IconamoonProfileFill } from '../profileSvgIcon/profileSvgIcon';
import { IcSharpClose } from '../profileSvgIcon/profileCloseSvgIcon';
import { Artwork } from '../../Artwork';

import './profileButton.scss';

export const ProfileButton: React.FC = () => {
    const [isProfilePopUpOpen, setIsProfilePopUpOpen] = useState(false);
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [isArtworkOpen, setIsArtworkOpen] = useState(false);

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

    const handleOpenArtwork = () => {
        setIsArtworkOpen(true);
        setIsProfilePopUpOpen(false);
    };

    const handleCloseArtwork = () => {
        setIsArtworkOpen(false);
    };

    return (
        <>
            <button className='profileButton' onClick={handleProfileButtonClick}>
                {isProfilePopUpOpen ? <IcSharpClose /> : <IconamoonProfileFill />}
            </button>
            {isProfilePopUpOpen && (
                <ViewProfilePopUp
                    onClose={handleCloseProfilePopUp}
                    onEditProfile={handleOpenEditProfile}
                    onCreateArtwork={handleOpenArtwork} // Corrected the prop name to match the function
                />
            )}
            {isEditProfileOpen && <EditProfile onClose={handleCloseEditProfile} />}
            {isArtworkOpen && <Artwork onClose={handleCloseArtwork} />}
            {(isEditProfileOpen || isArtworkOpen) && <div className="blurOverlay" />} {/* Add blurOverlay when either is open */}
        </>
    );
};
