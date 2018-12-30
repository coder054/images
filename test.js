const a = {
	age: 26,

	name() {
		return "tuananh"
	},

	gg() {
		console.log(this.name() + "is handsiome!" + this.age)
	}
}

a.gg()
