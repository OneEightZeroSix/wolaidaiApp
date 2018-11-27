import React, {
	Component
} from 'react';
//import './Xfoot.css'

import {connect} from 'react-redux';
import { Link } from "react-router-dom";
class Glist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			goodslist:"",
			classifyList:""
		};
	}

	listFirstLoad(){
		React.axios({
			method: 'get',
			url: "https://mf.wolaidai.com/lease/api/v1/goods/19/spus"
		}).then((response) => {
			//console.log(response.data.result);
			
			this.setState({
				goodslist:response.data.result
			})

		}).catch((error) => {
			console.log(error)
		})
	}
	
	ClassifyLoad(){
	if(this.props.listid!==undefined){
	React.axios({
		method: 'get',
		url: "https://mf.wolaidai.com/lease/api/v1/goods/list/"+this.props.listid+"?page=1&pageSize=10"
	}).then((response) => {
		//console.log(response.data.result);
		
		this.setState({
			classifyList:response.data.result.list
		})

	}).catch((error) => {
		console.log(error)
	})
	}
	}
		
	componentDidMount() {
		this.listFirstLoad();
	}
	//生命周期
	componentWillReceiveProps(){
		//使用定时器可以。强制实时更新,点击相应的选项。加载对应的数据渲染
		setTimeout(()=>{
		//console.log(this.props.navId)
		let aaa= "https://mf.wolaidai.com/lease/api/v1/goods/"+this.props.navId+"/spus"
		React.axios({
		method: 'get',
		url: aaa
		}).then((response) => {
			//console.log(response.data.result);
			
			this.setState({
				goodslist:response.data.result
			})

		}).catch((error) => {
			console.log(error)
		})
		this.ClassifyLoad();
		},10)

	}
	
	
	//==================分割线===============================
	render() {
		return(
			<div>
			<div className="home-list" id={`pathId${this.props.navId}`} style={{display:this.props.Status==="index"? "block":"none"}}>
				{
					(()=>{
						if(this.state.goodslist.length>0){
							return this.state.goodslist.map((item,index)=>{
								return (
								<Link to={`/Gdetail/?gdid=${item.id}`} className="home-item" key={item.id}>
									<img src={item.primaryImagePath} alt="" />
									<div className="home-info">
									<span className="cut-price-container">
									<span className="home-name cut-price">{item.spuName}</span>
									<span className="cut" style={{fontSize:"30%"}}>砍</span>
									</span>
									<span className="home-month">月供最低约<span className="home-currency">￥</span>
									<span className="home-price">{`${item.rent}.00`}</span>
									</span>
									</div>
								</Link>
								)
							})
						}
					})()
				}
		
			</div>
			
			<div className="category-type" style={{display:(this.props.classify==="fenlei"? "block":"none")}}>
							<ul className="category-list">
							
							{
								(()=>{
									if(this.state.classifyList.length>0){
										return this.state.classifyList.map((item,index)=>{
											return (<Link to={`/Gdetail/?gdid=${item.id}`} className="category-item" key={index}>
													<div className="category-preview"><img src={item.primaryImagePath} alt="商品主图" /></div>
													<div className="category-description">
														<div className="category-spuname">{item.spuName}</div>
														<div className="category-money">¥{item.rent}/月起</div>
													</div>
													</Link>)
										})
									}
								})()
							}
								
								
							</ul>
							<div className="category-no-more">——<span>我是一个有底线的人</span>——</div>
						</div>
			
			</div>
		)
	}
}
export default connect(
	(state)=>{
		return state;
	},
	(dispatch)=>{
		return {}
})(Glist);