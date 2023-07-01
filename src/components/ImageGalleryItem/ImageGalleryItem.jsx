import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ urlImage, tags, onClick }) => {
    return (
        <li className={s.ImageGalleryItem}>
            <img 
                className={s.ImageGalleryItem_img}
                src={urlImage}
                alt={tags}
                onClick={onClick}
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    urlImage: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};