let counter = 1;

function printCounter() {
    console.clear();
    console.log(counter);
    counter += 1;
}

function setIntervalClone(printCounter, delay) {
    function recursiveFunction() {
        printCounter();
        setTimeout(recursiveFunction, delay);
    }
    setTimeout(recursiveFunction, delay);
}

setIntervalClone(printCounter, 1000);