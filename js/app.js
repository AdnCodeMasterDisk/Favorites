document.querySelector('#btnadd').addEventListener('click', savelink);
drawtable();

function savelink(){

    var Slink = document.querySelector('#txtlink').value,
        Sdescription = document.querySelector('#txtdescription').value;
    
    addlink(Slink, Sdescription);
    drawtable();
}

function drawtable(){
    var list = getlinklist(),
        tbody = document.querySelector('#linktable tbody');
    
        tbody.innerHTML = '';

    for( var i = 0; i < list.length; i++){

        var row = tbody.insertRow(i),
            linkCell = row.insertCell(0),
            descriptionCell = row.insertCell(1);
        
        linkCell.innerHTML = list[i].link;
        descriptionCell.innerHTML = list[i].description;

        tbody.appendChild(row);
    }
}
