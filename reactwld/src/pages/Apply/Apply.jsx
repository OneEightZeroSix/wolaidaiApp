import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect} from 'react-redux';

import './apply.css';
import './apply1.css';
import './change.css';


class Apply extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            text: '',
            data: '',
            plan: '',
            longtime:'',

        }
    }
    handelChange(e) {
        if (e.target.value >= 5000 && e.target.value <= 30000) {
            this.setState({
                text: e.target.value - e.target.value % 500,
            });
        } else if (e.target.value < 5000) {
            this.setState({
                text: e.target.value,

            });
        } else {
            this.setState({
                text: 30000,

            });
        }
    }
    isEnough(ele) {
        return ele.tenor == "6M"
    }
    isEnough1(ele) {
        return ele.tenor == "9M"
    }
    isEnough2(ele) {
        return ele.tenor == "12M"
    }
    haha() {
        return;
    }
    
    plan(e) {
        var filtered = ' ';

        if (e.target.value == '6个月') {
            var filtered = this.state.data[this.state.text].filter(this.isEnough);
        } else if (e.target.value == '9个月') {
            var filtered = this.state.data[this.state.text].filter(this.isEnough1);
        } else if (e.target.value == '12个月') {
            var filtered = this.state.data[this.state.text].filter(this.isEnough2);
        } else {
            return;
        }
        console.log(filtered)
        console.log(e.target.value)
        this.setState({
            plan: {
                "min_installment": filtered[0].min_installment,
                "max_installment": filtered[0].max_installment,
                
            },
            longtime: e.target.value
        })
        console.log(this.state.plan.min_installment)

    }
    componentWillMount() {
        

        React.axios.get("https://japi.wolaidai.com/jrocket2/api/v4/installments")
            .then((response) => {
                console.log(response)
                this.setState({
                    data: response.data
                })


            }).catch(function(error) {
                console.log(error);
            });
    }
    componentDidUpdate(){
      console.log(this.props)
    }



    render() {
        return (

            <div id="app" className="clearfix">
    <div data-reactroot="" className="FullScreen___3G_mI">
        <div className="FullScreen___2UNA1" >
            <div data-role="xlib-toast" className="Toast___2hwGa" ><p></p></div>
        </div>
        <div className="jdd-apply">
          <div className="jdd-apply-banner theme-classNameic img-apply-banner">
              <p className="title">最高可申请(元)</p>
              <p className="amount">30000</p>
              <p className="guider">借万元，日利息低至6元</p>
              <div className="point">
                  <p className="point-num">我的积分</p>
              </div>
          </div>
          <div>
               <div className="amount-box">
                  <div className="jdd-apply-form">                     
                          <div data-role="xlib-toast" className="Toast___2hwGa" >
                              <p></p>                     
                      </div>
                      <div className="jdd-form-input"><label htmlFor="amount">借多少</label>
                          <div data-role="xlib-input" className="Input___3_uXR" ><input  onChange={this.handelChange.bind(this)} value={this.state.text} type="tel" maxLength="5" placeholder="最低5000元，且为500倍数" name="amount" className="Input___3w_BR"  /><span className="Input___3mXBX">{
                            (()=>{
                              console.log(this.state.text)


                                if(this.state.text.toString().length>0){
                                  if(parseInt(this.state.text)>=5000){
                                    console.log('符合条件')
                                    return '';
                                  }else{
                                    console.log('不符合正确金额')

                                    return '请填写正确的申请金额';}
                             
                                }else{
                                  console.log('没有值')
                                  return ;
                                }

                            })()
                            

                            }

                          </span></div>
                      </div>



                      <div className="jdd-form-select"><label htmlFor="tenor">借多久</label>
                          <div data-role="xlib-select" className="Select___37wsQ">
                              <div className="Select___1uNMg">
                                  <div className="Select___3CZzX"><i className="Select___2tk0N"></i></div>
                              </div>
                                 {(()=>{
                                    if(this.state.text<5000||this.state.text==""){
                                      return (
                                          <select className="Select___3O2LI Select___2apkG " disabled={this.state.text>=5000?false:true} name="tenor">

                                            <option >选择贷款期限</option>
                                            <option name="6M">6个月</option>
                                            <option name="9M">9个月</option>
                                            <option name="12M">12个月</option>
                                        </select>
                                        )
                                    }
                                  })()}

                                  {(()=>{
                                      if(this.state.text>=5000){
                                    return (
                                        <select onClick={this.plan.bind(this)} className={this.state.text>=5000?'Select___3O2LI Select___31_AX':"Select___3O2LI Select___2apkG "} disabled={this.state.text>=5000?false:true} name="tenor">

                                          <option >选择贷款期限</option>
                                          <option name="6M">6个月</option>
                                          <option name="9M">9个月</option>
                                          <option name="12M">12个月</option>
                                        </select>
                                      )
                                  }
                                  })()
                                  
                                  
                                }
                                                                    
                          </div>
                      </div>
                      <div className="jdd-form-input"><label htmlFor="fee">月还款</label>
                          <div data-role="xlib-input" className="Input___3_uXR" style={{ paddingRight:'30px'}}><input onChange={this.haha} value={
                            (()=>{
                                if(this.state.text>=5000){
                                  if(this.state.plan.toString().length>2){
                                    return this.state.plan.min_installment+'~'+this.state.plan.max_installment}else{
                                return '';
                               }
                              }else{
                                (()=>{this.state.plan="";})();
                                return '';
                                
                              }
                            })()
                            
                          }  disabled="" name="fee" className="Input___3w_BR" /></div>
                      </div>
                  </div>
              </div>
               <div className="btn-box"><Link to={{ pathname: '/jddv3/idVerification' }} onClick={this.props.step1.bind(this)} className="btn theme-classNameic font-color-white bg-color border-color box-shadow">立即申请</Link>
               


                  <div className="Modal___3X1Gj Modal___1rt0o">
                      <div className="WeChatModal___16Fzk">
                          <div className="WeChatModal___3pvt6"><img className="WeChatModal___2vqF4" src="https://web.wolaidai.com/img/jddv3/wx_tip_bg.png" alt="tip" />
                              <p className="WeChatModal___A5F4o">关注我来贷微信</p>
                              <p className="WeChatModal___nN8Nb">长按识别二维码</p>
                              <p className="WeChatModal___nN8Nb">
                                  <span className="WeChatModal___TCuFo">“我来贷”</span>
                              </p><span className="WeChatModal___k7BFq"></span>
                          </div>
                          <div className="WeChatModal___2BBlJ"><img className="WeChatModal___1d5mK" src="https://web.wolaidai.com/img/jddv3/wx_qrcode_apply.jpeg" alt="qrcode" />
                              <div className="WeChatModal___28nv4">
                                  <p className="WeChatModal___3Kbia">
                                      <span className="WeChatModal___2ZPhu">wolaidaichina</span></p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <img src="//web.wolaidai.com/img/staff/credit_prompt_banner.png" alt="" className="credit-tip" />


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
        step1(){
           
            dispatch({
                type:"step1",
                longtime:this.state.longtime,
                allmoney:this.state.text
            })

        }
        
    }
})(Apply);