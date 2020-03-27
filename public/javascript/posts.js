window.addEventListener('DOMContentLoaded', function(){
    const retour = document.querySelector('#retour');
    const id = document.querySelectorAll('#idElement');
    let input = document.querySelector('#input')
    
    
    
    

    input.addEventListener('input',function(event){
        try{
            const input = event.target.value
            axios.get('/posts/search?reqt='+ input)
                 .then( function(resp) {postList.innerHTML = resp.data })
        }
        catch(e){
            console.log(e)
        }
        
    })
    
    for(const idElement of id){
        idElement.addEventListener('click', function(){
            const idPost = this.textContent;
            if( confirm('Voulez-vous modifier ce Post ?') ){
                window.location = `http://localhost:3004/post/update/${idPost}`; 
            }
        })
    }


    retour.addEventListener('click', ()=>{
        window.location = 'http://localhost:3004/accueil'
        console.log('e')
    })

    processDelete();


})

processDelete = () =>{
    const postList = document.querySelector('#postList');
    let deletebutton = document.querySelectorAll('#delete')

    
    deletebutton.forEach(button =>{
        button.addEventListener('click',(event)=>{
            const idElement = event.target.getAttribute('postid');
            axios.delete('/posts/' + idElement)
                 .then( res => { 
                     postList.innerHTML = res.data;
                     processDelete();
                 })
                 .catch(e =>{ console.log(e) })
        })
    })
}
