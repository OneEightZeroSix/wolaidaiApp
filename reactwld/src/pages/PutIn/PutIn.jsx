import React, { Component } from 'react';
import { Link } from "react-router-dom"; //跳转路由
import './PutIn.css';
import '../../assert/css/base.css';
//引入顶部图片
import logo from '../../assert/img/logo.png';
//引入喇叭图片
import notice from '../../assert/img/notice.png';
//引入卡片
import loan from '../../assert/img/loan.png';
import service from '../../assert/img/service.png';
import coupon from '../../assert/img/coupon.png';

class PutIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowHint:false,
            isShowPeriod:true,
            Idex:2,
            Time:["6期","9期","12期",],
            Money1:0,
            Money2:"",
            tit:""
        }
    }
//申请金额，每期还款函数
money(){
  let money = this.refs.money.value
  if(money>50000){
      this.refs.money.value = 50000;
      this.setState({
        isShowHint:!this.state.isShowHint
      })
  }else if(money<50000){
    this.setState({
        isShowHint:false
      })
  }else if(money.trim()==""){
    this.setState({
         Money1:0,
         Money2:"",
         tit:null
      })
  }
  this.times();
}
//显示选取还款期数
period(){
  this.setState({
        isShowPeriod:!this.state.isShowPeriod
      })
}
//选取还款期数
times(index){
  let money1 = 0;
  let money2 = 0;
  switch(index){
    case 0:
     money1 = Math.ceil((this.refs.money.value)/5.90);
     break;
    case 1:
     money1 = Math.ceil((this.refs.money.value)/8.90);
     break;
    case 2:
     money1 = Math.ceil((this.refs.money.value)/11.90);
     break;
  }
  switch(index){
    case 0:
     money2 = Math.floor((this.refs.money.value)/6.1);
     break;
    case 1:
     money2 = Math.floor((this.refs.money.value)/6.1);
     break;
    case 2:
     money2 = Math.floor((this.refs.money.value)/6.1);
     break;
  }
  console.log(money1);
  console.log(money2);
  this.setState({
      Idex:index,
      Money1:money1,
      Money2:money2,
      tit:"~"
  })
}
    render() {
        return (
        <div data-reactroot="" className="page___1TpeS page___2aPQC undefined " style={{backgroundColor: "rgb(242, 242, 242)"}}>
          <div className="page___3yBhB">
            <div className="apply">
            {/*顶部图片*/}
              <div className="top"><div className="logo"><img className="logo-img" src={logo} alt="我来贷" /></div></div>
            {/*申请表单*/}
              <div className="amount-box">
              {/*通知轮转*/}
                <div className="notification">
                  <div className="Broadcasts___sIH1O" style={{height: "1.3rem"}}>
                    <div className="Broadcasts___f8p0b" style={{top: "0rem", height: "1.3rem"}}>
                      <div className="Broadcasts___kQ-FH" style={{height: "1.3rem", lineHeight: "1.3rem"}}>
                        <img src={notice} alt=""/>来自合肥的夏先生已成功放款<span>19300元</span>
                      </div>
                    </div>
                  </div>
                </div>
              {/*申请信息*/}
                <div>
                  <div className="installment">
                    <div data-role="installment" className="Installment___2xwWU">
                    {/*借多少*/}
                      <div className="Installment___1w5hE">
                        <div className="Installment___2lJTr">
                          <div className="Installment____T8JD">
                            <div data-role="form-group" className="FormGroup___2ItNM form-group">
                              <div className="FormGroup___1SEJF">
                                <label>借多少</label>
                                  <div className="Installment___1dp63">
                                    <div data-role="xlib-input" className="Input___9cgsf" style={{paddingRight: "0px"}}>
                                      <input type="number" onBlur={this.money.bind(this)} ref="money" placeholder="请输入100的整数倍" className="Input___1iYS0"  />
                                    </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/*借多少文本框大于5000时显示*/}

                    {(()=>{
                      if(this.state.isShowHint){
                        return(
                                <div className="Installment___3aUCw">
                                  <p>
                                    <span style={{marginRight: "1.06rem"}}></span>
                                    您最多可借50000元
                                  </p>
                                </div>
                            )
                      }else{
                            return;
                          }
                    })()}
                      
                    {/*借多久*/}
                      <div className="Installment___1w5hE">
                        <div className="Installment___2lJTr">
                          <div className="Installment____T8JD">
                            <div data-role="form-group" className="FormGroup___2ItNM Installment___2Zsy1">
                              <div className="FormGroup___1SEJF">
                                <label>借多久</label>
                                  <div className="Installment___1dp63" onClick={this.period.bind(this)}>
                                    <div className="picker___39CqX">{this.state.Time[this.state.Idex]}
                                      <div className={this.state.isShowPeriod?"Modal___1uYAl Modal___1gdzR":"Modal___1uYAl Modal___1S-qo"} id="modal">
                                        <div className="picker___2sNPZ">
                                          <ul>
                                          {(()=>{
                                            return this.state.Time.map((item,index)=>{
                                              return(
                                                   <div className="picker___8iNiB" ref="`'period'+${index}`" key={index} onClick={this.times.bind(this,index)} style={{color: "rgb(153, 153, 153)", fontSize: "15px"}}>{item}</div>
                                                )
                                            })
                                          })()}
                              
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                             <div className="Installment___3sVl8">
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    {/*每月还款*/}
                      <div className="Installment___20BUa">每月还款
                        <span>{this.state.Money1}{this.state.tit}{this.state.Money2}</span>
                          元
                          <span className="Installment___bHd-w">
                          <img src="/aif-jdd/imgs/instruction.png" alt=""/>
                        </span>
                      </div>
                      <div className="Modal___1uYAl Modal___1gdzR" id="modal">
                        <div className="InstallmentModal___2brdZ">
                          <div className="InstallmentModal___2CfZb">
                              <p className="InstallmentModal___Gy_zP">每月还款金额为
                                <span>*</span>元
                              </p>
                            <div className="InstallmentModal___LVAp3"><div><i></i></div>
                              <p>我来贷会根据您的信用属性，提供给您最终的贷款金额、期限及费率</p>
                            </div>
                            <div className="InstallmentModal___LVAp3"><div><i></i></div>
                              <p>真实填写信息，能够大幅提高借款成功率，享受低廉的贷款费率</p>
                            </div>
                          </div>
                        <div className="InstallmentModal___2fXog">我知道了</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn-primary submit">立即拿钱</button>
              </div>
              
              </div>
            {/*卡片内容*/}
              <div className="wrap-box">
                <div className="wrap-item">
                  <img src={loan} alt=""/>
                  <div>我的借款</div>
                </div>
                <div className="wrap-item">
                  <img src={coupon} alt=""/>
                  <div>我的卡券</div>
                </div>
                <div className="wrap-item">
                  <img src={service} alt=""/>
                  <div>常见问题</div>
                </div>
              </div>
          </div>
        </div>
      </div>
        );
    }
    componentDidMount() {
        this.money();
    }
}


export default PutIn;
