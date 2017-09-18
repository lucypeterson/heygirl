javascript: function Gosling(i, g) {
	this.ratio = i, this.imageurl = g
}

function Randomize(i) {
	return Math.floor(Math.random() * i.length)
}

function imageRatio(i) {
	var g = i.height / i.width;
	return g > 1 ? "vertical" : 1 === g ? "square" : 1 > g ? "horizontal" : void 0
}
var getGosling = {
	init: function(i) {
		this.myGosling = i
	},
	horizontal: function() {
		return this.myGosling.filter(function(i) {
			return "horizontal" === i.ratio
		})
	},
	vertical: function() {
		return this.myGosling.filter(function(i) {
			return "vertical" === i.ratio
		})
	},
	square: function() {
		return this.myGosling.filter(function(i) {
			return "square" === i.ratio
		})
	}
},
myGosling = [
 new Gosling("horizontal", "https://lucypeterson.github.io/heygirl/images/horizontal1.jpg"),
    new Gosling("horizontal", "https://lucypeterson.github.io/heygirl/images/horizontal2.jpg"),
    new Gosling("horizontal", "https://lucypeterson.github.io/heygirl/images/horizontal3.jpg"),
	new Gosling("horizontal", "https://lucypeterson.github.io/heygirl/images/horizontal4.gif"),

    new Gosling("vertical", "https://lucypeterson.github.io/heygirl/images/vertical1.jpg"),
    new Gosling("vertical", "https://lucypeterson.github.io/heygirl/images/vertical2.jpg"),
    new Gosling("vertical", "https://lucypeterson.github.io/heygirl/images/vertical3.gif"),

    new Gosling("square", "https://lucypeterson.github.io/heygirl/images/square1.jpg"),
    new Gosling("square", "https://lucypeterson.github.io/heygirl/images/square2.jpg")

    ]
! function(i) {
	getGosling.init(myGosling);
	for (var g = i.getElementsByTagName("img"), o = g.length, n = 0; o > n; n++) {
		var l = imageRatio(g[n]),
		t = Randomize(getGosling[l]()),
		e = getGosling[l]()[t];
		g[n].src = e.imageurl
	}
}(document);