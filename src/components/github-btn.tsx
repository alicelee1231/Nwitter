import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth } from "../routes/firebase";

const Button = styled.span`
  margin-top: 50px;
  background-color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  min-height: 45px;
  position: relative;
`;

const Logo = styled.img`
  width: 25px;
  height: 25px;
  z-index: 5;
  opacity: 1;
  position: relative;
  display: block;
`;

export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={onClick}>
      <Logo
        src="/github-logo.svg"
        alt="github logo"
        onError={(e) => console.error("Logo failed to load:", e)}
      />
      <span>Continue with Github</span>
    </Button>
  );
}
