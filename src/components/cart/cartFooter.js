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
       
        <BtnCheckout auth={props.auth}/>
      </div>
    );
  }
};

const BtnCheckout = (props) => {
  let btnContent;
  if (props.auth) {
    btnContent = "Checkout >" 
  } else {
    btnContent = "Sign to checkout" 
  }
  
  return (<button className="myButton" disabled={!props.auth}>{btnContent}</button>)
}

export default CartFooter;
