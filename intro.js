var cards = document.getElementsByClassName('card');

for (var i = 0; i < cards.length; i++) {
  var card = cards[i];

  card.onclick = function() {
    var demoElement = this.getElementsByClassName('demo')[0];
    demoElement.innerHTML = '$9';
  };
}
