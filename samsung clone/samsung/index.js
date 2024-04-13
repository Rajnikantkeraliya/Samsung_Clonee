var sliderdata = document.getElementsByClassName("slider");
counter = 0
console.log(sliderdata);
function slider() {
    for (let index = 0; index < sliderdata.length; index++) {
        console.log(sliderdata[index]);
        sliderdata[index].style.display = "none"
    }
     if(counter >= sliderdata.length) {
        counter = 0;
    }
    console.log  (counter);
    sliderdata [counter].style.display = "block"
    counter++;

    setTimeout(slider,2000);
}
slider();