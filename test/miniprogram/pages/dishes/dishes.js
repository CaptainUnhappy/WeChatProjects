var app = getApp()
Page({
	data: {
		hidden:false,
		curNav:1,
		curIndex:0,
		cart:[],
		cartTotal:0,
		navList:[
			{
				id:1,
				name:'01'
			},
			{
				id:2,
				name:'02'
			},
			{
				id:3,
				name:'03'
			},
			{
				id:4,
				name:'04'
			}
		],
		dishesList:[
			[
				{
					name:"001",
					price:100,
					num:1,
					id:1
				},
				{
					name:"002",
					price:100,
					num:1,
					id:2
				},
				{
					name:"003",
					price:100,
					num:1,
					id:3
				}
			],
			[
				{
					name:"004",
					price:100,
					num:1,
					id:4
				},
				{
					name:"005",
					price:100,
					num:1,
					id:5
				}
			],
			[
				{
					name:"006",
					price:100,
					num:1,
					id:6
				},
				{
					name:"007",
					price:100,
					num:1,
					id:7
				}
			],
			[
				{
					name:"008",
					price:100,
					num:1,
					id:8
				},
				{
					name:"009",
					price:100,
					num:1,
					id:9
				}
			]
		],
		dishes:[]
	},
	loadingChange () {
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},2000)
	},
	selectNav (event) {
		let id = event.target.dataset.id,
			index = parseInt(event.target.dataset.index);
			self = this;
		this.setData({
			curNav:id,
			curIndex:index
		})
	},
	// 选择菜品
	selectDish (event) {
		let dish = event.currentTarget.dataset.dish;
		let flag = true;
		let	cart = this.data.cart;
		
		if(cart.length > 0){
			cart.forEach(function(item,index){
				if(item == dish){
					cart.splice(index,1);
					flag = false;
				}
			})
		}
		if(flag) cart.push(dish);
		this.setData({
			cartTotal:cart.length
		})
		this.setStatus(dish)
	},
	setStatus (dishId) {
		let dishes = this.data.dishesList;
		for (let dish of dishes){
			dish.forEach((item) => {
				if(item.id == dishId){
					item.status = !item.status || false
				}
			})
		}
		
		this.setData({
			dishesList:this.data.dishesList
		})
	},
	onLoad () {
		this.loadingChange()
	}
})