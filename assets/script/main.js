let count = document.querySelectorAll('.card .card-body div button:first-of-type');
let rest = document.querySelectorAll('.card .card-body div button:last-of-type');
let displayCount = document.querySelectorAll('.card .card-body h6');
let restAll = document.querySelector('.rest button');

let total = [{
    name:'سبحان الله',
    count:0,
},{
    name:'الحمدلله',
    count:0,
},
{
    name:'لا اله الا الله',
    count:0,
},
{
    name:'الله اكبر',
    count:0,
}
];




for(let i=0;i<count.length;i++){
    if(localStorage.getItem(`${total[i].name}`)==null)
        total[i].count=0;
    else
        total[i].count=localStorage.getItem(`${total[i].name}`);
    displayCount[i].textContent = total[i].count;

    count[i].onclick = () =>{
        increasesCount (i);
    }

    rest[i].onclick = () =>{
        restCount (i);
    }
}

function increasesCount (i){

    if(localStorage.getItem(`${total[i].name}`)==null)
        total[i].count=0;
    else
        total[i].count=localStorage.getItem(`${total[i].name}`);
    total[i].count = parseInt(total[i].count)+ 1;
    localStorage.setItem(`${total[i].name}`,total[i].count);
    displayCount[i].textContent = total[i].count;
    
}

function restCount (i){

    
    localStorage.setItem(`${total[i].name}`,0);
    displayCount[i].textContent = 0;
    
}

restAll.onclick= ()=>{
    Swal.fire({
        title: "هل تريد تصفير جميع العدادت؟",
        showDenyButton: true,
       
        
      }).then((result) => {
        
        if (result.isConfirmed) {
          for (let i = 0; i < total.length; i++) {
            localStorage.setItem(`${total[i].name}`,0);
            displayCount[i].textContent = 0;
            
          }
        } else if (result.isDenied) {
          
        }
      });
}