
function item1(){
    document.getElementById('car-img').src = carData[0].image;
    document.getElementById('model').innerHTML = carData[0].model;
    document.getElementById('name').innerHTML = carData[0].name;
    document.getElementById('mark').innerHTML = carData[0].mark;
    document.getElementById('markNo').innerHTML = carData[0].markNo;
    document.getElementById('year').innerHTML = carData[0].year;
    document.getElementById('yearNo').innerHTML = carData[0].yearNo;
    document.getElementById('door').innerHTML = carData[0].door;
    document.getElementById('doorNo').innerHTML = carData[0].doorNo;
    document.getElementById('ac').innerHTML = carData[0].ac;
    document.getElementById('acYes').innerHTML = carData[0].acYes;
    document.getElementById('tran').innerHTML = carData[0].tran;
    document.getElementById('tranManual').innerHTML = carData[0].tranManual;
    document.getElementById('fuel').innerHTML = carData[0].fuel;
    document.getElementById('fuelDis').innerHTML = carData[0].fuelDis;
}
function item2(){
    document.getElementById('car-img').src = carData[1].image;
    document.getElementById('model').innerHTML = carData[1].model;
    document.getElementById('name').innerHTML = carData[1].name;
    document.getElementById('mark').innerHTML = carData[1].mark;
    document.getElementById('markNo').innerHTML = carData[1].markNo;
    document.getElementById('year').innerHTML = carData[1].year;
    document.getElementById('yearNo').innerHTML = carData[1].yearNo;
    document.getElementById('door').innerHTML = carData[1].door;
    document.getElementById('doorNo').innerHTML = carData[1].doorNo;
    document.getElementById('ac').innerHTML = carData[1].ac;
    document.getElementById('acYes').innerHTML = carData[1].acYes;
    document.getElementById('tran').innerHTML = carData[1].tran;
    document.getElementById('tranManual').innerHTML = carData[1].tranManual;
    document.getElementById('fuel').innerHTML = carData[1].fuel;
    document.getElementById('fuelDis').innerHTML = carData[1].fuelDis;
}
function item3(){
    document.getElementById('car-img').src = carData[2].image;
    document.getElementById('model').innerHTML = carData[2].model;
    document.getElementById('name').innerHTML = carData[2].name;
    document.getElementById('mark').innerHTML = carData[2].mark;
    document.getElementById('markNo').innerHTML = carData[2].markNo;
    document.getElementById('year').innerHTML = carData[2].year;
    document.getElementById('yearNo').innerHTML = carData[2].yearNo;
    document.getElementById('door').innerHTML = carData[2].door;
    document.getElementById('doorNo').innerHTML = carData[2].doorNo;
    document.getElementById('ac').innerHTML = carData[2].ac;
    document.getElementById('acYes').innerHTML = carData[2].acYes;
    document.getElementById('tran').innerHTML = carData[2].tran;
    document.getElementById('tranManual').innerHTML = carData[2].tranManual;
    document.getElementById('fuel').innerHTML = carData[2].fuel;
    document.getElementById('fuelDis').innerHTML = carData[2].fuelDis;
}
function item4(){
    document.getElementById('car-img').src = carData[3].image;
    document.getElementById('model').innerHTML = carData[3].model;
    document.getElementById('name').innerHTML = carData[3].name;
    document.getElementById('mark').innerHTML = carData[3].mark;
    document.getElementById('markNo').innerHTML = carData[3].markNo;
    document.getElementById('year').innerHTML = carData[3].year;
    document.getElementById('yearNo').innerHTML = carData[3].yearNo;
    document.getElementById('door').innerHTML = carData[3].door;
    document.getElementById('doorNo').innerHTML = carData[3].doorNo;
    document.getElementById('ac').innerHTML = carData[3].ac;
    document.getElementById('acYes').innerHTML = carData[3].acYes;
    document.getElementById('tran').innerHTML = carData[3].tran;
    document.getElementById('tranManual').innerHTML = carData[3].tranManual;
    document.getElementById('fuel').innerHTML = carData[3].fuel;
    document.getElementById('fuelDis').innerHTML = carData[3].fuelDis;
}
function item5(){
    document.getElementById('car-img').src = carData[4].image;
    document.getElementById('model').innerHTML = carData[4].model;
    document.getElementById('name').innerHTML = carData[4].name;
    document.getElementById('mark').innerHTML = carData[4].mark;
    document.getElementById('markNo').innerHTML = carData[4].markNo;
    document.getElementById('year').innerHTML = carData[4].year;
    document.getElementById('yearNo').innerHTML = carData[4].yearNo;
    document.getElementById('door').innerHTML = carData[4].door;
    document.getElementById('doorNo').innerHTML = carData[4].doorNo;
    document.getElementById('ac').innerHTML = carData[4].ac;
    document.getElementById('acYes').innerHTML = carData[4].acYes;
    document.getElementById('tran').innerHTML = carData[4].tran;
    document.getElementById('tranManual').innerHTML = carData[4].tranManual;
    document.getElementById('fuel').innerHTML = carData[4].fuel;
    document.getElementById('fuelDis').innerHTML = carData[4].fuelDis;
    
}
function item6(){
    document.getElementById('car-img').src = carData[5].image;
    document.getElementById('model').innerHTML = carData[5].model;
    document.getElementById('name').innerHTML = carData[5].name;
    document.getElementById('mark').innerHTML = carData[5].mark;
    document.getElementById('markNo').innerHTML = carData[5].markNo;
    document.getElementById('year').innerHTML = carData[5].year;
    document.getElementById('yearNo').innerHTML = carData[5].yearNo;
    document.getElementById('door').innerHTML = carData[5].door;
    document.getElementById('doorNo').innerHTML = carData[5].doorNo;
    document.getElementById('ac').innerHTML = carData[5].ac;
    document.getElementById('acYes').innerHTML = carData[5].acYes;
    document.getElementById('tran').innerHTML = carData[5].tran;
    document.getElementById('tranManual').innerHTML = carData[5].tranManual;
    document.getElementById('fuel').innerHTML = carData[5].fuel;
    document.getElementById('fuelDis').innerHTML = carData[5].fuelDis;
    
}



var faq = document.querySelectorAll(".faqs");

faq.forEach(faqs => {
    faqs.addEventListener("click", () =>{
        faqs.classList.toggle("active");
    })
})




// -----------Scrollup------------
$(function () {
    $.scrollUp({
        scrollDistance: 200,
        scrollSpeed: 500,
        scrollImg: true
    });
});





