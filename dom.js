document.getElementById('add-border').addEventListener('click', function(){
    console.log('clicked');
    const container = document.getElementById('friend-container');
    container.style.border = '5px solid red';
})

function addBackgroundColor(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
    friend.style.backgroundColor = 'lightblue'
    }
}

document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
            <h3 class="friend-name">New Friend</h3>
            <p>Itaque, provident.</p>
    `;
    container.appendChild(friendDiv);
})
