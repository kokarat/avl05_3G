const net = require('net');
const moment = require('moment');

const runningPort = 5053;

const server = net.createServer(function (socket) {

	socket.on('data', function (data) {

		console.log('Time : '+ moment().format());

		console.log('===== HEX =====');
		console.log(data.toString('hex'));
		
	});

	socket.on('error', function(err) {
		console.log(err)
	});

});

server.listen(runningPort);

console.log(moment().format('DD-MM-YYYY HH:mm:ss') +" App runing on : "+ runningPort);
