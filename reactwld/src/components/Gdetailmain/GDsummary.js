import React, {
	Component
} from 'react';
//import './GDmain.css'

import {connect} from 'react-redux';
import { Link } from "react-router-dom";
class GDsummary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			SelectedBox:false,
			boxindex:"",
			checkBox:{
				rentTerm: "",
				内存: "",
				租赁形式: "租完即送",
				颜色: ""
			},
			changeRent:"",
			showSummary:false
		};
	}
	//自定义单选框，通过操作数组获得==========================
	clickwww(ii,num){

		if(this.props.summaryObj!==undefined){
			this.props.summaryObj[num].attributeOptionsList.map((item,index)=>{
				if(index===ii){
					this.props.summaryObj[num].attributeOptionsList[ii].showww = !this.props.summaryObj[num].attributeOptionsList[ii].showww;
					//单选，点击添加数组。绑定显示
					//点击颜色选项时，改变对象
					if(num===0 && this.props.summaryObj[0].attributeOptionsList[ii].showww){
						this.setState({
							checkBox:{
								rentTerm:this.state.checkBox.rentTerm,
								内存: this.state.checkBox["内存"],
								租赁形式: this.state.checkBox["租赁形式"],
								颜色:this.props.summaryObj[0].attributeOptionsList[ii].attributeValDesc
							}
						});
						
						//console.log(this.props.summaryObj[0].attributeOptionsList[ii].attributeValDesc)
					}else if(num===0 && !this.props.summaryObj[0].attributeOptionsList[ii].showww){
						this.setState({
							checkBox:{
								rentTerm:this.state.checkBox.rentTerm,
								内存: this.state.checkBox["内存"],
								租赁形式: this.state.checkBox["租赁形式"],
								颜色:""
							}
						})
					}
					//点击内存选项时，改变对象
					if(num===1 && this.props.summaryObj[1].attributeOptionsList[ii].showww){
						this.setState({
							checkBox:{
								rentTerm:this.state.checkBox.rentTerm,
								内存:this.props.summaryObj[1].attributeOptionsList[ii].attributeValDesc,
								租赁形式: this.state.checkBox["租赁形式"],
								颜色:this.state.checkBox["颜色"]
							}
						})
						//console.log(this.props.summaryObj[1].attributeOptionsList[ii].attributeValDesc)
					}else if(num===1 && !this.props.summaryObj[1].attributeOptionsList[ii].showww){
						this.setState({
							checkBox:{
								内存:""
							}
						})
					}
					//点击租期选项时，改变对象
					if(num===2 && this.props.summaryObj[2].attributeOptionsList[ii].showww){
						this.setState({
							checkBox:{
								rentTerm:this.props.summaryObj[2].attributeOptionsList[ii].attributeVal,
								内存: this.state.checkBox["内存"],
								租赁形式: this.state.checkBox["租赁形式"],
								颜色:this.state.checkBox["颜色"]
							}
						})
						//console.log(this.props.summaryObj[2].attributeOptionsList[ii].attributeValDesc)
					}else if(num===2 && !this.props.summaryObj[2].attributeOptionsList[ii].showww){
						this.setState({
							checkBox:{
								rentTerm:"",
								内存: this.state.checkBox["内存"],
								租赁形式: this.state.checkBox["租赁形式"],
								颜色:this.state.checkBox["颜色"]
							}
						})
					}
					
	
				}
				else{//点击单选的效果。操作数组为先
					this.props.summaryObj[num].attributeOptionsList[index].showww = false;	
				}
			})
			//强制刷新操作
			this.setState({
				SelectedBox:!this.state.SelectedBox,
				boxindex:ii
			})
		}
		
		
	}
	
	//封装一个函数。用来比较两个对象是否 相等================
	EqualObj(){
		let b = this.props.skus;
		b.forEach((item,index)=>{
			if(item.attributeOptions["颜色"]===this.state.checkBox["颜色"] && item.attributeOptions["内存"]===this.state.checkBox["内存"] && item.attributeOptions.rentTerm===this.state.checkBox.rentTerm){
				this.setState({
					changeRent:item
				});
			}
			
		})
	}
	
	confirmClick(arr){
		this.props.confirmFn(arr);
	}
	
	//显示，隐藏条件选择框=============================
	hiddenCar(){
		this.setState({
			showSummary:!this.state.showSummary
		})
	}
	
	//==============================================JSX分隔线=============================
	render() {
		return(
			<div>
				<div className="good-summary">
					<Link to="/credit/" className="good-shop">
						<img src="https://mf.wolaidai.com/aif-lease//file/c942fe37ec1da9e4fa18d0e64e84fde9.png" alt="" />
						首页
					</Link >
					<button className="good-bargain">找人帮砍-￥200</button>
					<button className="good-check double_11" onClick={this.hiddenCar.bind(this)}>立即拥有</button>
				</div>
				
				<div className={this.state.showSummary? 'modal-container' : 'modal-container hidden'} >
						<div className="modal-content checklist-container"><button className="checklist-close" onClick={this.hiddenCar.bind(this)}>✕</button>
							<div className="checklist-overview">
							<img className="checklist-thumbnail" src={this.props.showImg} alt="" />
								<div className="checklist-numbers">
								<span>￥{
									(()=>{
										if(this.state.changeRent===""){
										return ("269.00")
									}else{
										return this.state.changeRent.rent
									}
									})()
									
								}</span>
								<span>库存{
									(()=>{
										if(this.state.changeRent===""){
										return ("98")
									}else{
										return this.state.changeRent.stockNum
									}
									})()
									
								}件</span>
								</div>
						</div>
							<ul className="checklist-plist" style={{maxHeight: "617px"}}>
								<li className="checklist-pitem">颜色
									<div>
									{
										(()=>{
											if(this.props.summaryObj!==undefined){
												return this.props.summaryObj[0].attributeOptionsList.map((item,index)=>{
													return (
														<button key={index} onClick={this.clickwww.bind(this,index,0)} className={item.showww? 'checklist-option-true' : 'checklist-option-false'}>{item.attributeVal}</button>
													)
												})
											}
											
										})()
									}
									</div>
								</li>
								<li className="checklist-pitem">内存
									<div>
									{
										(()=>{
											if(this.props.summaryObj!==undefined){
												return this.props.summaryObj[1].attributeOptionsList.map((item,index)=>{
													return (
														<button className={item.showww? 'checklist-option-true' : 'checklist-option-false'} key={index} onClick={this.clickwww.bind(this,index,1)}>{item.attributeVal}</button>
													)
												})
											}
											
										})()
									}
									</div>
								</li>
								<li className="checklist-pitem">租期
									<div>
										{
										(()=>{
											if(this.props.summaryObj!==undefined){
												return this.props.summaryObj[2].attributeOptionsList.map((item,index)=>{
													return (
														<button className={item.showww? 'checklist-option-true' : 'checklist-option-false'} key={index} onClick={this.clickwww.bind(this,index,2)}>{item.attributeValDesc}</button>
													)
												})
											}
											
										})()
									}
									</div>
								</li>
								<li className="checklist-pitem">租赁形式
									<div><button className="checklist-option-true" onClick={this.EqualObj.bind(this)}>租完即送</button></div>
								</li>
								<li className="checklist-pitem">增值服务
									<div className="checklist-safe">
									<img src="https://mf.wolaidai.com/aif-lease//file/e294924c007a325875ef143e64f21733.png" className="checklist-checked" alt="" />
									<span>意外保障（必选）</span>
									<span>￥299.00</span></div>
									<div className="checklist-note">因意外产生的碎屏等问题，可享受免费保修一次</div>
								</li>
							</ul>
							<div className="checklist-submit" onClick={this.confirmClick.bind(this,this.state.changeRent)}><button><Link to={`/Gconfirm/?${this.props.showImg}`}>确定</Link></button></div>
						</div>
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
		return {
			//对象封装事件函数，触发改变
		confirmFn:(arr)=>{
			//输出返回一个对象。包含类型。以及要修改的值
			dispatch({
				type:"confirm",	
				confirmArr:arr
			});
		}
		
		}
	}
)(GDsummary);