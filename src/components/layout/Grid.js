import React from 'react';
import { getClassName } from '../../utils/getClassName';
import PropTypes from 'prop-types';

const Grid = ({ children, col, gap, className }) => {
    const variations = {
        col: `grid__col--${col}`,
        gap: `grid__gap--${gap}`
    }

    return (
        <div className={getClassName('grid', className, variations )}>
            { children }
        </div>
    )
}

Grid.defaultProps = {
    col: 4,
    gap: 5
}

Grid.propTypes = {
    col: PropTypes.oneOf([3, 4, 5]),
    gap: PropTypes.oneOf([1, 2, 3, 4 ,5]),
    className: PropTypes.string
}

export default Grid;
