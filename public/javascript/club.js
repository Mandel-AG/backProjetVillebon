window.addEventListener('DOMContentLoaded', ()=>{

   const retour = document.querySelector('#retour');

   

   retour.addEventListener('click', ()=>{
        window.location = '/accueil'
   })


   updateclub()
   processDelete();

})

updateclub = () =>{
   const id = document.querySelectorAll('#idElement');

   for(const idElement of id){
       idElement.addEventListener('click', function(){
           const idClub = this.textContent;
           if (confirm('Voulez-vous modifier ce Club ?') ){
               window.location = `/clubs/editClub/${idClub}`;
           } 
       })
   }

}


processDelete = ()=>{
   const buttondelete = document.querySelectorAll('#delete');
   const clubList = document.querySelector('#clubList')

   buttondelete.forEach(button =>{
       button.addEventListener('click', (event)=>{
           const clubId = event.target.getAttribute('clubid');
           axios.delete('/clubs/' + clubId)
               .then( res => {
                   clubList.innerHTML = res.data;
                   processDelete();
                   updateclub();
               })
       })
})

}