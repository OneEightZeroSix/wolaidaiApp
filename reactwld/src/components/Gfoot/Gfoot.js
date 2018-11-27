import React, {
	Component
} from 'react';
//import './Xfoot.css'

import { Link } from "react-router-dom";
class Gfoot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			footArr:[
			{
				title:"首页",
				imgPath:"https://mf.wolaidai.com/aif-lease/file/d315c7496dbbfb878dda54aae360e2b9.png",
				path:"/credit/index"
			},
			{
				title:"我的订单",
				imgPath:"https://mf.wolaidai.com/aif-lease/file/58ae73537bfd5221bfa1da3f518b9a91.png",
				path:"/credit/classify"
			},
			{
				title:"账户",
				imgPath:"https://mf.wolaidai.com/aif-lease//file/f73487ca823a7467e4475197ae63f750.png",
				path:"/credit/users"
			},
		],
			activeNum:0
		};
	}

	footClick(index){
		this.setState({
			activeNum:index
		})
	}
		
	render() {
		return(
			<div>
				<ul className="tab-container">
				{
					(()=>{
						return this.state.footArr.map((item,index)=>{
							return (<li onClick={this.footClick.bind(this,index)} className={index===this.state.activeNum ? "active":""} key={index}><Link to={item.path} style={{width:"100%",height:"100%",position:"absolute"}}></Link>
							<img src={item.imgPath} alt="" />{item.title}
							</li>
							)
						})
					})()
				}
					
					
				</ul>
			</div>
		)
	}
}
export default Gfoot;