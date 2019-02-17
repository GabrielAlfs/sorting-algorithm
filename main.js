rects = [];
vetor = [];
for (let i = 0; i < 100; i++) {
    vetor[i] = i + 1;
}

window.onload = function(){
    for (let i = 0; i < vetor.length; i++) {
        createSvgRect((100/vetor.length)*i, 100-(100/vetor.length)*(i+1), (100/vetor.length), (100/vetor.length)*(i+1));
    }
};

function createSvgRect(x, y, width, height) {
    var newRect = document.createElementNS("http://www.w3.org/2000/svg","rect");
    newRect.setAttribute('x', x+"%");
    newRect.setAttribute('y', y+"%");
    newRect.setAttribute('width', width+"%");
    newRect.setAttribute('height', height+"%");
    newRect.classList.toggle('sorting');
    var svg = document.getElementById('sortingCanvas');
    svg.appendChild(newRect);
    rects.push(newRect);
}