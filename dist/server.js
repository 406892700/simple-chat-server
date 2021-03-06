const Koa = require('koa');
const app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server, {
    path: '/pollmsg',
});
const port = process.env.PORT || 3000;
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});
server.listen(port, () => {
    console.log(`listening on *: ${port}`);
});
//# sourceMappingURL=server.js.map