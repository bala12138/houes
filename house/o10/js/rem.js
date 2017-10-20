window.onresize = function() {
	window.location.reload()
}
var widths = document.documentElement.clientWidth;
document.documentElement.style.fontSize = widths / 25 + "px"