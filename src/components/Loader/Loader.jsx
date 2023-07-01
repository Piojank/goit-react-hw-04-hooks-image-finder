import { HollowDotsSpinner } from 'react-epic-spinners';
import s from './Loader.module.css';
import PropTypes from 'prop-types';

export const Loader = ({ color, size }) => {
    return (
        <div className={s.Loader}>
            <HollowDotsSpinner color={color} size={size}/>
        </div>
    );
};

Loader.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired, 
}
