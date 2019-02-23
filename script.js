//
//function playsound() {
//  const audio = document.querySelector(".audio");
//    
//    const key = document.querySelector(".key");
//    if(!audio) return; //stop the function from running all togther
//    audio.currentTime = 0; //rewind to the start
//    audio.play();
//    key.classList.add("playing");    
//    //key.forEach(K => K.classList.add("playing"));
//}
//
//function removeTransition(e) {
//    if (e.propertyName !== 'transform') return;
//  
//    this.classList.remove('playing');
//}
//const img = document.querySelectorAll(".image");
//img.forEach(photo => photo.addEventListener('click', playsound));
//
//
//const keys = document.querySelectorAll('.key');
//keys.forEach(key => key.addEventListener('transitionend', removeTransition));






	const buttons = Array.from(document.querySelectorAll('.key'));
	function removeTransition(e) {
		// if (e.propertyName !== 'transform') return;
		e.target.classList.remove('playing');
	}

	buttons.forEach(function(e) {
		const animal = e.dataset.animal;
		const audio = document.querySelector(`audio[data-animal="${animal}"]`);
		e.addEventListener('transitionend', removeTransition);
		e.addEventListener('click', () => {
			e.classList.add('playing');
			if (!audio) return;
			audio.currentTime = 0;
			audio.play();
		});
	});

















//function playsound(e) {
//  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//    if(!audio) return; //stop the function from running all togther
//    audio.currentTime = 0; //rewind to the start
//    audio.play();
//    key.classList.add("playing");
//}
//
//function removeTransition(e) {
//    if (e.propertyName !== 'transform') return;
//   
//    this.classList.remove('playing');
//}
//
//window.addEventListener('keydown', playsound);
//
//const keys = document.querySelectorAll('.key');
//keys.forEach(key => key.addEventListener('transitionend', removeTransition));
