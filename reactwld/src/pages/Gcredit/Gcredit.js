import React, {
	Component
} from 'react';
//import './Xfoot.css'
import '../../assets/wldbase.css'
import '../../assets/credit.css'

import Gfoot from '../../components/Gfoot/Gfoot';

import { Route } from "react-router-dom";
//二级路由
import Gindex from "../Gindex/Gindex";
import Gclassify from "../Gclassify/Gclassify";
import Gaccount from "../Gaccount/Gaccount";
//import { Link } from "react-router-dom";
class Gcredit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}   
	
	render() {
		return(
		<div>
			<Route path="/credit/index" component={Gindex} />
			<Route path="/credit/classify" component={Gclassify} />
			<Route path="/credit/users" component={Gaccount} />
			<Gfoot />
		</div>
		)
	}
}
export default Gcredit;