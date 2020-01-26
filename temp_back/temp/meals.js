const meals = {
	ukrainian: [
		{
			id: 1,
			name: "Салат по-домашньому",
			description:
				"Розділену на суцвіття цвітну капусту варять і охолоджують. При використанні білокачанної капу­сти її шаткують і перетирають із сіллю. Квасолю варять.",
			callories: 541,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 66,
			days: [0, 1, 2, 3, 4, 5]
		},
		{
			id: 2,
			name: "Капуста тушкована",
			description: "Тушкована капуста зі свининою, шинкою, корейкою, шпиком, ковбасою",
			callories: 998,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 18,
			days: [0, 3, 4]
		},
		{
			id: 3,
			name: "Пампушки",
			description:
				"Невеличкі круглі й пишні булочки, засмачуються часником і вживаються з борщем, роблячи його просто неперевершеним.",
			callories: 482,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 24,
			days: [0, 1, 2, 5, 6]
		},
		{
			id: 4,
			name: "Вареники",
			description:
				"Українська національна страва у вигляді відвареного прісного тіста і начинки з картоплі, м'яса, грибів, овочів, фруктів, ягід та сиру.",
			callories: 946,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 83,
			days: [0, 1, 4, 5, 6]
		},
		{
			id: 5,
			name: "Борщ",
			description:
				"Овочевий суп з м'ясом або грибами, основна перша страва української кухні. Набула широкого міжнародного поширення і визнання.",
			callories: 762,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 61,
			days: [0, 3, 4, 6]
		},
		{
			id: 6,
			name: "Молоко пряжене",
			description:
				"Молочний продукт, який виробляють тривалим пряженням молока: за температури 95-99°С протягом 3 годин або за температури 105°С протягом не менше 15 хвилин, але не доводячи до кипіння",
			callories: 234,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 75,
			days: [0, 1, 2, 3, 6]
		},
		{
			id: 18,
			name: "Пиріжки з капустою",
			description:
				"Варіантів тіста і начинки для таких пиріжків може бути кілька, найпопулярнішими пиріжками є пиріжки з класичного дріжджового тіста з начинкою із суміші свіжої та квашеної капусти.",
			callories: 658,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 75,
			days: [0, 1, 2, 3, 4, 5, 6]
		}
	],
	greek: [
		{
			id: 7,
			name: "Greek salad",
			description:
				"A simple Greek Salad loaded with lots of fresh veggies, olives and feta and tossed with a tangy lemon-herb vinaigrette",
			callories: 632,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 64,
			days: [0, 1, 2, 3, 4, 6]
		},
		{
			id: 8,
			name: "Dakos",
			description:
				"RA traditional meze or a light meal on the island of Crete, dakos (also called koukouvayia) is often called Greek bruschetta, and is easy to make with few ingredients and no cooking.",
			callories: 277,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 42,
			days: [0, 1, 3, 4, 6]
		},
		{
			id: 9,
			name: "Fava",
			description: "Traditional and easy Greek fava recipe Add the quartered onion and carrots and lower to a simmer.",
			callories: 269,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 25,
			days: [0, 1, 2, 3, 5, 6]
		}
	],
	italian: [
		{
			id: 10,
			name: "Pasta",
			description:
				"Italian pasta recipes. 3 / 26. Homemade Manicotti. These tender manicotti are much easier to stuff than the purchased variety.",
			callories: 639,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 85,
			days: [0, 1, 2, 3, 4, 6]
		},
		{
			id: 11,
			name: "Ravioli",
			description:
				"Ravioli is an Italian dumpling that's typically stuffed with ricotta, meat, cheese, and vegetables. The filling is then sealed between two thin layers of egg pasta dough and typically served with a delicious tomato or cream-based pasta sauce.",
			callories: 347,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 63,
			days: [0, 1, 3, 4, 6]
		},
		{
			id: 12,
			name: "Ricotta",
			description:
				"Try making your own pasta from scratch with this pea and ricotta-filled ravioli dish. See more Pasta recipes at Tesco Real Food.",
			callories: 1203,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 47,
			days: [0, 1, 2, 3]
		}
	],
	chinese: [
		{
			id: 13,
			name: "Tofu",
			description:
				"Tofu, also called bean curd, is a food made by coagulating soy milk and then pressing the resulting curds into soft white blocks.",
			callories: 2323,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 36,
			days: [0, 1, 2, 3, 4]
		},
		{
			id: 15,
			name: "Rice",
			description:
				"There so many great choices for you to choose. Authentic Japanese food like hibachi fried rice and ramen. Authentic Chinese food like orange peel chicken etc. ",
			callories: 1345,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 15,
			days: [0, 1, 3, 4, 6]
		},
		{
			id: 16,
			name: "Chinese Spaghetti Bolognese",
			description:
				"You'll need: 8 oz. dried spaghetti. Salt. 1 tablespoon oil. 12 oz. ground beef. 1 medium onion, finely diced. 2 cloves garlic, minced. 2 teaspoons Shaoxing wine or dry sherry. 2 cups chicken stock.",
			callories: 541,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 51,
			days: [0, 1, 2, 3]
		},
		{
			id: 17,
			name: "Chinese Chicken ",
			description:
				"Asparagus and Chicken Stir-Fry. 02 of 20. Beggar's Chicken. 03 of 20. Bang Bang Chicken. 04 of 20. Chinese Bourbon Chicken. Cantonese Steamed Chicken. 4kodiak/Getty Images. 06 of 20. Cashew Chicken. 07 of 20. Chicken Lo Mein.",
			callories: 541,
			image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
			price: 89,
			days: [0, 1, 2, 3, 4, 5, 6]
		}
	]
};

module.exports = meals;
