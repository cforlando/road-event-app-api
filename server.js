var path = require('path')
var express = require('express'),
scottsapp = require('./routes/scottsapp');
 
var app = express();
 
app.configure(function () {
app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
app.use(express.bodyParser());
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/scottsapp', scottsapp.findAll);
app.get('/scottsapp/:id', scottsapp.findById);
app.post('/scottsapp', scottsapp.addCityEvent);
app.put('/scottsapp/:id', scottsapp.updateCityEvent);
app.delete('/scottsapp/:id', scottsapp.deleteCityEvent);

app.listen(3000);
console.log('Listening on port 3000...')
