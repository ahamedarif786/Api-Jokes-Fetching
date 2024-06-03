const buttonArr = ["animal","career","celebrity",
"dev","explicit","fashion",
"food","history","money",
"movie","music","political",
"religion","science","sport","travel"];

const ul = document.querySelector("ul");
const input = document.querySelector("#categories-input")

function xhrFunction(url){
    const xhr = new XMLHttpRequest;
    xhr.open("GET", url, true);

    xhr.onload = function(){
        if(this.status === 200){
            const result= JSON.parse(this.responseText);

            const joke = result.value;
            console.log(joke)

            const li= document.createElement("li");

            li.appendChild(document.createTextNode(joke));

            ul.appendChild(li);
            
            
        }
    }
    xhr.send();
}




document.addEventListener("DOMContentLoaded", function(){
    const randomApi ="https://api.chucknorris.io/jokes/random";
    const btnwrapper = document.querySelector(".all-btn");
    buttonArr.forEach(function(item){
        
        const btn = document.createElement("button");
        btnwrapper.style.display = "flex";
        btnwrapper.style.gap = "10px";
        btn.className = "btn btn-info category-btn";
        btn.innerText = item;
        btnwrapper.appendChild(btn);

        
    })
    btnwrapper.addEventListener("click", function(e){
        if(e.target.className === "btn btn-info category-btn"){
            input.value = e.target.innerText; 
        }
        
    })
})
document.getElementById("joke-form").addEventListener("submit", function(e){
    e.preventDefault();
    const getinput = input.value;

    if(getinput === ""){
        alert("Please select any one of the above Buttons...!");
        return; 
    }

    const getcate = `https://api.chucknorris.io/jokes/random?category=${getinput}`;
    
    xhrFunction(getcate)
})

