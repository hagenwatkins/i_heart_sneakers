const router = require('express').Router();
const Sneakers = require('../models/sneakers');

router.get('/sneakers', function(req, res){
// todoModel.getAll(function(err,data){
//   res.render('index',{todos: data});
//   });
  Sneakers.find({}).then(function(results){
    res.render('index', {sneakers: results});
  });
});
router.post('/sneakers',function(req, res){
  // Todo.insert(req.body,function(err, result){
  //   res.redirect('/todos');
  // });
let newSneakers= new Sneakers(req.body);
newSneakers
.save()
.then(function(result){
  console.log(result);
  res.redirect('/sneakers');
})
.catch(function(err){
  console.log(err);
  res.redirect('/sneakers');
})
});
router.post('/sneakers/delete/:id',function(req,res){
  // Todo.remove(req.params.id, function(err, result){
  //   res.redirect('/todos');
  // });
  Sneakers.deleteOne({ _id: req.params.id}).then(function(){
    res.redirect('/sneakers');
  });
});

//   const db = mongo.db();
//   db.collection('todos').find({}).toArray(function(err, data){
//     res.render('index',{todos: data});
//   });
// });

module.exports = router;
