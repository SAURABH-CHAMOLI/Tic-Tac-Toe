let boxes=document.querySelectorAll('.box')
let heading=document.querySelector('.heading')
let p=document.querySelector('p');
let btn=document.querySelector('button')

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let curr=1;
let count=0;
let flag=0;
for(let box of boxes) {
    box.addEventListener('click',()=>{
        if(flag==0) {
            if(!box.innerHTML) {
                if(curr==1) {
                    box.innerHTML='O';
                    curr=0;
                }
                else {
                    box.innerHTML='X';
                    curr=1;
                }
                ++count;
            }
            if(count==9) {
                p.innerHTML='Match Draw'
                gameResult();
            }
            checkWinner();
        }
    })
}

function checkWinner() {
    for(let pattern of winPatterns) {
        let l1=boxes[pattern[0]].innerText;
        let l2=boxes[pattern[1]].innerText;
        let l3=boxes[pattern[2]].innerText;
        if(l1!="" && l2!="" && l3!="") {
            if(l1==l2 && l2==l3) {
                console.log(`winner:${l1}`);
                p.innerHTML=`GAME OVER!  Winner is: ${l1}`;
                flag=1;
            }
        }
       
        
    }
}

btn.addEventListener(('click'),()=>{
    gameResult();
    for(let box of boxes) {
        box.innerHTML="";
    }
}
)


function gameResult() {
    if(flag==1) {
        flag=0;
    }
    if(count==9) {
        p.innerHTML="Match Draw"
        count=0;
    }
    else {
        p.innerHTML="Let's Start"
    }
    curr=1;
    count=0;
}