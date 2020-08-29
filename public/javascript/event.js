window.addEventListener('DOMContentLoaded', function(){
    const retour = document.querySelector('#retour');    
    

    retour.addEventListener('click', ()=>{
        window.location = '/accueil'
    })

    processDelete();
    updateevent();

})

updateevent = ()=>{
    const id = document.querySelectorAll('#idElement');

    for(const idElement of id){
        idElement.addEventListener('click', function(){
            const idEvent = this.textContent;
            if( confirm('Voulez-vous modifier cet Evenement ?') ){
                window.location = `/events/editEvent/${idEvent}`; 
            }
        })
    }
}




processDelete = () =>{
    const eventList = document.querySelector('#eventList');
    let deletebutton = document.querySelectorAll('#delete')

    
    deletebutton.forEach(button =>{
        button.addEventListener('click',(event)=>{
            const idElement = event.target.getAttribute('eventid');
            axios.delete('/events/' + idElement)
                 .then( res => { 
                     eventList.innerHTML = res.data;
                     processDelete();
                     updateevent();
                 })
                 .catch(e =>{ console.log(e) })
        })
    })
}
