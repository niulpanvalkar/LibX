import nconf from "nconf";
import path from "path";
import mysql from "mysql";

nconf.argv().env().file({
    file: path.resolve("config.json")
});

let connectionObject = {
    host : nconf.get('HOST'),
    user : nconf.get('USER'),
    password : nconf.get('PASSWORD'),
    database : nconf.get('DATABASE'),
    port : 3306
}

let connection  = mysql.createConnection(connectionObject);

connection.connect(function(err) {
    if (err) {
      console.error("error connecting:" + err.stack);
      return;
    }
   
    console.log("connected to the database via threadId " + connection.threadId);
  });

export default connection;