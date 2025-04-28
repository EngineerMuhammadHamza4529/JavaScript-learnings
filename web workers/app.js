let worker = new  Worker("worker.js")


function sum(){
    worker.postMessage("hi")
}
worker.onmessage = function(mess){
    alert(mess.data)
}


function bgChange(){

    if(document.body.style.background !== "lightgray" ){
        document.body.style.background = "lightgray";
    }else{
        document.body.style.background = "lightcoral";

    }
}