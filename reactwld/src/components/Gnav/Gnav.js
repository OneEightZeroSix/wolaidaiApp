import React, {
	Component
} from 'react';
//import './Xfoot.css'
import './Gnav.css'

import {connect} from 'react-redux';
//import { Link } from "react-router-dom";
class Gnav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navArr:"",
			navIndex:0
			
		};
	}
	
	firstLoad(){
		React.axios({
			method: 'get',
			url: "https://mf.wolaidai.com/lease/api/v1/goods/SELF/tags"
		}).then((response) => {
			//console.log(response.data.result);
			this.setState({
				navArr:response.data.result
			})
		}).catch((error) => {
			console.log(error)
		})
	}
	//react的生命周期
	componentDidMount() {
		this.firstLoad();
	}
	
	navClick(index,iddd){
		this.setState({
			navIndex:index
		});
		this.props.clickNav(iddd);
	}
	//点击滑动，没有做
	render() {
		return(
			<div>
			<ul className="home-tag">
				{
					(()=>{
						if(this.state.navArr.length>0){
							return this.state.navArr.map((item,index)=>{
								return (<li onClick={this.navClick.bind(this,index,item.id)} className={this.state.navIndex===index? 'home-tag-item GnavBB' : 'home-tag-item GnavSS'} key={index}>{item.tagName}</li>)
							})
						}
					})()
				}
				
				<li className="home-underline" style={{left:(`${this.state.navIndex}`)*2.5+1.25+"rem" }}></li>
				
			</ul>
			</div>
		)
	}
}
export default connect(
	(state)=>{
		return state;
	},
	(dispatch)=>{
		return {
			//对象封装事件函数，触发改变
		clickNav:(iddd)=>{
			//输出返回一个对象。包含类型。以及要修改的值
			dispatch({
				type:"mainId",
				navId:iddd
			});
		}
		
		}
	}
)(Gnav);