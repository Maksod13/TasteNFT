import React, { FC, useState, useEffect } from 'react';
import "./follow.scss"
import { IcSharpClose1 } from "../../../shared/ui/closeBtn/closebtn"

interface ProfileProps {
    onClose: () => void;
}
export const Follow: FC<ProfileProps> = ({ onClose }) => {
    useEffect(() => {

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const [followStates, setFollowStates] = useState<boolean[]>(new Array(15).fill(false));

    const toggleFollow = (index: number) => {
        const newFollowStates = [...followStates];
        newFollowStates[index] = !newFollowStates[index];
        setFollowStates(newFollowStates);
    };


    return (
        <div className="follow">
            <div className="follow__headline">
                <div className="follow__headline-btn">
                    <button className="follow__btn" >Following</button>
                    <button className="follow__btn">Followers</button>
                </div>
                <button className="follow__close-btn" onClick={onClose}><IcSharpClose1 /></button>
            </div>
            <div className="follow__inner">
                {[...Array(15)].map((_, index) => (
                    <div className="follow__inner-info" key={index}>
                        <div className="profile__user">
                            <img src="../../../../images/user2.png" alt="" className="profile__user-image" />
                            <div className="profile__user-name">
                                <div className="user__name-name">User Name</div>
                                <div className="user__name-username">@username</div>
                            </div>
                        </div>
                        <button className="follow__inner-btn" onClick={() => toggleFollow(index)}>
                            {followStates[index] ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}