let hrs = new Date().getHours();
let mins = new Date().getMinutes();
let secs = new Date().getSeconds();

let hrsAmPm = new Date().getHours();
let amPm = 'AM';
if(hrsAmPm >= 12){
    amPm = 'PM';
}

function printTime() {
    if(secs === 60) {
        secs = 0;
        mins += 1;
    }
    if(mins === 60) {
        secs = 0;
        mins = 0;
        hrs += 1
        hrsAmPm += 1
    }
    if(hrs === 24) {
        secs = 0;
        mins = 0;
        hrs = 0;
    }
    if(hrsAmPm === 12) {
        amPm = (amPm === 'AM'? 'PM' : 'AM');
        secs = 0;
        mins = 0;
    }
    if(hrsAmPm > 12) {
        hrsAmPm = hrsAmPm % 12;
    }
    console.clear();
    console.log(`${hrs}:${mins}::${secs}`);
    console.log(`${hrsAmPm}:${mins}::${secs} ${amPm}`);
    secs += 1;
}

setInterval(printTime,1000);