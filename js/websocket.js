let url = 'ws://127.0.0.1:8081/test/websocket/'
let websocket;
function initWebsocket(uuid) {
    websocket = new WebSocket(url+uuid)
    websocket.onopen = onopen
    websocket.onmessage = onmessage
    websocket.onclose = onclose
}
function onopen() {
    console.log('开启了')
}
function sendMessage(message) {
    if(!websocket) return
    websocket.send(message)
}
function onmessage(message) {
    console.log(message, '接收到的数据')
}

function onclose() {
    console.log('关闭了')
}