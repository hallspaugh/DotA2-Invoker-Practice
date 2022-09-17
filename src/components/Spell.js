const { Component } = require('react');
const Parser = require('html-react-parser');

class Spell extends Component {
    constructor(props) {
        super(props);
        this.spell = props.spell;
        this.imgPath = props.name === '' ? `/img/${props.spell.name.replace(/ /g, '')}.png` : '/img/Empty.png'; 
    }

    render() {
        let spellComponents = props.showComponents ? '<span className="col-right">Q:{this.spell.components.q} W:{this.spell.components.w} E:{this.spell.components.e}</span>' : '';
        return (
            <div className="Spell">
                <img className="col-left" src={imgPath} alt={props.spell.name} />
                {Parser(spellComponents)}
            </div>
        );
    }
}

// export default Spell;

module.exports = {
    spells = {
        "spells" : [
            {
                "name": "Cold Snap",
                "components" : {
                    "q": 3,
                    "w": 0,
                    "e": 0
                }
            },
            {
                "name" : "Ghost Walk",
                "components" : {
                    "q:" : 2,
                    "w:" : 1,
                    "e:" : 0
                }
            },
            {
                "name" : "Ice Wall",
                "components" : {
                    "q:" : 2,
                    "w:" : 0,
                    "e:" : 1
                }
            },
            {
                "name" : "EMP",
                "components" : {
                    "q:" : 0,
                    "w:" : 3,
                    "e:" : 0
                }
            },
            {
                "name" : "Tornado",
                "components" : {
                    "q:" : 1,
                    "w:" : 2,
                    "e:" : 0
                }
            },
            {
                "name" : "Alacrity",
                "components" : {
                    "q:" : 0,
                    "w:" : 2,
                    "e:" : 1
                }
            },
            {
                "name" : "Sunstrike",
                "components" : {
                    "q:" : 0,
                    "w:" : 0,
                    "e:" : 3
                }
            },
            {
                "name" : "Forge Spirit",
                "components" : {
                    "q:" : 1,
                    "w:" : 0,
                    "e:" : 2
                }
            },
            {
                "name" : "Chaos Meteor",
                "components" : {
                    "q:" : 0,
                    "w:" : 1,
                    "e:" : 2
                }
            },
            {
                "name" : "Deafening Blast",
                "components" : {
                    "q:" : 1,
                    "w:" : 1,
                    "e:" : 1
                }
            }
        ]
    },
    Spell
};
