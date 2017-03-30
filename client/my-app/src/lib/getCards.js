module.exports = function getCards() {
  return new Promise((resolve, reject) => {
    function getCardsData() {
      let data = JSON.parse(this.responseText);
      resolve(data);
    }
    const getCards = new XMLHttpRequest();
    getCards.addEventListener("load", getCardsData);
    getCards.open("GET", "/api/kanban");
    getCards.send();
  });
};