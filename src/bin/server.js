import app  from "../app";
import http from "http";


const port = 3000;
const server = http.createServer(app);

const onListen = () => {
    let addr = server.address();
    console.log("Server listening on port " , port);
};

server.listen(port);
server.on("listening", onListen);
