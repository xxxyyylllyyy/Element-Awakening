// $(document).ready(function() {
//     $('#userTable').DataTable( {
//         "dom": 'rt<"bottom"fipl><"clear">'
//     } );
// } );

$(function() {

    /*初始化table*/
    $('#userTable').dataTable({
        "dom": 'rt<"bottom"filp><"clear">',
        // "dom": '<"top"i>rt<"bottom"flp><"clear">',
        "bSort": false,
        "autoWidth": false,
        "bStateSave": true, //状态保存
        //"searching":false,//搜索输入框显示
        "iDisplayLength": 10, //每页显示10条数据
        //"bServerSide":true,// 开启服务端处理模式
        "sAjaxSource": "http://" + window.location.host + "/rems/services/api/historyTrouble/pageGetAllHistoryTrouble",
        "fnServerParams": function(aoData) { //搜索字段 
            aoData.push({
                "name": "palyerNum",
                "value": $("input[name='palyerNum']").val()
            }, {
                "name": "palyerId",
                "value": $("select[name='palyerId']").val()
            }, {
                "name": "nickName",
                "value": $("select[name='nickName']").val()
            })
        },

        "aoColumns": [{
                "mData": "palyerId" //角色id
            }, {
                "mData": "nickName" //昵称
            }, {
                "mData": "level" //等级
            }, {
                "mData": "palyerNum" //帐号
            }, {
                "mData": "channel" //渠道
            }, {
                "mData": "server" //服务器
            },
            {
                "mData": "money" //充值金额
            },
            {
                "mData": "virtual-recharge" //虚拟充值
            }, {
                "mData": "Hold-diamond" //持有钻石
            }, {
                "mData": "Hold-gold" //持有金币
            }, {
                "mData": "strength" //体力
            },
            //  {
            //      "mData":"id",
            // 		"bSortable":false,
            // 		"mRender":function(data,type,full){return "<button onclick='updateMaintenancePlan(" + data + ")'>修改</button>";}
            //   },
            {
                "mData": "id",
                "bSortable": false,
                "mRender": function(data, type, full) { return "<button onclick='deleteMaintenancePlan(" + data + ")'>删除</button>"; }
            }
        ],
        // "bProcessing" : true, //DataTables载入数据时，是否显示‘进度’提示  
        "bPaginate": true, //是否显示（应用）分页器  
        "oLanguage": { //国际化配置  
            "sProcessing": "正在获取数据，请稍后...",
            // "sProcessing": "<img src='assets/img/ajax-loading.gif' />", //这里是给服务器发请求后到等待时间显示的 加载gif
            "sLengthMenu": "显示 _MENU_ 条",
            "sZeroRecords": "没有您要搜索的内容",
            "sInfo": "从 _START_ 到  _END_ 条记录 总记录数为 _TOTAL_ 条",
            "sInfoEmpty": "记录数为0",
            "sInfoFiltered": "(全部记录数 _MAX_ 条)",
            "sInfoPostFix": "",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "第一页",
                "sPrevious": "上一页",
                "sNext": "下一页",
                "sLast": "最后一页"
            }
        },
        "fnInitComplete": function(oSettings, json) {
            $("tbody td").removeClass("sorting_1");
            $("[data-toggle='tooltip']").tooltip();
        }
    });

    /*function viewDetails(id) {
		    $.ajax({
		        url: "http://"+window.location.host+"/rems/viewDetails.html?id="+ viewDetailsId,
		    	url: "http://"+window.location.host+"/rems/viewDetails.html",
		        data: {
		            "id": id
		        }, success: function (data) {
		//            table.ajax.reload();
		        	window.location.reload();
		            console.log("点击" + data);
		        }
		    });
		}*/

    //用onclick事件进行跳转


    //搜索
    $("#searchUserInfo").click(function() {
        if ($("#refachForm").valid()) {
            var table = $('#userTable').DataTable();
            table.ajax.reload(null, false);
            $("font[data-toggle='tooltip']").tooltip();
        }
    });



    //重置
    $("#refarchUserInfo").click(function() {
        $("input[name='elevatorPlayGame']").val("");
        $("select[name='elevatorAdministerationRegion']").val("");
        $("select[name='faultType']").val("");
        if ($("#refachForm").valid()) {
            var table = $('#userTable').DataTable();
            table.ajax.reload(null, false);
            $("font[data-toggle='tooltip']").tooltip();
        }
    });
    //  solve = function(id){
    // 	swal({
    // 		title:"您确定处理了该反馈",
    // 		text:"处理后将修改为以解决",
    // 		type:"warning",
    // 		showCancelButton:true,
    // 		confirmButtonColor:"#DD6B55",
    // 		confirmButtonText:"处理",
    // 		closeOnConfirm:false
    // 		},function(){
    // 			$.ajax({
    // 	         	async: false,
    // 	         	url:"../services/uc/userMsg/editFeedStatus",
    // 	         	data:{"id":id},
    // 	         	type:'GET',
    // 	         	dataType:'json',
    // 	         	success:function(data){
    // 	         			swal("处理成功！","此反馈已解决","success");
    // 	    				var table = $('#userTable').DataTable();
    // 	    				table.ajax.reload(null, false);
    // 	         	}
    // 	          });
    // 					});
    // 	}


    //  feedBackPhoto = function(dom){
    // 	//捕获页
    // 	 layer.open({
    // 	   type: 1,
    // 	   shade: [0.1, '#000'],
    // 	   shadeClose:true,
    // 	   title: false, //不显示标题
    // 	   content: $(dom).next(), //捕获的元素
    // 	   cancel:function(){

    // 	   }
    // 	 });
    //  }


    //  troubleUploadEdit = function(){
    // 	 var parents = window.parent.document.getElementById('content-main');
    //     var iframe = document.createElement("iframe");
    //     iframe.setAttribute("class", "J_iframe");
    //      iframe.setAttribute("name", "iframe"+tempId);
    //      iframe.setAttribute("width", "100%");
    //      iframe.setAttribute("height", "100%");
    //      iframe.setAttribute("src", "../troubleUploadEdit.html?v="+tempId);
    //      iframe.setAttribute("frameborder", "0");
    //      iframe.setAttribute("data-id", "../troubleUploadEdit.html?v="+tempId);
    //      iframe.setAttribute("seamless", "");
    //     parents.appendChild(iframe);
    //  var tabs = window.parent.document.getElementById('pageTabs');
    //  var tempDate = (new Date()).valueOf() ; 
    //  $(tabs).append("<a id='tab_"+tempDate+"' class='J_menuTab' data-id='../troubleUploadEdit.html?v="+tempId+"'>添加<i class='fa fa-times-circle'></i></a>");
    //  window.parent.openTabs(tempDate);
    //  tempId++;
    //  }


});

function init() {
    optionsResult();
    warningOptionsResult();
}

function optionsResult() {
    $.ajax({
        async: false,
        url: "http://" + window.location.host + "/rems/services/api/area/getAreaName",
        dataType: "text",
        success: function(result) {
            $("#elevatorAdministerationRegion").append(result);
        }
    });

}

function warningOptionsResult() {
    $.ajax({
        async: false,
        url: "http://" + window.location.host + "/rems/services/api/warningTrouble/getWarningType",
        dataType: "text",
        success: function(result) {
            $("#faultType").append(result);
        }
    });

}

function viewDetails(id) {
    /*alert("222");*/
    window.location.href = "http://" + window.location.host + "/rems/viewDetails.html";
}


/*
 *
 * 删除
 * @param name
 */
function deleteMaintenancePlan(id) {
    var msg = "您真的确定要删除吗？\n\n请确认！";
    if (confirm(msg) == true) {
        $.ajax({
            url: "http://" + window.location.host + "/rems/services/api/maintenancePlan/deleteMaintenancePlan",
            data: {
                "id": id
            },
            success: function(data) {
                //            table.ajax.reload();
                window.location.reload();
                console.log("删除成功" + data);
            }
        });
    } else {}

}

function updateMaintenancePlan(MaintenancePlanId) {
    layer.open({
        closeBtn: 1,
        type: 2,
        title: '修改',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['893px', '600px'],
        content: "http://" + window.location.host + "/rems/updateMaintenancePlan.html?id=" + MaintenancePlanId,
        cancel: function(index, layero) {
            if (confirm('确定要关闭么')) { //只有当点击confirm框的确定时，该层才会关闭
                layer.close(index)
            }
            return false;
        }

    });

}