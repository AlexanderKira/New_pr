// var chevy = {
// 	make: "Chevy",
// 	model: "Aveo",
// 	year: 2011,
// 	color: "red",
// 	passengers: 4,
// 	convertible: false,
// 	mileage: 1021
// 	};

// var cadi = {
// 	make: "Cadillac",
// 	model: "GM",
// 	year: 1955,
// 	color: "yellow",
// 	passengers: 2,
// 	convertible: true,
// 	mileage: 12821
// };

// var newObj = {};

// delete cadi.passengers;

// cadi.state = "normal";
// console.log(cadi);

// console.log(cadi.passengers);


// var chevy = {
// 	make: "Chevy",
// 	model: "Aveo",
// 	year: 1955,
// 	color: "red",
// 	passengers: 4,
// 	convertible: false,
// 	mileage: 8000,
// 	started: false,
// 	light: function(){  // это не функциБ а метод!!!
// 		console.log('Включен ближний свет');
// 		},
// 	start: function() {
// 		this.started = true;  //свойство этого объекта
// 		},
// 	stop: function(){
// 		this.started = false;
// 		},
// 	drive: function(){
// 		if (this.started) {
// 		alert("Едем");
// 		} else {
// 		alert("Надо завести двигатель.");
// 		}
// 	}
// 	};
// chevy.drive();
// chevy.start();
// chevy.drive();
// chevy.stop();

// console.log(chevy);



/*function check (car){
	if(car.mileage > 10000){
		return false;
	} else if(car.year > 1960){
		return false;
	}
	car.bay = true;
}

var car = check(cadi);

chevy.light(); //вызыаем метод объекта!*/

// var chevy = {
// 	make: "Chevy",
// 	model: "Aveo",
// 	year: 1955,
// 	color: "red",
// 	passengers: 4,
// 	convertible: false,
// 	mileage: 8000,
// 	started: false,
// 	light: function(){  // это не функциБ а метод!!!
// 		console.log('Включен ближний свет');
// 		},
// 	start: function() {
// 		this.started = true;  //свойство этого объекта
// 		},
// 	stop: function(){
// 		this.started = false;
// 		},
// 	drive: function(){
// 		if (this.started) {
// 		alert("Едем");
// 		} else {
// 		alert("Надо завести двигатель.");
// 		}
// 	}
// 	};
// chevy.drive();
// chevy.start();
// chevy.drive();
// chevy.stop();

// console.log(chevy);



/*function check (car){
	if(car.mileage > 10000){
		return false;
	} else if(car.year > 1960){
		return false;
	}
	car.bay = true;
}

var car = check(cadi);

chevy.light(); //вызыаем метод объекта!*/

// var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
// var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
// var years = [1955, 1957, 1948, 1954, 1961];
// var colors = ["red", "blue", "tan", "yellow", "white"];
// var convertible = [true, false];

// генератор фраз и массивов
// function car(){
//     let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
//     let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
//     let years = [1955, 1957, 1948, 1954, 1961];
//     let colors = ["red", "blue", "tan", "yellow", "white"];
//     let convertible = [true, false];
        
//     let ranDom1 = Math.floor(Math.random() * makes.length);
//     let ranDom2 = Math.floor(Math.random() * models.length);
//     let ranDom3 = Math.floor(Math.random() * years.length);
//     let ranDom4 = Math.floor(Math.random() * colors.length);
//     let ranDom5 = Math.floor(Math.random() * convertible.length);
        
//     let phrase = [makes[ranDom1], models[ranDom2], years[ranDom3], colors[ranDom4], convertible[ranDom5]];
//     return phrase;
//     };
    
//     console.log(car());

// var chevy = {
// 	make: "Chevy",
// 	model: "Aveo",
// 	year: 1955,
// 	color: "red",
// 	passengers: 4,
// 	convertible: false,
// 	mileage: 8000,
// 	started: false,
// 	fuel: 0,
// 	light: function(){  
// 		console.log('Включен ближний свет');
// 		},
// 	start: function() {
// 		if (this.fuel == 0) {
// 			alert("Бак пуст, заправьте авто!");
// 		} else {
// 			this.started = true;
// 			}
// 		},
// 	stop: function(){
// 		this.started = false;
// 		},
// 	drive: function(){
// 		if(this.started){
// 			if (this.fuel > 0) {
// 			alert(this.make + " " + this.model + " " + "поехали");
// 			this.fuel = this.fuel - 1;
// 			} else {
// 			alert("Нужно заправить автомобиль.");
// 			this.stop();
// 			}
// 		}else{
// 			alert("Нужно завести автомобиль");
// 		}
// 	},
// 	addFuel: function(amount){
// 		this.fuel = this.fuel + amount;
// 	}
// };

// console.log(chevy());
// for (var prop in chevy){
// 	console.log(prop + ": " + chevy[prop]);
// }

// chevy.addFuel(2);
// chevy.start();
// chevy.drive();
// chevy.drive();
// chevy.drive();
// chevy.stop();

