import React, {
	Component
} from 'react';
//import './Xfoot.css'

import {connect} from 'react-redux';
//import { Link } from "react-router-dom";
class Gconfirm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			confirmShow:false,
			Agreement:false,
			arr:"",
			confirmImgUrl:""
		};
	}
	
	confirmClick(){
		this.setState({
			confirmShow:!this.state.confirmShow
		})
	}
	
	Agreement(){
		this.setState({
			Agreement:!this.state.Agreement
		})
	}
	
	componentDidMount(){
		//console.log(this.props.confirmImg)
			this.setState({
				arr:this.props.confirmArr
			})
		let res =  decodeURI(this.props.location.search); 
		res=res.slice(1)
		this.setState({
			confirmImgUrl:res
		})
		console.log(res)
	}
	
	
	
	render() {
		return(
			<div>
				<div className="confirm-container">
							<div className="goodgadget-container"><img src={this.state.confirmImgUrl} className="goodgadget-pic" />
								<div className="goodgadget-type"><span className="goodgadget-name">{this.props.confirmArr.skuName}</span>
								<span className="goodgadget-params">
								规格：{this.props.confirmArr.attributeOptions["颜色"]}/{this.props.confirmArr.attributeOptions["内存"]}/{this.props.confirmArr.attributeOptions.rentTerm}个月租满即送/租完即送</span>
								<span className="goodgadget-amount">
								{
									(()=>{
										
										return (`总租金： ￥${this.props.confirmArr.rent}.00×${this.props.confirmArr.attributeOptions.rentTerm}期`)
									})()
								}
								</span>
								</div>
							</div>
							<div className="gap-20"></div>
							<ul className="money-container">
								<li className="money-grey">总租金<span className="money-currency" >{this.props.confirmArr.attributeOptions.rentTerm*this.props.confirmArr.rent}</span></li>
								<li className="money-black">月租金<span className="money-currency">{`${this.props	.confirmArr.rent}.00`}</span></li>
								
								<li className="money-black">意外保障费<span className="money-currency">429.00</span></li>
								<li className="money-grey">租期<span>共{this.props.confirmArr.attributeOptions.rentTerm}个月</span></li>
								<li className="money-grey">租金付款方式<span>银行卡代扣</span></li>
							</ul>
							<div className="gap-20"></div>
							<div className="confirm-footer">
								<div className="confirm-agree">
								<img src="https://mf.wolaidai.com/aif-lease//file/e294924c007a325875ef143e64f21733.png" className={this.state.confirmShow? "confirm-checked" : "confirm-checked hidden"} onClick={this.confirmClick.bind(this)} />
								{
									(()=>{
										if(this.state.confirmShow){
											return 
										}else{
											return (<div onClick={this.confirmClick.bind(this)} className="confirm-unchecked"></div>)
										}
									})()
								}
								
								我已阅读并同意
								<button className="confirm-protocol" onClick={this.Agreement.bind(this)}>《租赁服务协议》</button></div>
								<button className="confirm-submit" disabled="">提交免押评估</button></div>
							
							
							
							
							<div className={this.state.Agreement?"modal-container":"modal-container hidden"}>
								<div className="modal-content ">
									<div className="protocol-box">
										<div className="box-header">《租赁服务协议》<span className="protocol-close" onClick={this.Agreement.bind(this)}>X</span></div>
										<div className="protocol-content">
											<div className="protocol-text-box">
												<h3 className="title">融资租赁服务合同</h3>
												<p className="section">甲方（出租方）：横琴星盈融资租赁有限公司</p>
												<p className="section">联系地址：广东省深圳市南山区科苑南路 (深圳湾段) 3331号阿里巴巴大厦T2座10层</p><br /><br /><br /><br />
												<p className="section">乙方（承租方）：</p>
												<p className="section">身份证号码：</p>
												<p className="section">联系地址：</p>
												<p className="section">联系电话：18648939539</p><br /><br />
												<p className="section fb">特别提醒：在乙方签订本合同前，乙方应审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、授权条款、法律适用和争议解决条款。一旦乙方点击“确认”本合同，即视为乙方已阅读、理解并接受本合同以及本平台各类规则，并对本合同条款的含义及相应的法律后果已全部知晓并充分理解，同意受本合同的约束并承担相应的责任和义务。</p><br />
												<p className="section fb">为了维护乙方的合法权益，甲方提醒乙方特别关注本合同条款中的加粗及加下划线部分，请务必仔细阅读。如乙方不同意本合同任一条款，请停止操作。</p>
												<p className="section indent-2">甲方是一家经批准设立的融资租赁公司，具有开展融资租赁业务的资格，拥有并运营淘新机平台（包括 “淘新机”移动手机APP、微信公众号及H5页面，以下简称“本平台”）。乙方为年满18周岁且具有完全民事行为能力的中华人民共和国公民（包括香港特别行政区永久性居民、澳门特别行政区永久性居民以及台湾地区居民），甲乙双方就乙方向甲方申请融资租赁服务事宜，经友好协商一致，签署本《融资租赁服务合同》（下称“本合同”）。</p>
												<p className="section fb">1. 定义与解释</p>
												<p className="section indent-2">本合同中的下列词语具有如下含义，另有约定除外：</p>
												<p className="section r-indent-1">1.1融资租赁（直接租赁）：本合同项下的融资租赁方式为直接租赁。具体是指甲方根据乙方的需求，出资向供应商购买租赁物并租给乙方使用，乙方则分期向甲方支付租金，在租赁期内租赁物的所有权属于甲方所有，乙方仅拥有租赁物的占有和使用权。</p>
												<p className="section r-indent-1">1.2租赁物：指由甲方根据乙方的需求向供应商出资购买，以融资租赁的方式出租给乙方使用的物件，即本合同附件1《租赁物清单》中列示的设备及物品。</p>
												<p className="section r-indent-1">1.3供应商：指租赁物的厂商、制造商或销售商等。</p>
												<p className="section r-indent-1">1.4租金：指依据本合同的约定，乙方应向甲方支付的租赁物的租赁对价。</p>
												<p className="section r-indent-1">1.5买断费：乙方为取得租赁物的所有权而向甲方支付的费用，买断费在租赁期满后约定时间内一次性支付。买断费=租赁物官方建议零售价*买断系数-已付租金，买断系数随市场情况波动，以买断时间当时本平台公示的买断系数为准。</p>
												<p className="section r-indent-1">1.6租金支付日：为租金到达甲方指定账户之日，遇节假日则租金支付日提前至节假日前一银行工作日。</p>
												<p className="section r-indent-1">1.7起租日：起租日为物流系统记录的乙方签收租赁物当日。</p>
												<p className="section r-indent-1">1.8归还：指租赁期届满，乙方按本合同的要求将租赁物及其配件全部归还给甲方并结清所有费用，由甲方自行处理租赁物。</p>
												<p className="section r-indent-1">1.9买断：在租期届满前，因乙方主动向甲方提出买断申请，或乙方触犯双方约定的买断条件的情况下，乙方向甲方支付完租金、买断费、、赔偿金（如有）、逾期违约金（如有）后即获得租赁物的所有权。</p>
												<p className="section r-indent-1">1.10中国法律：指中华人民共和国法律法规，不包括香港特别行政区、澳门特别行政区和台湾地区的法律法规。</p>
												<p className="section fb">2. 租金及支付</p>
												<p className="section r-indent-1">2.1本合同项下的租赁物、租赁期数、租金总额、租金支付时间详见本合同附件1的约定，具体的租金支付计划将在乙方账单进行展示。</p>
												<p className="section r-indent-1">2.2本合同项下的租金按月支付，租赁期内乙方不得提前支付。乙方应于租金支付日当日18:00前将租金存入乙方绑定的银行账户或第三方支付机构账号中。乙方同意在支付本合同项下租金时，不可撤销地授权甲方及其合作的第三方支付机构从乙方绑定的银行账户或第三方支付机构账号中，划扣与乙方租金等额的资金至甲方账户。若乙方未按照前述约定及时存入租金，或者乙方的上述账户内的余额不足以偿还当期全部租金，因此产生的任何法律后果均由乙方自行承担。</p>
												<p className="section r-indent-1">2.3在任何情况下，无论因何种原因（包括但不限于第三方支付机构或者银行系统原因等）导致甲方指定的收款账户在租金支付日当日24时或之前，未收到或未足额收到乙方支付的当期租金的，视为乙方逾期，乙方需向甲方支付逾期违约金，在乙方付清当期全部租金之前，逾期违约金的计算不停止。</p>
												<p className="section r-indent-1 fb underline">2.4乙方逾期付款的，若任何时候甲方发现乙方绑定的银行账户或第三方支付机构账号有余额，乙方按照先前期、后当期、同期中按实现债权费用（包括但不限于律师费、诉讼费、仲裁费、实现债权产生的交通费、差旅费、执行费等）、逾期违约金、逾期租金；当期租金、买断费的顺序予以清偿。如账户内余额不能完全清偿，乙方还应继续履行付款义务。甲方有权根据乙方的信用状况和甲方的风险政策单方面变更前述清偿顺序，而无需另行通知乙方。</p>
												<p className="section r-indent-1 fb underline">2.5本合同所约定的租金支付义务是无条件的，乙方不得以与供应商纠纷等第三人原因、租赁物灭失/毁损、国家政策调整/政府行为等客观情况发生变化而要求迟延支付或者减免。</p>
												<p className="section fb">3. 租赁物的交付及瑕疵处理</p>
												<p className="section r-indent-1">3.1 甲方应按乙方订单要求通知供应商发货，由乙方在指定地点、时间接收租赁物。乙方签收后，即视为出租人向承租人履行交付租赁物的义务。</p>
												<p className="section r-indent-1">3.2租赁物未能交付、延迟交付、交付不符合约定和质量瑕疵的索赔权归甲方所有。甲方可将索赔权部分或全部转让给乙方，由乙方办理有关索赔事宜，索赔费用和索赔后果由乙方承担和享有。乙方若要求甲方协助的，应向甲方发出书面协助通知（该通知应包含协助事项和响应时间等要素），甲方在合理的范围内给予必要协助。</p>
												<p className="section r-indent-1">3.3租赁期间，租赁物有产品质量问题且在保修期间的，乙方应将租赁物直接邮寄给厂商，按照厂商规定的条件进行保修；不在保修期间的，乙方应自行将租赁物寄至甲方指定的维修商进行维修，产生的维修费用由乙方负担。本合同项下邮寄产生的快递费用遵循“谁邮寄谁付费”的原则。寄送过程中耗费的时间仍算在租期内，不予顺延。</p>
												<p className="section r-indent-1 fb underline">3.4乙方不得以租赁物瑕疵、维修或更换、保养等为由拒付、迟延或不足额支付租金、买断费（如有）。</p>
												<p className="section fb">4. 租赁物的权属</p>
												<p className="section r-indent-1">4.1 在乙方完全清偿本合同项下的所有租金、买断费（如有）、赔偿费（如有）、逾期违约金（如有）前，甲方对租赁物拥有完整的所有权。在租赁期内，乙方仅拥有租赁物的占有和使用权。</p>
												<p className="section r-indent-1">4.2非经甲方书面同意，乙方不得将租赁物的整体或部分予以转让、赠与、转租、抵押、质押、出资、放弃占有或采取其他侵犯甲方所有权的行为，否则，视为乙方买断租赁物。</p>
												<p className="section r-indent-1">4.3乙方须自负费用，按照国家或同行业有关规定和惯行的标准，对租赁物谨慎使用并进行良好的保养，维修和检查，使其处于良好，正常的操作状态；对租赁物维修、保养而产生的权益归于甲方。</p>
												<p className="section r-indent-1">4.4因租赁物本身及其瑕疵、设置、保管、使用、转租及运营中致使第三者人身伤害或者财产损失的，甲方不承担任何责任，均由乙方负责处理并承担全部赔偿责任，且不影响乙方支付租金及买断费（如有）等的义务。</p>
												<p className="section r-indent-1">4.5在本合同有效期内，除非乙方违约，甲方不得干预乙方对租赁物的正常使用或擅自取回该租赁物。</p>
												<p className="section r-indent-1">4.6因租赁物本身及其设置、保管、使用及付款等所发生的一切费用，均由乙方负担。</p>
												<p className="section fb">5. 租赁物的毁损及灭失</p>
												<p className="section r-indent-1">5.1租赁期内，租赁物的全部毁损及灭失风险（正常损耗的除外）均由乙方承担。</p>
												<p className="section r-indent-1">5.2租赁物发生毁损或灭失的，乙方应在24小时内通知甲方，甲方有权选择下列方式之一，由乙方负责处理并承担一切费用，且在处理期间不影响乙方支付租金等款项的义务：</p>
												<p className="section r-indent-1">5.2.1将租赁物恢复至能完全正常使用之状态；</p>
												<p className="section r-indent-1">5.2.2更换与租赁物同等型号、状态、性能的设备以完全代替租赁物，本合同继续履行；</p>
												<p className="section r-indent-1">5.2.3如租赁物毁损致无法修复的，视为乙方同意提前买断租赁物，向甲方结清相关费用后，本合同终止。</p>
												<p className="section fb">6. 期末租赁物的处理</p>
												<p className="section">乙方在租赁期满后，可以选择归还或买断租赁物：</p>
												<p className="section r-indent-1">6.1乙方选择归还的，应按本合同的要求将租赁物及其配件寄回给甲方。实际归还之日为甲方签收快递之日，寄回地址由甲方另行在本平台通知。如实际归还之日超过租赁期7日，则视为乙方买断租赁物；</p>
												<p className="section r-indent-1">6.2乙方选择买断的，须于租赁期满后7日内在本平台进行申请操作，乙方向甲方付清全部租金及买断费、逾期违约金（如有）后，租赁物的所有权由甲方转移至乙方。</p>
												<p className="section fb">7. 甲方的权利和义务</p>
												<p className="section r-indent-1">7.1 甲方基于向乙方提供融资租赁服务有向乙方收取租金的权利。</p>
												<p className="section r-indent-1">7.2甲方有权根据租赁物的价值设定、向乙方收取一定的租赁押金。乙方可凭自身的芝麻信用评分享受一定额度的押金减免，具体以支付宝公司规则为准。根据乙方与支付宝公司签订的相关合同约定，押金支付后，暂时冻结在支付宝公司账户，当乙方存在迟延归还租赁物、乙方逾期支付相关款项的情况下，支付宝公司有权对押金进行部分或全额扣减用以抵扣甲方损失。</p>
												<p className="section r-indent-1">7.3对于寄回的租赁物，甲方有权将租赁物内所有数据清除，将其还原至出厂初始状态。如因此造成乙方数据丢失的，甲方不承担任何责任。</p>
												<p className="section r-indent-1">7.4对乙方寄回租赁物附带的遗留物件（如SIM卡，贴膜等）、软件或信息等，甲方不承担保管责任，请乙方在寄回租赁物前妥善处理。</p>
												<p className="section r-indent-1">7.5如遇缺货，甲方有权单独解除本合同并取消订单，不承担任何违约责任。</p>
												<p className="section r-indent-1">7.6甲方有权在确有必要的情况下，自行或授权甲方合作的其他方通过合理的方式向乙方或乙方联系人告知本合同相关情况。</p>
												<p className="section r-indent-1">7.7甲方可通过本平台、电子邮件、手机短信等向乙方公示服务产品、重要提示、促销信息、服务规则等信息。</p>
												<p className="section r-indent-1">7.8甲方有权在法律法规允许的范围内，结合业务发展等实际情况，调整本平台服务范围、各项功能和收费标准，并通过本平台公告等方式及时通知乙方。</p>
												<p className="section r-indent-1">7.9甲方对乙方个人信息负有保密义务，并保证将按照法律法规规定保护乙方提供的信息，但经过乙方同意授权的除外。</p>
												<p className="section fb">8. 乙方的权利和义务</p>
												<p className="section r-indent-1">8.1有权知悉本合同项下的服务内容、使用方法、平台规则等。</p>
												<p className="section r-indent-1">8.2应按本合同约定正确、合理、适当地使用租赁物，如归还的租赁物有损坏情形，应按照本平台赔偿标准支付赔偿金。</p>
												<p className="section r-indent-1">8.3 应按本合同的约定按期足额支付租金、买断费（如有）、赔偿金（如有）、逾期违约金（如有）等各项应付款项。</p>
												<p className="section r-indent-1">8.4除本合同另有约定外，乙方不得提前退租或单方解除本合同，乙方亦不得以向甲方退还租赁物为由，拒不向甲方支付租金、买断费（如有）、赔偿金（如有）、逾期违约金（如有）等各项应付款项。</p>
												<p className="section fb">9. 买断租赁物</p>
												<p className="section fb">发生下列情形之一的，视为乙方同意买断租赁物，乙方应在买断之日起2日内一次性全额支付全部租金、买断费。</p>
												<p className="section r-indent-1 fb underline">9.1本合同正常到期前，乙方向甲方书面提出买断租赁物的申请；</p>
												<p className="section r-indent-1 fb underline">9.2非经甲方书面同意，乙方将租赁物的整体或部分予以转让、赠与、转租、抵押、质押、出资、放弃占有或采取其他侵犯甲方所有权行为的；</p>
												<p className="section r-indent-1 fb underline">9.3乙方因租赁物灭失、丢失、毁损等自身原因确认买断的，需在租赁物灭失、丢失、毁损后的24小时内致电甲方申请，一经甲方同意并确认乙方需支付的全部费用，乙方需在 2日内一次性全额支付，且乙方买断行为一经确认不得变更；</p>
												<p className="section r-indent-1 fb underline">9.4本合同正常到期，乙方未归还租赁物或归还的租赁物不符合本合同约定，租赁期满后第8日即视为乙方同意买断租赁物；</p>
												<p className="section r-indent-1 fb underline">9.5乙方未按本合同约定按时、足额支付当期租金，逾期超过30日；</p>
												<p className="section r-indent-1 fb underline">9.6租赁物无法正常开机、无法在进行系统恢复激活后，通过“设置-通用-关于本机”读取设备序列号或IMEI编号、无法通过连接iTunes识别设备序列号，上述其中任意一种情形发生的；</p>
												<p className="section r-indent-1 fb underline">9.7在检测还原初始数据时发现无法解除设定账户，或乙方拒绝解除；</p>
												<p className="section r-indent-1 fb underline">9.8租赁物存在毁灭性损坏，发生弯折、机壳分离、内屏损坏、机身内组件（线缆）断裂破损或被强行拆成数块的； </p>
												<p className="section r-indent-1 fb underline">9.9租赁物存在私拆、私修行为（被私自送到非官方认证的检修服务商进行修理检测）、维修痕迹的；</p>
												<p className="section r-indent-1 fb underline">9.10租赁物型号、SN号、IMEI号、主要配件（屏幕、主板）等在进行系统恢复后与租赁时记载的不符、涂改、缺失或无法辨识的；</p>
												<p className="section r-indent-1 fb underline">9.11租赁物因加装、移除或改动软硬件所造成的故障，包括因安装未经授权的软件而导致的设备无法正常使用或故障；</p>
												<p className="section r-indent-1 fb underline">9.12其他影响该租赁物的价值、正常使用和再次出租的情形的。</p>
												<p className="section fb">10．违约责任</p>
												<p className="section r-indent-1">10.1乙方有如下任一或多项事件均将被视为构成本合同项下的根本违约：</p>
												<p className="section r-indent-1">10.1.1乙方累计逾期两次或逾期支付租金、买断费（如有）、赔偿金（如有）连续超过30日以上的；</p>
												<p className="section r-indent-1">10.1.2乙方未按本合同约定，在合同正常到期或提前到期后7日内归还租赁物、或者归还的租赁物不符合约定状况的；</p>
												<p className="section r-indent-1">10.1.3乙方未按照本合同约定使用、保管、维护租赁物，或利用租赁物进行其他非法活动的；</p>
												<p className="section r-indent-1">10.1.4乙方向甲方提供的信息缺乏真实性、完整性和有效性的；</p>
												<p className="section r-indent-1">10.1.5其他甲方认为严重影响其在本合同项下权利的事件。</p>
												<p className="section r-indent-1 fb underline">10.2 除本合同另有约定外，乙方出现上述违约事项的，甲方有权采取下列一项或几项措施：</p>
												<p className="section r-indent-1 fb underline">10.2.1若乙方未按本合同约定足额支付当期租金、买断费（如有）、赔偿金（如有）在30日内（包含当日），甲方有权依据本合同约定向乙方收取逾期违约金，逾期违约金为本合同约定的租赁物官方建议零售价*万分之五/日，自逾期之日起至付清全部应付款项之日止。除支付逾期违约金外，乙方仍需支付应付而未付的租金、买断费（如有）、赔偿金（如有），租期不变，本合同继续履行；</p>
												<p className="section r-indent-1 fb underline">10.2.2乙方符合本合同第10.1.1条情形的，应在买断之日起2日内一次性付清逾期违约金、剩余租期的全部租金、买断费、赔偿金（如有），付清后本合同提前终止。逾期违约金为本合同约定的租赁物官方建议零售价*万分之五/日，自逾期之日起至付清全部应付款项之日止；</p>
												<p className="section r-indent-1 fb underline">10.2.3甲方因乙方原因需要强制召回租赁物的，乙方仍然需要支付召回租赁物期间的租金，且因召回过程中消耗的时间不得在租期里顺延；</p>
												<p className="section r-indent-1 fb underline">10.2.4如因乙方原因导致甲方损失的，乙方应承担甲方为实现债权而实际发生的一切费用，包括但不限于调查费、诉讼费、仲裁费、律师费、差旅费、执行费等；</p>
												<p className="section r-indent-1 fb underline">10.2.5乙方同意，甲方发现乙方出现其他任何违约行为的，甲方有权视情节轻重采取以下措施：提前解除合同、要求乙方提前一次性付清全部租金、买断费（如有）、赔偿金（如有）、将乙方列入黑名单、将乙方失信信息报送个人征信机构等。乙方了解上述失信信息可能影响乙方在征信机构处的信用状况，并可能影响乙方申请或办理相关服务（包括但不限于贷款等）。</p>
												<p className="section fb">11. 合同终止</p>
												<p className="section r-indent-1">11.1本合同一经成立，即具有法律效力，双方均应严格遵守，除本合同另有约定外，一方不得擅自变更或解除。</p>
												<p className="section r-indent-1">11.2租赁期满，乙方正常退还租赁物，经甲方完成租赁物检测并结算所有费用后，本合同终止。</p>
												<p className="section r-indent-1">11.3 各种原因导致租赁物被乙方买断的，且甲、乙结清所有费用后，本合同终止。</p>
												<p className="section fb">12．不可抗力</p>
												<p className="section r-indent-1">12.1甲方出现下列任一状况而无法正常运作，致使无法向乙方提供本合同的各项服务，甲方不承担任何违约或赔偿责任，该状况包括但不限于：</p>
												<p className="section r-indent-1">12.1.1在本平台维护期间；</p>
												<p className="section r-indent-1">12.1.2电信设备出现故障不能进行数据传输的；</p>
												<p className="section r-indent-1">12.1.3因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力之因素，造成系统障碍不能执行业务的；</p>
												<p className="section r-indent-1">12.1.4由于黑客攻击、电信部门和其他有信息技术依赖的相关部门、企事业单位技术调整或故障、网站升级、银行方面的问题等原因而造成的服务中断或者延迟。</p>
												<p className="section r-indent-1 fb underline">12.2本合同有效期内，因国家相关主管部门颁布、变更的法令、政策导致甲方不能提供约定服务的，不视为其违约，甲乙双方可根据相关的法令、政策变更条款内容或提前终止本标准条款，在此情况下，乙方已经享受服务而尚未到期或偿还的应付款项，视为立即到期，乙方应立即支付，否则甲方仍有权按照本合同的约定采取合理的救济措施。</p>
												<p className="section r-indent-1 fb underline">12.3甲方有权根据风险及自身业务运营情况需要中止（终止）向乙方提供服务，因此导致乙方无法使用服务或服务受到限制的，不视为甲方违约，在此情况下，乙方已经使用服务而尚未到期或支付的应付款项，视为立即到期，乙方应立即支付。甲方拟终止提供服务的，应当至少提前在平台主页面醒目位置予以公示并通知。</p>
												<p className="section r-indent-1 fb underline">12.4在租赁期限内，对任何因不可抗力事件给乙方造成的损失，甲方不负责任，乙方不得以此为由拒付租金及其他应付款项。</p>
												<p className="section fb">13. 通知与送达</p>
												<p className="section r-indent-1">13.1本合同有效期内，以下信息如发生变更的，其应当在相关信息发生变更的次日将更新后的信息提供给甲方，相关信息包括但不限于：姓名、住址、手机号码、电子邮箱、银行账户等。若因乙方不及时提供上述变更信息而带来的损失或额外费用应由乙方自行承担。</p>
												<p className="section r-indent-1">13.2因法律、法规、政策的变化，或任何一方丧失履行本合同的资格或能力，影响本合同履行的，该方应立即通知对方。</p>
												<p className="section r-indent-1">12.3双方确认并同意，除本合同另有约定外，与本合同有关的任何通知，以书面方式送达方为有效。书面形式包括但不限于：快递、邮件、短信、电子邮件、平台公告等。上述通知应当被视为在下列时间送达：a) 以快递或专人发送，为收件人收到该通知之日；b) 以挂号邮件发送，为发出后7个工作日；c) 以电子邮件发送，为电子邮件成功发出之日；d) 以短信发送，为短信成功发出之日；e) 以平台公告的，自公告发布之日起。</p>
												<p className="section r-indent-1">13.4甲乙双方确认：甲乙双方在本合同文首上的注册地址和住址为其各自的通知送达地址。</p>
												<p className="section fb">14．法律适用及争议解决</p>
												<p className="section r-indent-1">14.1本合同的签订、履行、终止、解释均适用中华人民共和国法律。</p>
												<p className="section r-indent-1">14.2因本合同引起的或与本合同有关的争议，双方均同意提请中国广州仲裁委员会，按照申请仲裁时该会现行有效的网络仲裁规则进行网络仲裁并进行书面审理。仲裁裁决是终局的，对双方均有约束力。</p>
												<p className="section r-indent-1">14.3双方确认以本合同中预留的电子邮箱，作为双方之间往来及涉仲裁时仲裁机构送达相关材料的送达地址；并以预留的手机号码（包括但不限于乙方向甲方提供的联系电话、紧急联系人联系电话等），为短信通知号码。合同任何一方向对方及仲裁机构向双方发出的任何通知，以电子邮件或者短信等形式发出的，成功发出之日，即视为送达。如需变更联络邮箱或者手机号码的，应在发生变更的次日将更新后的信息提供给甲方。如果预留电子邮箱无法送达或无预留电子邮箱的，根据广州仲裁委的网络仲裁规则，双方确认可采用网络仲裁平台为受送达人生成的电子邮箱，作为其电子送达地址。</p>
												<p className="section fb">15．附则</p>
												<p className="section r-indent-1">15.1如果本合同任意条款根据任何法律或法规在任何方面被裁定为无效、不合法或不可强制执行，本合同其余条款不应在任何方面受到影响或损害。双方应通过诚意磋商，争取以法律许可以及双方期望的最大限度内有效的规定取代该等无效、不合法或不可强制执行的条款。</p>
												<p className="section r-indent-1">15.2对本合同作出的任何修改和补充均应为书面形式。双方签署的与本合同有关的补充合同应是本合同不可分割的组成部分，具有与本合同同等的法律效力。</p>
												<p className="section r-indent-1">15.3各方同意并确认，本合同以及与本合同项下交易相关的所有补充合同、通知均可通过电子数据形式呈现，本合同自用户勾选“同意”并点击“确认无误，下一步”按钮（具体名称以平台显示为准）之日起签署，于平台审核通过并加盖平台电子章时生效，至双方在本合同的全部义务履行完毕之日终止。本合同可以有一份或者多份并且每一份具有同等法律效力，并保存在甲方为此设立的专用服务器上备查和保管。</p>
												<p className="section r-indent-1">15.4本合同附件为本合同不可分割的一部分，与本合同具有同等法律效力。本合同附件包括</p>
												<p className="section r-indent-1">租赁物清单</p>
												<div className="protocol-item-box">
													<div className="item-row">
														<div className="left">订单号：</div>
														<div className="right"></div>
													</div>
													<div className="item-row">
														<div className="left">用户姓名：</div>
														<div className="right"></div>
													</div>
													<div className="item-row">
														<div className="left">身份证号码：</div>
														<div className="right"></div>
													</div>
													<div className="item-row">
														<div className="left">租赁物名称及型号：</div>
														<div className="right">深空灰/64G/18个月租满即送/租完即送</div>
													</div>
													<div className="item-row">
														<div className="left">租赁物数量：</div>
														<div className="right">1 台</div>
													</div>
													<div className="item-row">
														<div className="left">租赁期限：</div>
														<div className="right">从 2018年 11月 23日日起至 2019年 17月 23日止</div>
													</div>
													<div className="item-row">
														<div className="left">租金支付日：</div>
														<div className="right"></div>
													</div>
													<div className="item-row">
														<div className="left">租金总额：</div>
														<div className="right">8699</div>
													</div>
													<div className="item-row">
														<div className="left">每期应付租金：</div>
														<div className="right">629.00</div>
													</div>
												</div>
												<p className="section">（以下无正文，为本《融资租赁服务合同》的签署页）</p>
												<p className="section">甲方（出租方）：横琴星盈融资租赁有限公司</p>
												<p className="section">乙方（承租方）：</p>
												<p className="section">签订日期：2018年 11月 23日</p>
												<p className="section">合同更新日期：2018年 11月 23日</p>
												<p className="section">Copyright ©2018~2021 横琴星盈融资租赁有限公司 版权所有 保留一切权利。</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-container hidden">
								<div className="modal-content quota-modal-container">
									<div className="content">
										<h3>温馨提示</h3>
										<p>很抱歉，您当前额度不足，请选择额度范围内价格的商品下单</p>
										<div className="button">重新下单</div><img src="https://mf.wolaidai.com/aif-lease//file/f94b4298e56a65f3aff20a4a570e5e4c.png" alt="关闭" /></div>
								</div>
							</div>
						</div>
			</div>
		)
	}
}
export default connect(
	(state)=>{
		return state;
	},
	(dispatch)=>{
		return {}
	}
)(Gconfirm);