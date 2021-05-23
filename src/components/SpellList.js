import React from 'react';
import Spell from './Spell'

class SpellList extends React.Component {
    constructor() {
        super();
        this.spells = [
            {
                name: 'Cold Snap',
                components: {
                    q: 3,
                    w: 0,
                    e: 0
                }
            },
            {
                name: 'Ghost Walk',
                components: {
                    q: 2,
                    w: 1,
                    e: 0
                }
            },
            {
                name: 'Ice Wall',
                components: {
                    q: 2,
                    w: 0,
                    e: 1
                }
            },
            {
                name: 'EMP',
                components: {
                    q: 0,
                    w: 3,
                    e: 0
                }
            },
            {
                name: 'Tornado',
                components: {
                    q: 1,
                    w: 2,
                    e: 0
                }
            },
            {
                name: 'Alacrity',
                components: {
                    q: 0,
                    w: 2,
                    e: 1
                }
            },
            {
                name: 'Sunstrike',
                components: {
                    q: 0,
                    w: 0,
                    e: 3
                }
            },
            {
                name: 'Forge Spirit',
                components: {
                    q: 1,
                    w: 0,
                    e: 2
                }
            },
            {
                name: 'Chaos Meteor',
                components: {
                    q: 0,
                    w: 1,
                    e: 2
                }
            },
            {
                name: 'Deafening Blast',
                components: {
                    q: 1,
                    w: 1,
                    e: 1
                }
            }
        ];   
    }

    render() {
        return (
            <>
                <div className="SpellList">
                    <Spell spell={this.spells[0]} />
                    <Spell spell={this.spells[1]} />
                    <Spell spell={this.spells[2]} />
                    <Spell spell={this.spells[3]} />
                    <Spell spell={this.spells[4]} />
                    <Spell spell={this.spells[5]} />
                    <Spell spell={this.spells[6]} />
                    <Spell spell={this.spells[7]} />
                    <Spell spell={this.spells[8]} />
                    <Spell spell={this.spells[9]} />
                </div>
            </>
        );
    }
}

export default SpellList;
