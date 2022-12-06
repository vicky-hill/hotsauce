import React from 'react';
import { getClassName } from '../../utils/getClassName';

const Container = ({ children, className, center }) => {

    const variations = {
        center: center && 'center', 

    }

    return (
        <div className={getClassName('container', className, variations)}>
            { children }
        </div>
    )
}

export default Container;
