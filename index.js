function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector("input").value ;

}


function addNewElementAsLi(){
  const node = document.createElement("li")
  node.innerHTML = retrieveEmployeeInformation()
  document.querySelector(".employee-list").appendChild(node)
}

function addNewLiOnClick(){
  addNewElementAsLi();
  document.querySelector("input").value = '';
}

function clearEmployeeListOnLinkClick(){
  const button = document.querySelector('a');
  // debugger;
  button.addEventListener("click" , function(event){
    document.querySelector(".employee-list").innerHTML = '';
  });
}
