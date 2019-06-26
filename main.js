function $(div){
    return document.querySelector(div);
}

var appElement = $("#app");
var inputElement = $(".searchBar div input");
var btnElement = $(".searchBar div button");
var inputStatusBar = $('.searchBar div');
var apiUrl = 'https://api.github.com/users/';

// Search User function
function searchUser(){
    $("#userInfo").style = "";
    if (inputElement.value != ''){
        inputStatusBar.style.borderBottom = '2px solid #636f8f';

        axios.get(apiUrl+inputElement.value)
            .then(function(response){
                setUserInformation(response.data);
                inputElement.value = '';
            })
            .catch(function(error){
                console.warn(error);
            })
    }else{
        inputStatusBar.style.borderBottom = '2px solid #de3434';
    }
}

// Set User Information function
function setUserInformation(data){
    var userImage = $(".userImage img");

    userImage.src = data.avatar_url;
    $(".userName").innerHTML = data.name;
    $(".userUrl").innerHTML = data.html_url;
    $(".userUrl").setAttribute("href", data.html_url);
    $(".userBio").innerHTML = data.bio;
    $("#userFollowers").innerHTML = data.followers;
    $("#userRepos").innerHTML = data.public_repos;
}

/* Button onclick */
btnElement.onclick = searchUser;