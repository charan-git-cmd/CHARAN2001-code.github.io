(function (window) {
	var names=["sai",
	"charan",
	"tillu",
	"sreekar",
	"joshna",
	"jerry",
	"tom",
	"jaggu",
	"jogendra",
	"maggi"];
	for(var ch in names){
		var firstletter=((names[ch].charAt(0)).lowercase());
		console.log(firstletter);
		if(firstletter=='j'){
			window.goodbye.speak(names[ch]);
		}
		else{
			window.hello.speak(names[ch]);
		}
	}

})(window);
