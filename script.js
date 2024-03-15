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
