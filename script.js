var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createdeleteButton() {
	var deleteButton= document.createElement("button");
	deleteButton.innerHTML="Delete";
	deleteButton.classList.add("delete");
	//Add functionality to delete button	
	deleteButton.addEventListener("click", function(){
    this.parentElement.remove()});

	return deleteButton;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value+" "));
	ul.appendChild(li);
	var breakelement= document.createElement("br");
	    ul.appendChild(breakelement);
	li.appendChild(createdeleteButton());

	//Striketrhrough for new items
	li.addEventListener("click", function(){this.classList.toggle("done");});
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//Strikethrough For already existing items 
for(var i=0 ;i<items.length ;i++)
{
	items[i].addEventListener("click", function(){this.classList.toggle("done");}); 
	items[i].appendChild(createdeleteButton());

}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);