angular.module('cahsowan').run(['$templateCache', function($templateCache) {$templateCache.put('index.html','<!DOCTYPE html>\n<html ng-app="bilancio">\n<head>\n\t<title>Bilancio</title>\n\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\t<link rel="icon" type="image/x-icon" href="">\n    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">\n\t<link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">\n    <link rel="stylesheet" href="css/style.css">\n\t<script src="../node_modules/angular/angular.js"></script>\n\t<script src="../node_modules/angular-ui-router/release/angular-ui-router.js"></script>\n</head>\n <body class="detailed-column" >\n        <nav class="navbar navbar-inverse navbar-fixed-top">\n            <div class="container-fluid">\n                <div class="navbar-header">\n                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n                        <span class="sr-only">Toggle navigation</span>\n                        <span class="icon-bar"></span>\n                        <span class="icon-bar"></span>\n                        <span class="icon-bar"></span>\n                    </button>\n                    <a class="navbar-brand" href="#">Bilancio</a>\n                    <img src="images/Crowdfunding-48.png">\n                </div>\n                <div id="navbar" class="navbar-collapse collapse">\n                    <ul class="nav navbar-nav navbar-right">\n                        <li>\n                            <a href="#" class="dropdown" data-toggle="dropdown"> Profile <span class="glyphicon glyphicon-user pull-right"></span></a>\n                            <ul class="dropdown-menu">\n\t\t\t\t\t\t        <li><a href="#">Account Settings <span class="glyphicon glyphicon-cog pull-right"></span></a></li>\n\t\t\t\t\t\t        <li class="divider"></li>\n\t\t\t\t\t\t        <li><a href="#">User stats <span class="glyphicon glyphicon-stats pull-right"></span></a></li>\n\t\t\t\t\t\t        <li class="divider"></li>\n\t\t\t\t\t\t        <li><a href="#">Messages <span class="badge pull-right"> 42 </span></a></li>\n\t\t\t\t\t\t        <li class="divider"></li>\n\t\t\t\t\t\t        <li><a href="#">Favourites Snippets <span class="glyphicon glyphicon-heart pull-right"></span></a></li>\n\t\t\t\t\t\t        <li class="divider"></li>\n\t\t\t\t\t\t        <li><a href="#">Sign Out <span class="glyphicon glyphicon-log-out pull-right"></span></a></li>\n\t\t\t\t\t      </ul>\n                        </li>\n                    </ul>\n                    <form class="navbar-form navbar-right">\n                        <input type="text" class="form-control" placeholder="Search...">\n                    </form>\n                </div>\n            </div>\n        </nav>\n        <div class="container-fluid">\n            <div class="row">\n                <div class="col-sm-2 col-md-2 sidebar">\n                    <ul class="nav nav-sidebar">\n                        <li >\n                        \t\n                            <a href="#">Dashboard <i class="pull-right fa fa-home fa-1x" aria-hidden="true"></i> </a>                        \n                        </li>\n                       <li >\n                            <h4>BillShell<i class="pull-right fa fa-university fa-1x" aria-hidden="true"></i>\n\t\t\t\t\t\t\t</h4>\n                                <ul class="bills-option">\n                            \t<li>\n                            \t\t<a href="#"> BillShell-List <i class="pull-right fa fa-list fa-1x" aria-hidden="true"></i></a>\n                            \t</li>\n                            \t<li>\n                            \t\t<a href="#">Add BillShell <i class="pull-right fa fa-plus fa-1x" aria-hidden="true"></i></a>\n                            \t</li>\n                                </ul>\n\t\t\t\t\t\t\t\t\n                        </li>\n                       <li>\n                            <h4>Bills <i class="pull-right fa fa-money fa-1x" aria-hidden="true"></i></h4>\n                            \t<ul class="bills-option">\n                            \t<li>\n                            \t\t<a href="#"> Bill-View<i class="pull-right fa fa-eye fa-1x" aria-hidden="true"></i></a>\n                            \t</li>\n                            \t<li>\n                            \t\t<a href="#">Add Bills<i class="pull-right fa fa-plus fa-1x" aria-hidden="true"></i></a>\n                            \t</li>\n\t\t\t\t\t\t\t\t</ul>\n                        </li>\n                    </ul>\n                </div>\n                <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">\n                <bill-details></bill-details>\n                </div>\n            </div>\n        </div>\n        <!-- Bootstrap core JavaScript-->\n<script src="../node_modules/jquery/dist/jquery.min.js"></script>\n<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>\n<script src="js/app.js"></script>\n<script src="js/billDetails.controller.js"></script>\n<script src="js/billDetails.directive.js"></script>\n<script src="js/billDetails.services.js"></script>\n</body>\n</html>');}]);