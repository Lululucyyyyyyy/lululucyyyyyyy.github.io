var id = setInterval(frame, 5);

function myMove(){
	var elem = document.getElementById("home_animation");
	var pos = 0;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos == 350){
			clearInterval(id);
		} else {
			pos ++
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}