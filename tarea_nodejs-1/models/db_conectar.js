import mysql from 'mysql' // o tambien const mysql = require('mysql');
	var conectar = mysql.createConnection({
    		host     : 'localhost',
    		user     : 'adminRoot',
    		password : 'Admin@123',
    		database : 'db_estudiantes'
			
  	});

  	conectar.connect(function(err) {
    		if (err) {
      			console.error('Error en la conexion: ' + err.stack);
      	return;
    	}
   
    			console.log('conexion exitosa ID: ' + conectar.threadId);
  	});

  	export {conectar}