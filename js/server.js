let express = require('express');
let app = express();
let port = 3000;
 
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
});

var cors = require('cors');
app.use(cors({origin: '*'}));

app.get('/', (req, res) => {
  res.send('<h1>Bem vindo ao seu servidor de numero randômico</h1>')
});

app.get('/randomNumber', (req, res) => {
   res.send(JSON.stringify([{lat: (Math.random() * (90 - (-90)) + (-90)).toFixed(8),
           lng: (Math.random() * (180 - (-180)) + (-180)).toFixed(8)},
           {lat: (Math.random() * (90 - (-90)) + (-90)).toFixed(8),
           lng: (Math.random() * (180 - (-180)) + (-180)).toFixed(8)},
           {lat: (Math.random() * (90 - (-90)) + (-90)).toFixed(8),
           lng: (Math.random() * (180 - (-180)) + (-180)).toFixed(8)}]));
});