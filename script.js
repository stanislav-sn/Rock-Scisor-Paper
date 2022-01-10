const locYou = [],
    locAi = [];

let out = document.querySelector('.out'),
    outAi = document.querySelector('.ai-num'),
    outYou = document.querySelector('.you-num');


function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('.but-1').onclick = () => {
    let a = getRandom(1, 3);
    if (a === 1) {
        out.innerHTML = 'TRY AGAIN';
    } else if (a === 2) {
        out.innerHTML = 'YOU WIN';
        locYou.push(1);
        localStorage.setItem('you', JSON.stringify(locYou));
        let lS = localStorage.getItem('you');
        lS = JSON.parse(lS);
        outYou.innerHTML = lS.length;
        
    }
    else if (a === 3) {
        out.innerHTML = 'YOU LOSE';
        locAi.push(1);
        localStorage.setItem('ai', JSON.stringify(locAi));
        let lS = localStorage.getItem('ai');
        lS = JSON.parse(lS);
        outAi.innerHTML = lS.length;
    }
}

document.querySelector('.but-2').onclick = () => {
    let a = getRandom(1, 3);
    if (a === 1) {
        out.innerHTML = 'YOU LOSE';
        locAi.push(1);
        localStorage.setItem('ai', JSON.stringify(locAi));
        let lS = localStorage.getItem('ai');
        lS = JSON.parse(lS);
        outAi.innerHTML = lS.length;
    } else if (a === 2) {
        out.innerHTML = 'TRY AGAIN';
    }
    else if (a === 3) {
        out.innerHTML = 'YOU WIN';
        locYou.push(1);
        localStorage.setItem('you', JSON.stringify(locYou));
        let lS = localStorage.getItem('you');
        lS = JSON.parse(lS);
        outYou.innerHTML = lS.length;
    }
}

document.querySelector('.but-3').onclick = () => {
    let a = getRandom(1, 3);
    if (a === 1) {
        out.innerHTML = 'YOU WIN';
        locYou.push(1);
        localStorage.setItem('you', JSON.stringify(locYou));
        let lS = localStorage.getItem('you');
        lS = JSON.parse(lS);
        outYou.innerHTML = lS.length;
    } else if (a === 2) {
        out.innerHTML = 'YOU LOSE';
        locAi.push(1);
        localStorage.setItem('ai', JSON.stringify(locAi));
        let lS = localStorage.getItem('ai');
        lS = JSON.parse(lS);
        outAi.innerHTML = lS.length;
    }
    else if (a === 3) {
        out.innerHTML = 'TRY AGAIN';
    }
}

document.querySelector('.reset').onclick = () => {
    localStorage.clear();
    locYou.length = 0;
    locAi.length = 0;
}