var bar = document.querySelectorAll('.bar1');
var dropdown = document.querySelectorAll('.ab');

function Menu(){
	if(bar[0].classList.contains('bar')){
		console.log("a")
		for(var i=0; i<4; i++ ){
			bar[i].classList.remove('bar')
		}
	}
	else{
		for(var j=0; j<4; j++ ){
			bar[j].classList.add('bar')
		}
	}
	
}
function dropdowns(){
	console.log('a')
	if(dropdown[0].classList.contains('dropdown')){
		for(var i=0; i<2; i++ ){
		dropdown[i].classList.remove('dropdown')
	}
	}
	else{
		for(var j=0; j<2; j++ ){
		dropdown[j].classList.add('dropdown')
	}
	}
}