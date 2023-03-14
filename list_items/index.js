var form= document.getElementById('addForm');
var itemList= document.getElementById('items');
form.addEventListener("submit", function(event){
    event.preventDefault();
    var newItem= document.getElementById('item').value;
    var li= document.createElement('li');
    li.className='list-group-item';
    var liText= document.createTextNode(newItem)
    li.appendChild(liText);

    var editButton= document.createElement('button');
    editButton.className='btn btn-primary btn-sm float-right edit';
    editButton.appendChild(document.createTextNode('Edit'));
    li.appendChild(editButton);

    var deletebtn= document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm mx-2 float-right delete'
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    itemList.appendChild(li);

})

itemList.addEventListener('click', function(event){
    event.preventDefault();
    if(event.target.classList.contains('delete')){
        if(confirm('Are You Sure ?')){
            var li=event.target.parentElement;
            itemList.removeChild(li);
        }
    }
})