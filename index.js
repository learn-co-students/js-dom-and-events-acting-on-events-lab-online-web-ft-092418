function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    })
}

preventRefreshOnSubmit();

let input = document.querySelector('input');

const retrieveEmployeeInformation = () => {
  return input.value;
}

const addNewElementAsLi = () => {
  let employeeName = retrieveEmployeeInformation();
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`);
}

const addNewLiOnClick = () => {
  const submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(event){
    addNewElementAsLi();
    input.value = '';
  });
}

const clearEmployeeListOnLinkClick = () => {
  let link = document.querySelector('a');
  let list = document.querySelector('.employee-list');
  link.addEventListener('click', function(event){
    list.innerHTML = '';
  })
}