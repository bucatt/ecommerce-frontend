import { useDispatch, useSelector } from "react-redux";

export const useHomeProductsStore = () => {
  const { homeCategories } = useSelector((state) => state.homeProducts);

  return {
    homeCategories,
  };
};
