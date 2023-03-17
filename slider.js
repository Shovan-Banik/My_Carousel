const images=[
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg'
]
imgIndex=0;
const img=document.getElementById('slider-img');
setInterval(() => {
    if(imgIndex===images.length){
        imgIndex=0;
    }
    img.setAttribute('src',images[imgIndex]);
    imgIndex++;
}, 500);