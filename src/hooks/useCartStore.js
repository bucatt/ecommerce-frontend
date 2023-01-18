import { useDispatch, useSelector } from "react-redux";
import {
  onAddProduct,
  onAddQuantity,
  onRemoveQuantity,
  onDeleteItem,
  onCheckItem,
  onCheckAllItems,
} from "../../store/cart/cartSlice";

export const useCartStore = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  const addToCart = (product) => {
    dispatch(onAddProduct(product));
  };

  const addQuantity = (product) => {
    dispatch(onAddQuantity(product));
  };

  const removeQuantity = (product) => {
    dispatch(onRemoveQuantity(product));
  };

  const deleteItem = (product) => {
    dispatch(onDeleteItem(product));
  };

  const checkItem = (product) => {
    dispatch(onCheckItem(product));
  };

  const checkAllItems = () => {
    dispatch(onCheckAllItems());
  };

  return {
    products,
    addToCart,
    addQuantity,
    removeQuantity,
    deleteItem,
    checkItem,
    checkAllItems,
  };
};
