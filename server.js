
const express = require("express");
const app = express();
var todos = [
  {id: 1, name: 'đẹp trai'},
  {id: 2, name: 'học rốt vl'},
  {id: 3, name: 'tốt bụng'},
  {id: 4, name: 'nấu ăn ngon'}
]
app.set('view engine', 'pug');
app.set('views', './views')

app.get("/", (req, res) => {
  res.render('index.pug',{
    todos
  })
});

app.get("/todos", (req, res) => {
  if(req.query.q){
    var q = req.query.q;
    var matchedTodo = todos.filter(item => {
      return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('todos.pug',{
      todos : matchedTodo
    })
  }
  res.send(`
    <h1 style='text-align: center;'>Vui lòng nhập Url theo /todos?q=</h1>
    <a style='display: block; text-align: center' href='/todos?q=nấu'>xem demo</a>
  `)
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
