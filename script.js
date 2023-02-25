function run() {  
    let htmlcode=document.getElementById('html-code').value;
    let csscode=document.getElementById('css-code').value;
    let jscode=document.getElementById('js-code').value;
    let output=document.getElementById('output');

    output.contentDocument.body.innerHTML = htmlcode + "<style>"+ csscode+"</style>";
    output.contentWindow.eval(jscode);
}

// -----------------dark-mode------------------
 const body=document.querySelector('body'),
       header=body.querySelector("#header"),
       label=body.querySelector("label"),
       txtbox=body.querySelector("textarea"),
       switchBtn=body.querySelector(".toggle"),
       modeTxt=body.querySelector("h3");

       switchBtn.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeTxt.innerText="Light Mode";
        }
        else{
            modeTxt.innerText="Dark Mode";
        }
        
       })
// =============================================
function refresh() {
    var ifr = document.getElementsByName('iframe')[0];
    ifr.id = ifr.id;
}