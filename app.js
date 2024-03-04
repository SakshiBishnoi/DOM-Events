const btn2 = document.querySelector('#b2');

btn2.onclick = function(){
    console.log('Clicked');
    console.log('Worked');
}

function scream(){
    console.log('Ahhhhhhhhhhhhhhhhhhhhh');
    console.log('Nooooooooooooooooooooooo');
}

btn2.onmouseenter  = scream;

document.querySelector('h1').onclick = ()  => {
    alert("You clicked on the heading");
    };

const btn3 = document.querySelector('#b3');
btn3.addEventListener('mouseup', function(){
    alert('Clicked! button 3');
});

//const tasBtn = document.querySelector('#tas');
//tasBtn.addEventListener('click', Twist );
//tasBtn.addEventListener('click', Shout);

document.querySelector("#b4").addEventListener('click', function(evt){
    console.log("clicked for key",evt);
})

const input = document.querySelector('input');
input.addEventListener('keydown', function(e){
    console.log(e.key);
    console.log(e.code);
})

