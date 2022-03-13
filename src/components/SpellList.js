const React, { Component } = require('react');
const { spells, Spell } = require('Spell');

class SpellList extends Component {
    constructor() {
        super();
        this.spells = spells; 
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
