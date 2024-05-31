import React, { useState } from 'react';
import './dropMenu.scss';


interface DropdownMenuProps {
    name?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    name = ""
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropdown__toggle" onClick={toggleDropdown}>
                {name}
                <svg width="6.928223" height="3.750000" viewBox="0 0 6.92822 3.75" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <desc>
                    </desc>
                    <defs />
                    <path id="Polygon 1" d="M3.46 3.75L6.92 0L0 0L3.46 3.75Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                </svg>
            </button>
            {isOpen && (
                <ul className="dropdown__menu">
                    <li className="dropdown__item">Option 1</li>
                    <li className="dropdown__item">Option 2</li>
                    <li className="dropdown__item">Option 3</li>
                </ul>
            )}
        </div>
    );
};
