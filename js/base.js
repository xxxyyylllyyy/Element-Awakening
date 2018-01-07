/**
 * Created by Administrator on 2017/11/28.
 */
init_bootstrap_table = function (obj, url, sortName, idField, params_formatter, options) {

    if (typeof options === 'string') {
        options = { text : options }
    }

    var opt = $.extend({
        url: url,
        search: false,
        searchAlign:'right',
        pagination: true,
        showRefresh: true,
        showToggle: false,
        showColumns: true,
        striped: true,	 //使表格带有条纹
        clickToSelect: false,//点击行即可选中单选/复选框
        silent: true,  //刷新事件必须设置
        iconSize: 'outline',
        pageList: [50, 100, 500],
        toolbar: '#tableToolbar',
        sidePagination:'server', //
        sortName: sortName, // 默认排序字段
        sortOrder: 'desc', // 默认排序方式
        pageSize: 50,
        showExport: true,
        selectItemName:'select_item[]', // radio or checkbox 的字段名
        trimOnSearch:false, // 设置为 true 将允许空字符搜索
        idField:idField, // 指定主键列 radio or checkbox的值
        queryParams: params_formatter, //参数
        queryParamsType: 'limit' ,//参数格式,发送标准的RESTFul类型的参数请求
        onReorderRow: function (newData) {
            return false;
        }

    }, options || {});

    $(obj).bootstrapTable(opt);

   init_bootstrap_table_tool(obj);
};

 init_bootstrap_table_tool = function (obj) {


    $('#search_form').submit(function(){

        $(obj).bootstrapTable('refresh');
    });

    $('#search_form :input[type=reset]').click(function(){
        $('#search_form')[0].reset();
        $(obj).bootstrapTable('refresh');
    });
};
