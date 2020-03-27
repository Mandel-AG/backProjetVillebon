window.addEventListener('DOMContentLoaded', ()=>{
    const retour = document.querySelector('#retour');
    const addadmin = document.getElementById('addadmin')
    const id = document.querySelectorAll('#adminId');






    retour.addEventListener('click', ()=>{
        window.location = 'http://localhost:3004/accueil'
    })


    addadmin.addEventListener('click',()=>{
        window.location = 'http://localhost:3004/admin/add'
    })

    processDelete();


    for(const adminId of id){
        adminId.addEventListener('click', function(){
            const idadmin = this.textContent;
            if ( confirm('Voulez-vous modifier cet Admin ?') ){
                window.location = `http://localhost:3004/editAdmin/${idadmin}`; 
            }
              })
    }
})



processDelete = ()=>{
    const deleteButton = document.querySelectorAll('#delete')
    const adminsList = document.querySelector('#adminsList')

    deleteButton.forEach(button =>{
        button.addEventListener('click',(event)=>{
            const adminId = event.target.getAttribute('adminid');
            axios.delete('/admins/' + adminId)
                .then( response =>{
                    adminsList.innerHTML = response.data;
                    processDelete();
                })
        })
    })
}