var embedlr = require('gulp-embedlr'),
    express = require('express'),
    path = require('path');

// Set up an express server (but not starting it yet)
var server = express();

server.use(express.static(__dirname + '/dist'));
server.use('/js', express.static(__dirname + '/dist/js'));
server.use('/node_modules', express.static(__dirname + '/node_modules'));
server.use('/font-awesome', express.static(__dirname + '/font-awesome'));
server.use('/css', express.static(__dirname + '/dist/css'));
server.use('/view', express.static(__dirname + '/dist/view'));

// Add live reload
console.log('App running in development environment',__dirname+'/node_modules');
var port = Number(process.env.PORT || 8080);
// Use our 'dist' folder as rootfolder
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.get('*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});
server.listen(port, () => console.log('listening...'))