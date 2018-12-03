var
  buba = document.getElementById('order-name22');
  button = document.getElementById('open-modal');
console.log(buba);

buba.addEventListener('change' ,huba);

function huba(){
  if (buba.value != ''){
    button.classList.add('button--pink');
    button.classList.remove('button--grey');
  }else{
    button.classList.remove('button--pink');
    button.classList.add('button--grey');
  }
}
