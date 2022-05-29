const images = [
    "https://s2.loli.net/2022/05/29/SLbMBVmOo3ZuyEQ.png",
    "https://s2.loli.net/2022/05/29/v14lV827AXyKks9.gif",
    "https://s2.loli.net/2022/05/28/SzRAwQpB5ELrhDo.gif",
    "https://i.pinimg.com/originals/3d/22/45/3d224511a5e13317e46e37bee1d249dd.gif",
    "https://i.pinimg.com/originals/b0/10/e9/b010e954f94acbd034917b2d6931bd79.gif",
];

$(document).ready(function () {
    let current = 0;
    $("#mirror-content").on("click", function () {
        $(this).css({
            "background-image": `url(${images[++current % images.length]})`
        });
    });
});

