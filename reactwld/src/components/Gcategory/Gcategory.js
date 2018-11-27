import React, {
	Component
} from 'react';
//import './Xfoot.css'

import { Link } from "react-router-dom";
class Gcategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cateArr:"",
			classifyNum:""
		};
	}
	
	firstLoad(){
		React.axios({
			method: 'get',
			url: "https://mf.wolaidai.com/lease/api/v1/goods/category/list"
		}).then((response) => {
			//console.log(response.data.result);
			this.setState({
				cateArr:response.data.result,
				classifyNum:this.props.classifyNum
			})
		}).catch((error) => {
			console.log(error)
		})
	}
	//react的生命周期
	componentDidMount() {
		this.firstLoad();
	}
	//在classify路由点击高亮
	listClick(index,id){
		this.setState({
			classifyNum:index
		})	
	}
	
//	componentWillReceiveProps(){
//		setTimeout(()=>{
//			console.log(this.props.num,this.props.listid)
//		},10)
//	}
	
	//==================分割线===============================
	render() {
			return(
			<div>
				<div style={{display:(this.props.classify==="index"? "block":"none")}}>
				<ul className="home-category" >
					{
						(()=>{
							if(this.state.cateArr.length>0){
							return this.state.cateArr.map((item,index)=>{
							return (<li key={index}>
							<Link to={`/credit/classify?listid=${item.id}`} style={{width:"100%",height:"100%",position:"absolute"}}></Link>
							<img src={item.categoryIcoPath} alt="" />
							<span>{item.categoryName}</span>
							
							</li>
							)
							})
							}
							
						})()
					}
					
				</ul>
				<div className="gap-20"></div>
				</div>
				
				
				<div className="slider am-carousel category-carousel" style={{boxSizing: "border-box",display:(this.props.classify==="fenlei"? "block":"none")}}>
							<div className="slider-frame" style={{boxSizing: "border-box"}}>
								<ul className="slider-list" style={{boxSizing: "border-box"}}>
									<ul className="category-menu" style={{height: "auto"}}>	
									{
										(()=>{
											if(this.state.cateArr.length>0){
												return this.state.cateArr.map((item,index)=>{
												return (<li key={index} onClick={this.listClick.bind(this,index)}>
												<Link to={`/credit/classify?listid=${item.id}`}>
												<img src={item.categoryIcoPath} alt="" className="category-icon"/>
												<span className={this.state.classifyNum===index? 'category-name HGYclass':'category-name'}>{item.categoryName}</span>
												</Link>
												</li>)
												})
											};

										})()
									}
									
									</ul>
								</ul>
							</div>
							<div className="slider-decorator-0" style={{position: "absolute",bottom: "0px",width: "100%", textAlign: "center"}}>
								<div className="am-carousel-wrap">
									<div className="am-carousel-wrap-dot am-carousel-wrap-dot-active"><span></span></div>
								</div>
							</div>
							
						</div>
						<div className="category-fix" style={{display:(this.props.classify==="fenlei"? "block":"none")}}></div>
						
				
			</div>
		)
	}
}
export default Gcategory;