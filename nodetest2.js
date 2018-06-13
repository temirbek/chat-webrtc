var app = require('express')()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server);
   server.listen(80); // Если порт 80 свободен
app.get('/', function (req, res) { // При обращении к корневой странице
    res.sendfile(__dirname + '/nodetest2.html'); // отдадим HTML-файл
});
io.sockets.on('connection', function (socket) {    // При подключении
    socket.emit('server event', { hello: 'world' }); // отправим сообщение
    socket.on('client event', function (data) {      // и объявим обработчик события при поступлении сообщения от клиента
        console.log(data);
    });
});