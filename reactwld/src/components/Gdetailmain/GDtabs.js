import React, {
	Component
} from 'react';
//import './Xfoot.css'

//import { Link } from "react-router-dom";
class GDtabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabsGood:[
				{
					title:"商品介绍",
					titleStyle:"16.1%",
					titleOption:""
				},
				{
					title:"规格参数",
					titleStyle:"48.3%",
					titleOption:""
				},
				{
					title:"服务说明",
					titleStyle:"80.5%",
					titleOption:""
				}
			],
			tabsIndex:0
		};
		
	}
	
	tabsClick(index){
		this.setState({
			tabsIndex:index
		})
	}
	
	render() {
		return(
			<div>
				<div className="good-tab">
					{
						(()=>{
							return this.state.tabsGood.map((item,index)=>{
								return (<button className={index===this.state.tabsIndex ? 'good-tab-true':'good-tab-false'} key={index} onClick={this.tabsClick.bind(this,index)}>{item.title}</button>)
							})
						})()
					}
					
					{
						(()=>{
							switch(this.state.tabsIndex)
									{
									case 0:
									  return (<div className="good-underline" style={{left: "16.1%"}}></div>)
									  break;
									case 1:
									  return (<div className="good-underline" style={{left: "48.3%"}}></div>)
									  break;
									case 2:
									  return (<div className="good-underline" style={{left: "80.5%"}}></div>)
									  break;
									default:
									 return (<div className="good-underline" style={{left: "48.3%"}}></div>)
									}
							
						})()
					}
					
				</div>
				
				<div className="good-content">
							<div style={this.state.tabsIndex===0? {display: "block"} : {display: "none"}}>
							{
								(()=>{
									let arr = this.props.tabsimg.imgjs;
									if(arr.length>0){
										return arr.map((item,index)=>{
											return (
												<img src={item.documentUrl} alt="" key={index}/>					
											)
										})
									}
								})()
							}
							
							</div>
							<div style={this.state.tabsIndex===1? {display: "block"} : {display: "none"}}>
								<img src={this.props.tabsimg.imgcs.documentUrl} alt="" />
							</div>
							<div style={this.state.tabsIndex===2? {display: "block"} : {display: "none"}}>
								<img src={this.props.tabsimg.imgfw.documentUrl} alt="" />
							</div>
						</div>
				
			</div>
		)
	}
}
export default GDtabs;