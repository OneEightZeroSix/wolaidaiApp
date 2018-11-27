import React, {
	Component
} from 'react';
//import './Xfoot.css'

//import { Link } from "react-router-dom";
class GDservice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			serviceShow:false
		};
	}
	
	serviceClick(){
		this.setState({
			serviceShow:!this.state.serviceShow
		})
	}
	
	render() {
		return(
			<div>
				<div className="service-container" onClick={this.serviceClick.bind(this)}>
							<div><img src="https://mf.wolaidai.com/aif-lease//file/62dc45960a428659f12b85579140cf59.png" className="service-good" alt="" />信用免押金</div>
							<div><img src="https://mf.wolaidai.com/aif-lease//file/62dc45960a428659f12b85579140cf59.png" className="service-good" alt="" />正品保障</div>
							<div><img src="https://mf.wolaidai.com/aif-lease//file/62dc45960a428659f12b85579140cf59.png" className="service-good" alt="" />7天无理由退货</div>
							<div className="service-angle">
								<div></div>
							</div>
						</div>
				
				<div className={this.state.serviceShow ? "modal-container":"modal-container hidden"} onClick={this.serviceClick.bind(this)}>
							<div className="modal-content service-content">服务说明
								<div className="service-item">
								<img src="https://mf.wolaidai.com/aif-lease//file/62dc45960a428659f12b85579140cf59.png" className="service-good" alt="" />
								<span>信用免押金</span>
								<span>信用好，有机会享受押金全免优惠</span>
								</div>
								<div className="service-item"><img src="https://mf.wolaidai.com/aif-lease//file/62dc45960a428659f12b85579140cf59.png" className="service-good" alt="" />
								<span>正品保障</span>
								<span>100%正品保障，杜绝一切假货，让你购物无忧</span>
								</div>
								<div className="service-item">
								<img src="https://mf.wolaidai.com/aif-lease//file/62dc45960a428659f12b85579140cf59.png" className="service-good" alt="" />
								<span>7天无理由退货</span>
								<span>收货后七天内未拆封未激活，可无理由退货</span>
								</div>
								<div className="service-margin">
								</div>
								<button className="service-close" onClick={this.serviceClick.bind(this)}>关闭</button>
								< /div>
						</div>
				
				<div className="gap-20"></div>
				
			</div>
		)
	}
}
export default GDservice;