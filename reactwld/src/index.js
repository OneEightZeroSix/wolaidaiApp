import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

//import './assets/wldbase.css'
//import './assets/credit.css'
//import App from './App';

import Msite from './pages/Msite/Msite.jsx';
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import qs from 'qs'

import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import Apply from './pages/Apply/Apply.jsx';
import idVerification from './pages/IdVerification/idVerification.jsx';
import profile from './pages/Profile/profile.jsx';
import otherProveAuth from './pages/OtherProveAuth/otherProveAuth.jsx';
import creditcard from './pages/Creditcard/creditcard.jsx';




import Gcredit from './pages/Gcredit/Gcredit';
import Gdetail from './pages/Gdetail/Gdetail';
import Gconfirm from './pages/Gconfirm/Gconfirm';


//



import home from './pages/Home/Home.jsx';
//引入热门推荐组件
import financialLife from './pages/FinancialLife/FinancialLife.jsx';
//引入大额简单贷组件
import xsell from './pages/Xsell/Xsell.jsx';
//引入车险消费分期
import insurance from './pages/Insurance/Insurance.jsx';
//引入申请大额贷款
import putIn from './pages/PutIn/PutIn.jsx';
//引入我的贷款
import myBorrow from './pages/MyBorrow/MyBorrow.jsx';
//引入ant的css样式
import 'antd/dist/antd.css';

import * as serviceWorker from './serviceWorker';


//创建store仓库
const store = createStore(function(state = {

  count: 0,
  navId:6666,
  confirmArr:"nihao",
  confirmImg:"",

  longtime:'',
  allmoney:'',
  name:'',
  idcard:'',
  jointime:'',
  workplace:'',
  education:'',
  nowplace:'',
  connect:'',
  phonenumber:'',
  creditcardnumber:''



}, action) {
  const count = state.count
  switch (action.type) {
	//使用示例
    case 'multi':
      return Object.assign({}, state, {name: action.name});
    case 'mainId':
      return {
        ...state,
        navId: action.navId
      };
      case 'confirm':
      return {
        ...state,
        confirmArr: action.confirmArr
      };
    case 'step1':
      return {
        ...state,
        longtime: action.longtime,
        allmoney:action.allmoney
      };
    case 'step2':
      return {
        ...state,
        name: action.name,
        idcard:action.idcard
      };
      case 'step3':
      return {
        ...state,
        name: action.name,
        jointime:action.jointime,
        workplace:action.workplace,
        education:action.education,
        nowplace:action.nowplace,
        connect:action.connect,
        phonenumber:action.phonenumber
      };
      case 'step4':
      return {
        ...state,
        creditcardnumber:action.creditcardnumber
      };
    default:
      return state
  }
});


React.axios = axios; //react中全局引入插件的方式
React.qs = qs;
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>

				
				<Route path="/credit/" component={Gcredit} />
				<Route path="/Gdetail/" component={Gdetail} />
				<Route path="/Gconfirm/" component={Gconfirm} />
				
				
			
				<Route exact path="/" component={Msite} />
       
				<Route path="/jddv3/apply" component={Apply} />
        <Route path="/jddv3/idVerification" component={idVerification} />
        <Route path="/jddv3/profile" component={profile} />
        <Route path="/jddv3/otherProveAuth" component={otherProveAuth} />
        <Route path="/auth/creditcard" component={creditcard} />




				
				<Route path="/financialLife" component={financialLife} />
        <Route path="/insurance" component={insurance} />
			  <Route path="/xsell" component={xsell} />
				<Route path="/putIn" component={putIn} />
        <Route path="/myBorrow" component={myBorrow} />

			</div>
		</Router >
	</Provider>
	, document.getElementById('root'));


serviceWorker.unregister();
