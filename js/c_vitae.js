let education = document.getElementById('education');
let xp = document.getElementById('xpr');
let skills = document.getElementById('skills');

education.addEventListener("click", function(){
	let clic = document.getElementById('learn');
	if (clic.style.display === 'block') {
		clic.style.display = 'none';
	}
	else {
		clic.style.display = 'block';
	}
	// document.getElementById('learn').style.display = 'block';
	// document.getElementById('xp').style.display = 'none';
	document.getElementById('box_skills').style.display = 'none';
});

xp.addEventListener("click", function(){
	let clic1 = document.getElementById('xp');
	if (clic1.style.display === 'block') {
		clic1.style.display = 'none';
	}
	else {
		clic1.style.display = 'block';
	}
	// document.getElementById('learn').style.display = 'none';
	// document.getElementById('xp').style.display = 'block';
	document.getElementById('box_skills').style.display = 'none';
});

skills.addEventListener("click", function(){
	let clic2 = document.getElementById('box_skills');
	if (clic2.style.display === 'block') {
		clic2.style.display = 'none';
	}
	else {
		clic2.style.display = 'block';
	}
	document.getElementById('learn').style.display = 'none';
	document.getElementById('xp').style.display = 'none';
	// document.getElementById('box_skills').style.display = 'block';
});