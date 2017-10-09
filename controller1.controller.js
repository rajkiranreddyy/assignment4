(function()
{

angular.module("app").
controller("controller1",controller1);
//service("service",service);
controller1.$inject=['restro','$cookies','$state'];
function controller1(restro,$cookies,$state)
{

var x=this;
//alert("before");
//alert("You might have to wait for about 30 secs!! click ok to continue")
var promise=restro.check();
promise.then(function(response){
x.list=response.data;
});
//alert('after');
x.found=function(f)
{
  //  alert("in ng-click");
$cookies.putObject('obj',f);
var g=$cookies.getObject('obj');
//alert(g);
$state.go('item{f}');

}
}})();
