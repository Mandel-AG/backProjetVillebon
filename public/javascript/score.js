window.addEventListener('DOMContentLoaded', function(){
    const retour = document.querySelector('#retour');    
    

    retour.addEventListener('click', ()=>{
        window.location = '/accueil'
    })

    processDelete();
    updatescore();

})

updatescore = ()=>{
    const id = document.querySelectorAll('#idElement');

    for(const idElement of id){
        idElement.addEventListener('click', function(){
            const idScore = this.textContent;
            if( confirm('Voulez-vous modifier cet element ?') ){
                window.location = `/score/editScore/${idScore}`; 
            }
        })
    }
}




processDelete = () =>{
    const scoreList = document.querySelector('#scoreList');
    let deletebutton = document.querySelectorAll('#delete')

    
    deletebutton.forEach(button =>{
        button.addEventListener('click',(event)=>{
            const idElement = event.target.getAttribute('scoreid');
            axios.delete('/score/' + idElement)
                 .then( res => { 
                     scoreList.innerHTML = res.data;
                     processDelete();
                     updatescore();
                 })
                 .catch(e =>{ console.log(e) })
        })
    })
}
