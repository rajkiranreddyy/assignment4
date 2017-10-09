(function()
{
    angular.module("app").service("restro",restro);
    restro.$inject=['$http'];
function restro($http)
{
var z1=this;
z1.check2=function(k)
{
//    alert("in request 2");
var response=$http({
method:'GET',
url:("https://davids-restaurant.herokuapp.com/menu_items.json?category="+k)
});
return response;

};



z1.check=function()
{
    
var response=$http({
method:"GET",
url:("https://davids-restaurant.herokuapp.com/categories.json")



});

return response;

};
}})();