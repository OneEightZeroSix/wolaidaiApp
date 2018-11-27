import React, {
	Component
} from 'react';

import Gcategory from '../../components/Gcategory/Gcategory';
import Glist from '../../components/Glist/Glist';
//import { Link } from "react-router-dom";
class Gclassify extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listid:"",
			classifyNum:""
			
		};
	}   
	
	componentDidMount(){
		let res =  decodeURI(this.props.location.search); 
		let hashArr = res.slice(1).split("&");
		let objkl = {}
		hashArr.forEach(function(item,index){
			let arrKey = item.split("=");
			objkl[arrKey[0]] = arrKey[1];
		});
		this.setState({
			listid:objkl.listid
		})
	}
	
	componentWillReceiveProps() {
		setTimeout(()=>{
		let res =  decodeURI(this.props.location.search); 
		let hashArr = res.slice(1).split("&");
		let objkl = {}
		hashArr.forEach(function(item,index){
			let arrKey = item.split("=");
			objkl[arrKey[0]] = arrKey[1];
		});
		this.setState({
			listid:objkl.listid
		})
		},1)
		
	}
	
	render() {
		return(
		<div>
			<div className="app-container">
				<div className="route-container">
					<div className="home-container">
						<Gcategory classify={"fenlei"}/>
						<Glist classify={"fenlei"} listid={this.state.listid}/>
					</div>
				</div>
			</div>
			
			
		</div>
		)
	}
}
export default Gclassify;