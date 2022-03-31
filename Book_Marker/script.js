var bookName = document.getElementById("Bookmark");
var webUrl = document.getElementById("webUrl");

var sitesArray ;
if(localStorage.getItem("myWebSites")==null)
{
    sitesArray=[];
}
else
{
    sitesArray=JSON.parse(localStorage.getItem("myWebSites"));
    display();
}

function add_website() {
    if (check_inputs() == true) {
        alert("all fields required!")
    }
    else {
        var webSite = {
            name: bookName.value,
            Url: webUrl.value
        }
        sitesArray.push(webSite);
        localStorage.setItem("myWebSites", JSON.stringify(sitesArray));
        console.log(sitesArray);
        display();
        clear();
    }

}


function clear() {
    bookName.value = "";
    webUrl.value = "";
}

function check_inputs() {
    if (bookName.value == "" || webUrl.value == "") {
        return true;
    }
    else {
        return false;
    }
}

function display() {
    var cartona = ``;
    for (var i = 0; i < sitesArray.length; i++) {
        cartona += ` 
        <div class="container Manga  py-5">
        <span class="mx-4 font-weight-bolder">${sitesArray[i].name}</span>
        <a class="ml-5 btn  btn-primary text-white text-decoration-none" href="${sitesArray[i].Url}">visit</a>
        <button onclick="deleteSite(${i})" class=" btn btn-danger">delete</button>
        </div>
  `
    }
    document.getElementById("dataShow").innerHTML = cartona;
}

function deleteSite(index)
{
  sitesArray.splice(index,1);
  localStorage.setItem("myWebSites", JSON.stringify(sitesArray));
  display();
}