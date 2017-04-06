module.exports = function deleteCard(card) {
  return new Promise((resolve, reject) => {
    function deleteCardData() {
      let data = JSON.parse(this.responseText);
      resolve(data);
    }
    const deleteCard = new XMLHttpRequest();
    deleteCard.addEventListener("load", deleteCardData);
    deleteCard.open("DELETE", `/api/kanban/${card.id}`);
    deleteCard.send(JSON.stringify(card));
  });
};