
var printList = function(itemListArray){
	itemListArray.forEach(function(item){

  	$("#results").append("<li>"+item+"</li>");
  });

};

$(document).ready(function(){
  $("#grocery-submit").click(function(){
    debugger;
    var groceryInput = $("#groceryList").val();
    var groceryArray = groceryInput.split(", ");

    var upperCaseList = groceryArray.map(function(item){
  	   var upItem = item.toUpperCase();
       return upItem;
    });

    var sortedList = upperCaseList.sort();
    $(".setup").hide();
    printList(sortedList);


  });
});
