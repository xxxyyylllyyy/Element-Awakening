
 
      var oTableInit = {
            url: '',                            //请求后台的URL（*）
            method: 'get',                     //服务器数据的请求方式 'get' or 'post'
            toolbar: '#tableToolbar',                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                    //是否启用排序
            sortOrder: "desc",                  //定义排序方式 'asc' 或者 'desc'
            queryParams: '',           //传递参数（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: 1,                      //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 18, 50, 100,200,500],//可供选择的每页的行数（*）
            paginationLoop: false,              //启用分页条无限循环的功能
            paginationVAlign: 'bottom',         //指定 分页条 在垂直方向的位置。'top' or 'bottom' or 'bonth'
            paginationHAlign: 'right',          //指定 分页条 在水平方向的位置。'left' or 'right'
            paginationDetailHAlign: 'left',     //指定 分页详细信息 在水平方向的位置。'left' or 'right'
            paginationPreText: '<',             //指定分页条中上一页按钮的图标或文字
            paginationNextText: '>',            //指定分页条中下一页按钮的图标或文字
            search: false,                      //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            searchAlign: 'right',               //指定 搜索框 水平方向的位置。'left' or 'right'
            buttonsAlign: 'right',              //指定 按钮 水平方向的位置。'left' or 'right'
            strictSearch: true,                 //全匹配搜索，否则为模糊搜索
            showColumns: true,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
            showPaginationSwitch: false,        //是否显示 数据条数选择框
            cardView: false,                    //是否显示详细视图
            //detailFormatter: function (index, row) { /*return '';*/ },//格式化详细视图
            detailView: false,                  //是否显示父子表
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            singleSelect: true,                 //设置True 将禁止多选
            //height: $("#maddle").height() - 138 - $(".alert-info").length*71, //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            idField: 'Id',                      //指定主键列
            uniqueId: 'Id',                     //每一行的唯一标识，一般为主键列
            undefinedText: '-',                 //当数据为 undefined 时显示的字符
            //sortName: '',                     //定义排序列,通过url方式获取数据填写字段名，否则填写下标
            //iconsPrefix: 'fa',                //定义字体库 ('Glyphicon' or 'fa' for FontAwesome),使用"fa"时需引用 FontAwesome，并且配合 icons 属性实现效果
            showHeader: true,                   //是否显示列头
            showFooter: false,                  //是否显示列脚
            //icons:{
            //    paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
            //    paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
            //    refresh: 'glyphicon-refresh icon-refresh'
            //    toggle: 'glyphicon-list-alt icon-list-alt'
            //    columns: 'glyphicon-th icon-th'
            //    detailOpen: 'glyphicon-plus icon-plus'
            //    detailClose: 'glyphicon-minus icon-minus'
            //},                                //自定义图标
            columns: [],                        //绑定列
            //rowStyle: function (row, index) { /* return { classes: ''*/ },// 自定义行样式 参数为： 返回值可以为class或者css
            //rowAttributes: function (row, index) { /*return '';*/ }//自定义行属性 参数为： 返回值可以为class或者css 支持所有自定义属性
        }

        function getNowFormatDate() {
                var date = new Date();
                var seperator1 = "-";
                var seperator2 = ":";
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
                    " " + date.getHours() + seperator2 + date.getMinutes() +
                    seperator2 + date.getSeconds();
                return currentdate;
            }

        
