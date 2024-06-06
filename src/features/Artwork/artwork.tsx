import { useEffect } from "react";
import "./artwork.scss";
import { IcSharpClose1 } from "../../shared/ui/closeBtn/closebtn";

interface ArtworkProps {
    onClose: () => void;

}

export const Artwork: React.FC<ArtworkProps> = ({ onClose }) => {
    useEffect(() => {

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (
        <div className="artwork">
            <div className="artwork__inner">
                <div className="artwork__headline">
                    <div className="artwork__headline-text">Creating artwork</div>
                    <div className="artwork__headline-steps">
                        <div className="headline__steps-lin"></div>
                        <div className="headline__steps-lin"></div>
                        <div className="headline__steps-lin"></div>
                    </div>
                    <div className="artwork__headline-desc">Step 1 from 3</div>
                    <button onClick={onClose} className="close-button"><IcSharpClose1 /></button>
                </div>
                <div className="upload">
                    <div className="upload__title">Upload the artwork you will be selling</div>
                    <div className="upload__container">

                    </div>
                </div>
                <button className="next__step">Next step</button>
            </div>
        </div>
    );
};
