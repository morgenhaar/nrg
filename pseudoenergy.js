gameStart(){
    add bg

    //add x appliances
    var a = new create
    a.active=false
    a.alpha=0.4
    appliances.push(a)
    a.on('click', itemClicked, a)
    //tilføj til array

    turnStuffOn()

}

itemClicked(e){
    this.active=false;
    this.alpha=0.4
}
turnStuffOn(){
    //find tilfældigt element
    skift alpha, sæt acitve


    setTimeout(function(){
        turnStuffOn()
    }, 2000-Math.floor(Math.random()*1900))
}
checkUse(){
    var on=0;
    for(appliances[i] = 0; appliances[i] < appliances.length; appliances[i]++)
        if(appliances[i].active){
            on++
        }
    if(on>6){
        død
    }
}
tock(){
    checkUse()

}


/*spillet starter {
 stage
 ting på stage
 }

 tilfældigt tidspunkt indenfor 2 sekunder {
 tilfældig ting tænder
 smid den ind i en array
 tæl hvor mange ting der kører
 }

 ting der kører.addEventListener("click" function {this.isRunning = false})

 if (ting der kører > 6) {
 død
 spil slut
 taber
 }

 if (!ting du har clicket på % 10) {
 hastighed OP;
 };

 ticker! tick tick tick itkcxnnfidsbfskanlfbsauoizdj sljaKF AJLSGZDH JKSzgdajks gzcl jkax.nz<bd gjagz<∫ckhj a<zjgdx vhapskl<zd,mbv c;


 til sidst skal der stå hvor mange ting du har slukket*/