import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect} from 'react-redux';



import '../Apply/apply.css';
import '../Apply/apply1.css';


class idVerification extends Component {
  render() {
    return (
      <div id="app" className="clearfix" style={{fontSize: '12px',height: '755px'}}>
        <div data-reactroot="" className="FullScreen___3G_mI">
            <div className="no-footer profile FullScreen___2UNA1" >
                <div data-role="xlib-step" className="Step___2ezR6 Step___3CAWZ Step___39Wqj" >
                    <div className="Step___28E4B Step___3bgbx">
                        <div className="Step___aeymK"></div>
                        <div className="Step___2y5v7"><span className="Step___1f1SU">1</span></div>
                        <div className="Step___mugiL">
                            <div className="Step___1jGeZ">身份确认</div>
                        </div>
                    </div>
                    <div className="Step___28E4B Step___1azT4">
                        <div className="Step___aeymK"></div>
                        <div className="Step___2y5v7"><span className="Step___1f1SU">2</span></div>
                        <div className="Step___mugiL">
                            <div className="Step___1jGeZ">完善资料</div>
                        </div>
                    </div>
                    <div className="Step___28E4B Step___1azT4">
                        <div className="Step___aeymK"></div>
                        <div className="Step___2y5v7"><span className="Step___1f1SU">3</span></div>
                        <div className="Step___mugiL">
                            <div className="Step___1jGeZ">提交申请</div>
                        </div>
                    </div>
                </div>
                <div className="tipDesc">请输入收款银行卡的姓名和身份证，确保资金能到账</div>
                <div className="section">
                    <div data-role="form-group" className="FormGroup___2qhXh">
                        <div className="FormGroup___Rc1SA"><label>姓名</label>
                            <div data-role="xlib-input" className="Input___3_uXR" ><input ref='name' placeholder="请输入你的真实姓名" maxLength="10" className="Input___3w_BR" /></div>
                        </div>
                    </div>
                    <div data-role="form-group" className="FormGroup___2qhXh">
                        <div className="FormGroup___Rc1SA"><label>身份证</label>
                            <div data-role="xlib-input" className="Input___3_uXR" ><input ref='idcard' placeholder="请输入正确的身份证号码" maxLength="18" className="Input___3w_BR" /></div>
                        </div>
                    </div>
                </div>
                <div className="actions"><Link to="/jddv3/profile" onClick={this.props.step2.bind(this)} className="btn theme-classNameic font-color-white bg-color border-color box-shadow">下一步</Link></div>
                <div >
                    <div data-role="xlib-toast" className="Toast___2hwGa" >
                        <p></p>
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
        step2(){
           
            dispatch({
                type:"step2",
                name:this.refs.name.value,
                idcard:this.refs.idcard.value,
            });
            console.log(this.props)
           
        }
        
    }
})(idVerification);