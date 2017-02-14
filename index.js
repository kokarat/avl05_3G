const net = require('net');
const moment = require('moment');

const runningPort = 5053;

const server = net.createServer(function (socket) {

	socket.on('data', function (data) {

		console.log('Time : '+ moment().format());

		console.log('===== HEX =====');
		console.log(data.toString('hex'));

		// I need you help to parse data to array or json object like this
		/*{
		  raw: '545a00da2424015301110000086383502555736911020d0f3b2e00160a04f70fd324046a4f11020d0f3b2e00000000000c000006010a06101da9000d1cc040163701a705fb00000000008a012520205e4b414e4b41415443484149244d522e5e5e3f3b363030373634313232303530303030333338323d3231303831393834303831303d3f2b2020202020202020202020202032343030202020202020202020202020312020202020202020202020203538303236393334202030303130322020202020202020202020202020202020202020203f0003008000041513cc0d0a',
		  protocol: 'tzone',
		  imei: '869444005480041',
		  alarm_code: '0x01',
		  lat : '-70.51273333333333',
		  long : '-33.361225',
		  speed: 0,
		  xxxx : xxxx,
		  xxxx : xxxx,
		  xxxx : xxxx,
		  xxxx : xxxx,
		  xxxx : xxxx,
		  xxxx : xxxx,
		  xxxx : xxxx,
		  xxxx : xxxx,
		  xxxx : xxxx,
		  xxxx : xxxx
		}*/

		
	});

	socket.on('error', function(err) {
		console.log(err)
	});

});

server.listen(runningPort);

console.log(moment().format('DD-MM-YYYY HH:mm:ss') +" App runing on : "+ runningPort);
