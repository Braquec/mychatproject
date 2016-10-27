var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
	//console.log(__dirname);
});

io.on('connection', function(socket){
	console.log('nueva conexion!');
	//console.log(socket);	
	socket.on('disconnect', function(){
		console.log('usuario ' + socket.id + ', desconectado!');
	});
	socket.on('chat-msj',function(msg){
		io.emit('chat-msj', msg);
	});
});

http.listen(9000, function(){
	console.log('Server listen *:9000')
});