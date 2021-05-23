import React from 'react';

const Spell = (props) => {
    let imgPath = props.name === '' ? `/img/${props.spell.name.replace(/ /g, '')}.png` : '/img/Empty.png';
    let components = props.showComponents ? (
        <span className="col-right">Q:{props.spell.components.q} W:{props.spell.components.w} E:{props.spell.components.e}</span>
    ) : '';
    return (
        <div className="Spell">
            <img className="col-left" src={imgPath} alt={props.spell.name} />
            {components}
        </div>
    );
}

export default Spell;
