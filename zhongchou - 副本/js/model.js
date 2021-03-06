/*人*/
app.models.member=Backbone.Model.extend({
	defaults:{
		"id":"",/*id*/
		"type":1,/*类型,1普通用户2管理用户*/
		"userName":"",/*用户名*/
		"image":"",/*头像*/
		"place":"",/*地址*/
		"phone":"",/*手机*/
		"email":"",/*邮箱*/
		"name":"",/*真实姓名*/
		"contacts":"",/*联系人*/
		"contactsPhone":"",/*联系人电话*/
		"record":"",/*学历*/
		"university":"",/*毕业院校*/
		"job":"",/*职位*/
		"company":""/*公司*/
		}
	});
/*管理员*/
app.models.admin=Backbone.Model.extend({
	defaults:{
		"id":"",/*id*/
		"userName":"",/*帐号*/
		"client":false,/*用户管理*/
		"admin":false,/*管理员管理*/
		"announcement":false,/*公告管理*/
		"recruit":false,/*招聘管理*/
		"company":false,/*企业信息管理*/
		"product":false,/*商品管理*/
		"promotion":false,/*宣传管理*/
		"redPacket":false/*红包管理*/
		}
	});
/*商品*/
app.models.product=Backbone.Model.extend({
	defaults:{
		"id":"",/*id*/
		"title":"",/*标题*/
		"subhead":"",/*副标题*/
		"image":[],/*图片*/
		"price":0,/*价格*/
		"costPrice":0,/*原价*/
		"money":0,/*金额*/
		"payed":0,/*以筹金额*/
		"payedCount":0,/*众筹笔数*/
		"copy":0,/*份数*/
		"maxTime":0,/*持有期限*/
		"minUnit":0,/*最小单位*/
		"maxUnit":0,/*最大单位*/
		"tax":0,/*税费预算*/
		"area":0,/*面积*/
		"costUnitPrice":0,/*原单价*/
		"UnitPrice":0,/*单价*/
		"developer":"",/*开发商*/
		"place":"",/*地址*/
		"decorate":"",/*装修状况*/
		"propertyType":"",/*物业类型*/
		"stratTime":0,/*开始时间*/
		"buildTime":0,/*建造时间*/
		"rightType":"",/*产权类型*/
		"haveLease":"",/*有否租约*/
		"yearReturn":""/*年收益率*/
		}
	});
/*公告/招聘/企业信息*/
app.models.message=Backbone.Model.extend({
	defaults:{
		"id":"",/*id*/
		"title":"",/*标题*/
		"message":"",/*内容*/
		"start":0,/*生效时间*/
		"end":0/*结束时间*/
		}
	});
/*职员/常见问题/图片展示众筹模式众筹步聚*/
app.models.imageAndWord=Backbone.Model.extend({
	defaults:{
		"id":"",/*id*/
		"name":"",/*名字*/
		"image":"",/*头像*/
		"dsc":"",/*描述*/
		"job":"",/*职位*/
		"group":""/*分组*/
		}
	});
/*红包*/
app.models.redPacket=Backbone.Model.extend({
	defaults:{
		"id":"",/*id*/
		"userId":"",/*用户id*/
		"money":0,/*金额*/
		"type":0,/*类型*/
		"strat":0,/*发放日期*/
		"end":0/*消费日期*/
		}
	});