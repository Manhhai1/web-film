import { useState, useEffect } from 'react';
import '../css/MoviePopup.css';
const MoviePopup = ({ src_film, isOpenPopup, setIsOpenPopup }) => {
    const [isOpen, setIsOpen] = useState(isOpenPopup);

    const closePopup = () => {
        setIsOpen(false);
        setIsOpenPopup(false); // Thông báo cho component cha
    };

    const handlePopupClick = (e) => {
        if (e.target === e.currentTarget) {
            closePopup();
        }
    };
    useEffect(() => {
        setIsOpen(isOpenPopup);
    }, [isOpenPopup]);
    return (
        <>
            {isOpen && (
                <div className='popup'> 
                    <div className='popupContent'>
                        <span className='closebtn' onClick={closePopup}>
                            &times;
                        </span>
                        <iframe
                            id="movieIframe"
                            width="800"
                            height="400"
                            src={src_film}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default MoviePopup;
