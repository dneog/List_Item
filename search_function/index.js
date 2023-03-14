var form= document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter= document.getElementById('filter');

form.addEventListener("submit", function(event){
    event.preventDefault();
    var newItem= document.getElementById('item').value;
    var newItem2= document.getElementById('item2').value;
    var li= document.createElement('li');
    li.className='list-group-item';
    var liText= document.createTextNode(`${newItem} ${newItem2}`)
    li.appendChild(liText);

    var deletebtn= document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm mx-2 float-right delete'
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
   

    var editButton= document.createElement('button');
    editButton.className='btn btn-primary btn-sm float-right edit';
    editButton.appendChild(document.createTextNode('Edit'));
    li.appendChild(editButton);

    itemList.appendChild(li);
   

});

itemList.addEventListener('click', function(event){
    event.preventDefault();
    if(event.target.classList.contains('delete')){
        if(confirm('Are You Sure ?')){
            var li=event.target.parentElement;
            itemList.removeChild(li);
        }
    }
});

filter.addEventListener('keyup', function(event){
    event.preventDefault();
    var lowerText= event.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName= item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(lowerText)!= -1){
            item.style.display='block';
        }else{
            item.style.display= 'none';
        }
    });

});
