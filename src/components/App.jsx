import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'utils/PixabayAPI';

export const App = () => {

    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(null);

    useEffect(() => {
        const updateImages = (query, page) => {
            setLoading(true);

            setTimeout(() => {
                try {
                    fetchImages(query, page).then(data => {
                        if (!data.hits.length) {
                            return toast.error(
                                'There is no images found with that search request'
                            );
                        };
                        const mappedImages = data.hits.map(
                            ({ id, webformatURL, tags, largeImageURL }) => ({
                                id,
                                webformatURL,
                                tags,
                                largeImageURL,
                            }));
                        setImages(img => [...img, ...mappedImages]);
                    });
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                };
            }, 1000);
        };
        if (query !== '' || page !== 1) {
            updateImages(query, page);
        };
    }, [query, page]);

    const handleSearchSubmit = value => {
        if (value !== query) {
            setQuery(value);
            setImages([]);
            setPage(1);
            return;
        }
    };

    const loadMore = () => {
        setPage(page + 1);
    };

    const showModalImage = id => {
        const image = images.find(image => image.id === id);
        setModal({
            largeImageURL: image.largeImageURL,
            tags: image.tags,
        });
    };

    const closeModalImage = () => {
        setModal(null);
    };

    return (
        <>
            <Searchbar onSearch={handleSearchSubmit} />
            {error && toast.error(`Whoops, something went wrong: ${error.message}`)}
            {loading && <Loader color={'#3f51b5'} size={32} />}
            {images.length > 0 && (
                <>
                    <ImageGallery images={images} handlePreview={showModalImage} />
                    <Button loadMore={loadMore}/>
                </>
            )}
            {modal && (
                <Modal
                    urlImage={modal.largeImageURL}
                    tags={modal.tags}
                    closeModal={closeModalImage}
                />
            )}
            <ToastContainer autoClose={4000} />
        </>
    );
};
