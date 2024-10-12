require ('dotenv').config();
const express = require('express')
const hbs = require ('hbs');


const app = express()
const port=process.env.PORT;

//handlebars

app.set ('view engine','hbs');
hbs.registerPartials( __dirname + '/views/partials');



// Servir contenido estatico
app.use (express.static('public'));

//Handlebars
app.set('view engine', 'hbs');


app.get('/',  (req, res) =>{
  res.render ('home',{
    nombre : 'Edson Dorador',
    titulo:'Curso de Node'

  });
});


app.get('/generic',  (req, res) =>{
  res.render ('generic',{
    nombre : 'Edson Dorador',
    titulo:'Curso de Node'

  });
});

app.get('/elements',  (req, res) =>{
  res.render ('elements',{
    nombre : 'Edson Dorador',
    titulo:'Curso de Node'

  });
});





//Se define  /holamundo 

app.get('/hola-mundo',  (req, res) =>{
    res.send('Hello World en su respectiva ruta')
  });


  

app.get('*',  (req, res) =>{
    res.sendFile(__dirname+'/public/404.html');
  });
  
app.listen(port,() =>{
    console.log (`Ejemplo app Listerning at http://localhost:${port}`)

})