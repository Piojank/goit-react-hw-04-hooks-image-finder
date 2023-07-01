import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const Modal = ({ closeModal, urlImage, tags }) => {

    useEffect(() => {
        const handleKeyDown = element => {
            if (element.code === 'Escape') {
                closeModal();
            };
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [closeModal])

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            closeModal();
        };
    };

    return (
        <div 
            className={s.Overlay}
            onClick={handleBackdropClick}
        >
            <div className={s.Modal}>
                <img src={urlImage} alt={tags}/>
            </div>
        </div>
    );
};

export default Modal;

Modal.propTypes = {
    urlImage: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};