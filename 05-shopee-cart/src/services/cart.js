async function addItem(userCart, item) {
  userCart.push(item);
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

async function calculateCartTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

async function displayCart(userCart) {
    console.log("\nCurrent Cart Items:");
    userCart.forEach(item => {
        console.log(`Item: ${item.name}, Price: $${item.price}, Quantity: ${item.quantity}`);
    });
}

export { addItem, removeItem, deleteItem, calculateCartTotal, displayCart };