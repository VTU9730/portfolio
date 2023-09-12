const imgElement=document.getElementById("img")
const src=imgElement.src
var imgNumber=src.slice(29,src.length-4)
function handleNext(){
    imgNumber++
    if(imgNumber<5){
        imgElement.setAttribute("src",`${src.slice(0,src.length-5)}${imgNumber}.png`)
    }
    else{
        imgNumber=0
    }
}
function handlePrev(){ 
    if(imgNumber==1){
        imgNumber=4
    }
    imgNumber--
    if(imgNumber<5){
        imgElement.setAttribute("src",`${src.slice(0,src.length-5)}${imgNumber}.png`)
    }
}