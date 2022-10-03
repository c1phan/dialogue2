const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

var container = document.querySelector('.text');

//screen size
canvas.width = 523;
canvas.height = 703;

ctx.fillStyle = 'white';

const parkerImg = new Image();
parkerImg.src = './img/parker.png'; //referencing image of the parker

//background
const bgImg = new Image();
bgImg.src = './img/background.jpg'; //referencing background image
bgImg.onload = () => {
    ctx.drawImage(bgImg, 0,0); //position of image
    ctx.drawImage(parkerImg, 324, 215);
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "black";
    ctx.rect(-1,514,525,200);
    ctx.fillStyle='white';
    ctx.fillRect(-1,514,525,200);
    ctx.stroke();
};


var speeds = {
    pause: 500,
    veryslow: 350,
    slow: 170,
    normal: 100,
    fast: 1
};

var textLines = [
        { string: "Wow, you really understood the assignment! ", speed: speeds.normal},
        { string: "After seven years and many trials and errors, the Parker Solar Probe is ready to show off that main character energy. ", speed: speeds.normal},
        { string: "On August 12, 2018, from an Air Force Station in Florida, the Parker Solar probe blasted into space to start its journey to the sun.", speed: speeds.normal}
];

var characters = [];

textLines.forEach((line, index) => {
    line.string.split("").forEach((character) => {
        var span = document.createElement("span");
        span.textContent = character;
            container.appendChild(span);
            characters.push({
                span: span,
                isSpace: character === " " && !line.pause,
                delayAfter: line.speed,
                classes: line.classes || []
            });
    });
});

function revealOneCharacter(list) {
    var next = list.splice(0, 1)[0];
    next.span.classList.add("revealed");
    next.classes.forEach((c) => {
        next.span.classList.add(c);
    });

    var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

    if(list.length > 0){
        setTimeout(function() {
            revealOneCharacter(list);
        }, delay)
    }
}

setTimeout(() => {
    revealOneCharacter(characters);
}, 600)

function confirmFunction(){
    if(window.confirm("Wait, that’s sus. Look at that… we see the sun. But but.. What is that? SOLAR WINDS. This ain’t it, chef. Dodge the solar winds. Be careful of the switchbacks too queens! Stay safe out there girly pops")){
        window.location.href='https://c1phan.github.io/solarWinds/';
    }
    else{
        window.location.href='https://c1phan.github.io/dialogue2/'
    }
}
