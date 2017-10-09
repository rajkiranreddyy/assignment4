(function()
{ 
angular.module("app",['ui.router','ngCookies']);
angular.module("app").config(routeConfig);
routeConfig.$inject=['$stateProvider','$urlRouterProvider'];
function routeConfig($stateProvider,$urlRouterProvider)
{
    
$urlRouterProvider.otherwise('/index');
$stateProvider.state('index',
{
    url:'/index',
   //template:'<p>aaaaa</p>'
     templateUrl: 'home.html'
}

).state('mainList',{
url:'/main-list',
templateUrl:'category.html',
controller:'controller1 as mainList',
resolve:
{

  items:['restro',function(restro){
    return restro.check();

    
  }]
}



}).state('item',{
url:'/item/{id}',
templateUrl:'item.html',
controller:'itemC',
resolve:
{

itemClick:['$stateParams','restro',function($stateParams,restro)
{

return restro.check($stateParams.id).then(function(items){return items.menu_items;});

}]


}


});

}})();
