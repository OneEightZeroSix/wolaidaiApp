import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import './common.css';
import { Carousel } from 'antd';
import { Link } from "react-router-dom";
import CountUp from 'react-countup';



class Msite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowNav: false,
            isMore:false,
            peopleNumber:0,
            peopleNumber1:0,

            scrolltop:'',
            getting:true,
            hahaha:123456666,
            itemArr: [{
                src: 'https://m.wolaidai.com/msite/assets/img/sec_03_item_01.png',
                item_tit: '大数据',
                item_text: '数千个信息维度'
            }, {
                src: 'https://m.wolaidai.com/msite/assets/img/sec_03_item_02.png',
                item_tit: '人工智能',
                item_text: '解放人力提高效率'
            }, {
                src: 'https://m.wolaidai.com/msite/assets/img/sec_03_item_03.png',
                item_tit: '数据分析',
                item_text: '3秒输出信贷决策'
            }, {
                src: 'https://m.wolaidai.com/msite/assets/img/sec_03_item_04.png',
                item_tit: '机器学习',
                item_text: '深度学习快速迭代'
            }],
            wodeTop:123
        }
    }

    //函数
    showNav() {
        this.setState({
            isShowNav: !this.state.isShowNav
        })
    }
    showMore(){
        this.setState({
            isMore:!this.state.isMore
        })
    }
    //人数逐渐增长动画事件
   milion(value){
        let show='';
        var number=[];
        number=value.toString().split('');
     
        let len = number.length;
        number.forEach((item,index)=>{
            if (item.match('^[0-9]*$')){
                if(len - 3 === index){
                    show +='<span >' + ',' + '</span>'+ '<span className="first">' + item + '</span>';
                }
                else if (len - 6 === index){
                    show +='<span >' + ',' + '</span>'+  '<span className="second">' + item + '</span>';
                }else if (len - 9 === index){
                    show +='<span >' + ',' + '</span>'+  '<span className="third" >' + item + '</span>';
                }
                else{
                    show += '<span >' + item + '</span>';
                }
            }

        })
         return show;   
   
   }

   scrolltop(){

     if(document.documentElement.scrollTop>this.refs.peo.offsetTop+this.refs.peo1.offsetTop-document.documentElement.clientHeight){
        const self=this;
        if(this.state.getting){
            axios.get('https://marketing.wolaidai.com/marketing/statistics/summary')
          .then(function (response) {
            console.log(response);
            let num1 = parseInt(response.data.data.countAmount);
            let num2 = parseInt(response.data.data.countPeople);
            self.setState({
                peopleNumber:num1,
                peopleNumber1:num2,

              });
            console.log(typeof(self.state.peopleNumber),document.documentElement.clientHeight);
          })
          .catch(function (error) {
            console.log(error);
          });   
        }
        if(self.state.peopleNumber){
            this.setState({
            getting:false,
            })
        }
          
     }
   }
 
//生命周期
   
   componentDidMount (){
  		window.addEventListener('scroll', this.scrolltop.bind(this))
    }

    componentWillUnmoun() {
     window.removeEventListener('scroll', this.scrolltop.bind(this))
    }
    render() {
    	
        return (
            <div id="app" style={{position:'relative'}}>
            <div style={{position:'relative'}} id="uuuu">
            
        <div className="header">
            <div className="logo">
                <a href="index.html"><img src="../../assets/logo1.png" alt=""/></a>
            </div>
            <div className="nav-box">
                <div className={this.state.isShowNav?'nav-btn toggle-animate':'nav-btn'}  onClick={this.showNav.bind(this)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={this.state.isShowNav?'nav':'nav hide'} >
                    <div className="nav-item">
                        <a href="./" className="fadeInRight1 transform1" ><div className="nav-item-1 active" id="index">首页</div></a>
                    </div>
                    <div className="nav-item">
                        <div className="nav-item-1 noactive fadeInRight1 transform2" >信贷产品 <span></span></div>
                        <Link to="/jddv3/apply" className="nav-item-2 fadeInRight1 transform3"  id="loan" >消费信贷</Link>
                        

                        <Link to="/financialLife" className="nav-item-2 fadeInRight1 transform4"  >消费分期</Link>
                        <Link to="/credit/index" className="nav-item-2 fadeInRight1 transform5"  >信用租赁</Link>
                    </div>
                    <div className="nav-item">
                        <a className="nav-item-1 fadeInRight1 transform6"  >热门推荐</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-item-1 fadeInRight1 transform7"  id="about" >关于我们</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-item-1 fadeInRight1 transform8"  >加入我们</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-item-1 app_download fadeInRight1 transform9"  >APP下载</a>
                    </div>
               </div>
            </div>
        </div>
        
        
        <div className="banner">
            <h2 className="tit">成为全球金融科技领导者</h2>
            <p className="text">借钱花钱 用我来贷分期更精明</p>
            <div className="btn show-popup"></div>

            <div className="bottom">
                <div className="item1 item"></div>
                <div className="item2 item"></div>
                <div className="item3 item"></div>
                <div className="item4"></div>
            </div>

            </div>

            <div className="section section_phjr">
            <h2 className="sec_tit">普惠金融</h2>
            <div className="sec_text">通过自主研发的科技提升金融服务以改善人民的生活</div>
            <div className="main-box">
                <Link to="/jddv3/apply">
                    <div className="item item1">
                        <h3 className="item_tit">消费信贷</h3>
                    </div>
                </Link>
                <Link to="/credit/index">
                    <div className="item item2">
                        <h3 className="item_tit">信用租赁</h3>
                    </div>
                </Link>
                <Link to="/financialLife">
                    <div className="item item3">
                        <h3 className="item_tit">热门推荐</h3>
                    </div>
                </Link>
                <a >
                    <div className="item item4">
                        <h3 className="item_tit">消费分期</h3>
                    </div>
                </a>

                
            </div>
        </div>

        <div className="section counts-section" id="lll" ref="peo1">
            <h1 className="rotate-lines pos-rel">千亿级别金融平台</h1>
            <p>为超过3000万用户提供金融服务</p>

            <div className="counts" >
                <div className="item">
                    <div className="count-number">
                        <img src="https://m.wolaidai.com/msite/assets/img/section-04-icon-01.svg"  />
                        <strong className="applied"  ref='peo'>

                        <CountUp start={0} end={this.state.peopleNumber} duration={3} formattingFn={this.milion } /></strong>

                    </div>
                    <span className="remark">在线申请金额(元)</span>
                </div>
                <div className="item"> 
                    <div className="count-number">
                        <img src="https://m.wolaidai.com/msite/assets/img/section-04-icon-02.svg" />
                        <strong className="register" id="register" >
                        <CountUp start={0} end={this.state.peopleNumber1} duration={3} formattingFn={this.milion } />
                        </strong>
                    </div>
                    <span className="remark">注册用户数(人)</span>
                </div>
            </div>
        </div>

        <div className="section section_jrkj">
            <h2 className="sec_tit">金融科技</h2>
            <div className="sec_text">最快 <span >3秒</span>输出信贷决策</div>
            <div className="main-box">
            {(()=>{
                        return this.state.itemArr.map((item1,index)=>{
                            return (
                               <div className="item" key={index}>
                                <div className="item_bg"></div>
                                <img src={item1.src} alt=""  />
                                <div className={item1.item_tit}>大数据</div>
                                <div className={item1.item_text}>数千个信息维度</div>
                            </div>
                            )
                        })
                    })()}       
            </div>
        </div>

        <div className="section section_news">
                <h2 className="sec_tit">新闻资讯</h2>
                <div className="sec_text" >海内外媒体广泛关注  上百家媒体采访报道</div>
                <div className="team-body">
                    <div className="swiper-container swiper-container-horizontal swiper-container-android">
                        <div className="news-itembox swiper-wrapper" >
                            <a className="news-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" href="http://news.163.com/18/0810/15/DORVGMJ5000189DG.html" target="_blank" data-swiper-slide-index="0" >
                                <div className="news-item-tit">香港特区政府财政司司长陈茂波莅临WeLab</div>
                                <div className="news-item-text">WeLab（我来贷）非常荣幸向司长介绍了公司的成长经历及金融科技应用情况，并分享其对虚拟银行及大湾区未来发展的期望。</div>
                                <img className="news-item-logo" src="https://m.wolaidai.com/msite/assets/img/news_06.jpg"/>
                            </a>
                          
                        </div>
                    </div>
               </div> 

                
        </div>

        <div className="section section5">
            <h2 className="sec_tit">合作伙伴</h2>
            <div className="sec_text">携手共创&nbsp;&nbsp;&nbsp;&nbsp;普惠金融</div>
            <div className={this.state.isMore?"img active":"img "}     >

            </div>
            <br/>
            <div className={this.state.isMore?"more_btn active":"more_btn"}><span className="text" onClick={this.showMore.bind(this)}>{this.state.isMore?'收起更多':'查看更多'}</span><span className="more_btn_icon"></span></div>
        </div>

        <div className="footer">
    <div className="top-box">
        <div className="left">
            <div className="h">客服热线：<a href="tel://10100518" className="tel">10100518</a></div>
            <div className="p">（工作日 9:00 - 20:30 在线，周末法定节假日值班时间请参考语音提示)</div>

            <div className="h">微信客服：关注微信后点击“在线客服”</div>
            <div className="p">（工作日 9:00 - 20:30 在线)</div>

            <div className="h">邮箱：10100518@wolaidai.com</div>

        </div>
        <div className="right">
                    <img src="../../assets/code1.jpg" alt="" className="ewm" />
                    <div className="ewm_tit">关注微信可直接申请</div>
                </div>
            </div>
            <div className="btn" >我来贷APP下载</div>
            <div className="icp">深圳卫盈智信科技有限公司<br/>
                © 2018我来贷 www.wolaidai.com All rights reserved. <br/>
                <a href="http://www.miitbeian.gov.cn">ICP备案: 粤ICP备14052414号 ICP证 粤B2-20140339</a></div>
        </div>

        <div className="v2-register">
            <div className="v2-register-main">
                <div className="m-form-close"></div>
                <div className="v2-register-logo">
                    <img src="https://m.wolaidai.com/static/modules/app/images/v2/home/logo.png" />
                </div>
                <div className="m-form border-box">
                    <div className="m-form-row m-form-row-tel">
                        <input type="tel" className="m-radius0 m-square-input border-box" id="phone" name="phone" placeholder="请输入手机号码" maxLength="13" />
                        <span className="m-close hide" ></span>
                    </div>
                    <div className="m-form-row m-form-row-verif">
                        <input type="tel" className="m-radius0 m-square-input border-box " id="verifyCode" name="verifyCode" placeholder="请输入验证码" maxLength="6" />
                        <button className="btn-send-code" disabled="">获取验证码</button>
                    </div>

                    <div className="m-form-row m-form-row-msg">
                        <div id="error-msg" className="m-tip"></div>
                    </div>
                    <div className="btn-login">立即申请</div>
                    <div className="xieyi checked">
                        <span className="xieyi-btn">
                          <span className="check"></span>
                          <span>点击既表示同意</span>
                        </span>
                        <a href="https://web.wolaidai.com/webapp/yhd/registrationAgreement.html" className="cont" target="_blank">《注册与服务协议》</a>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className={this.state.isShowNav?'mask':'mask hide'}></div>
			</div>
      </div>
        );
    }
}


export default Msite;