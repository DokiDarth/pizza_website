menu_list_array = ["chicken tandoori pizza","veg supreme","paneer tikka pizza", "deluxe veggie pizza","veg extravaganza pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
htmldata=htmldata+'<li>'
}
}