export function QuantityBtn({ quantity, setQuantity }) {
  function handleDecrement() {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  
}
