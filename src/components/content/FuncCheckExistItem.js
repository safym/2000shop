function checkExistItem(currentCart, newItemData) {
  for (let i = 0; i < currentCart.length; i++) {
    if (currentCart[i].ID == newItemData.ID) {
      return true;
    }
  }
  return false;
};

export default checkExistItem;
