var gl, prog;
var pi = Math.PI;


function drawFloorPlan() {
   var canvas = document.getElementById("drawCanvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   
   canvas.clear();
   gl = document.getElementById('drawCanvas').getContext('experimental-webgl');
   gl.enable(gl.DEPTH_TEST);
   gl.depthFunc(gl.LEQUAL);
   prog = gl.createProgram();
   
   /*
      add shaders
   */
   
}



