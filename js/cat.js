var cat = {
    animal: "Кот",
	breed: "Сибирский серый",
	gender: "Мальчик",
	nickname: "Пушкин",
	leisure: false,//досуг
	hunger: 0,//голод
	dream: false,//сон
	wantLeisure: function(){//досуг
		if(this.dream = true && this.hunger >= 100){
			this.leisure = true;
			this.hunger = this.hunger - 100;
			this.dream = false;
			alert (this.animal + " " + this.nickname + " хорошо поиграл!")
		}else{
			alert("Покормите " + this.animal + " " + this.nickname + " и пускай он поспит!")
		}
	},
	wantHunger: function(){//голод
		this.hunger = this.hunger + 300;
		this.leisure = false;
		alert(this.animal + " " + this.nickname + " поел! Ему было вкусно!")
	},
	wantDream: function(){//сон
		this.dream = true;
		alert(this.animal + " " + this.nickname + " спал на подоконнике! Он выспался!")
	}

}

// var access = document.getElementById("play");
// var code = access.innerHTML;
// access.innerHTML = cat.wantLeisure();

// cat.wantHunger();
// cat.wantDream();
// cat.wantLeisure();
// cat.wantLeisure();
// cat.wantLeisure();
// cat.wantLeisure();