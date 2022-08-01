const CartFooter = (props) => {
  if (props.totalCoast == 0) {
    return (
        <div className="cartInfoWrapper">
          <h1 className="cartInfo">Cart is empty :(</h1>
        </div>
      );
  } else {
    return (
      <div className="cartFooter">
        <h1 className="cartTotal">Total: {props.totalCoast} $</h1>
        <button className="myButton">Checkout ></button>
      </div>
    );
  }
};

export default CartFooter;
