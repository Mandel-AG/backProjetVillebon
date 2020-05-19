window.addEventListener('DOMContentLoaded', ()=>{

   const retour = document.querySelector('#retour');

   

   retour.addEventListener('click', ()=>{
       window.location = 'http://localhost:3004/accueil'
   })


   updategym()
   processDelete();

})

updategym = () =>{
   const id = document.querySelectorAll('#idElement');

   for(const idElement of id){
       idElement.addEventListener('click', function(){
           const idGym = this.textContent;
           if (confirm('Voulez-vous modifier ce Media ?') ){
               window.location = `http://localhost:3004/gyms/editGym/${idGym}`;
           } 
       })
   }

}


processDelete = ()=>{
   const buttondelete = document.querySelectorAll('#delete');
   const gymList = document.querySelector('#gymsList')

   buttondelete.forEach(button =>{
       button.addEventListener('click', (event)=>{
           const gymId = event.target.getAttribute('gymid');
           axios.delete('/gyms/' + gymId)
               .then( res => {
                   gymList.innerHTML = res.data;
                   processDelete();
                   updategym();
               })
       })
})

}