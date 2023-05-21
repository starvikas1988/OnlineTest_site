const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',api);

app.use(express.static(path.join(__dirname, 'dist/online-test-app')))

app.get('*', function(req,res){
   res.sendFile(path.join(__dirname,'dist/online-test-app/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server started on port ${port}`));

