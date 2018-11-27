import React, {
	Component
} from 'react';

import Gfoot from '../../components/Gfoot/Gfoot';
class Gaccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gonglue:false,
			kefu:false,
			kefuList:[
        {
            title:'关于押金',
            content:[
                {
                    Ctitle:"1.押金如何收取？",
                    Cdetail:"用户下单时，根据信用评估结果获取免押额度后，若存在需要冻结的押金金额，需要通过银行卡账户的资金渠道冻结相应的押金金额。租赁服务终止后，淘新机收到归还的商品后7天内进行核对和检测，经核验不存在需要抵扣押金的情形即可解冻该笔押金。"
                },
                 {
                    Ctitle:"2.冻结的押金能否充当租金或者买断金额？",
                    Cdetail:"抱歉，您冻结的押金金额不能抵扣租金或者到期后买断商品的金额，租金会在您的还款日当天通过支付宝免密支付方式还款，到期后若您需要买断商品，买断的金额也需要您自行支付。"
                },
                 {
                    Ctitle:"3.什么时候退还押金？",
                    Cdetail:"租期结束后，您完成回收或买断商品后的7个工作日内，剩余冻结的押金金额我们会退还，具体到账时间以通知时间为准。"
                }
            ],
            isShow:false
        },
        {
            title:'关于租金',
            content:[
                {
                    Ctitle:"1.租金如何支付？",
                    Cdetail:"还款日当天，租金会通过您绑定的银行卡直接扣款，您无需主动还款，避免您因为遗忘导致逾期。"
                },
                 {
                    Ctitle:"2.可以选择主动还租金吗？",
                    Cdetail:"您可以在账单详情选择自主还款。"
                }
            ],
            isShow:false
        },
          {
            title:'关于租期',
            content:[
                {
                    Ctitle:"1.租期从什么时候开始算？",
                    Cdetail:"起租日以发货物流显示签收当日开始计算，租赁时长为12个月，用户需要在起租日次月当日支付上一期的租金。"
                },
                 {
                    Ctitle:"2.可以提前退租吗？",
                    Cdetail:"抱歉，租赁期间暂不支持提前回收和归还商品。"
                }
            ],
            isShow:false
        },
          {
            title:'关于运费',
            content:[
                {
                    Ctitle:"1.商品维修寄送产生的运费由谁支付？",
                    Cdetail:"物流费用“遵循谁寄出谁付费”原则。寄出商品的费用，由淘新机承担，归还商品及维保的运费，由客户承担。"
                },
                 {
                    Ctitle:"2.退换货的运费由谁承担？",
                    Cdetail:"自您签收之日起7天内，因商品质量问题或漏发错发而引起的退换货，运费由我们承担；因您个人原因导致的退换货，在商品未激活且不影响二次销售的情况下，退换货由您承担。"
                }
            ],
            isShow:false
        },
        {
            title:'关于归还',
            content:[
                {
                    Ctitle:"1.合约到期后如何处理？",
                    Cdetail:"您需在租赁期满前决定买断还是归还商品，选择买断的应在7日内支付买断费；选择归还的，应在7日内将商品寄还给淘新机。"
                },
                 {
                    Ctitle:"2.超期忘记归还怎么办？",
                    Cdetail:"您需在合约到期后7日内将商品寄回，若淘新机收到归还商品的日期超出租赁期限7日的，视为用户买断该商品，用户应在买断之日起2日内支付买断费。"
                },
                 {
                    Ctitle:"3.归还商品后，商品里面的隐私会不会泄露？",
                    Cdetail:"淘新机的强大的技术检修中心，有专业的工程师清理数据，保障您隐私安全。请您在归还商品前，自行将设备内的数据、信息等进行清除。如经淘新机专业工程师检测发现商品内还有留存的数据和信息，淘新机会进行彻底清除，如因此造成您数据丢失，淘新机不承担任何责任。"
                }
            ],
            isShow:false
        },
        {
            title:'关于买断',
            content:[
                {
                    Ctitle:"1.如何买断商品？",
                    Cdetail:"我们会在合约到期前的10个自然日内开放买断入口，点击后您将了解到买断需支付的金额，如您认同，可进行支付并买断商品。"
                },
                 {
                    Ctitle:"2.能否提前买断商品？",
                    Cdetail:"租赁期间暂不支持提前买断商品，如您因丢失或商品损坏至无法维修等特殊情况，您需要支付该租赁合约剩余应付租金和买断金额提前买断商品。"
                }
            ],
            isShow:false
        },
        {
            title:'其他常见问题',
            content:[
                {
                    Ctitle:"1.机器丢失或损坏怎么办？",
                    Cdetail:"如机器丢失或毁损，您可以选择以下处理方式：\n（1）将租赁物恢复至能完全正常使用之状态；\n（2）更换与租赁物同等型号、状态、性能的设备以完全代替租赁物，本合同继续履行；\n（3）如租赁物毁损致无法修复的，视为乙方同意提前买断租赁物，向甲方结清相关费用后，本合同终止。\n"
                },
                 {
                    Ctitle:"2.租比买有什么优势？",
                    Cdetail:"租机可以解决机器更换时处理旧机的烦恼，年年租最新款的机器；租金仅需每月支付，减轻一次性购买手机的资金压力；租机可以满足不同群体对手机的使用需求，环保共享，发挥最大价值。"
                },
                 {
                    Ctitle:"3.手机成色如何？",
                    Cdetail:"所售新机皆为全新国行正品。"
                },
                 {
                    Ctitle:"4.可以7天无理由退换货吗？",
                    Cdetail:"您在淘新机租赁的手机，自实际收货日期次日起7天内，手机未拆封、未激活，不影响二次销售，可申请无理由退换货。"
                }
            ],
            isShow:false
        },
       ]
	};
	}
	
	gonglueClick(){
		this.setState({
			gonglue:!this.state.gonglue
		})
	};
	kefuClick(){
		this.setState({
			kefu:!this.state.kefu
		})
	};
	
	dddClick(i){
		let arr = this.state.kefuList;
		arr[i].isShow = !arr[i].isShow;
			this.setState({
			kefuList:arr
		})
		
		
	};
		
	
	render() {
		return(
		<div>
			<div className="app-container" style={{pointerEvents: "initial",display:(this.state.gonglue||this.state.kefu ? "none":"block")}}>
				<ul className="my-container">
					<li onClick={this.gonglueClick.bind(this)}>租机攻略</li>
					<li onClick={this.kefuClick.bind(this)}>客服与帮助</li>
				</ul>
			</div>
			
			<div className="app-container" style={{pointerEvents: "initial"}}>
							<div className="strategy-container" style={{display:(this.state.gonglue ? "block":"none")}}>
								<div className="strategy-top">
									<ul className="step-image">
										<li></li>
										<li></li>
										<li></li>
										<li></li>
									</ul>
									<ul className="step-text">
										<li>选择手机</li>
										<li>&gt;</li>
										<li>0押金支付</li>
										<li>&gt;</li>
										<li>月付租金</li>
										<li>&gt;</li>
										<li>买断/归还/续租</li>
									</ul>
								</div>
								<ul className="strategy-step">
									<li>
										<div className="step-number"><span>1</span></div>
										<div className="step-title">挑选机型</div>
										<p>如，选择iPhone X 银色 256G 12个月</p>
									</li>
									<li>
										<div className="step-number"><span>2</span></div>
										<div className="step-title">0押金，机器到手</div>
										<p>无需支付现金，预授权额度作押金</p>
										<p>预授权不产生费用，无需还款，随机释放</p>
									</li>
									<li>
										<div className="step-number"><span>3</span></div>
										<div className="step-title">月付租金</div>
										<p>每月定期支付月租，资金无压力</p>
									</li>
									<li>
										<div className="step-number"><span>4</span></div>
										<div className="step-title">到期后，买断、还机、续租任您选</div>
										<p>买断：支付尾款，终身拥有</p>
										<p>归还：邮寄归还，每年都能用新机</p>
										<p>续租：申请续租，继续使用，方便灵活</p>
									</li>
								</ul>
								<div className="strategy-advantage">
									<div className="title-outerbox">
										<div className="title-box"><span>租机三大优势</span></div>
									</div>
									<ul>
										<li>
											<div className="advantage-item-title">1.年年享新机：</div>
											<div>租机可以解决机器更换时处理旧机的烦恼，可年年租最新款手机。</div>
										</li>
										<li>
											<div className="advantage-item-title">2.资金无压力：</div>
											<div>租金仅需每月还款，大大减少了一次性购买手机的资金压力。</div>
										</li>
										<li>
											<div className="advantage-item-title">3.便捷易申请：</div>
											<div>只需要简单的申请即可0押金获得手机。</div>
										</li>
									</ul>
								</div>
							</div>
							
							
							<div className="help-container" style={{display:(this.state.kefu? "block":"none")}}>
							<ul>
								
								{
									(()=>{
										return this.state.kefuList.map((item,index)=>{
											
											let contentFn =(()=>{
												return item.content.map((iitem,indexx)=>{
													return (
														<li key={indexx}>
													<div className="question">{iitem.Ctitle}</div>
													<div className="answer">{iitem.Cdetail}</div>
														</li>
													)
												})
											});
											
											return (
												<li key={index}>
									<div className="help-type" onClick={this.dddClick.bind(this,index)}>
										<div>{item.title}</div>
										<div className={this.state.kefuList[index].isShow? "down-bracket":"right-bracket"}  ></div>
									</div>
									<ul className="help-que-ans-box" style={{display:(this.state.kefuList[index].isShow? "block":"none")}}>
										{
											contentFn()
										}
									</ul>
											</li>
											)
										})
									})()
								}

							</ul>
							<a className="help-online" href="tel:10100518">客服电话：10100518</a>
						</div>
							
				</div>
		</div>
		)
	}
}
export default Gaccount;