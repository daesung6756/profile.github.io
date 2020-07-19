'use strict'


const visual = document.querySelector(".visual-spot");
let e1, e2, e3, bg;

function setup() {
    const canvas1 = createCanvas(331 , 512 , [visual]);
    canvas1.parent(visual);
    bg = loadImage('images/cat.png');
    noStroke();
    e1 = new Eye(100, 100, 60);
    e2 = new Eye(160, 100, 60);
}

function draw() {
    background(bg);
    e1.update(mouseX, mouseY);
    e2.update(mouseX, mouseY);
    e1.display();
    e2.display();
}

function Eye(tx, ty, ts) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0;

    this.update = function(mx, my) {
        this.angle = atan2(my - this.y, mx - this.x);
    };

    this.display = function() {
        push();
        translate(this.x, this.y);
        fill(255);
        ellipse(0, 0, this.size, this.size);
        rotate(this.angle);
        fill(0);
        ellipse(this.size / 3.3, 0, this.size / 3, this.size / 3);
        pop();
    };
}