const {PokeCards} = require('../models');

module.exports.viewAll = async function(req, res, next) {
    const cards = await PokeCards.findAll();
    res.render('index', {cards});
}