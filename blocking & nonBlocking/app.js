// console.log("first line of code ");


// setTimeout(function(){
//    console.log("settimeout function running");
// } , 2000 )


let val = 0;
let min = 0;

setInterval(function() {
    val++

    if(val == 8){
        val =0
        min++
        document.getElementById("min").innerText = `Min : ${min}`
        document.getElementById("pera").innerText = `Sec : ${val}`
    }


    document.getElementById("pera").innerText = `Sec : ${val}`
}, 1000);

// console.log("last line of code ");