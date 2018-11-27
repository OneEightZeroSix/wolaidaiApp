import React, {
	Component
} from 'react';
//import './Xfoot.css'

//import { Link } from "react-router-dom";
class Gheader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pickTab: 0,
			tabs: ""
		};
	}

	render() {
		return(
			<div className="home-bargain-banner">
			<img src="https://mf.wolaidai.com/aif-lease//file/1552018c8498e11d9f5cff81df77d82b.png" alt="" />
			<img className="home-banner-s" src="https://mf.wolaidai.com/aif-lease/file/7ba55f6745e3874627471335f6c2db5c.png" alt=""/>
			</div>
		)
	}
}
export default Gheader;