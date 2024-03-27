let player = "x"

let table = ["","","",
             "","","",
             "","","",]

function play(index){ 

    if(table[index]) return
    
    table[index]= player



    let cells = document.querySelectorAll ("td")

    cells.forEach( (cell,index)=> cell.innerText =table[index])

    player=player=="x"?"o":"x"
}