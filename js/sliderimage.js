//array lokasi gambar
let imageSrcArr1 = ['./image/info-2.png', './image/info-3.png', './image/info-4.png', './image/info-5.png', './image/info-6.png', './image/info-1.png'];
let imageSrcArr2 = ['./image/info-3.png', './image/info-4.png', './image/info-5.png', './image/info-6.png', './image/info-1.png', './image/info-2.png'];
let imageSrcArr3 = ['./image/info-4.png', './image/info-5.png', './image/info-6.png', './image/info-1.png', './image/info-2.png', './image/info-3.png'];
let imgSlider1 = $(".content-info-img-1");
let imgSlider2 = $(".content-info-img-2");
let imgSlider3 = $(".content-info-img-3");

let sequenceContent1 = 0;
let sequenceContent2 = 0;
let sequenceContent3 = 0;

setInterval(function () {
    sequenceContent1 = (sequenceContent1 + 1) % imageSrcArr1.length; //hasil balikan 0,1,2,3..n, 0,1,2,3,n
    sequenceContent2 = (sequenceContent2 + 1) % imageSrcArr2.length;
    sequenceContent3 = (sequenceContent3 + 1) % imageSrcArr3.length;

    console.log("Test Urutan Foto 1", sequenceContent1);
    $(document).ready(function () {
        imgSlider1.fadeOut(1000, () => {
            imgSlider1.attr("src", imageSrcArr1[sequenceContent1]).animate({
                height: "676",
                width: "toggle"
            }, "slow");
            imgSlider1.fadeIn(1000);
        });
        console.log("Test Urutan Foto 2", sequenceContent2);

        imgSlider2.fadeOut(1000, () => {
            imgSlider2.attr("src", imageSrcArr2[sequenceContent2]).animate({
                height: "676",
                width: "toggle"
            }, "slow");
            imgSlider2.fadeIn(1000);
        });
        
        console.log("Test Urutan Foto 3", sequenceContent3);
        imgSlider3.fadeOut(1000, () => {
            imgSlider3.attr("src", imageSrcArr3[sequenceContent3]).animate({
                height: "676",
                width: "toggle"
            }, "slow");
            imgSlider3.fadeIn(1000);
        });
    });
}, 3000);