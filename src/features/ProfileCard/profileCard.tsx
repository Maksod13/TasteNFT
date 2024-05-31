import React from 'react';
import "./profileCard.scss"

interface ProfileCardProps {
    cardImgSrc?: string;
    infoPhotoSrc?: string;
    name?: string;
    username?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
    cardImgSrc = "",
    infoPhotoSrc = "",
    name = "",
    username = "",
}) => {
    return (
        <div className="card">
            <div className="card__img">
                <img src={cardImgSrc} alt="" className="card__img-art" />
                <div className="card__img-info">
                    <img src={infoPhotoSrc} alt="" className="card__info-photo" />
                    <div className="card__img--name">
                        <span className="card__name-name">{name}</span>
                        <span className="card__name-username">{username}</span>
                    </div>
                </div>
            </div>
            <div className="card__about">
                <span className="card__about-name">WFH - art name</span>
                <div className="card__about-info">
                    <div className="about__info-price">
                        <span className="info__price-text">Sold for:</span>
                        <div className="info__price-number">
                            <img src="../../../../images/miniLogo.png" alt="" className="price__number-img" />
                            <span className="price__number-m">1,5M</span>
                        </div>
                    </div>
                    <div className="about__info-price">
                        <span className="info__price-text">Ending in:</span>
                        <div className="info__price-number">
                            <span className="price__number-m">05h 02m 41s</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
