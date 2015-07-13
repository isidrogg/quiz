//GET /author
exports.creditos = function(req, res) {
	res.render('author', {user: 'Isidro García García'});
}