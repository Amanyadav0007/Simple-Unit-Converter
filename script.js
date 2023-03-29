let kilo = document.getElementById("kilo");
let gram = document.getElementById("gram");
kilo.addEventListener("input",function() {
    let x = this.value;
    let y = x*1000;
    gram.value=y;
});

gram.addEventListener("input",function() {
    let y = this.value;
    let x = y * 0.001;
    kilo.value=x;
});