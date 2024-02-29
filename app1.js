const btn1 = document.querySelector( "#btn1" );
btn1.addEventListener("click", function(){
    //alert('Button 1 clicked!');
    console.log( "Button 1 Clicked!" );

    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
});