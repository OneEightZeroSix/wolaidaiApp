import React, { Component } from 'react';
import {Link } from "react-router-dom";//跳转路由

class Home extends Component {
 constructor(props) { 
        super(props);
        this.state = {
          
        }
    }
   
  render() {
    return (
		<div>
			<Link to="/FinancialLife">跳转到热门推荐页面</Link><br/>
      <Link to="/Insurance">跳转到消费分期页面</Link>
		</div>
    );
  }
}
export default Home;