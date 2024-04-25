export const reactHTML = () => {
  return (`<!-- Toggle the switch next to the 'JavaScript' button to ENABLE or DISABLE Tailwind CSS. --> 
<!-- For more features, hover the cursor over the '☰' button on the right side.  -->
<!-- ------------------------------------------------------------------------------------ -->
<div id="root"></div>
`)}

export const reactCSS = () => {
  return (`
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #202125;
    color: white;
  }
  
  h1#title {
    color: #ff9933;
    margin-top: 50px;
    font-size: 50px;
    font-weight: 600;
  }
  
  button#btn {
    background-color: #ff9933;
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
    box-shadow: 0 0 20px #ff9933;
    transition: box-shadow 0.3s ease-in-out;
    margin-top: 20px;
  }
  
  button#btn::before {
    content: "";
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
    box-shadow: 0 0 40px #ff9933;
  }
  
  button#btn:hover::before {
    width: 100%;
    height: 100%;
  }
   
`)}

export const reactJS = () => {
    return(`

    const Counter = () => {
        const [count, setCount] = React.useState(0);
      
        const increment = () => {
          setCount(count + 1);
        };
      
        return (
          <div className="container">
            <h1 id="title">Increment Counter In React</h1>
            <p id="para">
              Count: <span id="count">{count}</span>
            </p>
            <button id="btn" onClick={increment}>
              Increment
            </button>
          </div>
        );
      };

function App(){
    return(
        <>
        <Counter />
        </>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />)  
`)}