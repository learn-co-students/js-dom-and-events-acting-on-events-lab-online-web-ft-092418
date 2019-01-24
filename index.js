function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  return document.querySelector('.employee-list').append(`<li>${retrieveEmployeeInformation()}</li>`);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]');

  submit.addEventListener('click', function(e) {
    addNewElementAsLi();
    document.querySelector('input').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  let ul = document.querySelector('ul');
  let button = document.querySelector('a');

  button.addEventListener('click', function(e) {
    ul.innerHTML = '';
  });
}
