window.addEventListener('DOMContentLoaded', ()=>{

    const retour = document.querySelector('#retour');







    

    retour.addEventListener('click', ()=>{
        window.location = 'http://localhost:3004/accueil'
        console.log('e')
    })


    updatemedia()
    processDelete();

})

updatemedia = () =>{
    const id = document.querySelectorAll('#idElement');

    for(const idElement of id){
        idElement.addEventListener('click', function(){
            const idMedia = this.textContent;
            if (confirm('Voulez-vous modifier ce Media ?') ){
                window.location = `http://localhost:3004/editMedia/${idMedia}`;
            } 
        })
    }

}


processDelete = ()=>{
    const buttondelete = document.querySelectorAll('#delete');
    const mediasList = document.querySelector('#mediasList')

    buttondelete.forEach(button =>{
        button.addEventListener('click', (event)=>{
            const mediaId = event.target.getAttribute('mediaid');
            axios.delete('/medias/' + mediaId)
                .then( res => {
                    mediasList.innerHTML = res.data;
                    processDelete();
                    updatemedia();
                })
        })
})

}