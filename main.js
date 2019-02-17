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

function shuffle(vetor) {
    for (let i = 1; i < vetor.length+1; i++) {
        rects[i].setAttribute('class', 'sorting');
        setTimeout(function(){
            var rand = Math.floor(Math.random() * (i));
            swap(vetor, rand, i - 1);
        }, i*10);
    }
}

function swap(vetor, i, j) {
    var temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
    swapSvgRects(rects[i], rects[j]);
}

function swapSvgRects(firstRect, secondRect) {
    var tempAttr = [firstRect.getAttribute('y'), firstRect.getAttribute('height')];
    firstRect.setAttribute('y', secondRect.getAttribute('y'));
    firstRect.setAttribute('height', secondRect.getAttribute('height'));
    secondRect.setAttribute('y', tempAttr[0]);
    secondRect.setAttribute('height', tempAttr[1]);
}