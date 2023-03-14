const countOccurence = (value, array) => {
  let count = 0;
  for (let item of array) {
    if (item == value) count += 1;
  }
  return count;
};

class Order {
  constructor() {
    this.items = [];
  }
  addItemToOrder(item) {
    this.items.push(item);
  }
  viewOrder() {
    let message = "The items in your order are: <br />";
    const orderWithoutDuplicates = new Set(this.items);
    for (let item of Array.from(orderWithoutDuplicates)) {
      message += `${countOccurence(item, this.items)} portion${
        countOccurence(item, this.items) > 1 ? "s" : ""
      } of ${item} <br />`;
    }

    return message;
  }
}

module.exports = Order;
