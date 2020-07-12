import express from 'express';
import socket from 'socket.io';

// app作成
const app = express();

// server生成
const server = app.listen(8080, '127.0.0.1', ()=>{
  console.log('server start');
});

const io = socket(server);
