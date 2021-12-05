let initial_value=document.getElementById("counter_value");
function like(){
    let value=parseInt(initial_value.innerText);
    initial_value.innerText=value+1;
}
function dislike(){
    let value=parseInt(initial_value.innerText);
    initial_value.innerText=value-1;
}