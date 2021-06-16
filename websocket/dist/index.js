/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
let socket = new WebSocket("ws://localhost:8080");
socket.onopen = function (e) {
    socket.send("Hello!");
};
socket.onmessage = function (event) {
    const msg = document.getElementById('messages');
    const item = document.createElement('li');
    item.textContent = event.data;
    msg?.appendChild(item);
};
document.getElementById('send').addEventListener('click', () => {
    socket.send(document.getElementById('msg').value);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWI3Ly4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjgwODBcIik7XG5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKGUpIHtcbiAgICBzb2NrZXQuc2VuZChcIkhlbGxvIVwiKTtcbn07XG5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgbXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2VzJyk7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaXRlbS50ZXh0Q29udGVudCA9IGV2ZW50LmRhdGE7XG4gICAgbXNnPy5hcHBlbmRDaGlsZChpdGVtKTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNvY2tldC5zZW5kKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtc2cnKS52YWx1ZSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=