const ul = document.getElementById('testul');
const button = document.getElementById('testbutton');

console.log(button);


button.addEventListener('click', function(){
   const li = document.createElement('li');
   li.innerHTML = '<input name="games" class="form-control" type="text" /><br/>'
   // ul.innerHTML ='<li><input type="button"/></li>';
   ul.appendChild(li)
   console.log(li)
} )