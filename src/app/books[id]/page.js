// Store full cart item
const saveToCart = (count) => {
  const cartItem = {
    id: book.id,
    title: book.title,
    price: book.price,
    cover: book.cover,
    quantity: count
  };
  localStorage.setItem(`cart-${id}`, JSON.stringify(cartItem));
};

// Use this in your increase/decrease functions
const increaseCount = () => {
  setCartItemCount(prev => {
    const newCount = prev + 1;
    saveToCart(newCount);
    return newCount;
  });
};

<Input
  value={cartItemCount}
  onChange={(e) => setCartItemCount(Number(e.target.value))}
  type="text"
  className="text-center p-0 w-10 px-0 flex"
/>
