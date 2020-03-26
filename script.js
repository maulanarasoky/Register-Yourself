const CACHE_KEY = "CACHE_KEY";

function checkForStorage(){
    return typeof(Storage) != "undefined"
}
function input(data){
    if(checkForStorage()){
        let historyData = null;
        if(localStorage.getItem(CACHE_KEY) === null){
            historyData = [];
        }else{
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        historyData.unshift(data);

        if(historyData.length() > 5){
            historyData.pop();
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
}

function showData(){
    if(checkForStorage()){
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    }else{
        return [];
    }
}

function renderHistory(){
    const historyData = showData();
    let historyList = document.querySelector("#result");


    historyList.innerHTML = "";

    for(let history of historyData){
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history
    }
}