let oui = document.querySelectorAll('.document')

// oui.addEventListener('mouseover', (event)=>{
//     console.log('e')
// })

// for(let i = 0; i < oui.length; i++){
//     oui[i].addEventListener("mouseover", function() {
//            console.log('e');
//     });
// };


// oui.forEach(elem => {
//     elem.addEventListener('mouseover', ()=>{
//         console.log(elem)
//     })
//     // console.log(elem)
// })
const non = [...oui]
non.map(elem =>{
    elem.addEventListener('click', function (e){
        console.log(e.currentTarget)
    })
    // elem.addEventListener('mouseover',()=>{
    //     console.log(elem)
    // })
    console.log(elem)
})





console.log(oui)