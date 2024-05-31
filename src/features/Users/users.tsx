import "./users.scss"

interface userProps {
    imgSrc: string;
    name: string;
    user: string;
    text: string;
}

export const User: React.FC<userProps> = ({ imgSrc, name, user, text }) => {
    return (
        <div className="user">
            <div className="user__image">
                <img src={imgSrc} alt="user image" />
            </div>
            <div className="user__info">
                <span className="user__name">{name}</span>
                <span className="user__user">{user}</span>
                <p className="user__text">{text}</p>
            </div>
        </div>
    );
}
