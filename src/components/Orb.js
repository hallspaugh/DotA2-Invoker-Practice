const { Component } = require('react');

class Orb extends Component {
    constructor(props) {
        super(props);
        this.orb = props.orb;
    }
    
    render() { 
        let icon = `/img/${orb.img}`;
        <img className="Orb" src={icon} alt={orb.img} />
    };
}

export default Orb;