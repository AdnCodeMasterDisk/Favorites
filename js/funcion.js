var linkfavorites = [];

function addlink(plink, pdescription){

    var newlink = {
        link : plink,
        description : pdescription
    };

    console.log(newlink);
    linkfavorites.push(newlink);
    localStoragelinkfavorites(linkfavorites);
}

function getlinklist(){
    var storedList = localStorage.getItem('locallinklist');
    if(storedList == null){
        linkfavorites =[];
    }else{
        linkfavorites = JSON.parse(storedList);
    }
    return linkfavorites;
}

function localStoragelinkfavorites(plist){
    localStorage.setItem('locallinklist', JSON.stringify(plist));
}