const h2 = document.querySelector( 'h2' );

const btn1 = document.querySelector( "#btn1" );
btn1.addEventListener("click", function(){
    console.log( "Button 1 Clicked!" );

    const newColor = makeRanClr();
    document.body.style.backgroundColor = newColor;

   
    //h2.style.color  = newColor;
    h2.innerText =  `New Background Color: ${newColor}`;
    

});

const makeRanClr = ()  => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r}, ${g}, ${b})`;
}

