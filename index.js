var express = require('express')


const PORT = 3000;
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//http://localhost:3000/hello
app.get('/hello', (req, res) => {
   res.send('Hello Express JS');
});

// http://localhost:3000/user
app.get('/user', (req, res) => {
   const firstname = req.query.firstname || 'Pritesh';
   const lastname = req.query.lastname || 'Patel';
   res.json({ firstname, lastname });
});

//http://localhost:3000/user/Pritesh/Patel
app.post('/user/:firstname/:lastname', (req, res) => {
   const { firstname, lastname } = req.params;
   res.json({ firstname, lastname });
});

app.listen(PORT, () => {
   console.log(`Server started on http://localhost:${PORT}`);
});