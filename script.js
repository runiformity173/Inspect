function load(src){
  document.getElementById("iframe").src = src;
  document.getElementById("iframe").onload = override;
}
function override() {
  var iframeWindow = document.getElementById("iframe").contentWindow;
  iframeWindow.console.log = function(val) {
      var divId = document.getElementById("console");
      var span = document.createElement("div");
      span.appendChild(document.createTextNode(val));
      divId.appendChild(span);
  };
}
document.getElementById("iframe").contentWindow.addEventListener("keydown",function(e) {
  if (e.key == "π") {
    eval(prompt("what to run?","alert('works')"));
  }
});
