//Finding html elements....

var display = document.querySelector('#display');
var buttons = document.querySelectorAll('.key');
var equal = document.querySelector('.btn-equal');
var clear = document.querySelector('.btn-clear');

//main function start here...

//Working with each buttons....
buttons.forEach(function(button) {

  button.addEventListener('click', function(e) {

    var value = e.target.dataset.type;

    display.value += value;

  });

});

// Working with equal function...

equal.addEventListener('click',function(e){
  
  if(display.value === ''){
    display.value = '';
  }
  else{
    var answer =  eval(display.value);
    display.value =  answer;
  }
  
});


//Working with clear function....

clear.addEventListener('click',function(e){
  display.value = '';
})