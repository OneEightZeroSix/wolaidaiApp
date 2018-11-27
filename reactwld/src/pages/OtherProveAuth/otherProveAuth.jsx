import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect} from 'react-redux';

import '../Apply/apply.css';
import '../Apply/apply1.css';

class otherProveAuth extends Component {
  render() {
    return (
      <div id="app" className="clearfix" style={{fontSize: '12px',height: '755px'}}>
    <div data-reactroot="" className="FullScreen___3G_mI">
        <div className="no-footer FullScreen___2UNA1" >
            <div className="otherproveauth-page">
                <div className="otherauth-notice"><span className="iconfont icon-laba"></span><span>审核结果：您信用良好，请补充任意一项通过审核</span></div>
                <p className="otherauth-title">
                    3选1，请尽快补充，否则10天后需要重新审核
                    
                </p>
                <Link to="/auth/creditcard" className="menu-bar MenuBar___3WZxs"><span className="iconfont icon-xinyongqia2 theme-classNameic font-color bg-color-light"></span>
                    <div className="text">
                       信用卡认证
                    </div>
                    <div className="status">提交</div><span className="iconfont icon-icon_arrow" style={{fontSize: '0.28rem'}}></span></Link>
                <div className="menu-bar MenuBar___3WZxs"><span className="iconfont icon-zhifubaozhanghaopeizhix theme-classNameic font-color bg-color-light"></span>
                    <div className="text">
                        支付宝认证
                    </div>
                    <div className="status">提交</div><span className="iconfont icon-icon_arrow" style={{fontSize: '0.28rem'}}></span></div>
                <div className="menu-bar MenuBar___3WZxs"><span className="iconfont icon-gongjijin1 theme-classNameic font-color bg-color-light"></span>
                    <div className="text">
                        公积金
                    </div>
                    <div className="status">提交</div><span className="iconfont icon-icon_arrow" style={{fontSize: '0.28rem'}}></span></div>
                <div className="wrap-btns"><button  onClick={this.props.step5.bind(this)} className="btn theme-classNameic font-color-white bg-color border-color box-shadow">补充完毕，通过审核</button></div>
                <div style={{display: 'none'}}>
                    <div data-role="xlib-toast" className="Toast___2hwGa" >
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
}

export default connect((state)=>{
    return state
},(dispatch)=>{
    return {
        // 定义了一个函数
        step5(){
           
           console.log(this.props) 

        }
        
    }
})(otherProveAuth);