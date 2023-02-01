document.addEventListener("DOMContentLoaded",function(){
    let canvas = document.getElementById("canvas");
    let context=canvas.getContext('2d');
    let widthInput=document.getElementById("pen-range");
    let showWidth=document.getElementById("pen-number");
    let colorInput=document.getElementById("pen-color");
    let bgColorInput=document.getElementById("bg-color");
    let eraser=document.getElementById("eraser");
    let bgRound=document.getElementById("background");
    showWidth.innerText=widthInput.value;
    widthInput.addEventListener("input",function(){
        showWidth.innerText=widthInput.value;
    })
    eraser.addEventListener("click",function(){
        context.clearRect(0, 0, window.innerWidth,window.innerHeight);
        
    });
    bgRound.addEventListener("click",function(){
        context.fillStyle=`${bgColorInput.value}`;
        context.fillRect(0,0,window.innerWidth,window.innerHeight);
    })
    //設定畫布的範圍、邊框
    window.addEventListener("resize",function(){
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
    });
   
    
    
    
   
  
   //設定是否在繪畫中的變數
   let painting=false;
    
   function startPaintingPosition(e){
    painting=true;
    Painting(e);
   };
   function endPaintingPosition(){
    painting=false;
    context.beginPath();//為了解決直接一條線跳過去的問題
   };
   function Painting(e){
    if(!painting) return;
    context.strokeStyle=`${colorInput.value}`;
    context.lineWidth=`${widthInput.value}`;
    context.lineCap='round';
    context.lineTo(e.clientX,e.clientY);
    context.stroke();//下面是為了解決直接一條線跳過去的問題
    context.beginPath();
    context.moveTo(e.clientX,e.clientY);
    
   }
   canvas.addEventListener("mousedown",startPaintingPosition);
   canvas.addEventListener("mouseup",endPaintingPosition);
   canvas.addEventListener("mousemove",Painting);
});