const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = ({ data }) => {
    console.log('message from backed', data)
    createElement(data)
}

// document.getElementById('click', ())
// document.querySelector('#click').onclick = () => {
//     socket.send('hello')
// }

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
/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="click">click me to call websockets</button>
</body>

</html>
*/
