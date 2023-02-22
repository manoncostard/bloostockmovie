
function returnFirstDisplayedHorse(obj) {
    return obj.foo;
}

function hideHorse(horse) {
    horse.style.display = "none";
}

function displayHorse(horse) {
    horse.style.display = "flex";
}

let next = document.getElementById('next');
let prev = document.getElementById('prev');
let currentHorse = { foo: 1};

function slideToNext(obj) {
    if(obj.foo <= 3) {
        let firstDisplayedHorse = 'horse' + returnFirstDisplayedHorse(obj);
        let nextHorse = 'horse' + (returnFirstDisplayedHorse(obj) + 3);
        hideHorse(document.getElementById(firstDisplayedHorse));
        displayHorse(document.getElementById(nextHorse));
        obj.foo += 1;
        if (obj.foo > 1) {
            prev.disabled = false;
        } if (obj.foo >= 4) {
            next.disabled = true;
        } else if (obj.foo < 2) {
            next.disabled = false;
        }
    }
};

function slideToPrev(obj) {
    if(obj.foo > 1) {
        let lastDisplayedHorse = 'horse' + (returnFirstDisplayedHorse(obj) + 2);
        let prevHorse = 'horse' + (returnFirstDisplayedHorse(obj) - 1);
        hideHorse(document.getElementById(lastDisplayedHorse));
        displayHorse(document.getElementById(prevHorse));
        obj.foo -= 1;
        console.log(obj.foo);
        if (obj.foo < 4) {
            next.disabled = false;
        }
        if (obj.foo < 2) {
            prev.disabled = true;
            console.log('disabled');
        } else if (obj.foo >= 2) {
            prev.disabled = false;
            console.log('enabled');
        }
    }
};
