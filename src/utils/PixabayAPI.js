import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29712287-5d117bcccbf45424d50c3eb4b';
const IMAGE_TYPE = 'image_type=photo';
const IMAGE_SETTINGS = 'orientation=horizontal&safesearch=true';
const PER_PAGE = 'per_page=12';

export const fetchImages = async (name, galleryPage) => {
    const FETCH_URL = `${BASE_URL}?key=${API_KEY}&q=${name}&${IMAGE_TYPE}&${IMAGE_SETTINGS}&page=${galleryPage}&${PER_PAGE}`;

    return axios.get(FETCH_URL)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
};