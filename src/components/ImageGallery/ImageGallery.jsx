import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, handlePreview }) => {
    const renderImageGalleryList = () => 
        images.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem
                key={id}
                tags={tags}
                urlImage={webformatURL}
                onClick={() => handlePreview(id)}
            />
        ));

    return (
        <div>
            <ul className={s.ImageGallery}>
                {images ? renderImageGalleryList() : null}
            </ul>
        </div>
    );
};

ImageGallery.propTypes = {
    handlePreview: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    ),
};