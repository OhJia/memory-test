var width = 512;
var height = 512;

var isDrawing = false;

var drawingCanvas;
var drawingContext;

function setupDrawingCanvas() {
  drawingCanvas = document.getElementById('drawingPad');
  drawingContext = drawingCanvas.getContext('2d');
  
  drawingCanvas.addEventListener('mousedown', _onPress);
  drawingCanvas.addEventListener('mouseup', _onRelease);
  drawingCanvas.addEventListener('mouseout', _onRelease);
  drawingCanvas.addEventListener('mousemove', _onMove);
};

function getImage() {
  return drawingCanvas.toDataURL();
};

function clear() {
    drawingContext.clearRect(0, 0, width, height);
};

function _onPress(evt) {
  drawingContext.fillStyle = "#000000";
  
  drawingContext.beginPath();
  drawingContext.arc(evt.offsetX, evt.offsetY, 5, 0, 2 * Math.PI, false);
  drawingContext.fill();
  
  isDrawing = true;
};

function _onRelease(evt) {
  if(isDrawing) {
    drawingContext.fillStyle = "#000000";
    
    drawingContext.beginPath();
    drawingContext.arc(evt.offsetX, evt.offsetY, 5, 0, 2 * Math.PI, false);
    drawingContext.fill();
    
    isDrawing = false;
    
    addDrawing();
  }
};

function _onMove(evt) {
  if(isDrawing) {
    drawingContext.fillStyle = "#000000";
    
    drawingContext.beginPath();
    drawingContext.arc(evt.offsetX, evt.offsetY, 5, 0, 2 * Math.PI, false);
    drawingContext.fill();
  }
};