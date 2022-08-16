// import components
import HeaderLink from "./Link";
import BtnSignIn from "./BtnSignIn";
import BtnSignOut from "./BtnSignOut";
import LogoLink from "../utility/logoLink";
import CartLink from "../cart/cartLink";

const Header = (props) => {
  return (
    <div className="Header">
      <LogoLink />
      <nav className="buttons_nav">
        <HeaderLink name="Catalog" href="/catalog" visible={true} />
        <HeaderLink name="Profile" href={"/user/" + props.login} visible={props.auth}/>
        <BtnSignIn name="Sign in" href="/login" visible={!props.auth} />
        <BtnSignOut name="Sign out" href="/home" callback={props.callback} visible={props.auth} />
        <CartLink href="/cart" />
      </nav>
    </div>
  );
};

export default Header;
