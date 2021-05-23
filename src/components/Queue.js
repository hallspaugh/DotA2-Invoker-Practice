import React, { state, useState } from 'react';
import Orb from './Orb';
import Spell from './Spell';
import style from '../App.scss';

// class Queue extends React.Component {
//     constructor(props) {
//         super(props);
//     }

const Queue = (props) => {
    console.log(props.spells);
    return (
        <div id="queue" className={style.Queue}>
            <div className="orb-queue">
                <Orb orb={props.orbs.queued[0]} />
                <Orb orb={props.orbs.queued[1]} />
                <Orb orb={props.orbs.queued[2]} />
            </div>
            <div className="spell-queue">
                <Spell spell={props.spells[0]} showComponents={false} />
                <Spell spell={props.spells[1]} showComponents={false} />
            </div>
        </div>
    )
}

export default Queue;