function gecisYap() {
    var videoYukseklik = document.querySelector('.back-video').offsetHeight;
    var button = document.querySelector('.gecis-button');

    if (button.innerText === 'Daha Fazla ˅') {
        window.scrollTo({
            top: document.getElementById("video-bottom").offsetTop + 535,
            behavior: 'smooth' 
        });
        button.innerText = 'Yukarı Çık ˄'; 
    } else {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
        });
        button.innerText = 'Daha Fazla ˅'; 
    }

}



document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
        setTimeout(function () {
            var video = document.getElementById("video");
            video.src = "videos/mainvideo.mp4";
            video.play();
        }, 2000);
    }
});