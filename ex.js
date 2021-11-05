'use strict'
document.getElementById("drinkSelection").addEventListener('change', function(){
	if(this.value == "cola"){
		document.getElementById('Beer_Options').style.display = 'none';
		document.getElementById('Cocktail_Options').style.display = 'none';
		document.getElementById('Cola_Options').style.display = 'block';
		document.getElementById('beer_photos').style.display = 'none';
		document.getElementById('cocktail_photos').style.display = 'none';
		document.getElementById('cola_photos').style.display = 'block';
	}
	else if(this.value == "beer"){
		document.getElementById('Cola_Options').style.display = 'none';
		document.getElementById('Cocktail_Options').style.display = 'none';
		document.getElementById('Beer_Options').style.display = 'block';
		document.getElementById('cola_photos').style.display = 'none';
		document.getElementById('cocktail_photos').style.display = 'none';
		document.getElementById('beer_photos').style.display = 'block';
	}
	else{
		document.getElementById('Cola_Options').style.display = 'none';
		document.getElementById('Beer_Options').style.display = 'none';
		document.getElementById('Cocktail_Options').style.display = 'block';
		document.getElementById('cola_photos').style.display = 'none';
		document.getElementById('beer_photos').style.display = 'none';
		document.getElementById('cocktail_photos').style.display = 'block';
	}
});

var button1 = document.getElementById('button');
var textarea1 = document.getElementById('textar');

button1.addEventListener('click', updateTextArea);

function updateTextArea() {
	var totalCost = 0;
	
	if(document.getElementById('colacan').checked == true){
		if(document.getElementById('no1').value == ''){
			totalCost += 0;
		}
		else{
			totalCost += (parseInt(document.getElementById('no1').value) * 1.30 );
		}
	}
	if(document.getElementById('colabottle').checked == true){
		if(document.getElementById('no2').value == ''){
			totalCost += 0;
		}
		else{
			totalCost += (parseInt(document.getElementById('no2').value) * 2.00 );
		}
	}
	if(document.getElementById('colalight').checked == true){
		if(document.getElementById('no3').value == ''){
			totalCost += 0;
		}
		else{
			totalCost += (parseInt(document.getElementById('no3').value) * 1.30 );
		}
	}
	if(document.getElementById('colapink').checked == true){
		if(document.getElementById('no4').value == ''){
			totalCost += 0;
		}
		else{
			totalCost += (parseInt(document.getElementById('no4').value) * 1.50 );
		}
	}
	if(document.getElementById('corona').checked == true){
		if(document.getElementById('no5').value == ''){
			totalCost += 0;
		}
		else{
			totalCost += (parseInt(document.getElementById('no5').value) * 1.80 );
		}
	}
	if(document.getElementById('fix').checked == true){
		if(document.getElementById('no6').value == ''){
			totalCost += 0;
		}
		else{
			totalCost += (parseInt(document.getElementById('no6').value) * 1.50 );
		}
	}
	if(document.getElementById('fischer').checked == true){
		if(document.getElementById('no7').value == ''){
			totalCost += 0;
		}
		else{
			totalCost += (parseInt(document.getElementById('no7').value) * 1.80 );
		}
	}
	if(document.getElementById('sol').checked == true){
		if(document.getElementById('no8').value == ''){
			totalCost += 0;
		}
		else{
			totalCost += (parseInt(document.getElementById('no8').value) * 1.80 );
		}
	}
	if(document.getElementById('Martini').checked == true){
		if(document.getElementById('no9').value == ''){
			totalCost += 0;
		}
		else{
			totalCost += (parseInt(document.getElementById('no9').value) * 4.00 );
		}
	}
	if(document.getElementById('Mai-Tai').checked == true){
		if(document.getElementById('no10').value == ''){
			totalCost += 0;
		}
		else{
			totalCost += (parseInt(document.getElementById('no10').value) * 4.50 );
		}
	}
	if(document.getElementById('Margarita').checked == true){
		if(document.getElementById('no11').value == ''){
			totalCost += 0;
		}
		else{
			totalCost += (parseInt(document.getElementById('no11').value) * 4.00 );
		}
	}
    textarea1.value = 'The total cost is: ' + totalCost.toFixed(2) + '€';
}