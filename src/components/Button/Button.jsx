import PropTypes from 'prop-types';
import s from './Button.module.css';

export const Button = ({ loadMore }) => {
    return (
        <button type="button" onClick={loadMore} className={s.Button}>
            Load more
        </button>
    );
};

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
};