const pop = document.getElementById("pop");

let count = 0;

pop.addEventListener("mousedown", () => {
    console.log("mousedown");
    pop.src = "img/pop.png";
    count += 1;
})
pop.addEventListener("mouseup", () => {
    const counter = document.getElementById("counter");
    console.log("mouseup");
    pop.src = "img/notpop.png";
    counter.innerHTML = count.toString();
})