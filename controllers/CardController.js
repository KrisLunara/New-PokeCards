const {PokeCards} = require('../models');
const elements = ['Colorless','Darkness','Dragon','Fairy','Fighting','Fire','Grass','Lightning','Metal','Psychic','Water']
const elesA = ['None','Darkness','Dragon','Fairy','Fighting','Fire','Grass','Lightning','Metal','Psychic','Water']

module.exports.viewAll = async function(req, res, next) {
    const cards = await PokeCards.findAll();
    res.render('index', {cards});
}

module.exports.renderAddForm = function(req, res){
    const card= {
        name: '',
        hp: '',
        type: elements[0],
        image: '',
        atk1nm: '',
        atk1en: '',
        atk1base: '',
        dmg1: '',
        atk2nm: '',
        atk2en: '',
        atk2base: '',
        dmg2: '',
        weak: elesA[0],
        weakquant: '',
        resist: elesA[0],
        resistquant: ''
    };
    res.render('create', {card, elements, elesA});
};

module.exports.addNewItem = async function(req, res){
    await PokeCards.create({
        name: req.body.name,
        hp: req.body.hp,
        type: req.body.type,
        image: req.body.image,
        atk1nm: req.body.atk1nm,
        atk1en: req.body.atk1en,
        atk1base: req.body.atk1base,
        dmg1: req.body.dmg1,
        atk2nm: req.body.atk2nm,
        atk2en: req.body.atk2en,
        atk2base: req.body.atk2base,
        dmg2: req.body.dmg2,
        weak: req.body.weak,
        weakquant: req.body.weakquant,
        resist: req.body.resist,
        resistquant: req.body.resistquant
    });
    res.redirect('/');
};