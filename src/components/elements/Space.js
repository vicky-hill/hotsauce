import React from 'react';

const Space = ({ sm, md, lg, height }) => {


    return (
        <div
            className={`space ${sm ? 'sm' : md ? 'md' : lg ? 'lg' : 'sm'}`}
            style={height ? { height: height } : {}}
        >
        </div>
    )
}

export default Space;
