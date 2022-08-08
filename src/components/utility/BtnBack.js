//import modules
import { useNavigate } from "react-router-dom";

//import icons
import { IoMdArrowBack } from "react-icons/io";

const BtnBack = () => {
  const navigate = useNavigate();
  return (
    <button className="navButtonBack" onClick={() => navigate(-1)}>
      <IoMdArrowBack />
      Back
    </button>
  );
};

export default BtnBack;