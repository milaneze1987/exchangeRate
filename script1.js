$(document).ready(function () {
	getRate();

});




function getRate() {
	$.get (

		"https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
		function (data) {
			
			let out='';
			// отримуєм значення валют з апі
			//console.log(data[33].cc);
			 console.log(data);
			let cursDol = data[26].rate;
			let cursEu = data[32].rate;
			let signDol = data[26].cc;
			let signEu = data[32].cc;
			//округлюєм до другого знака
			cursDol = Math.round(cursDol * 100) / 100;
			cursEu = Math.round(cursEu * 100) / 100;
			
			
			//отримуєм дату
			Data = new Date();
			Year = Data.getFullYear();
			Month = Data.getMonth();
			Day = Data.getDate();
			 
			// перетворюєм місяці
			switch (Month)
			{
			  case 0: fMonth="січня"; break;
			  case 1: fMonth="лютого"; break;
			  case 2: fMonth="марта"; break;
			  case 3: fMonth="квітня"; break;
			  case 4: fMonth="травня"; break;
			  case 5: fMonth="червня"; break;
			  case 6: fMonth="липня"; break;
			  case 7: fMonth="серпня"; break;
			  case 8: fMonth="вересня"; break;
			  case 9: fMonth="жовтня"; break;
			  case 10: fMonth="листопада"; break;
			  case 11: fMonth="грудня"; break;
			}



			// виводим курси валют
			out += "Курс валют на  "+Day+" "+fMonth+" "+Year+" року: " + "<br>" + signDol + " $ - " + cursDol + " грн/дол " + "<br>" + signEu + " € - " + cursEu + " грн/євро" ;
			$('#kurs').html(out);


				// конвертуєм введену суму в валюті
			 button.onclick = function() {
				let convertRate =  document.getElementById('inputRate').value;
				if (convertRate < 0)  {
					alert('Не вірно введена сума');
					document.getElementById('inputRate').value = "";
				}
				else{

				
				let convertResult = convertRate * cursDol;
				convertResult = Math.round(convertResult * 100) / 100;

				// console.log(convertResult);

				$('#out2').html(convertResult + ' грн.');
				}
			}

			button1.onclick = function() {
				let convertRate =  document.getElementById('inputRate1').value;
				if (convertRate < 0)  {
					alert('Не вірно введена сума');
					document.getElementById('inputRate1').value = "";
				}
				else{

				
				let convertResult = convertRate * cursEu;
				convertResult = Math.round(convertResult * 100) / 100;

				// console.log(convertResult);

				$('#out3').html(convertResult + ' грн.');
				}
			}
		} 
	
	);
}




