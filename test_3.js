const orders = [
  { id: 1, amount: 120, status: "paid" },
  { id: 2, amount: 80, status: "pending" },
  { id: 3, amount: 200, status: "paid" },
  { id: 4, amount: 50, status: "cancelled" },
];

function getPaidOrdersAmounts(orders) {
  let amounts = [];

  orders.forEach((order) => {
    if (order.status === "paid") {
      amounts.push(order.amount);
    }
  });

  let total = 0;
  amounts.forEach((amount) => {
    total = total + amount;
  });

  return { amounts, total };
}
