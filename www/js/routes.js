var home = document.getElementById('home');
var profile = document.getElementById('profile');
var app_info = document.getElementById('app_info');
var artists = document.getElementById('artists');
var videos = document.getElementById('videos');
var genre = document.getElementById('genre');
var events = document.getElementById('events');
var add_video = document.getElementById('add_video');
var extras = document.getElementById('extras');


videos.addEventListener('click', openVideoPage);
genre.addEventListener('click', openGenrePage);
home.addEventListener('click',openHomePage);
app_info.addEventListener('click', openAppInfo);
artists.addEventListener('click', openArtistPage);
profile.addEventListener('click', openProfilePage);
events.addEventListener('click', openEventsPage);
add_video.addEventListener('click',openAddVideoPage);





function openHomePage(){
    location.href= "./index.html";
}


function openAppInfo(){
    location.href= "./app.html";
}

function openVideoPage(){
   location.href= "./video.html";

}

function openArtistPage(){
    location.href="./artists.html";
}



function openProfilePage(){
    location.href= "./profile.html";
}

function openGenrePage(){
    location.href = "./genre.html";
}

function openEventsPage(){
    location.href = "./events.html";
}

function openAddVideoPage(){
    location.href = "./addVideo.html";
}










