module.exports = {
	entry: {
		entry1: "./entry1",
		entry2: "./entry2"
	},
	target: "web",
	output: {
		filename: "[name].js"
	},
	optimization: {
		concatenateModules: true
	}
};
