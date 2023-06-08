const socket = io('ws://localhost:8080');

socket.on('message', data => {
    console.log('message from backed', data)
    createElement(data)
})

function sendMessage() {
    // Get the input value
    var input = document.getElementById("messageInput");
    var message = input.value;


    socket.send(message)

    // Clear the input value
    input.value = "";
}

function createElement(message) {
    // Create a new li element
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(message));

    // Append the li element to the ul element
    var ul = document.getElementById("messageList");
    ul.appendChild(li);
}
