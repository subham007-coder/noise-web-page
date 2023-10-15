const container = document.querySelector("#container")

const pvrBtn = document.querySelector(".carousel-control-prev");

const nextBtn = document.querySelector(".carousel-control-next");

let flag = 0;

pvrBtn.addEventListener("click", () => {
    flag += 1;
    console.log("pvr", flag);

    if (flag == 6) {
        flag = 0;
        container.style.backgroundColor = "#242424";
        console.log(flag);
    }

    if (flag == 1) {
        container.style.backgroundColor = "#37161D"
    }
    if (flag == 2) {
        container.style.backgroundColor = "#4F5855";
    }
    if (flag == 3) {
        container.style.backgroundColor = "#C4682C";
    }
    if (flag == 4) {
        container.style.backgroundColor = "#28334D";
    }
    if (flag == 5) {
        container.style.backgroundColor = "#243133";
    }
    if (flag == 6 || flag == 0) {
        container.style.backgroundColor = "rgb(36, 36, 36)";
    }
})

let flagnext = 0;

nextBtn.addEventListener("click", () => {
    flagnext += 1;
    console.log("next", flagnext);

    if (flagnext == 6) {
        flagnext = 0;
        container.style.backgroundColor = "#242424";
        console.log(flagnext);
    }

    if (flagnext == 1) {
        container.style.backgroundColor = "#243133";
    }
    if (flagnext == 2) {
        container.style.backgroundColor = "#28334D";
    }
    if (flagnext == 3) {
        container.style.backgroundColor = "#C4682C";
    }
    if (flagnext == 4) {
        container.style.backgroundColor = "#4F5855";
    }
    if (flagnext == 5) {
        container.style.backgroundColor = "#37161D";
    }
    if (flagnext == 6 || flagnext == 0) {
        container.style.backgroundColor = "rgb(36, 36, 36)";
        console.log("subham");
    }
})