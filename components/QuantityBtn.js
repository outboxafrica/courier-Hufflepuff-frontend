function QuantityBtn({ quantity, setQuantity }) {
  function handleDecrement() {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>&#8722;</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>&#43;</button>
    </div>
  );
}

export default QuantityBtn;
