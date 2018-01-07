

$(function () {
        //全选或全不选
        $(this).parent().next().children().find(input).click(function () {

        $.each($(this).parent().next().find("input"),function(i,item){
        $(item)[0].checked=$(this)[0].checked;

        });
        });

    });

// $(function () {
//         //全选或全不选
//         $("#all").click(function () {
//             if (this.checked) {
//                 $("#list :checkbox").prop("checked", true);
//             } else {
//                 $("#list :checkbox").prop("checked", false);
//             }
//         });
//         //全选  
//         $("#selectAll").click(function () {
//             $("#list :checkbox,#all").prop("checked", true);
//         });
//         //全不选
//         $("#unSelect").click(function () {
//             $("#list :checkbox,#all").prop("checked", false);
//         });
//         //反选 
//         $("#reverse").click(function () {
//             $("#list :checkbox").each(function () {
//                 $(this).prop("checked", !$(this).prop("checked"));
//             });
//             allchk();
//         });

//         //设置全选复选框
//         $("#list :checkbox").click(function () {
//             allchk();
//         });

//         //获取选中选项的值
//         $("#getValue").click(function () {
//             var valArr = new Array;
//             //获取所有选中的checked
//             $("#list :checkbox[checked]").each(function (i) {
//                 valArr[i] = $(this).val();
//             });
//             var vals = valArr.join(',');
//             alert(vals);
//         });
//     });

//     function allchk() {
//         var chknum = $("#list :checkbox").size(); //选项总个数
//         var chk = 0;
//         $("#list :checkbox").each(function () {
//             if ($(this).prop("checked") == true) {
//                 chk++;
//             }
//         });
//         if (chknum == chk) { //全选
//             $("#all").prop("checked", true);
//         } else { //不全选
//             $("#all").prop("checked", false);
//         }
//     }


//     $(function () {
//         //全选或全不选
//         $("#all2").click(function () {
//             if (this.checked) {
//                 $("#list2 :checkbox").prop("checked", true);
//             } else {
//                 $("#list2 :checkbox").prop("checked", false);
//             }
//         });
//         //全选  
//         $("#selectAll2").click(function () {
//             $("#list2 :checkbox,#all2").prop("checked", true);
//         });
//         //全不选
//         $("#unSelect2").click(function () {
//             $("#list2 :checkbox,#all2").prop("checked", false);
//         });
//         //反选 
//         $("#reverse2").click(function () {
//             $("#list2 :checkbox").each(function () {
//                 $(this).prop("checked", !$(this).prop("checked"));
//             });
//             allchk2();
//         });

//         //设置全选复选框
//         $("#list2 :checkbox").click(function () {
//             allchk2();
//         });

//         //获取选中选项的值
//         $("#getValue2").click(function () {
//             var valArr = new Array;
//             //获取所有选中的checked
//             $("#list2 :checkbox[checked]").each(function (i) {
//                 valArr[i] = $(this).val();
//             });
//             var vals = valArr.join(',');
//             alert(vals);
//         });
//     });

//     function allchk2() {
//         var chknum = $("#list2 :checkbox").size(); //选项总个数
//         var chk = 0;
//         $("#list2 :checkbox").each(function () {
//             if ($(this).prop("checked") == true) {
//                 chk++;
//             }
//         });
//         if (chknum == chk) { //全选
//             $("#all2").prop("checked", true);
//         } else { //不全选
//             $("#all2").prop("checked", false);
//         }
//     }







    //      $(function () {
    //     //全选或全不选
    //     $("#all").click(function () {
    //         if (this.checked) {
    //             $("#list :checkbox").prop("checked", true);
    //         } else {
    //             $("#list :checkbox").prop("checked", false);
    //         }
    //     });
    //     //全选  
    //     $("#selectAll").click(function () {
    //         $("#list :checkbox,#all").prop("checked", true);
    //     });
    //     //全不选
    //     $("#unSelect").click(function () {
    //         $("#list :checkbox,#all").prop("checked", false);
    //     });
    //     //反选 
    //     $("#reverse").click(function () {
    //         $("#list :checkbox").each(function () {
    //             $(this).prop("checked", !$(this).prop("checked"));
    //         });
    //         allchk();
    //     });

    //     //设置全选复选框
    //     $("#list :checkbox").click(function () {
    //         allchk();
    //     });

    //     //获取选中选项的值
    //     $("#getValue").click(function () {
    //         var valArr = new Array;
    //         //获取所有选中的checked
    //         $("#list :checkbox[checked]").each(function (i) {
    //             valArr[i] = $(this).val();
    //         });
    //         var vals = valArr.join(',');
    //         alert(vals);
    //     });
    // });

    // function allchk() {
    //     var chknum = $("#list :checkbox").size(); //选项总个数
    //     var chk = 0;
    //     $("#list :checkbox").each(function () {
    //         if ($(this).prop("checked") == true) {
    //             chk++;
    //         }
    //     });
    //     if (chknum == chk) { //全选
    //         $("#all").prop("checked", true);
    //     } else { //不全选
    //         $("#all").prop("checked", false);
    //     }
    // }


    // $(function () {
    //     //全选或全不选
    //     $("#all2").click(function () {
    //         if (this.checked) {
    //             $("#list2 :checkbox").prop("checked", true);
    //         } else {
    //             $("#list2 :checkbox").prop("checked", false);
    //         }
    //     });
    //     //全选  
    //     $("#selectAll2").click(function () {
    //         $("#list2 :checkbox,#all2").prop("checked", true);
    //     });
    //     //全不选
    //     $("#unSelect2").click(function () {
    //         $("#list2 :checkbox,#all2").prop("checked", false);
    //     });
    //     //反选 
    //     $("#reverse2").click(function () {
    //         $("#list2 :checkbox").each(function () {
    //             $(this).prop("checked", !$(this).prop("checked"));
    //         });
    //         allchk2();
    //     });

    //     //设置全选复选框
    //     $("#list2 :checkbox").click(function () {
    //         allchk2();
    //     });

    //     //获取选中选项的值
    //     $("#getValue2").click(function () {
    //         var valArr = new Array;
    //         //获取所有选中的checked
    //         $("#list2 :checkbox[checked]").each(function (i) {
    //             valArr[i] = $(this).val();
    //         });
    //         var vals = valArr.join(',');
    //         alert(vals);
    //     });
    // });

    // function allchk2() {
    //     var chknum = $("#list2 :checkbox").size(); //选项总个数
    //     var chk = 0;
    //     $("#list2 :checkbox").each(function () {
    //         if ($(this).prop("checked") == true) {
    //             chk++;
    //         }
    //     });
    //     if (chknum == chk) { //全选
    //         $("#all2").prop("checked", true);
    //     } else { //不全选
    //         $("#all2").prop("checked", false);
    //     }
    // }
// $(function () {
//         //全选或全不选
//         $("#all3").click(function () {
//             if (this.checked) {
//                 $("#list3 :checkbox").prop("checked", true);
//             } else {
//                 $("#list3 :checkbox").prop("checked", false);
//             }
//         });
//         //全选  
//         $("#selectAll3").click(function () {
//             $("#list3 :checkbox,#all3").prop("checked", true);
//         });
//         //全不选
//         $("#unSelect3").click(function () {
//             $("#list3 :checkbox,#all3").prop("checked", false);
//         });
//         //反选 
//         $("#reverse3").click(function () {
//             $("#list3 :checkbox").each(function () {
//                 $(this).prop("checked", !$(this).prop("checked"));
//             });
//             allchk3();
//         });

//         //设置全选复选框
//         $("#list3 :checkbox").click(function () {
//             allchk3();
//         });

//         //获取选中选项的值
//         $("#getValue").click(function () {
//             var valArr = new Array;
//             //获取所有选中的checked
//             $("#list3 :checkbox[checked]").each(function (i) {
//                 valArr[i] = $(this).val();
//             });
//             var vals = valArr.join(',');
//             alert(vals);
//         });
//     });

//     function allchk3() {
//         var chknum = $("#list3 :checkbox").size(); //选项总个数
//         var chk = 0;
//         $("#list3 :checkbox").each(function () {
//             if ($(this).prop("checked") == true) {
//                 chk++;
//             }
//         });
//         if (chknum == chk) { //全选
//             $("#all3").prop("checked", true);
//         } else { //不全选
//             $("#all3").prop("checked", false);
//         }
//     }


//     $(function () {
//         //全选或全不选
//         $("#all4").click(function () {
//             if (this.checked) {
//                 $("#list4 :checkbox").prop("checked", true);
//             } else {
//                 $("#list4 :checkbox").prop("checked", false);
//             }
//         });
//         //全选  
//         $("#selectAll4").click(function () {
//             $("#list4 :checkbox,#all4").prop("checked", true);
//         });
//         //全不选
//         $("#unSelect4").click(function () {
//             $("#list4 :checkbox,#all4").prop("checked", false);
//         });
//         //反选 
//         $("#reverse4").click(function () {
//             $("#list4 :checkbox").each(function () {
//                 $(this).prop("checked", !$(this).prop("checked"));
//             });
//             allchk4();
//         });

//         //设置全选复选框
//         $("#list4 :checkbox").click(function () {
//             allchk4();
//         });

//         //获取选中选项的值
//         $("#getValue4").click(function () {
//             var valArr = new Array;
//             //获取所有选中的checked
//             $("#list4 :checkbox[checked]").each(function (i) {
//                 valArr[i] = $(this).val();
//             });
//             var vals = valArr.join(',');
//             alert(vals);
//         });
//     });

//     function allchk4() {
//         var chknum = $("#list4 :checkbox").size(); //选项总个数
//         var chk = 0;
//         $("#list4 :checkbox").each(function () {
//             if ($(this).prop("checked") == true) {
//                 chk++;
//             }
//         });
//         if (chknum == chk) { //全选
//             $("#all4").prop("checked", true);
//         } else { //不全选
//             $("#all4").prop("checked", false);
//         }
//     }


//     // 5-6
    
//      $(function () {
//         //全选或全不选
//         $("#all5").click(function () {
//             if (this.checked) {
//                 $("#list5 :checkbox").prop("checked", true);
//             } else {
//                 $("#list5 :checkbox").prop("checked", false);
//             }
//         });
//         //全选  
//         $("#selectAll5").click(function () {
//             $("#list5 :checkbox,#all5").prop("checked", true);
//         });
//         //全不选
//         $("#unSelect5").click(function () {
//             $("#list5 :checkbox,#all5").prop("checked", false);
//         });
//         //反选 
//         $("#reverse5").click(function () {
//             $("#list5 :checkbox").each(function () {
//                 $(this).prop("checked", !$(this).prop("checked"));
//             });
//             allchk5();
//         });

//         //设置全选复选框
//         $("#list :checkbox").click(function () {
//             allchk5();
//         });

//         //获取选中选项的值
//         $("#getValue5").click(function () {
//             var valArr = new Array;
//             //获取所有选中的checked
//             $("#list :checkbox[checked]").each(function (i) {
//                 valArr[i] = $(this).val();
//             });
//             var vals = valArr.join(',');
//             alert(vals);
//         });
//     });

//     function allchk5() {
//         var chknum = $("#list5 :checkbox").size(); //选项总个数
//         var chk = 0;
//         $("#list5 :checkbox").each(function () {
//             if ($(this).prop("checked") == true) {
//                 chk++;
//             }
//         });
//         if (chknum == chk) { //全选
//             $("#all5").prop("checked", true);
//         } else { //不全选
//             $("#all5").prop("checked", false);
//         }
//     }

//      $(function () {
//         //全选或全不选
//         $("#all6").click(function () {
//             if (this.checked) {
//                 $("#list6 :checkbox").prop("checked", true);
//             } else {
//                 $("#list6 :checkbox").prop("checked", false);
//             }
//         });
//         //全选  
//         $("#selectAll6").click(function () {
//             $("#list6 :checkbox,#all6").prop("checked", true);
//         });
//         //全不选
//         $("#unSelect6").click(function () {
//             $("#list6 :checkbox,#all6").prop("checked", false);
//         });
//         //反选 
//         $("#reverse6").click(function () {
//             $("#list6 :checkbox").each(function () {
//                 $(this).prop("checked", !$(this).prop("checked"));
//             });
//             allchk6();
//         });

//         //设置全选复选框
//         $("#list6 :checkbox").click(function () {
//             allchk6();
//         });

//         //获取选中选项的值
//         $("#getValue6").click(function () {
//             var valArr = new Array;
//             //获取所有选中的checked
//             $("#list6 :checkbox[checked]").each(function (i) {
//                 valArr[i] = $(this).val();
//             });
//             var vals = valArr.join(',');
//             alert(vals);
//         });
//     });

//     function allchk6() {
//         var chknum = $("#list6 :checkbox").size(); //选项总个数
//         var chk = 0;
//         $("#list6 :checkbox").each(function () {
//             if ($(this).prop("checked") == true) {
//                 chk++;
//             }
//         });
//         if (chknum == chk) { //全选
//             $("#all6").prop("checked", true);
//         } else { //不全选
//             $("#all6").prop("checked", false);
//         }
//     }