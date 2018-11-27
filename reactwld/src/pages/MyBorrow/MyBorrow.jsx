import React, { Component } from 'react';
import { Link } from "react-router-dom"; //跳转路由
import "./MyBorrow.css";
import borrow from "../../assert/img/borrow.png";
class MyBorrow extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="loan-empty" data-reactid=".0.4">
              <img src={borrow} data-reactid=".0.4.0"/>
              <div className="tip-msg" data-reactid=".0.4.1">您还没有贷款</div>
              <button className="btn-money" data-reactid=".0.4.2">立即申请</button>
            </div>
        );
    }
}
export default MyBorrow;