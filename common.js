var html = ` <!-- topbar starts -->
    <div class="navbar navbar-default" role="navigation">
        <div class="navbar-inner">
            <button type="button" class="navbar-toggle pull-left animated flip">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="test.html">
                <!--<img alt="Charisma Logo" src="img/logo20.png" class="hidden-xs"/>-->
                <span style="font-size:14px;">元素风暴后台系统</span>
            </a>

            <!-- user dropdown starts -->
            <div class="btn-group pull-right">
                <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <i class="glyphicon glyphicon-user"></i><span class="hidden-sm hidden-xs"> admin</span>
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#">Profile</a></li>
                    <li class="divider"></li>
                    <li><a href="login.html">Logout</a></li>
                </ul>
            </div>
            <!-- user dropdown ends -->

            <!-- theme selector starts -->
            <div class="btn-group pull-right theme-container animated tada">
                <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <i class="glyphicon glyphicon-tint"></i>
                    <span class="hidden-sm hidden-xs"> 改变形式 / 布局颜色</span>
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" id="themes">
                    <li><a data-value="classic" href="#"><i class="whitespace"></i> Classic</a></li>
                    <li><a data-value="cerulean" href="#"><i class="whitespace"></i> Cerulean</a></li>
                    <li><a data-value="darkly" href="#"><i class="whitespace"></i> Darkly</a></li>
                    <li><a data-value="slate" href="#"><i class="whitespace"></i> Slate</a></li>
                    <li><a data-value="spacelab" href="#"><i class="whitespace"></i> Spacelab</a></li>
                    <li><a data-value="united" href="#"><i class="whitespace"></i> United</a></li>
                </ul>
            </div>
            <!-- theme selector ends -->

        </div>
    </div>
    <!-- topbar ends -->
    <div class="ch-container">
        <div class="row">

            <!-- left menu starts -->
            <div class="col-sm-2 col-lg-2">
                <div class="sidebar-nav">
                    <div class="nav-canvas">
                        <div class="nav-sm nav nav-stacked">

                        </div>
                        <ul class="nav nav-pills nav-stacked main-menu">
                            <li class="accordion">
                                <a href="#"><i class="glyphicon glyphicon-home"></i><span>登录公告</span></a>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a href="loginBulletin.html">发布公告</a></li>
                                    <li><a href="loginBulletinTable.html">公告列表</a></li>
                                </ul>
                            </li>
                            <li class="accordion">
                                <a href="#"><i class="glyphicon glyphicon-eye-open"></i><span>游戏内公告</span></a>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a href="gameBulletin.html">发布游戏内公告</a></li>
                                    <li><a href="gameBulletinTable.html">游戏内列表</a></li>
                                </ul>
                            </li>
                            <li class="accordion">
                                <a href="#"><i class="glyphicon glyphicon-list-alt"></i><span>游戏内活动</span></a>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a href="gameActive.html">发布游戏内活动</a></li>
                                    <li><a href="gameActiveTable.html">游戏内活动列表</a></li>
                                </ul>
                            </li>
                            <li class="accordion">
                                <a href="#"><i class="glyphicon glyphicon-font"></i><span>广播</span></a>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a href="broadcast.html">发布广播</a></li>
                                    <li><a href="broadcastTable.html">广播列表</a></li>
                                </ul>
                            </li>
                            <li class="accordion">
                                <a href="#"><i class="glyphicon glyphicon-picture"></i><span>邮件</span></a>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a href="mail.html">发布邮件</a></li>
                                    <li><a href="mailTable.html">邮件列表</a></li>
                                </ul>
                            </li>
                            <li class="accordion">
                                <a href="#"><i class="glyphicon glyphicon-align-justify"></i><span>礼包码</span></a>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a href="gift_code.html">发布礼包</a></li>
                                    <li><a href="gift_code_table.html">礼包列表</a></li>
                                </ul>
                            </li>
                            <li class="accordion">
                                <a href="#"><i class="glyphicon glyphicon-plus"></i><span>推送</span></a>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a href="push.html">发布推送信息</a></li>
                                    <li><a href="pushTable.html">推送信息列表</a></li>
                                </ul>
                            </li>
                            <li>
                                <a class="ajax-link" href="serverStatus.html">
                                    <i class="glyphicon glyphicon-calendar"></i>
                                    <span> 服务状态</span>
                                </a>
                            </li>

                            <li class="accordion">
                                <a href="#"><i class="glyphicon lyphicon-star"></i><span>角色查询</span></a>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a href="roleQuery.html">角色查询信息</a></li>
                                    <li><a href="roleQueryTable.html">查询列表</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="error.html">
                                    <i class="glyphicon glyphicon-ban-circle"></i>
                                    <span> 错误页</span>
                                </a>
                            </li>
                            <li>
                                <a href="login.html">
                                    <i class="glyphicon glyphicon-lock"></i>
                                    <span>登录页</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--/span-->
            <!-- left menu ends -->

            <noscript>
                <div class="alert alert-block col-md-12">
                    <h4 class="alert-heading">Warning!</h4>

                    <p>You need to have <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> enabled
                        to use this site.</p>
                </div>
            </noscript>`;
document.write(html);
//location.reload();