const React, { Component } = require('react');
const Orb = require('Orb');
const Spell = require('Spell');
const style = require('../App.scss');

class Queue extends Component {
    constructor(props) {
        super(props);
        this.orbs = props.orbs;
        this.spells = props.spells;
    }

    render() {
        <div id="queue" className={style.Queue}>
            <div className="orb-queue">
                <Orb orb={this.orbs.queued[0]} />
                <Orb orb={this.orbs.queued[1]} />
                <Orb orb={this.orbs.queued[2]} />
            </div>
            <div className="spell-queue">
                <Spell spell={this.spells[0]} showComponents={false} />
                <Spell spell={this.spells[1]} showComponents={false} />
            </div>
        </div>
    }
}

export default Queue;