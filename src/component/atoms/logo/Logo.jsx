import StyledLogo from "./Logo.styles";
import { BsLink45Deg } from "react-icons/bs";

const Logo = () => {
  return (
    <StyledLogo>
      <span className="icons">
        <BsLink45Deg size={42}/>
      </span>
      <span className="first-word">Link</span>
      <span className="second-word">view</span>
    </StyledLogo>
  );
};

export default Logo;
