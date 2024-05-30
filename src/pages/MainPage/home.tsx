import React from 'react';
import { MySlider } from '../../features/slider';
import "./home.scss"


export const Home: React.FC = () => {
    return (
        <div className='home'>
            <div className="home__profile">
                <div className="profile__user">
                    <img src="../../../../images/user2.png" alt="" className="profile__user-image" />
                    <div className="profile__user-name">
                        <div className="user__name-name">User Name</div>
                        <div className="user__name-username">@username</div>
                    </div>
                </div>
                <div className="home__profile--headline">WFH - art name</div>
                <div className="home__profile-desc">Description: The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B 站).</div>
                <div className="home__profile-link">
                    <div className="profile__link-sold">
                        <span className="link__sold-text">Sold for:</span>
                        <img className='link__sold-img' src="../../../../images/miniLogo.png" alt="" />
                        <span className='number'>1,5M</span>
                    </div>
                    <div className="profile__link-btns">
                        <button className='link__btns-view'>View</button>
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
            <MySlider />
        </div>
    );
};


