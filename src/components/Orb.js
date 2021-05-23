import React from 'react';

const Orb = (props) => {
    let orb = props.orb;
    let icon = `/img/${orb.img}`;
    return (
        <img className="Orb" src={icon} alt={orb.img} />
    );
}

export default Orb;