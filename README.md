# hello-websocket-server
A docker container running a simple hello world websocker server

## Usage

```
docker run -p 8888:8888 brianpursley/hello-websocket-server
```

```
npm install -g wscat
wscat -c ws://localhost:8888
```

Type anything for a response of `hello, <anything>`.
Type `close` to close the connection.