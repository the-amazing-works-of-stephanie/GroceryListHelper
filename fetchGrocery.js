jQuery.getJSON('groceryList.json', function(data){
    var groceryList = document.getElementById("textBox");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = data[i].name + ' ' + data[i].quantity;
        groceryList.appendChild(div);
    }
});
