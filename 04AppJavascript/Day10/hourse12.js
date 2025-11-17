// let d = new Date();
// let hr = d.getHours();
// let min = d.getMinutes();

// let ampm = hr >= 12 ? "PM" : "AM";
// hr = hr % 12 || 12;

// console.log(`${hr}:${min} ${ampm}`);


let d = new Date();
let hr = d.getHours();
let min = d.getMinutes();

let ampm = "AM";

if (hr == 0) {
    hr = 12;
} else if (hr == 12) {
    ampm = "PM";
} else if (hr > 12) {
    hr = hr - 12;
    ampm = "PM";
}

// console.log(hr + ":" + (min < 10 ? "0" + min : min) + " " + ampm);
console.log(`${hr} : ${min} ${ampm}`);

