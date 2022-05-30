const APIURL = "https://api.github.com/users";
const card = document.getElementById("user-container");

const getUser = (userName = "aqib-nawaz") => {
    fetch(`${APIURL}/${userName}`)
        .then((res) => res.json())
        .then((userData) => {
            showUserData(userData);
        });
};
function showUserData(user) {


    if(user.message === 'Not Found'){
        card.innerHTML = `<h2 style="text-align:center">User Not Found<h2>`
    } else {
        card.innerHTML = `
        <img src= ${user.avatar_url} alt=${user.name}>
        <div class="user-profile-details">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <div class="stats">
                <span> ${user.followers} Follower</span>
                <span>${user.following} Following</span>
                <span>${user.public_repos} Repos</span>
            </div>
        </div>
        `;
    }
    
}


document.getElementById("search-btn").addEventListener("click", () => {
    let input = document.getElementById("input").value;

    if (input) {
        getUser(input);  
    } else {
        alert("Please Enter some value");
    }
    document.getElementById('input').value = '';
});
