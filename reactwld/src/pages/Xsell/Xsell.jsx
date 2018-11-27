import React, { Component } from 'react';
import {Link } from "react-router-dom";//跳转路由
import './Xsell.css';

//引入50000元图片
import applyQuota1 from '../../assert/img/apply-quota1.png';
import pIcon from '../../assert/img/p-icon.png';
import lockIcon from '../../assert/img/lock-icon.png';

class Xsell extends Component {
 constructor(props) { 
        super(props);
        this.state = {
          isShow:true
        }
    }

toggleShow(){
    this.setState({
        isShow:!this.state.isShow
    })
}
//随机生成小写字母
smallLetter(num){
            var randomMa = [];
            for(var i=0;i<num;i++){
                randomMa.push(String.fromCharCode(parseInt(Math.random()*(122-97+1)+97)));
            }
            return randomMa.join("");
        }
//获得验证码
newNumber(){
    this.str = this.smallLetter(4);
    this.refs.btn.innerHTML = this.str;
}
//正则比配手机号码  1 [34578]
phoneNum(){
  let phoneH = this.refs.phone.value;
  if(!/^1[3-9]\d{9}$/i.test(phoneH)&&phoneH.trim()!=""){
    alert("手机号码不正确");
  }
}
//登入成功跳转路由
login(){
  if(this.refs.verifyCode.value===this.str){
  
        console.log("ok");
   }else if(this.refs.verifyCode.value!==this.str){
        alert("验证码不正确");
   }
}
  render() {
    return (
        <div className="m-page" style={{minHeight: "1136px"}}>
            <div className="m-box-apply"> 
                {(()=>{
                    if(this.state.isShow){
                        return (
                                <div className="m-box-apply-1" id="apply1" onClick={this.toggleShow.bind(this)}>
                                  <div  style={{marginBottom: "0.2rem"}}>
                                    <img src={applyQuota1} style={{width: "15rem",height:"8.5rem" }}/>
                                  </div>
                                  <div className="m-box-word2">
                                    <p>1. 更高额度，最高可提至5万</p>
                                    <p>2. 更快审批，专属绿色通道</p>
                                  </div>
                                </div>
                            );
                    }else{
                        return(
                                <div className="m-box-apply-2 hidden" id="apply2" >
                                  <div className="m-form-login">
                                    <div className="m-form-row m-flex">
                                      <div>
                                        <img className="m-icon" src={pIcon}/>
                                      </div>
                                      <input type="tel" className="m-radius0 m-square-input border-box input-font" id="phone" name="phone" placeholder="请输入手机号码" ref="phone" onBlur={this.phoneNum.bind(this)}/>
                                      <span className="m-close hide"></span>
                                    </div>
                                    <div className="m-form-row m-flex">
                                      <img className="m-icon" src={lockIcon}/>
                                      <input type="tel" className="m-radius0 m-square-input border-box input-font" id="verifyCode" name="verifyCode" placeholder="输入验证码" ref="verifyCode"/>
                                      <button className="btn-send-code" ref="btn" onClick={this.newNumber.bind(this)}>获取验证码</button>
                                    </div>
                                    <div id="error-msg" className="m-tip" style={{color: "#fff"}}></div>
                                    <div className="m-form-row no-b" style={{height: "2rem"}}>
                                      <a href = {'http://localhost:3000/#/putIn'}>
                                        <button className="btn-login" onClick={this.login.bind(this)}>立即领取</button>
                                      </a>
                      
                                    </div>
                                  </div>
                                </div>
                            )
                    }
                })()}
                
            </div>
        </div>
    );
  }
}
export default Xsell;