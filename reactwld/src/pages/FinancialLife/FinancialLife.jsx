import React, { Component } from 'react';
import {Link } from "react-router-dom";
//引入样式
import '../../assert/css/home.css';
import '../../assert/css/common.css';
import '../../assert/css/swiper.css'
//引入轮播图组件
import { Carousel } from 'antd';
//引入轮播图本地图片
	import imgRun1 from '../../assert/img/banner-credit-card.png';
	import imgRun2 from '../../assert/img/banner1.png';
	import imgRun3 from '../../assert/img/banner2.png';
	import imgRun4 from '../../assert/img/banner-aif-dsd.png';
//const imgsArr = [imgRun1,imgRun2,imgRun3,imgRun4];//import 必须在其它所有业务代码前面，检查“ ./src/form/form.js ”是否是const语句在import语句前。。此时const语句在import语句前报错Import in body of module; reorder to top  import/first
//引入轮播图上的小图片
	import Picture1 from '../../assert/img/ku2x.png';
	import Picture2 from '../../assert/img/w112x.png';
	import Picture3 from '../../assert/img/hu2x.png';

import banner from '../../assert/img/djd_banner.png';
import group from '../../assert/img/group-icon.png';
import operation from '../../assert/img/operation-bit-banner.png';
import icon11 from '../../assert/img/icon-11.png';
//引入手机图片
	import hw_mate20_pro from '../../assert/img/hw_mate20_pro.png';
	import hw_mate20 from '../../assert/img/hw_mate20.png';
	import iphonexs_max2 from '../../assert/img/iphonexs_max2.png';
	import iphonexs1 from '../../assert/img/iphonexs1.png';
	import iphonexr2 from '../../assert/img/iphonexr2.png';
	import path from '../../assert/img/path.png';

//引入商品图片
	import p1 from '../../assert/img/p1.jpeg';
	import p2 from '../../assert/img/p2.jpeg';
	import p3 from '../../assert/img/p3.png';
	import p4 from '../../assert/img/p4.png';
	import p5 from '../../assert/img/p5.png';
	import p6 from '../../assert/img/p6.jpeg';

const goodsList =[p1,p2,p3,p4,p5,p6];	
const phoneArr = [hw_mate20_pro,hw_mate20,iphonexs_max2,iphonexs1,iphonexr2];
const PictureArr = [Picture1,Picture2,Picture3];
const imgsArr = [imgRun1,imgRun2,imgRun3,imgRun4];//解决图片路径的问题
class FinancialLife extends Component {
 constructor(props) { 
        super(props);
        this.state = {
          			runPhoto:[
						{
							id:"credit-card",
							href:"https://mf.wolaidai.com/financial-life/credit-card/index.html?channel=wj_prm_lmg_00030001",
						},
						{
							id:"xsell",
							href:"Xsell",
						},
						{
							id:"aif-lease",
							href:"https://mf.wolaidai.com/aif-lease/index.html?channel=wj_prm_zys_00010000",
						},
						{
							id:"dsd",
							href:"https://mf.wolaidai.com/dsd/login",
						},
					],
					pictureS:[
						{
							id:"ku",
							href:"https://m.wolaidai.com/web-static/xsell/family/quota.html?channel=wj_prm_jrc_00000001",
							title:"借5万现金"
						},
						{
							id:"11",
							href:"https://m.wolaidai.com/web-static/xsell/family/quota.html?channel=wj_prm_jrc_00000001",
							title:"手机商城"
						},
						{
							id:"myOrder",
							href:"my_order_clk",
							title:"手机订单"
						},
					],
					phonePhoto:[
						{
							id:"104",
							href:"https://mf.wolaidai.com/aif-lease/good/104?channel=wj_prm_zys_00010000",
							name:"HUAWEI Mate 20 Pro",
							oldPrice:"￥15/天",
							price:"¥12.9/天"
						},
						{
							id:"103",
							href:"https://mf.wolaidai.com/aif-lease/good/103?channel=wj_prm_zys_00010000",
							name:"HUAWEI Mate 20",
							oldPrice:"￥12/天",
							price:"¥7.9/天"
						},
						{
							id:"96",
							href:"https://mf.wolaidai.com/aif-lease/good/96?channel=wj_prm_zys_00010000",
							name:"全新iPhone XS MAX",
							oldPrice:"￥25/天",
							price:"¥18/天"
						},
						{
							id:"99",
							href:"https://mf.wolaidai.com/aif-lease/good/99?channel=wj_prm_zys_00010000",
							name:"全新iPhone XS",
							oldPrice:"21/天",
							price:"¥16/天"
						},
						{
							id:"97",
							href:"https://mf.wolaidai.com/aif-lease/good/97?channel=wj_prm_zys_00010000",
							name:"全新iPhone XR",
							oldPrice:"￥18/天",
							price:"¥12.9/天"
						},
					],
					goodsArr:[
						{
							id:'108',
							href:'https://mf.wolaidai.com/aif-lease/good/108?channel=wj_prm_zys_00010000',
							name:'HUAWEI Mate 20X',
							price:'¥9.9/天',
							lease:'¥298×24期'
						},
						{
							id:'107',
							href:'https://mf.wolaidai.com/aif-lease/good/107?channel=wj_prm_zys_00010000',
							name:'vivo X23',
							price:'¥6.2/天',
							lease:'¥186×24期'
						},
						{
							id:'90',
							href:'https://mf.wolaidai.com/aif-lease/good/90?channel=wj_prm_zys_00010000',
							name:'iPhone X',
							price:'¥13.9/天',
							lease:'¥419×24期'
						},
						{
							id:'105',
							href:'https://mf.wolaidai.com/aif-lease/good/105?channel=wj_prm_zys_00010000',
							name:'OPPO R17 Pro',
							price:'7.2/天',
							lease:'¥216×24期'
						},
						{
							id:'116',
							href:'https://mf.wolaidai.com/aif-lease/good/116?channel=wj_prm_zys_00010000',
							name:'Apple ipad 2018',
							price:'¥5.9/天',
							lease:'¥178×24期'
						},
						{
							id:'86',
							href:'https://mf.wolaidai.com/aif-lease/good/86?channel=wj_prm_zys_00010000',
							name:'MacBook Pro',
							price:'¥18.3/天',
							lease:'¥549×24期'
						},
					],
					// hour:'',
					// minute:'',
					// second:'',
					needX:0//定义needX值用来存放当前元素的left和top值
					
        }
        			this.disX = 0//定义用来存放鼠标按下的地方距离元素上侧和左侧边界的值
    }

ShowTime(){
				
				let nowT = new Date();
				let endTime = nowT.getDate()+1;
				let endMonth = nowT.getMonth()+1;//获取月份是从0开始的,0~11
				if(nowT.getDate()>=31){
					endTime=1;
					endMonth+=1;
				}
				
				//console.log(endTime);
				//console.log(endMonth);
				let isTimeString = "2018/"+endMonth+"/"+endTime+" 00:00";//使倒计时时间永远为当前时间距离第二天零点的时间
				let d2 = new Date(isTimeString);
				this.makeTime = setInterval(()=>{
					let now = new Date();{/*得到电脑当前时间*/}
					let offset = Math.floor((d2.getTime() - now.getTime())/1000);{/*获取毫秒计数时必须除毫秒1000；拿到距离秒杀时间还剩 多少秒*/}
					let sec = offset%60;
					let minutes = Math.floor(offset/60)%60;
					let hours = Math.floor(offset/60/60)%24;
				if(offset <= 0){
						clearInterval(this.makeTime);
						sec = '';
						minutes = '';
						hours = '';
					}
				{/*拿到距秒杀时间的 秒、分、时*/}
					
						//console.log(sec,minutes,hours);	
				{/*将还剩多少秒变成几天几时几分几秒（补0操作）*/}	 
						sec =  sec<10? "0"+sec :sec;
						minutes =  minutes<10? "0"+minutes :minutes; 
						hours =  hours<10? "0"+hours :hours;
						//this.toggleTime(sec,minutes,hours);
						this.refs.hour1.innerHTML = hours;
						this.refs.minute1.innerHTML = minutes;
						this.refs.second1.innerHTML = sec;
					
			},1000);
		}
// toggleTime(sec,minutes,hours){
// 				this.setState({
// 						hour:hours,
// 						minute:minutes,
// 						second:sec
// 				})
//   	}


//商品框移动
Xmove(e) {

		/*事件兼容*/
		let event = e || window.event;
		/*事件源对象兼容*/
		let target = event.target || event.srcElement;
		let save = this.state.needX;//解决第二次点击时需要加上上一次移动的距离
		console.log(this.state.needX);
		/*获取鼠标按下的地方距离元素左侧*/
		this.disX = event.changedTouches[0].clientX - target.offsetLeft-save ;
	
		/*定义鼠标移动事件*/
		//document.onTouchMove = this.fnMove.bind(this);
		/*定义鼠标抬起事件*/
		//document.onTouchend = this.fnUp.bind(this);
		console.log(this.state.needX);
	}
	/*定义鼠标移动事件*/
	fnMove(e){
		/*事件兼容*/
		
		let event = e|| window.event ;
		/*事件源对象兼容*/
		let target = event.target || event.srcElement;
		//console.log(event.changedTouches[0].clientX);
		this.setState({
			needX:event.changedTouches[0].clientX - this.disX ,
			
		});
	}
	fnUp(){

		//document.onTouchMove = null;
		//document.onTouchend = null;
		if(this.state.needX>0){
			this.setState({
			needX:0
			
		});
		}
		if(this.state.needX<-410){
			this.setState({
			needX:-450
			
		});
		}
		this.onTouchMove = null;
		this.onTouchEnd = null;
	}

  render() {
    return (
			<div className="home-wrap content-inner">

				{/*轮播图*/}
				<div style={{position:"relative"}}>

			{/*轮播图*/}

				<div className="banner-wrap">
					
						<div >
						 <Carousel autoplay dots='false'>
							{(()=>{
								return this.state.runPhoto.map((item,index)=>{
									return(
									<Link to={item.href} data-event="Credit_card_banner" key={index}  data-swiper-slide-index="3" style={{width:"320px"}}>
										<img src={imgsArr[index]}/>
									</Link>
									)
								})
							})()}
							</Carousel>
						</div>
					
				</div>
			{/*轮播图上的小图标*/}
				<div className="hot-rent-box">
						<div className="hot-rent-cont">
							{(()=>{
								return this.state.pictureS.map((item,index)=>{
									return(
									<Link to="/credit/index" className="item" key={index} href={item.href} data-event="simple_enter_clk">
											<img src={PictureArr[index]} alt=""/>
											<h3>{item.title}</h3>
									</Link>
									)
								})
							})()}
						</div>
				</div>

				</div>
				{/*大额简单贷*/}

			{/*大额简单贷*/}

				<div className="dejdd-wrap">   
						<div className="rent-title">
								<h2>大额简单贷</h2>
						</div>
						<Link to={ this.state.runPhoto[1].href} className="dejdd-wrap-banner"  data-event="simple_clk_uv">
								<img src={banner} alt=""/>
						</Link>
						<ul className="group-list">
								<li className="group-item"><img src={group} alt="" className="group-icon"/> 5万额度</li>
								<li className="group-item"><img src={group} alt="" className="group-icon"/> 10分钟机审</li>
								<li className="group-item"><img src={group} alt="" className="group-icon"/> 24小时下款</li>
						</ul>
						<Link to={ this.state.runPhoto[1].href} data-event="simple_clk_uv" className="btn">立即申请</Link>
				</div>
			{/*手机分期*/}
				<div className="operation-bit">
						<h2>
								手机分期
						</h2>
						<Link to="/credit/index" className="operation-bit-banner" data-event="enter_home" >
								<img src={operation} alt=""/>
						</Link>
				</div>
			{/*手机秒杀*/}
				<div className="hot-mobile" >
					<div className="hot-title">
							<h2>手机秒杀</h2> 
							<div className="count-time">
					
									<span style={{fontWeight: "900"}}>限时</span>  <span className="item" ref="hour1" id="hour1" >{/*{this.state.hour}*/}</span>:<span className="item" ref="minute1" id="minute1" >{/*{this.state.minute}*/}</span>:<span className="item" ref="second1" id="second1" >{/*{this.state.second}*/}</span>
							</div>
					</div>
			{/*热门机型*/}	
					<div className="swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-ios " id="hotMobile">
			            <div className="swiper-wrapper"  style={{left:this.state.needX,}} onTouchStart={this.Xmove.bind(this)}  onTouchMove = {this.fnMove.bind(this)} onTouchEnd ={ this.fnUp.bind(this)}>
											{(()=>{
												
												return this.state.phonePhoto.map((item,index)=>{
														return(
															<Link to={`/Gdetail/?gdid=${item.id}`} className="swiper-slide swiper-slide-active"  key={index} data-event="hd_hw_mate20_pro_clk">
																	<div className="top-part">
																			<div className="top-tips">
																					<img src={icon11} alt=""/>
																			</div>
																		
																			<div className="img">
																					<img src={phoneArr[index]} alt=""/>
																			</div>
																			<div className="limit-time">
																					<p>砍</p>
																			</div>
																	</div>
																	<div className="hot-mobile-info">
																			<div className="name">
																					<span>{item.name}</span>
																			</div>
																			<div className="price"> <span className="lineation">{item.oldPrice}</span>{item.price}</div>
																	</div>
															</Link>
														)
													})
											})()}
			                <Link to="/credit/index" className="swiper-slide check-more" data-event="enter_home">
			                    <p>查看</p>
			                    <p>更多</p>
			                    <div className="bracket-write">
			                        <img src={path} alt=""/>
			                    </div>
			                </Link>
			            </div>
					</div>
				</div>
				
				{/*为您推荐*/}
				<div className="recommend-wrap">
					<div className="rent-title">
								<h2>为您推荐</h2>
						</div>
						<div className="recommend-cont clear">
							{(()=>{
								return this.state.goodsArr.map((item,index)=>{
									return (
											<Link to={`/Gdetail/?gdid=${item.id}`} className="item" key={index} data-event="recommend_good1_clk">
												<img src={goodsList[index]} alt="" className="hw-img"/>
												<div className="good-name">{item.name}</div>
												<div className="good-price">{item.price}</div>
												<div className="good-lease">{item.lease}</div>
											</Link>
										)
								})
							})()}
								
						</div>
						<Link to="/credit/index" className="recommend-footer" data-event="recommend_entrance_clk">
								进入商城 <img src="home/img/11/path@2x.png" alt=""/>
						</Link>
				</div>
			</div>
    );
  }
	componentDidMount() {
        this.ShowTime();
    }
    componentWillUnmount(){//跳转到其他页面仍然存在定时器的问题
    	clearInterval(this.makeTime);
    	}
}



export default FinancialLife;