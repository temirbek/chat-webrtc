socket.on('offer', function (data) { // При получении сообщения 'offer',
                                     // так как клиентское соединение в данном примере всего одно,
                                     // отправим сообщение обратно через тот же сокет
    socket.emit('offer', data);
    // Если бы было необходимо переслать сообщение по всем соединениям,
    // кроме отправителя:
    soket.broadcast.emit('offer', data);
});
socket.on('answer', function (data) {
    socket.emit('answer', data);
});
socket.on('ice1', function (data) {
    socket.emit('ice1', data);
});
socket.on('ice2', function (data) {
    socket.emit('ice2', data);
});
socket.on('hangup', function (data) {
    socket.emit('hangup', data);
});
res.sendfile(__dirname + '/nodetest2.html'); // Отдадим HTML-файл
res.sendfile(__dirname + '/rtctest4.html');