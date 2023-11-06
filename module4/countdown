function countDown(sec){
	let timer = setInterval (function(){
		sec -= 1;
		if (sec <= 0){
			clearInterval(timer);
			console.log("DONE!");
			return;
		}
		else{
			console.log(sec);
		}
	},1000);
}


function randomGame(){
	let randnum;
	let times = 1;
	let timer = setInterval (function(){
		randnum = Math.random();
		if (randnum > 0.75){
			clearInterval(timer);
			console.log(`It took ${times} times to play the game`);
			return;
		}
		times += 1;
	},1000);
}
countDown(4);
randomGame();
