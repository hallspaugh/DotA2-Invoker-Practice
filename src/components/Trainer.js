import React, { state, useState } from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import Queue from './Queue';
import SpellList from './SpellList';

class Trainer extends React.Component {
    constructor() {
        super();
        this.state = {
            orbs: { 
                queued: [
                    {
                        key: '',
                        img: 'Empty.png'
                    },
                    {
                        key: '',
                        img: 'Empty.png'
                    },
                    {
                        key: '',
                        img: 'Empty.png'
                    }
                ],
                available: {
                    quas: {
                        key: 'q',
                        img: 'Quas.png'
                    },
                    wex: {
                        key: 'w',
                        img: 'Wex.png'
                    },
                    exort: {
                        key: 'e',
                        img: 'Exort.png'
                    },
                    empty: {
                        key: '',
                        img: 'Empty.png'
                    }
                }
            },
            spells: {
                queued: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    }
                ],
                available: [
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
                ]
            }
        };
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyDown);
    }

    passOrbToQueue(orb) {
        let orbs = Object.assign({}, this.state.orbs);
        orbs.queued.unshift(orb);
        orbs.queued = orbs.queued.slice(0, 3);
        this.setState({orbs: orbs});
    }

    handleKeyDown = (event) => {
        if (event) {
            if (event.key.toLowerCase() === 'q') {
                this.passOrbToQueue(this.state.orbs.available.quas);
            } else if (event.key.toLowerCase() === 'w') {
                this.passOrbToQueue(this.state.orbs.available.wex);
            } else if (event.key.toLowerCase() === 'e') {
                this.passOrbToQueue(this.state.orbs.available.exort);
            } else if (event.key.toLowerCase() === 'r') {
                if(this.state.orbs.queued.filter(orb => ['q', 'w', 'e'].includes(orb.key)).length == 3)
                    this.invokeSpell(this.state.orbs.queued);
                // invoke spell if 3 orbs present
            }
        }
    }

    invokeSpell(orbs) {
        let spellConfig = {
            q: 0,
            w: 0,
            e: 0
        }
        orbs.forEach(orb => {
            spellConfig[orb.key] += 1
        });
        const newSpell = this.state.spells.available.find(spell => 
            spell.components.q == spellConfig.q &&
            spell.components.w == spellConfig.w &&
            spell.components.e == spellConfig.e
        );
        let spells = this.state.spells;
        console.log(spells.queued);
        spells.queued = spells.queued.slice(0,1).unshift(newSpell.name);
        console.log(spells.queued);
        this.setState({spells: spells});
    }

    render() {
        return (
            <div className="container">
                <Queue onKeyDown={this.handleKeyDown} orbs={this.state.orbs} spells={this.state.spells.queued}/>
                <SpellList spells={this.state.spells.available} />
            </div>
        )
    }
}

export default Trainer;