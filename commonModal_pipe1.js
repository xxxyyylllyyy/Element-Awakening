var modalHtml=` <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            <h4 class="modal-title" id="myModalLabel">选择区服</h4>
                                        </div>
                                <div class="modal-body">
                                    <!--区服内容开始-->

                                    <form class="form-horizontal" role="form" style="" action="">

                                     <style>
                                                        body,
                                                        th,
                                                        td {
                                                            margin: 0;
                                                            padding: 0
                                                        }

                                                        table {
                                                            border-collapse: collapse;
                                                            border-spacing: 0
                                                        }
                                                    </style>
                                                <table style="width:100%;border-bottom:1px dashed gray">
                                                   
                                                    <h5>360区
                                                        <input type="checkbox" id="all">
                                                    </h5>
                                                    <tr id="list">
                                                        <td><input type="checkbox" value="1" name="platform" id="" /></td>
                                                        <td><label>249-s1</label></td>
                                                        <td><input type="checkbox" value="2" name="platform" id="" /></td>
                                                        <td><label>269-s2</label></td>
                                                        <td><input type="checkbox" value="3" name="platform" id="" /></td>
                                                        <td><label>589-s3</label></td>
                                                        <td><input type="checkbox" value="4" name="platform" id="" /></td>
                                                        <td><label>695-s4</label></td>
                                                        <td><input type="checkbox" value="5" name="platform" id="" /></td>
                                                        <td><label>369-s5</label></td>
                                                        <td><input type="checkbox" value="6" name="platform" id="" /></td>
                                                        <td><label>589-9</label></td>
                                                    </tr>
                                                </table>
                                                <table style="width:100%;border-bottom:1px dashed gray">
                                                    <style>
                                                        body,
                                                        th,
                                                        td {
                                                            margin: 0;
                                                            padding: 0
                                                        }

                                                        table {
                                                            border-collapse: collapse;
                                                            border-spacing: 0
                                                        }
                                                    </style>
                                                    <h5>QQ联盟区
                                                        <input type="checkbox" id="all2">
                                                    </h5>
                                                    <tr id="list2">
                                                        <td><input type="checkbox" value="1" class="" name="platform" id="" /></td>
                                                        <td><label>QQ联盟-S111</label></td>
                                                        <td><input type="checkbox" value="2" class="" name="platform" id="" /></td>
                                                        <td><label>QQ联盟-S112</label></td>
                                                        <td><input type="checkbox" value="3" class="" name="platform" id="" /></td>
                                                        <td><label>QQ联盟-S113</label></td>
                                                        <td><input type="checkbox" value="4" class="" name="platform" id="" /></td>
                                                        <td><label>QQ联盟-S114</label></td>
                                                        <td><input type="checkbox" value="5" class="" name="platform" id="" /></td>
                                                        <td><label>QQ联盟-S115</label></td>
                                                        <td><input type="checkbox" value="6" class="" name="platform" id="" /></td>
                                                        <td><label>QQ联盟-S116</label></td>
                                                    </tr>
                                                </table>

                                                <div class="modal-footer">
                                                    <button type="submit" class="btn btn-primary" onclick="getStatus()">确定</button>
                                                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                                                </div>
                                            </form>
                                    <!--区服内容结束-->
                                    </div>`;
                                    document.write(modalHtml);