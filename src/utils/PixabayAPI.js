import axios from 'axios';

const API = axios.create({
    baseURL: 'https://pixabay.com/api/',
    timeout: 5000,
    params: {
        key: '29712287-5d117bcccbf45424d50c3eb4b',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12
    },
});

export const fetchImages = async (name, galleryPage) => {
    try {
    const response = await API.get('', {
        params: {
            q: name,
            page: galleryPage
        },
    });
    
    return response.data;
    } catch (error) {
        throw error;
    };
};