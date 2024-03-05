 const form = document.querySelector('#formlink');
 const itemName = document.querySelector('#itemname');
 const item = document.querySelector('#item');

 formlink.addEventListener( 'submit', (e) => {
    e.preventDefault();

    const itemNames = itemName.value;

    const list = document.createElement('li');
    list.innerText = itemNames;
    item.append(list);
    item.value = '';





    
});
 