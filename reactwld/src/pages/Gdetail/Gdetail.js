import React, {
	Component
} from 'react';
//import './Xfoot.css'

import { Route } from "react-router-dom";

import GDimgtop from '../../components/Gdetailmain/GDimgtop';
import GDservice from '../../components/Gdetailmain/GDservice';
import GDtabs from '../../components/Gdetailmain/GDtabs';
import GDsummary from '../../components/Gdetailmain/GDsummary';
//import { Link } from "react-router-dom";
class Gdetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pickTab: 0,
			tabs: "",
			detailObj:"",
			topimg:"",
			tabsImg:"",
			tabsImgcs:"",
			tabsImgfw:"",
			topPrice:"4999.00",
			summaryImg:""
		};
	}

	loadMore() {
		let res =  decodeURI(this.props.location.search); 
		let hashArr = res.slice(1).split("&");
		let objkl = {}
		hashArr.forEach(function(item,index){
			let arrKey = item.split("=");
			objkl[arrKey[0]] = arrKey[1];
		})
		//console.log(objkl)
		let GDurl = "https://mf.wolaidai.com/lease/api/v1/goods/"+objkl.gdid+"/detail"
		//post请求的参数写法
		//		let postData = React.qs.stringify({
		//					page: 4,
		//					limit: 10
		//				});
		React.axios({
			method: 'get',
			url: GDurl
		}).then((response) => {
			//console.log(response.data.result);
			
			this.setState({
				
				detailObj: response.data.result,
				topimg:response.data.result.spuDocument.spuPrimarys,
				tabsImg:response.data.result.spuDocument.spuDetails,
				tabsImgcs:response.data.result.spuDocument.spuParams[0],
				tabsImgfw:response.data.result.spuDocument.leaseExplanations[0],
				topPrice:response.data.result.skus[0].price,
				summaryImg:response.data.result.spuDocument.spuPrimarys[0].documentUrl
			})

		}).catch((error) => {
			console.log(error)
		})
	}
	//react的生命周期
	componentDidMount() {
		this.loadMore();
	}

	
	
	render() {
		return(
			<div className="route-container">
				<div className="good-container">
					<GDimgtop topimg={{topimgUrl:this.state.topimg,topimgName:this.state.detailObj,topPrice:this.state.topPrice}} />
					<GDservice />
					<GDtabs tabsimg={{imgjs:this.state.tabsImg,imgcs:this.state.tabsImgcs,imgfw:this.state.tabsImgfw}} />
					<GDsummary summaryObj={this.state.detailObj.attributes} showImg={this.state.summaryImg} skus={this.state.detailObj.skus}/>
				</div>
			</div>
		)
	}
}
export default Gdetail;