window.addEventListener('DOMContentLoaded', ()=>{

   const retour = document.querySelector('#retour');

   

   retour.addEventListener('click', ()=>{
    window.location = '/accueil'
})


   updatemember()
   processDelete();

})

updatemember = () =>{
   const id = document.querySelectorAll('#idElement');

   for(const idElement of id){
       idElement.addEventListener('click', function(){
           const idMember = this.textContent;
           if (confirm('Voulez-vous modifier ce Membre ?') ){
               window.location = `/members/editMember/${idMember}`;
           } 
       })
   }

}


processDelete = ()=>{
   const buttondelete = document.querySelectorAll('#delete');
   const memberList = document.querySelector('#membersList')

   buttondelete.forEach(button =>{
       button.addEventListener('click', (event)=>{
           const memberId = event.target.getAttribute('memberid');
           axios.delete('/members/' + memberId)
               .then( res => {
                   memberList.innerHTML = res.data;
                   processDelete();
                   updatemember();
               })
       })
})

}