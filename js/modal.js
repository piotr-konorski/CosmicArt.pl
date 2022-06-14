let slideIndex = null;

function openLightbox(images) {
    var modalContent = document.getElementById('LightboxContent');

    for (i=0; i<images.length; i++) {
        var divSlide = document.createElement('div');
        divSlide.classList.add('slide');
        
        var imgElem = document.createElement('img');
        imgElem.src = images[i];
        imgElem.classList.add('image-slide');
        
        divSlide.appendChild(imgElem);
        modalContent.appendChild(divSlide);

        imgElem.onclick = function() { closeLightbox(); };
    }

    document.getElementById('Lightbox').style.display = 'block';
    slideIndex = 1;
    setSlide(slideIndex);
};

function closeLightbox() {
    slideIndex = null;

    document.getElementById('Lightbox').style.display = 'none';

    var modalContent = document.getElementById('LightboxContent');
    while (modalContent.firstChild) {
        modalContent.removeChild(modalContent.lastChild);
    }
};

function changeSlide(n) {
    if (slideIndex !== null)
        setSlide(slideIndex += n);
};


function setSlide(n) {
    if (slideIndex !== null) {
        const slides = document.getElementsByClassName('slide');

        if (n > slides.length) {
            slideIndex = 1;
        };

        if (n < 1) {
            slideIndex = slides.length;
        };

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        };

        slides[slideIndex - 1].style.display = 'block';
    }
};


$(document).keyup(function(e) {
    if (e.key === "Escape") {
       closeLightbox()
    } else if (e.key === "ArrowLeft") {
        changeSlide(-1);
    } else if (e.key === "ArrowRight") {
       changeSlide(1);
    }
});

$('*').click(function(e) {
    if(e.target.tagName == 'DIV') {
        closeLightbox()
    }
});

document.addEventListener('swiped-left', function(e) {
    // console.log(e.target); // element that was swiped
    // console.log(e.detail); // see event data below
    changeSlide(-1);
});

document.addEventListener('swiped-right', function(e) {
    // console.log(e.target); // element that was swiped
    // console.log(e.detail); // see event data below
    changeSlide(1);
});
