const KEY_NAME = "NAME"
const KEY_EMAIL = "EMAIL"
const KEY_COUNT = "COUNT"
var NAME_ARRAY = []
var EMAIL_ARRAY = []


function addData(){
    var totalNumber = 0
    if(typeof(Storage) !== "undefined"){
        if(localStorage.getItem(KEY_NAME) === null){
            localStorage.setItem(KEY_NAME, JSON.stringify([]))
        }

        if(localStorage.getItem(KEY_EMAIL) === null){
            localStorage.setItem(KEY_EMAIL, JSON.stringify([]))
        }

        //Create variable for re-assigned the array
        let arrName = JSON.parse(localStorage.getItem(KEY_NAME))
        let arrEmail = JSON.parse(localStorage.getItem(KEY_EMAIL))

        //Get value from user
        let name = document.getElementById("name").value
        let email = document.getElementById("email").value

        //Re-assigned the array
        NAME_ARRAY = arrName
        EMAIL_ARRAY = arrEmail

        var count = NAME_ARRAY.length

        if(validateEmail(email)){
            //Adding name to array
            NAME_ARRAY[count] = name
            localStorage.setItem(KEY_NAME, JSON.stringify(NAME_ARRAY))

            //Adding email to array
            EMAIL_ARRAY[count] = email
            localStorage.setItem(KEY_EMAIL, JSON.stringify(EMAIL_ARRAY))

            clearForm();
            showData();
        }else{
            alert('Email Anda tidak valid')
        }
    }
}

function showData(){
    if(typeof(Storage) !== "undefined"){
        if(localStorage.getItem(KEY_NAME) !== null){

            var nameData = JSON.parse(localStorage.getItem(KEY_NAME))
            var emailData = JSON.parse(localStorage.getItem(KEY_EMAIL))

            

            var tag = ""
            if(nameData.length > 0){
                console.log("DATA " + nameData.length)
                for(var i = 0; i < nameData.length; i++){
                    tag += "<tr>" + 
                                "<td>" + (i + 1) + "</td>" +
                                "<td>" + nameData[i] + "</td>" +
                                "<td>" + emailData[i] + "</td>" +
                            "</tr>"
                }
            }

            document.getElementById("bodyResult").innerHTML = tag
        }
    }
}

function clearStorage(){
    localStorage.clear()
    showData()
}

function clearForm(){
    document.getElementById("form").reset()
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}