import { useDispatch, useSelector } from "react-redux";
import { onOpenLogInModal, onCloseLogInModal } from "../../store/ui/uiSlice";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isLogInModalOpen } = useSelector((state) => state.ui);

  const openLogInModal = () => {
    dispatch(onOpenLogInModal());
  };

  const closeLogInModal = () => {
    dispatch(onCloseLogInModal());
  };

  const toggleLogInModal = () => {
    isLogInModalOpen
      ? dispatch(onOpenLogInModal())
      : dispatch(onCloseLogInModal());
  };

  return {
    isLogInModalOpen,

    openLogInModal,
    closeLogInModal,
    toggleLogInModal,
  };
};
