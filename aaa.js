/**
 * xms
 */
var tempId  = 1000; 
$(function(){
	
	
	/*初始化table*/
	$('#userTable').dataTable({
		 "bSort": false,
		 "autoWidth":false,
		 "bStateSave": true,//状态保存
		 "searching":false,//搜索输入框显示
		 "iDisplayLength": 10,//每页显示10条数据
		 "bServerSide":true,// 开启服务端处理模式
		//  "sAjaxSource":"http://"+window.location.host+"/rems/services/api/warningTrouble/pageGetAllWarningTrouble",
		 "fnServerParams": function(aoData){ //搜索字段 
	        aoData.push(
	            		   {
	            			"name":"gameNumber","value":$("input[name='gameNumber']").val()
	            		   }
	            		   ,  
	                       {
	            			"name":"userId","value":$("select[name='userId']").val()
	            		   }
	            		   ,  
	            		   {
			            	"name":"playId","value":$("select[name='playId']").val()
			               }
	            		)	
	        },
	     "aoColumns": [
	                 {
	                     "mData": "elevatorPlayGame" 
	                 },{
	                     "mData": "elevatorAdministerationRegion"
	                 },{
	                     "mData": "elevatorId"
	                 },{
	                     "mData": "elevatorFaultCode"
	                 },{
	                     "mData": "messageUser"
	                 }
	                 ],
		 "bProcessing" : true, //DataTables载入数据时，是否显示‘进度’提示  
		 "bPaginate" : true, //是否显示（应用）分页器  
         "oLanguage": { //国际化配置  
         "sProcessing" : "正在获取数据，请稍后...",  
        // "sProcessing": "<img src='assets/img/ajax-loading.gif' />", //这里是给服务器发请求后到等待时间显示的 加载gif
         "sLengthMenu" : "显示 _MENU_ 条",    
         "sZeroRecords" : "没有您要搜索的内容",    
         "sInfo" : "从 _START_ 到  _END_ 条记录 总记录数为 _TOTAL_ 条",    
         "sInfoEmpty" : "记录数为0",    
         "sInfoFiltered" : "(全部记录数 _MAX_ 条)",    
         "sInfoPostFix" : "",    
          "sUrl" : "",    
           "oPaginate": {    
               "sFirst" : "第一页",    
               "sPrevious" : "上一页",    
               "sNext" : "下一页",    
               "sLast" : "最后一页"    
           }
       },
       "fnInitComplete": function(oSettings, json) {
           $("tbody td").removeClass("sorting_1"); 
           $("[data-toggle='tooltip']").tooltip();
         }
	 }); 
	
	
	 /*//搜索
	 $("#searchUserInfo").click(function(){
		 if($("#refachForm").valid()){
				var table = $('#userTable').DataTable();
			//	table.search($("#comment").val()).draw();
				
				
				
		 }
	 });*/
	 //搜索
	 
	$("#searchUserInfo").click(function(){
	 	
		if($("#refachForm").valid()){
			var table = $('#userTable').DataTable();
			table.ajax.reload(null, false);
			$("font[data-toggle='tooltip']").tooltip();
	 	}
	});
	
		 /*
	//给搜索按钮绑定点击事件
		$("#searchUserInfo").on("click","#userTable button.search",function(){
		    //用空格隔开，达到多条件搜索的效果，相当于两个关键字
		    table.search($("#comment").val()).draw();
		    //table.search(args1+" "+args2).draw(false);//保留分页，排序状态
		});
	 
	 */
	 //重置
	 $("#refarchUserInfo").click(function(){
		$("input[name='elevatorPlayGame']").val("");
	 	$("input[name='elevatorAdministerationRegion']").val("");
	 	$("input[name='elevatorFaultCode']").val("");
		 if($("#refachForm").valid()){
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
	 
	 
	 feedBackPhoto = function(dom){
		//捕获页
		 layer.open({
		   type: 1,
		   shade: [0.1, '#000'],
		   shadeClose:true,
		   title: false, //不显示标题
		   content: $(dom).next(), //捕获的元素
		   cancel:function(){
			   
		   }
		 });
	 }
	 
	 
	 toTroubleEdit = function(){
		 var parents = window.parent.document.getElementById('content-main');
	  var iframe = document.createElement("iframe");
	iframe.setAttribute("class", "J_iframe");
	     iframe.setAttribute("name", "iframe"+tempId);
	     iframe.setAttribute("width", "100%");
	     iframe.setAttribute("height", "100%");
	     iframe.setAttribute("src", "../troubleEdit.html?v="+tempId);
	     iframe.setAttribute("frameborder", "0");
	     iframe.setAttribute("data-id", "../troubleEdit.html?v="+tempId);
	     iframe.setAttribute("seamless", "");
	     parents.appendChild(iframe);
	 var tabs = window.parent.document.getElementById('pageTabs');
	 var tempDate = (new Date()).valueOf() ; 
	 $(tabs).append("<a id='tab_"+tempDate+"' class='J_menuTab' data-id='../troubleEdit.html?v="+tempId+"'>外科楼一号电梯预警编辑<i class='fa fa-times-circle'></i></a>");
	 window.parent.openTabs(tempDate);
	 tempId++;
	 }
	 
	 
	 
	 
	 
});