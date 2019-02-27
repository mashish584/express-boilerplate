exports.getIndex = (req, res, next) => {
	return res.render("index", { title: "Node Application Boilerplate" });
};
