(function()
{
angular.module("app").controller("itemC",itemC);
itemC.$inject=['restro','$cookies'];
function itemC(restro,$cookies)
{

//alert("in ")
var x=this;
//var g=$cookies.get('obj');
var promise=restro.check2($cookies.getObject('obj'));
promise.then(function(response){
x.item1=response.data.menu_items;
});

}


}







)();