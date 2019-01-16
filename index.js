function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  // const form = document.querySelector("form")
  // form.addEventListener("submit", function(e){
  return document.querySelector("input").value
  // })
}

function addNewElementAsLi() {
  const name = retrieveEmployeeInformation();
  const node = document.createElement("LI")
  node.innerHTML = name;
  document.querySelector(".employee-list").appendChild(node);
}

function addNewLiOnClick() {
  const button = document.querySelector("form")
  button.addEventListener("click", function(e){
    const node = document.createElement("LI")
    node.innerHTML = retrieveEmployeeInformation();
    document.querySelector(".employee-list").appendChild(node);
    document.querySelector("input").value = ""
  })
}

function clearEmployeeListOnLinkClick() {
  const button = document.querySelector("a")
  button.addEventListener("click", function(e){
    const root = document.querySelector(".employee-list");
    // console.log(root)
    // let i; let length = root.querySelectorAll("li").length
    // for (i = 0; i < length; i++){
    //   root.removeChild(root.querySelector("li"))
    // }
    root.innerHTML = ""
  })
}
