let mylist = [ 
    {photo: 'images/1.jpg',title: 'Carmel', description: 'The first thing you need to know about Carmel: Clint Eastwood used to be the mayor, so don’t come here if you’re a hooligan. But if you’re after a romantic getaway to a seaside, art-filled village, Carmel might be perfect for you.'},         // index 0 --> imgaes [0]
    {photo: 'images/2.jpeg',title: 'Rodeo Drive', description: 'Rodeo Drive is home to more than one hundred of the world’s leading international brands housed in exemplary, architect-designed boutiques along its three, palm-dotted blocks. Discover exceptional savoir-faire, craftsmanship and new experiences in luxury, art and culture.'},
    {photo: 'images/3.jpg',title: 'Las Vegas', description: 'Whatever you can dream up, Las Vegas delivers: Michelin-starred restaurants, 24-hour wedding chapels, larger-than-life scenery, slot machines, all of it. But just when you think you have Vegas pinned down, it surprises you.'},
    {photo: 'images/4.jpg',title: 'Antelope Canyon', description: 'Upper Antelope Canyon, which is also known as “The Crack,” is the most popular of the two slot canyons that make up Antelope Canyon. The radiant sun beams that shine through its walls in the spring and summer are one of its main claims to fame.'},
    {photo: 'images/5.jpg',title: 'Horseshoe Bend', description: 'This horseshoe-shaped incised meander of the Colorado River is just a short hike from the beginning of Grand Canyon National Park. The overlook point is particularly popular during sunset when the landscape is at its most vibrant, and the iconic turquoise bend glows against the orange cliffs.'},
    {photo: 'images/6.jpg',title: 'SeaWorld San Diego', description: 'SeaWorld San Diego is home to world-class animal presentations, rides, shows, and exhibits, spread out on beautiful Mission Bay Park. Stroll through over 100 acres of beautiful outdoor grounds on Mission Bay as you enjoy amazing animals, world-class educational presentations and exciting seasonal events.'},
    {photo: 'images/7.jpeg',title: 'Yosemite National Park', description: 'First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.'}
];
let i = 0;

$('#prev').click(function() {
    i--;
    if(i < 0) i = mylist.length - 1;
    setData();   
    })

$('#next').click(function () {
    i++;
    if(i > mylist.length -1) i = 0;
    setData();
})

$('.column img').click(function(){
    i = $(this).attr('num');
    setData();
})

function setData() {
    $('#picture').attr('src', mylist[i].photo);
    $('#title').html(mylist[i].title);
    $('#description').html(mylist[i].description);
}

$(document).ready(function(){
    setData();
})

/*szögletes záró jel lista , elemek vesszővel elválasztva, kapcsodzárójel objektumot jelölnek, ahol az elemek elválasztása vesszővel
objektum: kulcs - érték pár elemekből áll, kulcs, photo kettősponttal elválasztva az érték 
title helyén lista lenne akkor [], ha új objektum lenne {}, egymásba ágyazott objektum. (komplex objektum)
objektum a struktúráját adja

Tömb = lista: egy darab érték van : string, szám
Objektum: kulcs + érték

/* 
1-3 törlés 
setdata át kell írni emiatt 
jquery-vel férjünk hozzá az elemekhez ne a let-el. 
img src-vel kell title, desc valszeg value kell. 

version1: 
let sliderimg = document.querySelector('#picture');
let title = document.querySelector('#title');
let description = document.querySelector('#description');

function setData() {
    sliderimg.setAttribute('src', mylist[i].photo);
    title.innerHTML = mylist[i].title;
    description.innerHTML = mylist[i].description;
}

version2: 
function setData() {
    $('#picture').attr('src', mylist[i].photo);
    $('#title').html(mylist[i].title);
    $('#description').html(mylist[i].description);
}


sliderimg.setAttribute('src', mylist[i].photo);
    title.innerHTML = mylist[i].title;
    description.innerHTML = mylist[i].description;
    jquery legyen 


/* EZ JÓT VOLT CSAK NEM UNDULT ÚJRA
const firstImage = 0;
const lastImage = images.length;
let currentImage = 0;

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', ()=>{
    const imageTag = document.getElementById('image');
    currentImage++;
    if(currentImage >= lastImage){
        currentImage = 6;
    }
    imageTag.src = images[currentImage];
})

const prevBtn = document.getElementById('prev');
prevBtn.addEventListener('click', ()=>{
    const imageTag = document.getElementById('image');
    currentImage--;
    if(currentImage <= firstImage){
        currentImage = 0;
    }
    imageTag.src = images[currentImage];
})
*/

/* var active = document.querySelector('.active');
var imgaes = ['Images/imagine1_carmel.jpg', 'Images/imagine2_rodeo.jpeg', 'Images/imgaine3_seaworld.jpg', 'Images/imagine4_LV.jpg', 'Images/imagine5_antylop.jpg', 'Images/imagine6_horse.jpg', 'Images/imgaine7_yosemita.jpeg'];
var i = 0; //Current Imgage Index

function prev(){
    if (i <= 0)  i = images.length;
    i--;
    return setImg();
}

function next(){
        if (i >= images.length - 1) i = -1;
        i++;
        return setImg();
    }

function setImg(){
    return active.setAttribute('src', 'Images/' + images[i]);
} 
*/



/* let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides (n) {
    showSlides(slideIndex += n);
}

// Thumbnail imgage controls 
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = "mySlides";
    let dots = "demo";
    let captionText = "caption"
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace;
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].column += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
} */