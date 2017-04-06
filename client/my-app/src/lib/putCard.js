module.exports = function putCard(card) {
  return new Promise((resolve, reject) => {
    function putCardData() {
      let data = JSON.parse(this.responseText);
      resolve(data);
    }
    const putCard = new XMLHttpRequest();
    putCard.addEventListener("load", putCardData);
    putCard.open("PUT", `/api/kanban/${card.id}/edit`);
    putCard.setRequestHeader("Content-Type", "application/json");
    putCard.send(JSON.stringify(card));
  });
};