import React from 'react'

export function html() {
  return (`<!-- Toggle the switch next to the 'HTML' button to ENABLE or DISABLE Tailwind CSS. -->
<!-- For more features, hover the cursor over the '☰' button on the right side.  -->
<!-- ------------------------------------------------------------------------------------ -->
<!-- Example of Increment Number -->
<h1 id='title'>Increment Counter</h1>
<p id='para'>Count: <span id="count">0</span></p>
<button  id='btn' onclick="increment()">Increment</button>
`
  )
}

export function css() {
    return (
        `body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #202125; 
    color: white; 
}

h1#title {
    color: #FF9933; 
    margin-top: 50px;
    font-size: 50px;
    font-weight: 600;
}

button#btn {
    background-color: #FF9933; 
    color: #202125; 
    letter-spacing: 2px;
    font-weight: 600;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 20px #FF9933;
    transition: box-shadow 0.3s ease-in-out;
    margin-top: 20px;
}

button#btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background-color: rgba(255, 153, 51, 0.2); 
    border-radius: 50%;
    z-index: 0;
    transition: all 0.6s ease-in-out;
    transform: translate(-50%, -50%);
}

button#btn:hover {
    box-shadow: 0 0 40px #FF9933; 
}

button#btn:hover::before {
    width: 100%;
    height: 100%;
}
`
    )
}

export function js() {
    return (
        `let count = 0;
function increment() {
    count++;
    document.getElementById('count').innerText = count;
}
`
    )
}