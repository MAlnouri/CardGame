document.addEventListener("DOMContentLoaded", function(event) {

    player = [];
    dealer = [];
    document.getElementById("deal").addEventListener("click", function() {
        deck.load();
        for(i = 0; i < 26; i++) {
            player[i] = deck.cards[i];
            dealer[i] = deck.cards[i + 26];
        }

        console.log(deck.cards);
        console.log(deck.player);
        console.log(deck.dealer);
    });

    document.getElementById("next").addEventListener("click", function() {
        let pCard = document.getElementById("playerCard");
        let cCard = document.getElementById("computerCard");

        for(i = 0; i < 26; i++) {
            //pCard.innerHTML = player[i].suit + " " + player[i].rank;
            //cCard.innerHTML = dealer[i].suit + " " + dealer[i].rank;
        }
        
        //pCard.innerHTML = "test";
        //cCard.innerHTML = "test2";
    });
});