const http = require ('http');
//Para crear servidor

http.createServer ((req,res) =>{

    console.log(req);

    // res.writeHead(200,{'Content-Type':'application/json'});

    // res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    // res.writeHead(200,{'Content-Type':'application/csv'});

    res.write ('Hola mundo ');


    // res.write ('1; Edson\n ');
    // res.write ('2;  Kimberly\n ');
    // res.write ('3; Fernando\n ');
    // res.write ('4;  Marco\n ');
    res.end();

    
})

.listen(8080);
console.log('escuchando el puerto',8080);