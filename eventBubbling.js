const btn = document.querySelector( '#btn' );
const container = document.querySelector( '#container' );

btn.addEventListener('click', (e) => {
   container.style.backgroundColor = makecolor();
    e.stopPropagation();
});

container.addEventListener('click', () =>{
    container.classList.toggle("hide");
});

const makecolor = function(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = Math.floor(Math.random() * 255);

    return  `rgba(${r}, ${g}, ${b}, ${a/255})`;
};
