import React from 'react';

const OrbSlot = (props) => {
    let img = `/img/${props.orb}.png`
    return (
        <div className="OrbSlot">
            <img src={img} alt={props.orb} />
        </div>
    );
}

export default SpellSlot;