function onLanguageSubmit() {
	var newLang = document.getElementById("inputLanguage").value;
	var validation = document.getElementById("validPara");
	if(newLang === undefined || newLang.length<1) {
		validation.innerHTML = 'Please enter a value before submitting';
		validation.style.color = 'red';
	} else {
		var langList = document.getElementById("langList");
		var newEntry = document.createElement('li');
		newEntry.style.color = 'yellow'
		newEntry.appendChild(document.createTextNode(newLang));
		langList.appendChild(newEntry);
		validation.innerHTML = 'Please enter a language below:';
		validation.style.color = 'white';
	}
}