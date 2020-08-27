// import * as Koa from 'koa'
// import * as Router from 'koa-router'
// const http = require('http')
// const app = new Koa()
// const server = http.Server(app.callback())
// const io = require('socket.io')(server)
// const router = new Router()
// router.get('/', async (ctx) => {
//   ctx.body = 'Hello World!'
// })
// app.use(router.routes())
// io.on('connection', (socket: any) => {
//   // console.log('初始化成功！下面可以用socket绑定事件和触发事件了');
//   socket.on('send', (data: any) => {
//     console.log('客户端发送的内容：', data);
//     socket.emit('getMsg', '我是返回的消息... ...');
//   })
// })
// server.listen(3000, () => {
//   console.log('Server running on port 3000')
// })
const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', (socket) => {
    console.log(2222);
    io.emit('chat message', 'ddddddd');
});
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });
server.listen(3002);
//# sourceMappingURL=server.js.map