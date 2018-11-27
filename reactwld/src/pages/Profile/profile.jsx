import React, { Component } from 'react';
import { Link } from "react-router-dom";


import '../Apply/apply.css';
import '../Apply/apply1.css';
import { connect} from 'react-redux';


class profile extends Component {
  constructor(props){
    super(props);
    this.state={
      showtime:false,
      showadress:false,
      nowshowadress:false,

      recommend:'',
      years:['2018','2017','2016','2015','2014','2013','2012','2010','2009','2008','2007','2006','2005','2004','2003','2002'],
      months:['01','02','03','04','05','06','07','08','09','10','11','12'],
      yearidx:'',
      monthidx:'',
      yearNumber:2016,
      monthNumber: '05',

      city:0,
      cities:0,
      area:0,
      province:'广东省',
      area1:'广州市',
      area2:'天河区',
      provinceindex:'-1',
      area1index:'-1',
      area2index:'-1',

      nowcity:0,
      nowcities:0,
      nowarea:0,
      nowprovince:'广东省',
      nowarea1:'广州市',
      nowarea2:'天河区',
    }
  }
  showtime(){
    this.setState({
      showtime:!this.state.showtime
    })
  }
  showadress(){
    this.setState({
      showadress:!this.state.showadress
    })
  }
  hideadress(){
    if(this.state.area2.toString().length>0){
       this.setState({
      showadress:!this.state.showadress
    })
    }else{
      alert('请输入正确地址')
    }
  }
   nowshowadress(){
    this.setState({
      nowshowadress:!this.state.nowshowadress
    })
  }
  yearidx(index,e){
    this.setState({
        yearidx : index,
        yearNumber:this.state.years[index],


    })
  }
   monthidx(index,e){
    this.setState({
        monthidx : index,
        monthNumber:this.state.months[index]
    })
    
  }
  save(){
    this.setState({
        showtime:false
    })
  }


  recommend(e){
    this.setState({
      recommend:e.target.value
    })
     /*React.axios.get("https://japi.wolaidai.com/application/api/v1/application/user/company/complete_name", {
            params: {
                name: e.target.value,
                city:'石家庄'

            }
        }).then((response) => {
            console.log(response);
            
        }).catch(function (error) {
            console.log(error);
        });*/

  }
  cities(index,e){
    if(index==this.state.city){
        this.setState({
          cities : this.state.city.data[index],
          province: e.target.innerHTML,
          provinceindex:index
      })
    }else{
       this.setState({
          cities : this.state.city.data[index],
          province: e.target.innerHTML,
          provinceindex:index,
          area1: '',
          area2: '', 
          area:0,
          area1index:'-1',
          area2index:''


      })
     

    }
    
   console.log(e.target.innerHTML)
    
  }
   area(index,e){
    if(index==this.state.city){
      this.setState({
             area : this.state.cities.city[index].area,
             area1: e.target.innerHTML,
             area1index:index
        })

    }else{
        this.setState({
             area : this.state.cities.city[index].area,
             area1: e.target.innerHTML,
             area1index:index,
             area2: '', 
             area2index:'-1'



        })

    }


        
       console.log(e.target.innerHTML)
        

   } 
     area1(index,e){
        this.setState({
             area2 : e.target.innerHTML,
            area2index:index
        })
       console.log(e.target.innerHTML)
        

   } 

   nowcities(index,e){
    this.setState({
        nowcities : this.state.nowcity.data[index],
        nowprovince: e.target.innerHTML
    })
   console.log(e.target.innerHTML)
    
  }
   nowarea(index,e){
        this.setState({
             nowarea : this.state.nowcities.city[index].area,
             nowarea1: e.target.innerHTML
        })
       console.log(e.target.innerHTML)
        

   } 
     nowarea1(index,e){
        this.setState({
             nowarea2 : e.target.innerHTML,
            
        })
       console.log(e.target.innerHTML)
        

   } 
  componentDidMount(){
        React.axios.get("province.json")
        .then((response) => {
           
            this.setState({
                city: response,
                nowcity: response,

            })
           
        }).catch(function (error) {
            console.log(error);
        });
    

  
  }

  render() {
    return (
      <div id="app" className="clearfix" style={{fontSize: '12px', height: '755px'}}>
    <div data-reactroot="" className="FullScreen___3G_mI">
        <div className="no-footer profile FullScreen___2UNA1" >
            <div data-role="xlib-step" className="Step___2ezR6 Step___3CAWZ Step___39Wqj" >
                <div className="Step___28E4B Step___2Zgud">
                    <div className="Step___aeymK"></div>
                    <div className="Step___2y5v7"><span className="Step___1f1SU Step___a6URh Step___2VnMs"></span></div>
                    <div className="Step___mugiL">
                        <div className="Step___1jGeZ">身份确认</div>
                    </div>
                </div>
                <div className="Step___28E4B Step___3bgbx">
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
            <div className="section inMyData">
                <div className="weixuan">
                    <div className="SmartInput___ZzGZn" id="smartinput">
                        <div data-role="form-group" className="FormGroup___2qhXh">
                            <div className="FormGroup___Rc1SA"><label htmlFor="namegroup">工作单位</label>
                                <div data-role="xlib-input" className="Input___3_uXR" ><input onChange={this.recommend.bind(this)} value={this.state.recommend} placeholder="请填写签署劳动合同的单位名称" maxLength="50" className="Input___3w_BR" /></div>
                            </div>
                        </div>
                        <div className="SmartInput___1xN3Z" style={{ display: 'none' }}><i className="iconfont icon-xialax SmartInput___2FRLv"></i>
                            <ul className="SmartInput____5Hjo">
                              <li id="smartLi0">石家庄百度文化传播有限公司</li>
                            </ul>

                        </div>
                    </div>
                    <div data-role="form-group" className="FormGroup___2qhXh arrowRight">
                        <div className="FormGroup___Rc1SA"><label>入职时间</label>
                            <div className="DateSelect___1oGpe"><span className="DateSelect___oQKnc" ref='jointime'  onClick={this.showtime.bind(this)} >{this.state.yearNumber}年 {this.state.monthNumber} 月</span>
                            <i className="iconfont icon-xinyongrenzhengyetiaozhuan DateSelect___1_1Oe"></i>
                                <div className={this.state.showtime?'Modal___3X1Gj Modal___U3o4P':"Modal___3X1Gj Modal___1rt0o"}>
                                    <div className="DateSelect___3YSsQ">
                                        <div className="DateSelect___2NK17"><a  onClick={this.save.bind(this)}> 取消 </a><a className="theme-classNameic font-color-white bg-color" onClick={this.save.bind(this)}> 完成 </a></div>
                                        <div className="DateSelect___1YSTr">
                                            <div className="DateSelect___4FxBm">
                                                    {(()=>{
                                                        return this.state.years.map((item,index)=>{
                                                            return (<li key={index} onClick={this.yearidx.bind(this,index)} className={this.state.yearidx==index?"theme-classNameic font-color":''} >{item}年</li>)
                                                        })
                                                    })()}


                                                   
                                            </div>
                                            <div className="DateSelect___4FxBm">
                                                
                                                {(()=>{
                                                   return this.state.months.map((item,index)=>{
                                                        return( <li onClick={this.monthidx.bind(this,index)} className={this.state.monthidx==index?"theme-classNameic font-color":''} key={index} >{item}月</li>)
                                                    })
                                                })()
                                                    
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display: 'none'}}>
                                    <div data-role="xlib-toast" className="Toast___2hwGa" >
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-role="form-group" className="FormGroup___2qhXh arrowRight">
                        <div className="FormGroup___Rc1SA" ><label>单位地址</label>
                            <div className="Location___1dShG" ><span ref='workplace' className="Location___1_K-1" onClick={this.showadress.bind(this)}>{this.state.province} {this.state.area1} {this.state.area2}</span>
                            <i className="iconfont icon-xinyongrenzhengyetiaozhuan Location___2nq8r"></i>
                                <div className={this.state.showadress?'Modal___3X1Gj Modal___U3o4P':"Modal___3X1Gj Modal___1rt0o"}>
                                    <div className="Location___1JRyr">
                                        <div className="Location___dpeeu"><a onClick={this.hideadress.bind(this)}> 取消 </a><a className="theme-classNameic font-color-white bg-color" onClick={this.hideadress.bind(this)}> 完成 </a></div>
                                        <div className="Location___2_lkZ">
                                            <div className="Location___1BPn9">                                                                      
                                               {
                                                    (()=>{
                                                        if(this.state.city.data){
                                                        
                                                        return this.state.city.data.map((item,index)=>{
                                                            return( <li  key={index}  onClick={this.cities.bind(this,index)} className={this.state.provinceindex==index?"theme-classNameic font-color":''} >{item.name}</li>)
                                                        })  

                                                    }
                                                                            
                                                    })()
                                                  
                                                }
                                            </div>
                                            <div className="Location___1BPn9">
                                                
                                                {
                                                    
                                                   (()=>{
                                                    
                                                        if(this.state.cities.city){
                                                        
                                                        return this.state.cities.city.map((item,index)=>{
                                                            return( <li  key={index} onClick={this.area.bind(this,index)} className={this.state.area1index==index?"theme-classNameic font-color":''}>{item.name}</li>)
                                                        })  

                                                        }
                                                                            
                                                    })()
                                                    
                                                  
                                                }
                                                
                                                
                                            </div>
                                            <div className="Location___1BPn9">
                                               
                                                {
                                                    
                                                   (()=>{
                                                    
                                                        if(this.state.area){
                                                      
                                                        return this.state.area.map((item,index)=>{
                                                            return( <li  key={index} onClick={this.area1.bind(this,index)} className={this.state.area2index==index?"theme-classNameic font-color":''}>{item}</li>)
                                                        })  

                                                        }
                                                                            
                                                    })()
                                                    
                                                  
                                                }
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display: 'none'}}>
                                    <div data-role="xlib-toast" className="Toast___2hwGa" >
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-role="form-group" className="FormGroup___2qhXh">
                    <div className="FormGroup___Rc1SA"><label>学历</label>
                        <div data-role="xlib-select" className="Select___37wsQ">
                            <div className="Select___1uNMg">
                                <div className="Select___3CZzX"><i className="Select___2tk0N"></i></div>
                            </div><select className="Select___3O2LI Select___31_AX">
                                <option value="" ref='education'>请选择学历</option>
                                <option value="10">高中及以下</option>
                                <option value="4">中专</option>
                                <option value="5">大专</option>
                                <option value="6">本科</option>
                                <option value="7">硕士</option>
                                <option value="8">博士</option>
                            </select><span className="Select___3C4GF" style={{display:'none'}}>无效的值...</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div data-role="form-group" className="FormGroup___2qhXh arrowRight">
                    <div className="FormGroup___Rc1SA"><label >现居住地</label>
                        <div className="Location___1dShG"><span ref="nowplace" onClick={this.nowshowadress.bind(this)} className="Location___1_K-1">{this.state.nowprovince} {this.state.nowarea1} {this.state.nowarea2}</span>
                        <i className="iconfont icon-xinyongrenzhengyetiaozhuan Location___2nq8r"></i>
                            <div className={this.state.nowshowadress?'Modal___3X1Gj Modal___U3o4P':"Modal___3X1Gj Modal___1rt0o"}>
                                <div className="Location___1JRyr">
                                    <div className="Location___dpeeu"><a onClick={this.nowshowadress.bind(this)}> 取消 </a><a className="theme-classNameic font-color-white bg-color" onClick={this.nowshowadress.bind(this)}> 完成 </a></div>
                                    <div className="Location___2_lkZ">
                                        <div className="Location___1BPn9">
                                            <li>北京市</li>
                                             {
                                                    (()=>{
                                                        if(this.state.nowcity.data){
                                                        
                                                        return this.state.nowcity.data.map((item,index)=>{
                                                            return( <li  key={index}  onClick={this.nowcities.bind(this,index)}  >{item.name}</li>)
                                                        })  

                                                    }
                                                                            
                                                    })()
                                                  
                                                }
                                            
                                        </div>
                                        <div className="Location___1BPn9">
                                            <li className="theme-classNameic font-color">天津市</li>

                                                {
                                                    
                                                   (()=>{
                                                    
                                                        if(this.state.nowcities.city){
                                                        
                                                        return this.state.nowcities.city.map((item,index)=>{
                                                            return( <li  key={index} onClick={this.nowarea.bind(this,index)} >{item.name}</li>)
                                                        })  

                                                        }
                                                                            
                                                    })()
                                                    
                                                  
                                                }
                                        </div>
                                        <div className="Location___1BPn9">
                                            <li className="theme-classNameic font-color">和平区</li>
                                            {
                                                    
                                                   (()=>{
                                                    
                                                        if(this.state.nowarea){
                                                      
                                                        return this.state.nowarea.map((item,index)=>{
                                                            return( <li  key={index} onClick={this.nowarea1.bind(this,index)} >{item}</li>)
                                                        })  

                                                        }
                                                                            
                                                    })()
                                                    
                                                  
                                                }
                                                
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:'none'}}>
                                <div data-role="xlib-toast" className="Toast___2hwGa">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div data-role="form-group" className="FormGroup___2qhXh clearfix">
                    <div className="FormGroup___Rc1SA"><label>Ta是我的</label>
                        <form data-role="button-select" className="ButtonSelect___31h5z">
                            <div className="ButtonSelect___2pAHn"><input type="radio" id="btn_0" name="opt" value="parents" readOnly="" /><label data-value="parents" htmlFor="btn_0">父母</label></div>
                            <div className="ButtonSelect___2pAHn"><input type="radio" id="btn_1" name="opt" value="spouse" readOnly="" /><label data-value="spouse" htmlFor="btn_1">配偶</label></div>
                        </form>
                    </div>
                </div>
                <div data-role="form-group" className="FormGroup___2qhXh">
                    <div className="FormGroup___Rc1SA"><label>联系人</label>
                        <div data-role="xlib-input" className="Input___3_uXR" ><input ref='connect' placeholder="请填写联系人真实姓名" maxLength="10" className="Input___3w_BR" /></div>
                    </div>
                </div>
                <div data-role="form-group" className="FormGroup___2qhXh">
                    <div className="FormGroup___Rc1SA"><label>手机号码</label>
                        <div data-role="xlib-input" className="Input___3_uXR" ><input ref='phonenumber' placeholder="请填写联系人11位手机号" maxLength="11" className="Input___3w_BR" /></div>
                    </div>
                </div>
            </div>
            <div className="tips">* 我来贷向您承诺：不会泄露您的借款信息</div>
            <div className="actions"><Link to="/jddv3/otherProveAuth" className="btn theme-classNameic font-color-white bg-color border-color box-shadow"   onClick={this.props.step3.bind(this)}>提交极速审核</Link ></div>
            <div className="popup" style={{display:'none'}}>
                <div className="alert AlertPromptDialog___3q22C">
                    <div className="theme-classNameic img-auditing-bg AlertPromptDialog___1v-bS">
                        <div className="theme-classNameic img-auditing-scale AlertPromptDialog___gl9ST"></div>
                    </div>
                    <div className="AlertPromptDialog___58_Vg">正在极速审核...</div>
                </div>
            </div>
            <div style={{display:'none'}}>
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
        step3(){
           
            dispatch({
                type:"step3",
                
                
                work:this.state.recommend,
                jointime:this.refs.jointime.value,
                workplace:this.refs.workplace.value,
                education:this.refs.education.value,
                nowplace:this.refs.nowplace.value,
                connect:this.refs.connect.value,
                phonenumber:this.refs.phonenumber.value

            })

        }
        
    }
})(profile);
