export default {
	name:'article',
	title: 'Article',
	type: 'document',
	fields: [{
		name:'title',
		title:'Title',
		type:'string'
	},{
		name:'about',
		title:'About',
		type:'string'
	},{
		name:'categorie',
		title:'Categorie',
		type:'string'
	},{
		name:'image',
		title:'Image',
		type:'image',
		options:{
			hotspot: true
		}
	},{
		name:'userID',
		title:'UserID',
		type:'string'
	},{
		name:'postedBy',
		title:'PostedBy',
		type:'postedBy'
	},{
		name:'comments',
		title:'Comments',
		type:'array',
		of:[{type:'comment'}]
	}
]
}