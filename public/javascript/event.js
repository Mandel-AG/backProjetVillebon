window.addEventListener('DOMContentLoaded', function(){
    const retour = document.querySelector('#retour');
    let input = document.querySelector('#input')
    
     

    // input.addEventListener('input',function(event){
    //     try{
    //         const input = event.target.value;
    //         axios.get('/events/search?reqt='+ input)
    //              .then( function(resp) {eventList.innerHTML = resp.data })
    //     }
    //     catch(e){
    //         console.log(e)
    //     }
        
    // })
    

    retour.addEventListener('click', ()=>{
        window.location = 'http://localhost:3004/accueil';
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
                window.location = `http://localhost:3004/events/editEvent/${idEvent}`; 
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
