
// Gift box click
function openGift() {
    document.getElementById('letter').classList.remove('hidden');
    lightCandles();
    startConfetti();
}

// Simple confetti animation
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiCount = 150;
const confetti = [];

for(let i=0;i<confettiCount;i++) {
    confetti.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height - canvas.height,
        r: Math.random()*6+2,
        d: Math.random()*confettiCount,
        color: `hsl(${Math.random()*360},100%,50%)`,
        tilt: Math.random()*10 - 10,
        tiltAngleIncrement: Math.random() * 0.07 + 0.05
    });
}

function drawConfetti() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<confetti.length;i++){
        let c = confetti[i];
        ctx.beginPath();
        ctx.lineWidth = c.r/2;
        ctx.strokeStyle = c.color;
        ctx.moveTo(c.x+c.tilt+c.r/4, c.y);
        ctx.lineTo(c.x+c.tilt, c.y+c.tilt+c.r/4);
        ctx.stroke();
        c.tiltAngle += c.tiltAngleIncrement;
        c.y += (Math.cos(c.d)+1+c.r/2)/2;
        c.tilt = Math.sin(c.tiltAngle)*12;
        if(c.y>canvas.height){ c.y = -10; c.x = Math.random()*canvas.width; }
    }
    requestAnimationFrame(drawConfetti);
}

function startConfetti(){ drawConfetti(); }

// Adjust canvas size on window resize
window.addEventListener('resize', ()=>{ canvas.width=window.innerWidth; canvas.height=window.innerHeight; });
