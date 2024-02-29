const makeRndmClr = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.floor(Math.random() * 256);

    return `rgba(${r}, ${g}, ${b}, ${a})`
}

const buttons = document.querySelectorAll('button');
for(let button of buttons){
    button.addEventListener("click", colorize);
    //button.addEventListener("click", function(){
    //console.log("Button clicked!");
    //});
}

function colorize(){
    this.style.backgroundColor = makeRndmClr();
    this.style.color = makeRndmClr();
}