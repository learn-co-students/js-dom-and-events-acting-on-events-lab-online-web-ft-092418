function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  // my solution:
  // let input = retrieveEmployeeInformation()
  // let li = document.createElement('li')
  // li.innerHTML = input
  // const ul = document.querySelector('.employee-list')
  // ul.appendChild(li)
  // document.querySelector('input').value = ''
  // return

  // solution solution:

  let employeeName = retrieveEmployeeInformation()

  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function addNewLiOnClick() {
  const submit = document.querySelector('input[type="submit"]')

  submit.addEventListener("click", function(event){
    addNewElementAsLi()
    resetInput()
  })
}

function clearEmployeeListOnLinkClick() {
  
  //my solution ver1 and ver2
  // const link = document.querySelector('a')
  // const ul = document.getElementsByClassName('employee-list')[0]
  // const lengthOfUl = ul.children.length
  // // link.addEventListener("click", () => {
  // //   for (let i = 0; i < lengthOfUl; i++) {
  // //     ul.children[0].remove()
  // //   }
  // //   ul.innerHTML = ''
  // //   return
  // // })
  
  // link.addEventListener('click', () => ul.innerHTML = '')
  // return


  // solution solution

  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}

function resetInput() {
  document.querySelector('input').value = ''
}

preventRefreshOnSubmit()

