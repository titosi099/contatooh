module.exports = {

  home: function(req, res) {
    res.render('index', {nome: 'Express'});
  },
  index: function(req, res) {
    res.render('index', {nome: 'Node.js'});
  }

};
