import React, { Component } from 'react';
import { Link } from "react-router-dom"; //跳转路由

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div data-reactroot="" className="home root">
              {/*背景图*/}
                <div className="Banner___1hav6">
                  <div style={{overflowX:" hidden"}}>
                    <div className="react-swipeable-view-container" style={{flexDirection:"row" , transition: "all 0s ease 0s", direction:" ltr", display:" flex", willChange:" transform", transform:"translate(0%, 0px)"}}>
                        <div aria-hidden="false" data-swipeable="true" style={{width:"100%" , flexShrink:"0" , overflow: "auto"}}>
                          <a href="javascript:void(0);">
                            <img alt="banner_0" src="https://m.wolaidai.com/web-static/activity18/auto1029/img/banner4.png" className="Banner___175ZA"/>
                          </a>
                        </div>
                    </div>
                  </div>
                </div>
              {/*车险框*/}
            {/****** <div className="auto-message">
                  <div>
                    <div className="auto-number"><span className="go-reservation">马上预约 &gt; </span>
                      <div className="label">
                        <svg className="SvgIcon___kHRqW"><use xlink:href="#icon-home_icon_grade"></use></svg><span>车牌号码 </span>
                      </div>
                      <div className="CarInput___p4iZ9 rn-1awozwy rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-13awgt0 rn-1m1wadx rn-1awmn5t rn-18u37iz rn-tzz3ar rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim" style={{backgroundColor: "rgba(0, 0, 0, 0)", justifyContent:"flex-start"}}>
                        <div className="rn-1oszu61 rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-1pxmb3b rn-7vfszb rn-eqz5dr rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim">
                          <div className="rn-1oszu61 rn-plks8g rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-1loqt21 rn-6koalj rn-1pxmb3b rn-7vfszb rn-eqz5dr rn-19uokag rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim rn-1gvxusu rn-eafdt9 rn-1i6wzkk rn-lrvibr rn-13zssxc" tabindex="0">
                            <div dir="auto" className="rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-102hald rn-1471scf rn-1lw9tu2 rn-10u92zi rn-197dum3 rn-vw2c0b rn-f0eezp rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bauka4 rn-q42fyq rn-qvutc0" >粤A</div>
                            </div>
                          </div>
                        <div>
                          <svg className="SvgIcon___kHRqW" style={{color: "rgb(204, 204, 204)", fontSize:" 0.2rem"}}>
                            <use xlink:href="#icon-home_icon_Options"></use>
                          </svg>
                        </div>
                        <div className="rn-1oszu61 rn-1pz39u2 rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-1pxmb3b rn-7vfszb rn-eqz5dr rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim">
                          <div className="rn-1awozwy rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-13awgt0 rn-1m1wadx rn-1awmn5t rn-18u37iz rn-19uokag rn-1mnahxq rn-61z16t rn-p1pxzi rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim" style={{borderColor: "rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(226, 226, 226)", marginLeft:" 0.3rem"}}><input type="text" value="888888" placeholder="88888 (例)" autocapitalize="sentences" autocomplete="on" autocorrect="on" dir="auto" className="rn-30o5oe rn-wib322 rn-kqr9px rn-q0dj5p rn-1ah7hsa rn-137uh4u rn-ou6ah9 rn-t12b5v rn-zmljjp rn-pm2fo rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-102hald rn-13awgt0 rn-1m1wadx rn-1awmn5t rn-1lw9tu2 rn-197dum3 rn-19uokag rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-1dz5y72" style={{outline:" none", width:" 4.5rem"}}/>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="auto-area">
                    <div className="label">
                      <svg className="SvgIcon___kHRqW"><use xlink:href="#icon-home_icon_area"></use></svg>
                        <span>投保地区 </span><span>(更多地区持续开通中，预约锁定福利)</span>
                    </div>
                  <div className="rn-1oszu61 rn-1pz39u2 rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-1pxmb3b rn-7vfszb rn-eqz5dr rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim">
                    <div className="rn-1awozwy rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-5kkj8d rn-deolkf rn-6koalj rn-13awgt0 rn-1m1wadx rn-1awmn5t rn-18u37iz rn-19uokag rn-1mnahxq rn-61z16t rn-p1pxzi rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim" style={{borderColor:" rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(226, 226, 226)", borderRightWidth:" 1px", borderBottomWidth:" 1px", borderLeftWidth:" 1px", marginLeft:" 0.3rem"}}>
                      <div className="rn-1oszu61 rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-1pxmb3b rn-7vfszb rn-eqz5dr rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim">
                        <div className="rn-1oszu61 rn-plks8g rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-1pxmb3b rn-7vfszb rn-eqz5dr rn-19uokag rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim rn-tf4jc5">
                          <div dir="auto" className="rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-homxoj rn-1471scf rn-1lw9tu2 rn-10u92zi rn-f0eezp rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-wk8lta rn-1mdbw0j rn-gy4na3 rn-9aemit rn-bauka4 rn-q42fyq rn-qvutc0" style={{fontSize:"0.26rem" , textAlign:"left" }}>广东省,广州市</div>
                        </div>
                      </div>
                      <div className="rn-1oszu61 rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-1pxmb3b rn-7vfszb rn-eqz5dr rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-u8s1d" style={{right: "0.3rem", top: "0.35rem"}}>
                        <div className="rn-1oszu61 rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-1pxmb3b rn-7vfszb rn-eqz5dr rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-11yh6sk rn-buy8e9 rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim" style={{backgroundColor:"rgba(0, 0, 0, 0)" ,height:"0.3rem" , width:"0.18rem" }}>
                          <div className="rn-1oszu61 rn-wib322 rn-vvn4in rn-u6sd8q rn-4gszlv rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-1pxmb3b rn-7vfszb rn-eqz5dr rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim rn-ipm5af rn-1lgpqti rn-1p0dtai rn-1pi2tsx rn-1d2f490 rn-1272l3b rn-u8s1d rn-zchlnj rn-ipm5af rn-13qz1uu rn-1wyyakw" style={{height: "1.39rem", left:" -1.56rem", width: "4.49rem", backgroundImage: url("https://web.wolaidai.com/common/images/fxui/fxui-orange-theme2x.png") }}>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-home" style={{marginTop: "0.68rem"}}>
                  <div className="rn-1oszu61 rn-1pz39u2 rn-wib322 rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-1loqt21 rn-6koalj rn-1pxmb3b rn-7vfszb rn-eqz5dr rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim rn-1gvxusu rn-lrvibr" >
                    <div className="rn-1oszu61 rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-1pxmb3b rn-7vfszb rn-eqz5dr rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim">
                      <div className="rn-1awozwy rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-5kkj8d rn-deolkf rn-6koalj rn-1pxmb3b rn-7vfszb rn-eqz5dr rn-1777fci rn-61z16t rn-11wrixw rn-15vv6je rn-qu3fyt rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim" style={{backgroundColor: "rgb(255, 93, 61)", borderColor:" rgb(255, 93, 61)", borderRadius: "0.5rem", borderRightWidth: "1px", borderBottomWidth:"1px" ,borderLeftWidth: "1px", boxShadow: "rgba(255, 161, 125, 0.5) 0px 0.1rem 0.12rem 0px", height: "0.8rem"}}>
                        <div dir="auto" className="rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-1qtguxu rn-1471scf rn-1lw9tu2 rn-10u92zi rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bauka4 rn-q42fyq rn-qvutc0" style={{fontSize:" 0.36rem"}}>0首付0利息投保</div>
                        </div>
                      </div>
                    </div>
                  </div>
                    <p className="auto-discount">车险三折起，享12期免息</p>
                  </div>
                  <div className="goOrder rn-1awozwy rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-13awgt0 rn-1m1wadx rn-1awmn5t rn-18u37iz rn-1w6e6rj rn-1wtj0ep rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim" style={{backgroundColor: "rgba(0, 0, 0, 0)", marginTop: "0.71rem"}}>
                  <div>
                    <svg className="SvgIcon___kHRqW"><use xlink:href="#icon-icon_dingdan"></use></svg>
                    <span>我的订单</span>
                  </div>
                  <div>
                    <svg className="SvgIcon___kHRqW"><use xlink:href="#icon-icon_yhq"></use></svg>
                    <span>我的卡劵</span>
                  </div>
                </div>
                <div className="home-help rn-1awozwy rn-1efd50x rn-14skgim rn-rull8r rn-mm0ijv rn-13yce4e rn-fnigne rn-ndvcnb rn-gxnn5r rn-deolkf rn-6koalj rn-13awgt0 rn-1m1wadx rn-1awmn5t rn-18u37iz rn-1w6e6rj rn-1wtj0ep rn-1mnahxq rn-61z16t rn-p1pxzi rn-11wrixw rn-ifefl9 rn-bcqeeo rn-wk8lta rn-9aemit rn-1mdbw0j rn-gy4na3 rn-bnwqim" style={{backgroundColor:"rgb(249, 249, 249)" }}>
                  <span>碰到问题需要帮助? 请点击这里</span>
                  <svg className="SvgIcon___kHRqW" style={{fontSize: "0.22rem"}}>
                  <use xlink:href="#icon-Universal_icon_right1"></use>
                  </svg>
                </div>
              </div>
            *********/}
          </div>     
        );
    }
}
export default Home;