function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('form input').value 
}

function addNewElementAsLi() { 
  const name = document.createTextNode(retrieveEmployeeInformation())
  const ul = document.createElement("li").appendChild(name)
  document.getElementsByClassName("employee-list")[0].appendChild(ul)
}

function addNewLiOnClick() {
  document.getElementsByTagName('input')[1].addEventListener('click', function(e) {
    addNewElementAsLi()
    document.querySelector('form input').value = ''
  })  
}

function clearEmployeeListOnLinkClick() {
  document.getElementsByTagName('a')[0].addEventListener('click', function(e) {
    let element = document.getElementsByClassName("employee-list")[0]
    while (element.firstChild) {
      element.removeChild(element.firstChild)
    }
  })
}
