window.addEventListener('DOMContentLoaded', ()=>{

   const retour = document.querySelector('#retour');

   

   retour.addEventListener('click', ()=>{
    window.history.back();
   })


   updateproduct()
   processDelete();

})

updateproduct = () =>{
   const id = document.querySelectorAll('#idElement');

   for(const idElement of id){
       idElement.addEventListener('click', function(){
           const idProduct = this.textContent;
           if (confirm('Voulez-vous modifier ce Produit ?') ){
               window.location = `/products/editProduct/${idProduct}`;
           } 
       })
   }

}


processDelete = ()=>{
   const buttondelete = document.querySelectorAll('#delete');
   const productList = document.querySelector('#productsList')

   buttondelete.forEach(button =>{
       button.addEventListener('click', (event)=>{
           const productId = event.target.getAttribute('productid');
           axios.delete('/products/' + productId)
               .then( res => {
                  productList.innerHTML = res.data;
                   processDelete();
                   deleteproduct();
               })
       })
})

}