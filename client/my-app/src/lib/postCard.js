module.exports = function postCard(card) {
  return new Promise((resolve, reject) => {
    function postCardData() {
      let data = JSON.parse(this.responseText);
      resolve(data);
    }
    const postCard = new XMLHttpRequest();
    postCard.addEventListener("load", postCardData);
    postCard.open("POST", "/api/kanban/new");
    postCard.setRequestHeader("Content-Type", "application/json");
    postCard.send(JSON.stringify(card));
  });
};