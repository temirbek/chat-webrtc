var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
var app = require('express')()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server);
server.listen(3000); // Если порт 80 свободен
app.get('/', function (req, res) { // При обращении к корневой странице
    res.sendfile(dirname + '/index.html'); // отдадим HTML-файл
});
io.sockets.on('connection', function (socket) {    // При подключении
    socket.emit('server event', { hello: 'world' }); // отправим сообщение
    socket.on('client event', function (data) {      // и объявим обработчик события при поступлении сообщения от клиента
        console.log(data);
    });
});