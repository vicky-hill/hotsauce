import React from 'react';
import { getClassName } from '../../utils/getClassName';

const Container = ({ children, className, center, content }) => {

    const variations = {
        center: center && 'center',
        extraNarrow: content && content.includes('extra-narrow') && 'content--extra-narrow',
        fitScreen: content && content.includes('fit-screen') && 'content--fit-screen'
    }

    return (
        <div className={getClassName('container', className, variations)}>
            { children }
        </div>
    )
}

export default Container;
