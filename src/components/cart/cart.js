import { RiCloseLine } from "react-icons/ri"

const Cart = () => {
    var currentCart = JSON.parse(localStorage.getItem("cart"));
    var finalCart = [];
    var totalCoast = 0;

    var deleteCartItem = () => {
        console.log(currentCart);

        for (var i = currentCart.length - 1; i >= 0; i--) {
            // TO DO delete selected item
        }
    }

    for (var i = currentCart.length - 1; i >= 0; i--) {
        finalCart.push(
            <div key={currentCart[i].title} className="cartItem" id={"cartItem" +  currentCart[i].ID}>
                <img
                    className="cartItemImage"
                    src={require("../../img/catalog/" + currentCart[i].Image)}
                />
                <h1 className="cartItemName">{currentCart[i].Name}</h1>
                <h1 className="cartItemPtice">{currentCart[i].Price} $</h1>
                <button 
                    className="deleteCartItem" 
                    id={"delete_CartItem" + currentCart[i].ID}
                    onClick={deleteCartItem}>
                    <RiCloseLine />
                </button>
            </div>
        )
        finalCart.push(<hr className="cartBorderline"/>)

        totalCoast = totalCoast + currentCart[i].Price;
    }
    return (
        <div className="Content">
            <div className="cartItems">
                {finalCart}
                <CartFooter totalCoast={totalCoast}/>
            </div>
        </div>

    );
};

const CartFooter = (props) => {
    return(
        <div className="cartFooter">
            <h1 className="cartTotal">Total: {props.totalCoast} $</h1>
            <button className="myButton">Checkout ></button>
        </div>
    )
}

export default Cart;