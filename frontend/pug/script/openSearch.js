var
  openSearch = document.getElementById('search'),
  searchInput = document.getElementById('searchInput'),
  h1 = document.getElementsByTagName('h1');

openSearch.classList.add('active');

searchInput.value = h1[0] .innerHTML;



searchInput.addEventListener('change', searchOutput);

function searchOutput(){
  h1[0].innerHTML = searchInput.value;
}
