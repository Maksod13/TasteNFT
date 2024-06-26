import React, { useState, useEffect } from 'react';
import "./ProfilePage.scss"
import { ProfileCard } from '../../features/ProfileCard';
import { Follow } from '../../features/profile/Follow';

export const ProfilePage: React.FC = () => {
    const [isFollowersPopupOpen, setIsFollowersPopupOpen] = useState(false);

    const toggleFollowersPopup = () => {
        setIsFollowersPopupOpen(!isFollowersPopupOpen);
    };

    useEffect(() => {
        if (isFollowersPopupOpen) {
            document.body.classList.add('blur');
        } else {
            document.body.classList.remove('blur');
        }
    }, [isFollowersPopupOpen]);

    return (
        <div className='profilePage'>
            <div className="home__profile">
                <div className="profile__user-inner">
                    <div className="profile__user">
                        <img src="../../../../images/user2.png" alt="" className="profile__user-image" />
                        <div className="profile__user-name">
                            <div className="user__name-name">User Name</div>
                            <div className="user__name-username">@username</div>
                        </div>
                    </div>
                    <div className="home__profile-link">
                        <div className="profile__link-btns">
                            <button className='followers active' onClick={toggleFollowersPopup}>234 Followers</button>
                            {isFollowersPopupOpen && <Follow onClose={toggleFollowersPopup} />}
                            <button className='following'>15 Following</button>
                            <button className='link__btns-view'>Follow</button>
                            <button className='link__btns-small'><svg width="15.839111" height="15.839355" viewBox="0 0 15.8391 15.8394" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>
                                </desc>
                                <defs />
                                <path id="Vector" d="M15.19 0C15.17 0 15.15 0 15.12 0L9.37 0C9.29 0 9.2 0.02 9.13 0.05C9.05 0.08 8.98 0.12 8.92 0.18C8.86 0.24 8.82 0.31 8.78 0.38C8.75 0.46 8.74 0.54 8.74 0.63C8.74 0.71 8.75 0.79 8.78 0.87C8.82 0.94 8.86 1.01 8.92 1.07C8.98 1.13 9.05 1.18 9.13 1.21C9.2 1.24 9.29 1.25 9.37 1.25L13.69 1.25L7.26 7.68C7.2 7.74 7.15 7.81 7.12 7.89C7.09 7.96 7.07 8.05 7.07 8.13C7.07 8.21 7.08 8.29 7.12 8.37C7.15 8.45 7.19 8.52 7.25 8.58C7.31 8.64 7.38 8.68 7.46 8.71C7.54 8.75 7.62 8.76 7.7 8.76C7.78 8.76 7.87 8.74 7.94 8.71C8.02 8.68 8.09 8.63 8.15 8.57L14.58 2.13L14.58 6.46C14.58 6.54 14.59 6.62 14.62 6.7C14.65 6.78 14.7 6.85 14.76 6.91C14.82 6.97 14.89 7.01 14.96 7.04C15.04 7.08 15.12 7.09 15.2 7.09C15.29 7.09 15.37 7.08 15.44 7.04C15.52 7.01 15.59 6.97 15.65 6.91C15.71 6.85 15.75 6.78 15.78 6.7C15.81 6.62 15.83 6.54 15.83 6.46L15.83 0.7C15.84 0.62 15.83 0.52 15.81 0.44C15.78 0.35 15.73 0.27 15.67 0.2C15.61 0.14 15.54 0.08 15.46 0.05C15.37 0.01 15.28 -0.01 15.19 0ZM3.12 1.25C1.4 1.25 0 2.66 0 4.38L0 12.71C0 14.43 1.4 15.83 3.12 15.83L11.45 15.83C13.17 15.83 14.58 14.43 14.58 12.71L14.58 8.54C14.58 8.46 14.56 8.38 14.53 8.3C14.5 8.22 14.46 8.15 14.4 8.1C14.34 8.04 14.27 7.99 14.19 7.96C14.12 7.93 14.04 7.91 13.95 7.91C13.87 7.91 13.79 7.93 13.71 7.96C13.64 7.99 13.57 8.04 13.51 8.1C13.45 8.15 13.4 8.22 13.37 8.3C13.34 8.38 13.33 8.46 13.33 8.54L13.33 12.71C13.33 13.75 12.5 14.58 11.45 14.58L3.12 14.58C2.08 14.58 1.25 13.75 1.25 12.71L1.25 4.38C1.25 3.33 2.08 2.5 3.12 2.5L7.29 2.5C7.37 2.5 7.45 2.49 7.53 2.46C7.61 2.43 7.68 2.38 7.73 2.32C7.79 2.26 7.84 2.19 7.87 2.12C7.9 2.04 7.92 1.96 7.92 1.88C7.92 1.79 7.9 1.71 7.87 1.63C7.84 1.56 7.79 1.49 7.73 1.43C7.68 1.37 7.61 1.33 7.53 1.3C7.45 1.27 7.37 1.25 7.29 1.25L3.12 1.25Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                            </svg>
                            </button>
                            <button className='link__btns-small'><svg width="15.833252" height="15.833496" viewBox="0 0 15.8333 15.8335" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector" d="M12.91 0C11.31 0 10 1.31 10 2.91C10 3.16 10.08 3.37 10.13 3.6L5.14 6.1C4.6 5.44 3.82 5 2.91 5C1.31 5 0 6.31 0 7.91C0 9.52 1.31 10.83 2.91 10.83C3.82 10.83 4.6 10.38 5.14 9.72L10.13 12.22C10.08 12.45 10 12.67 10 12.91C10 14.52 11.31 15.83 12.91 15.83C14.52 15.83 15.83 14.52 15.83 12.91C15.83 11.31 14.52 10 12.91 10C12 10 11.22 10.44 10.68 11.1L5.69 8.6C5.75 8.37 5.83 8.16 5.83 7.91C5.83 7.67 5.75 7.45 5.69 7.22L10.68 4.72C11.22 5.38 12 5.83 12.91 5.83C14.52 5.83 15.83 4.52 15.83 2.91C15.83 1.31 14.52 0 12.91 0ZM12.91 1.25C13.84 1.25 14.58 1.98 14.58 2.91C14.58 3.84 13.84 4.58 12.91 4.58C11.98 4.58 11.25 3.84 11.25 2.91C11.25 1.98 11.98 1.25 12.91 1.25ZM2.91 6.25C3.84 6.25 4.58 6.98 4.58 7.91C4.58 8.84 3.84 9.58 2.91 9.58C1.98 9.58 1.25 8.84 1.25 7.91C1.25 6.98 1.98 6.25 2.91 6.25ZM12.91 11.25C13.84 11.25 14.58 11.98 14.58 12.91C14.58 13.84 13.84 14.58 12.91 14.58C11.98 14.58 11.25 13.84 11.25 12.91C11.25 11.98 11.98 11.25 12.91 11.25Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                            </svg>
                            </button>
                            <button className='link__btns-small'><svg width="3.333252" height="15.000000" viewBox="0 0 3.33325 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector" d="M1.66 11.66C1.22 11.66 0.8 11.84 0.48 12.15C0.17 12.46 0 12.89 0 13.33C0 13.77 0.17 14.19 0.48 14.51C0.8 14.82 1.22 15 1.66 15C2.1 15 2.53 14.82 2.84 14.51C3.15 14.19 3.33 13.77 3.33 13.33C3.33 12.89 3.15 12.46 2.84 12.15C2.53 11.84 2.1 11.66 1.66 11.66ZM1.66 5.83C1.22 5.83 0.8 6 0.48 6.32C0.17 6.63 0 7.05 0 7.5C0 7.94 0.17 8.36 0.48 8.67C0.8 8.99 1.22 9.16 1.66 9.16C2.1 9.16 2.53 8.99 2.84 8.67C3.15 8.36 3.33 7.94 3.33 7.5C3.33 7.05 3.15 6.63 2.84 6.32C2.53 6 2.1 5.83 1.66 5.83ZM1.66 0C1.22 0 0.8 0.17 0.48 0.48C0.17 0.8 0 1.22 0 1.66C0 2.1 0.17 2.53 0.48 2.84C0.8 3.15 1.22 3.33 1.66 3.33C2.1 3.33 2.53 3.15 2.84 2.84C3.15 2.53 3.33 2.1 3.33 1.66C3.33 1.22 3.15 0.8 2.84 0.48C2.53 0.17 2.1 0 1.66 0Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="edit__inner--contacts">
                    <div className="inner__contacts--icon">
                        <div className="contacts__icon--info">
                            <svg width="15.000000" height="17.000000" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>
                                </desc>
                                <defs />
                                <path id="Vector" d="M3.45 -0.5C3.41 -0.51 3.36 -0.5 3.31 -0.49C2.82 -0.45 2.38 -0.22 2.06 0.13C2.03 0.16 1.99 0.19 1.97 0.23L-0.54 3.53C-0.55 3.53 -0.55 3.54 -0.55 3.54C-0.79 3.86 -0.92 4.26 -0.92 4.66L-0.92 12.2C-0.92 13.23 -0.07 14.08 0.95 14.08L3.25 14.08L3.25 15.54C3.25 15.7 3.31 15.86 3.43 15.98C3.55 16.1 3.7 16.16 3.87 16.16L4.77 16.16C5.16 16.16 5.53 16.01 5.81 15.73L7.46 14.08L9.57 14.08C10.1 14.08 10.6 13.85 10.95 13.46L14.1 10.01L14.1 10.01C14.62 9.43 14.91 8.68 14.91 7.9L14.91 1.37C14.91 0.34 14.06 -0.5 13.04 -0.5L3.45 -0.5ZM3.45 0.75L13.04 0.75C13.39 0.75 13.66 1.02 13.66 1.37L13.66 7.9C13.66 8.37 13.49 8.82 13.17 9.16L12.12 10.33L7.2 10.33C7.04 10.33 6.88 10.39 6.76 10.51L6.16 11.11L6.16 10.95C6.16 10.79 6.1 10.63 5.98 10.51C5.86 10.39 5.7 10.33 5.54 10.33L2.83 10.33L2.83 1.37C2.83 1.25 2.86 1.14 2.92 1.04L2.96 0.99C2.97 0.97 2.98 0.96 2.99 0.95C3.1 0.82 3.27 0.75 3.45 0.75ZM1.58 2.81L1.58 10.54C1.58 11.1 2.05 11.58 2.62 11.58L4.91 11.58L4.91 12.62C4.91 12.74 4.95 12.86 5.02 12.97C5.09 13.07 5.18 13.15 5.3 13.2C5.41 13.24 5.54 13.26 5.66 13.23C5.78 13.21 5.89 13.15 5.98 13.06L7.46 11.58L10.98 11.58L10.03 12.62C9.91 12.75 9.74 12.83 9.57 12.83L7.2 12.83C7.04 12.83 6.88 12.89 6.76 13.01L4.92 14.85C4.88 14.89 4.83 14.91 4.77 14.91L4.5 14.91L4.5 13.45C4.5 13.29 4.43 13.13 4.31 13.01C4.19 12.89 4.04 12.83 3.87 12.83L0.95 12.83C0.6 12.83 0.33 12.56 0.33 12.2L0.33 4.66C0.33 4.53 0.37 4.39 0.45 4.29L1.58 2.81ZM6.78 3.24C6.61 3.24 6.45 3.31 6.34 3.43C6.22 3.54 6.16 3.7 6.16 3.87L6.16 7.2C6.16 7.29 6.18 7.37 6.21 7.45C6.24 7.52 6.28 7.59 6.34 7.65C6.4 7.71 6.47 7.76 6.55 7.79C6.62 7.82 6.7 7.84 6.79 7.84C6.87 7.84 6.95 7.82 7.03 7.79C7.1 7.76 7.17 7.71 7.23 7.65C7.29 7.59 7.34 7.52 7.37 7.45C7.4 7.37 7.41 7.29 7.41 7.2L7.41 3.87C7.41 3.79 7.4 3.7 7.37 3.63C7.33 3.55 7.29 3.48 7.23 3.42C7.17 3.36 7.1 3.31 7.02 3.28C6.94 3.25 6.86 3.23 6.78 3.24ZM10.11 3.24C9.94 3.24 9.79 3.31 9.67 3.43C9.56 3.54 9.49 3.7 9.5 3.87L9.5 7.2C9.49 7.29 9.51 7.37 9.54 7.45C9.57 7.52 9.62 7.59 9.67 7.65C9.73 7.71 9.8 7.76 9.88 7.79C9.96 7.82 10.04 7.84 10.12 7.84C10.2 7.84 10.28 7.82 10.36 7.79C10.44 7.76 10.51 7.71 10.57 7.65C10.62 7.59 10.67 7.52 10.7 7.45C10.73 7.37 10.75 7.29 10.75 7.2L10.75 3.87C10.75 3.79 10.73 3.7 10.7 3.63C10.67 3.55 10.62 3.48 10.56 3.42C10.5 3.36 10.43 3.31 10.35 3.28C10.28 3.25 10.19 3.23 10.11 3.24Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                            </svg>
                            <span className="icon__info--name">Twitch</span>
                        </div>
                    </div>
                    <div className="inner__contacts--icon">
                        <div className="contacts__icon--info">
                            <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>
                                </desc>
                                <defs>
                                    <clipPath id="clip85_3717">
                                        <rect id="icons8-instagram (9) 1" width="20.000000" height="20.000000" fill="white" fill-opacity="0" />
                                    </clipPath>
                                </defs>
                                <rect id="icons8-instagram (9) 1" width="20.000000" height="20.000000" fill="#FFFFFF" fill-opacity="0" />
                                <g clipPath="url(#clip85_3717)">
                                    <path id="Vector" d="M6.87 2.08C4.23 2.08 2.08 4.23 2.08 6.87L2.08 13.12C2.08 15.76 4.23 17.91 6.87 17.91L13.12 17.91C15.76 17.91 17.91 15.76 17.91 13.12L17.91 6.87C17.91 4.23 15.76 2.08 13.12 2.08L6.87 2.08ZM6.87 3.33L13.12 3.33C15.08 3.33 16.66 4.91 16.66 6.87L16.66 13.12C16.66 15.08 15.08 16.66 13.12 16.66L6.87 16.66C4.91 16.66 3.33 15.08 3.33 13.12L3.33 6.87C3.33 4.91 4.91 3.33 6.87 3.33ZM14.16 5C13.7 5 13.33 5.37 13.33 5.83C13.33 6.29 13.7 6.66 14.16 6.66C14.62 6.66 15 6.29 15 5.83C15 5.37 14.62 5 14.16 5ZM10 5.83C7.7 5.83 5.83 7.7 5.83 10C5.83 12.29 7.7 14.16 10 14.16C12.29 14.16 14.16 12.29 14.16 10C14.16 7.7 12.29 5.83 10 5.83ZM10 7.08C11.61 7.08 12.91 8.38 12.91 10C12.91 11.61 11.61 12.91 10 12.91C8.38 12.91 7.08 11.61 7.08 10C7.08 8.38 8.38 7.08 10 7.08Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                                </g>
                            </svg>
                            <span className="icon__info--name">Instagram</span>
                        </div>
                    </div>
                    <div className="inner__contacts--icon">
                        <div className="contacts__icon--info">
                            <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>
                                </desc>
                                <defs>
                                    <clipPath id="clip85_3719">
                                        <rect id="icons8-twitter (3) 1" width="20.000000" height="20.000000" fill="white" fill-opacity="0" />
                                    </clipPath>
                                </defs>
                                <rect id="icons8-twitter (3) 1" width="20.000000" height="20.000000" fill="#FFFFFF" fill-opacity="0" />
                                <g clip-path="url(#clip85_3719)">
                                    <path id="Vector" d="M13.33 2.5C11.07 2.5 9.23 4.32 9.18 6.58C7.18 6.34 5.88 5.59 5.08 4.85C4.19 4.03 3.91 3.31 3.91 3.31C3.87 3.2 3.8 3.11 3.71 3.04C3.63 2.98 3.52 2.93 3.41 2.92C3.3 2.9 3.19 2.92 3.09 2.96C2.98 3 2.9 3.07 2.83 3.16C2.83 3.16 2.08 4.16 2.08 5.62C2.08 6.45 2.34 7.07 2.66 7.59C2.64 7.59 2.57 7.56 2.57 7.56C2.47 7.51 2.36 7.49 2.24 7.5C2.13 7.5 2.03 7.54 1.93 7.6C1.84 7.67 1.77 7.75 1.72 7.85C1.67 7.95 1.65 8.07 1.66 8.18C1.66 8.18 1.9 9.94 3.56 11.22L3.39 11.26C3.29 11.29 3.2 11.33 3.13 11.39C3.06 11.46 3 11.54 2.96 11.62C2.92 11.71 2.91 11.81 2.91 11.91C2.92 12 2.95 12.1 2.99 12.18C2.99 12.18 3.27 12.65 3.86 13.15C4.21 13.45 4.72 13.75 5.32 14.04C4.58 14.31 3.48 14.58 1.87 14.58C1.75 14.58 1.63 14.61 1.53 14.68C1.43 14.74 1.35 14.84 1.3 14.95C1.25 15.05 1.23 15.18 1.25 15.29C1.27 15.41 1.32 15.52 1.4 15.62C1.4 15.62 1.88 16.14 2.82 16.6C3.77 17.06 5.22 17.5 7.29 17.5C10.92 17.5 13.53 15.75 15.16 13.54C16.79 11.33 17.5 8.69 17.5 6.66C17.5 6.53 17.49 6.41 17.48 6.28C18.36 5.43 18.69 4.8 18.7 4.76C18.78 4.61 18.75 4.42 18.63 4.29C18.51 4.16 18.32 4.13 18.15 4.2L18.09 4.23C18.03 4.26 17.97 4.28 17.91 4.31C18.08 4.04 18.22 3.75 18.31 3.45C18.36 3.29 18.3 3.11 18.17 3C18.03 2.89 17.84 2.88 17.7 2.97C17.19 3.28 16.7 3.5 16.19 3.64C15.44 2.93 14.44 2.5 13.33 2.5ZM13.33 3.75C14.95 3.75 16.25 5.04 16.25 6.66C16.25 8.39 15.6 10.84 14.15 12.8C12.71 14.76 10.53 16.25 7.29 16.25C5.72 16.25 4.67 15.96 3.89 15.65C4.71 15.53 5.42 15.36 5.92 15.16C6.8 14.82 7.28 14.43 7.28 14.43C7.36 14.35 7.43 14.26 7.46 14.15C7.5 14.04 7.5 13.92 7.48 13.81C7.45 13.7 7.4 13.6 7.31 13.51C7.23 13.43 7.13 13.37 7.02 13.35C5.89 13.06 5.16 12.6 4.7 12.22L5.35 12.06C5.48 12.03 5.6 11.96 5.68 11.85C5.77 11.75 5.82 11.62 5.83 11.49C5.84 11.36 5.8 11.23 5.73 11.12C5.66 11 5.55 10.92 5.43 10.87C4.08 10.35 3.51 9.61 3.22 9C3.57 9.07 3.9 9.16 4.37 9.16C4.51 9.16 4.65 9.11 4.76 9.03C4.87 8.94 4.95 8.82 4.98 8.68C5.01 8.54 5 8.4 4.94 8.27C4.88 8.14 4.77 8.04 4.65 7.98C4.65 7.98 3.33 7.37 3.33 5.62C3.33 5.31 3.42 5.11 3.48 4.87C3.7 5.16 3.88 5.44 4.23 5.77C5.3 6.76 7.07 7.77 9.75 7.91C9.84 7.92 9.92 7.9 10 7.87C10.08 7.84 10.15 7.8 10.22 7.74C10.28 7.68 10.33 7.61 10.36 7.53C10.39 7.46 10.41 7.37 10.41 7.29L10.41 6.66C10.41 5.04 11.71 3.75 13.33 3.75Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                                </g>
                            </svg>
                            <span className="icon__info--name">Twitter</span>
                        </div>
                    </div>
                    <div className="inner__contacts--icon">
                        <div className="contacts__icon--info">
                            <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>
                                </desc>
                                <defs />
                                <path id="Vector" d="M9.97 0C7.99 0 6.06 0.59 4.42 1.69C2.78 2.8 1.5 4.36 0.75 6.19C0 8.02 -0.2 10.03 0.19 11.96C0.58 13.9 1.54 15.68 2.94 17.08C4.34 18.47 6.12 19.42 8.06 19.81C10 20.19 12.01 19.99 13.83 19.23C15.66 18.47 17.22 17.19 18.31 15.54C19.41 13.9 20 11.97 20 9.99C19.99 7.33 18.93 4.79 17.05 2.92C15.17 1.04 12.62 -0.01 9.97 0ZM9.97 18.95C8.2 18.95 6.47 18.42 5 17.43C3.53 16.44 2.38 15.04 1.71 13.41C1.04 11.77 0.86 9.97 1.21 8.23C1.56 6.5 2.41 4.9 3.66 3.65C4.92 2.4 6.51 1.55 8.25 1.21C9.99 0.86 11.78 1.04 13.42 1.72C15.06 2.4 16.45 3.54 17.44 5.02C18.42 6.49 18.95 8.22 18.95 9.99C18.94 12.37 18 14.65 16.31 16.33C14.63 18.01 12.35 18.95 9.97 18.95L9.97 18.95Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                                <path id="Vector" d="M14.13 9.34L14.13 8.53C14.13 8.04 14.03 7.56 13.84 7.12C13.65 6.67 13.37 6.27 13.03 5.93C12.32 5.24 11.38 4.85 10.39 4.85L9.72 4.85C8.73 4.85 7.78 5.24 7.08 5.93C6.73 6.27 6.46 6.67 6.27 7.12C6.08 7.56 5.98 8.04 5.98 8.53L5.98 9.34L5.52 10.18L5.52 11.38C5.52 11.92 5.63 12.45 5.84 12.95C6.05 13.44 6.36 13.89 6.74 14.27C7.53 15.04 8.58 15.47 9.68 15.47L10.43 15.47C11.53 15.47 12.58 15.04 13.36 14.27C13.75 13.89 14.06 13.44 14.27 12.95C14.48 12.45 14.59 11.92 14.59 11.38L14.59 10.18L14.13 9.34ZM10.49 13.04L10.49 14C10.49 14.07 10.47 14.14 10.44 14.2C10.41 14.26 10.36 14.32 10.3 14.35L10.12 14.35C10.09 14.36 10.07 14.36 10.05 14.35L10.01 14.35C9.99 14.36 9.97 14.36 9.95 14.35L9.87 14.35C9.81 14.32 9.76 14.26 9.73 14.2C9.69 14.14 9.67 14.07 9.67 13.99L9.67 13.04C9.42 12.94 9.21 12.76 9.08 12.52C8.95 12.29 8.91 12.01 8.96 11.75C9.01 11.48 9.16 11.25 9.37 11.08C9.57 10.91 9.84 10.82 10.11 10.82L10.13 10.82C10.4 10.82 10.66 10.91 10.87 11.08C11.08 11.25 11.22 11.48 11.27 11.75C11.32 12.01 11.28 12.29 11.15 12.52C11.02 12.76 10.81 12.94 10.56 13.04L10.49 13.04ZM12.46 9.37L7.65 9.37L7.65 8.53C7.65 8.26 7.71 8 7.81 7.75C7.91 7.5 8.07 7.28 8.26 7.09C8.65 6.71 9.17 6.49 9.72 6.49L10.39 6.49C10.94 6.49 11.46 6.71 11.85 7.09C12.04 7.28 12.19 7.5 12.3 7.75C12.4 8 12.46 8.26 12.46 8.53L12.46 9.37Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                            </svg>
                            <span className="icon__info--name">Onlyfans</span>
                        </div>
                    </div>
                </div>
                <div className="home__profile--headline">WFH - art name</div>
                <div className="home__profile-desc">Description: The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).</div>
            </div>
            <div className="card__content">
                <ProfileCard
                    cardImgSrc='../../../../images/slider1.png'
                    infoPhotoSrc='../../../../images/minicard (8).png'
                    name='Anton'
                    username='userAnton'
                />
                <ProfileCard
                    cardImgSrc='../../../../images/card (7).png'
                    infoPhotoSrc='../../../../images/minicard (7).png'
                    name='Max'
                    username='userMax'
                />
                <ProfileCard
                    cardImgSrc='../../../../images/card (6).png'
                    infoPhotoSrc='../../../../images/minicard (6).png'
                    name='Misha'
                    username='userMisha'
                />
                <ProfileCard
                    cardImgSrc='../../../../images/card (5).png'
                    infoPhotoSrc='../../../../images/minicard (5).png'
                    name='Nikita'
                    username='userNikita'
                />
                <ProfileCard
                    cardImgSrc='../../../../images/card (4).png'
                    infoPhotoSrc='../../../../images/minicard (4).png'
                    name='Nikita'
                    username='userNikita'
                />
                <ProfileCard
                    cardImgSrc='../../../../images/card (3).png'
                    infoPhotoSrc='../../../../images/minicard (3).png'
                    name='Nikita'
                    username='userNikita'
                />
                <ProfileCard
                    cardImgSrc='../../../../images/card (2).png'
                    infoPhotoSrc='../../../../images/minicard (2).png'
                    name='Nikita'
                    username='userNikita'
                />
                <ProfileCard
                    cardImgSrc='../../../../images/card (1).png'
                    infoPhotoSrc='../../../../images/minicard (1).png'
                    name='Nikita'
                    username='userNikita'
                />
            </div>
        </div>
    );
};