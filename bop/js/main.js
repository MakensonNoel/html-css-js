
console.log(location.hash)

// This will listen for the fragment identifier change
window.addEventListener("hashchange", function() {
  console.log(location.hash);
});

function getContent(fragmentId, callback){

  var pages = {
    home: "",
    about: "About",
    blog: "Blog"
  };

  callback(pages[fragmentId]);
}

function loadContent(){

  var contentDiv = document.getElementById("app"),
      fragmentId = location.hash.substr(1);

  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
  });

}

if(!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent)