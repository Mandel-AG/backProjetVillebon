window.addEventListener('DOMContentLoaded', ()=>{

   const retour = document.querySelector('#retour');

   

   retour.addEventListener('click', ()=>{
    window.location = '/accueil'
   })


   updateteam()
   processDelete();

})

updateteam = () =>{
   const id = document.querySelectorAll('#idElement');

   for(const idElement of id){
       idElement.addEventListener('click', function(){
           const idTeam = this.textContent;
           if (confirm('Voulez-vous modifier cette Equipe ?') ){
               window.location = `/teams/editTeam/${idTeam}`;
           } 
       })
   }

}


processDelete = ()=>{
   const buttondelete = document.querySelectorAll('#delete');
   const teamList = document.querySelector('#teamsList')

   buttondelete.forEach(button =>{
       button.addEventListener('click', (event)=>{
           const teamId = event.target.getAttribute('teamid');
           axios.delete('/teams/' + teamId)
               .then( res => {
                   teamList.innerHTML = res.data;
                   processDelete();
                   updateteam();
               })
       })
})

}