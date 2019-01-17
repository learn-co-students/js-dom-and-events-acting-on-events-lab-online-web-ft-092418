function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

$(document).ready(function() {
  retrieveEmployeeInformation()
});

const retrieveEmployeeInformation = function(){
  return $('input[name=name]').val()
}

function addNewElementAsLi(){
  $('.employee-list').append(`<li>${retrieveEmployeeInformation()}</li>`)
}

function addNewLiOnClick(){
  addNewElementAsLi()
  $('input[name=name]').val("")
}

function clearEmployeeListOnLinkClick(){
  $('a').click(function (){
    $('.employee-list').empty()
  })
}
