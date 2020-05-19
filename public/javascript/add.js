const ajout = document.querySelector('#ajoutMedia');
const ul = document.querySelector('.ul')
const select = document.querySelector('.select')

ajout.addEventListener('click', ()=>{
   // ul.innerHTML = `<select class='btn btn-primary list-group' name="typePost">
   //            <option value="">--Please choose an option--</option>
   //            <option class='list-group-item text-body' value="equipe">Equipe</option>
   //            <option class='list-group-item text-body' value="actus">Actus/Events</option>
   //            <option class='list-group-item text-bodsingaley' value="club">Club</option>
   //            <option class='list-group-item text-body' value="boutique">Boutique</option>
   //            <option class='list-group-item text-body' value="evenement">Evenement</option>
   //        </select>`
   // const oui =select.cloneNode(true)
   // // const oui = document.createElement(input)
   ul.innerHTML = '<input name="file" class="form-control select" type="file" />'
   console.log(oui)
   
 
})