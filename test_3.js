const orders = [
  { id: 1, amount: 120, status: "paid" },
  { id: 2, amount: 80, status: "pending" },
  { id: 3, amount: 200, status: "paid" },
  { id: 4, amount: 50, status: "cancelled" },
];

function getPaidOrdersAmounts(orders) {
  let total = 0;
  const amounts = [];

  for (let i = 0; i < orders.length; i++) {
    let currentOrder = orders[i];

    if (currentOrder.status === "paid") {
      total = total + currentOrder.amount;
      amounts.push(currentOrder.amount);
    }
  }

  console.log(amounts);
  console.log(total);
  return total;
}

getPaidOrdersAmounts(orders);
