function gecisYap() {
    var videoYukseklik = document.querySelector('.back-video').offsetHeight;
    var button = document.querySelector('.gecis-button');

    if (button.innerText === 'Daha Fazla ˅') {
        window.scrollTo({
            top: document.getElementById("video-bottom").offsetTop + videoYukseklik,
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