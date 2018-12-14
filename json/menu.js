{
	"code" :0,
	"msg" :"ok",
	"data":[{
		"title":"首页",
		"icon": "layui-icon-home",
		"href": "/"
	},{
		"title":"列表页",
		"icon": "layui-icon-unorderedlist",
		"childs":[{
			"title": "表格列表",
			"href":"/list/table/id=1"
		},{
			"title": "卡片列表",
			"href":"/list/card"
		}]
	},{
		"title":"详情页",
		"icon": "layui-icon-container",
		"childs":[{
			"title": "工作计划",
			"href":"/detail/plan"
		},{
      "title":"数据统计",
      "href": "/chart/index"
    }]
	},{
		"title":"表单页",
		"icon": "layui-icon-file-exception",
		"childs":[{
			"title": "表单元素",
			"href":"/form/basic"
		},{
			"title": "表单组合",
			"href":"/form/group"
		}]
	},{
		"title":"异常页",
		"icon": "layui-icon-error",
		"childs":[{
			"title": "403",
			"href":"/exception/403"
		},{
			"title": "404",
			"href":"/exception/404"
		},{
			"title": "500",
			"href":"/exception/500"
		}]
	},{
		"title": "新增模块",
		"icon": "layui-icon-experiment",
		"notice":3,
		"childs":[{
			"title": "admin",
			"href":"/module/admin"
		},{
			"title": "helper",
			"href":"/module/helper"
		},{
			"title": "loadBar",
			"href":"/module/loadbar"
		}]
	},{
		"title": "图标",
		"icon": "layui-icon-star",
		"href":"/icon/index"
	},{
		"title": "多级导航",
		"icon": "layui-icon-apartment",
		"childs":[{
			"title": "Dota2",
			"childs":[{
				"title": "敌法师1",
				"childs":[{
					"title": "法力损毁"
				},{
					"title": "闪烁"
				},{
					"title": "法术护盾"
				},{
					"title": "法力虚空"
				}]
			},{
				"title": "帕吉",
				"childs":[{
					"title": "肉钩"
				},{
					"title": "腐烂"
				},{
					"title": "腐肉堆积"
				},{
					"title": "肢解"
				}]
			}]
		},{
			"title": "LOL",
			"childs":[]
		}]
	}]
}
