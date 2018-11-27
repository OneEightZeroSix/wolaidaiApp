import React, {
	Component
} from 'react';
import './GDmain.css'

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
//import { Link } from "react-router-dom";
class GDimgtop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pickTab:["1","2","3","4"],
			ImgArr: ""    //props里面的topimgArr就是我想要的图片Arr函数
		};
	}

componentWillReceiveProps(){
		setTimeout(()=>{
        new Swiper('.swiper-container', {
            loop: false,     //循环
            autoplay:{      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
                delay: 1500,
                disableOnInteraction: false,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,    // 允许点击跳转
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
	},10)
    }

	render() {
		return(
			<div>
				<div className="swiper-container swiper-container-horizontal swiper-container-ios">
							<div className="swiper-wrapper">
								{
									(()=>{
										if(this.props.topimg.topimgUrl.length>0){
											return this.props.topimg.topimgUrl.map((item,index)=>{
												return (<div className="swiper-slide" key={index} >
														<img src={item.documentUrl} alt="" style={{width:"100%"}}/>
													</div>)
											})
										}
									})()
								}

							</div>
							
							 <div className="swiper-pagination"></div>
							<span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
							
						</div>			
						
						
						
						
						<div className="gap-20"></div>
						<span className="good-title">{this.props.topimg.topimgName.spuName}</span>
						<div className="good-rent">
							<div className="good-rent-price"><span className="good-currency">￥</span>
									<span className="good-amount">{
										(()=>{
											//取一位小数，不四舍五入
											return (Math.floor((this.props.topimg.topimgName.rent/30)*10)/10)
										})()
									}/日</span>
									<span>
							<span className="good-month line-through">月供￥{this.props.topimg.topimgName.rent+100}</span>
							<span className="good-month red">月供￥{
									(()=>{
										return (`${this.props.topimg.topimgName.rent}.00`)
									})()
								}</span></span>
							</div>
						</div>
						<div className="good-price"><span className="good-offical">官网售价</span>
							<span className="good-currency">￥</span>
							<span className="good-amount">{
								(()=>{
									return (`${this.props.topimg.topPrice}.00`)
								})()
							}</span></div>
						<div className="line"></div>
			</div>
		)
	}
}
export default GDimgtop;