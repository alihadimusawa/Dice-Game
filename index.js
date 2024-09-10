var dice1 = 0;
var dice2 = 0;

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info( "This page is reloaded" );

    while(dice1 == 0 || dice2 == 0){
        dice1 = Math.round(Math.random() * 10) % 7;
        dice2 = Math.round(Math.random() * 10) % 7;
    }

    var src1 = "dice"+dice1+".png";
    var src2 = "dice"+dice2+".png";

    var player1 = document.querySelector(".image1");
    player1.setAttribute("src", src1);

    var player2 = document.querySelector (".image2");
    player2.setAttribute("src", src2);

    document.querySelector("img").style.visibility = "visible";
    document.querySelectorAll("img")[1].style.visibility = "visible";

    if(dice1 > dice2){
        document.querySelector("h1").textContent = "Player 1 Wins";
    }else if(dice1 < dice2){
        document.querySelector("h1").textContent = "Player 2 Wins";
    }else{
        document.querySelector("h1").textContent = "Draw"
    }
}else {
    console.info( "This page is not reloaded");
}
