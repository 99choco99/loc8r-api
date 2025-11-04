const index = function(req, res){
  res.render('index', { title: 'Express by 2020810013 김승혁' });
};

module.exports = {
  index
};
