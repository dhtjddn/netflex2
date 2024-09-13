/* eslint-disable no-unused-vars */
import { useState } from "react";
import Page from "../../components/Page/Page";
import { useNavigate } from "react-router-dom";


function SignUpPage() {
  const { signUp } = useAuth();// context
  const navigate = useNavigate();
  const [id, setId] = useState[""];
  const [password, setPassword] = useState[""];
  const [nickname, setNickname] = useState[""];

  const handleClickSignUpButton = () => {
    const newUser = { id, password, nickname };
    signUp(newUser);
  }


  return <Page>
    <h1>회원가입</h1>

    <hr />
    

    <div className="text-black">
  <input onChange={(e) => setId(e.target.value)} value={id}type="text" placeholder="ID"/>
  <input onChange={(e) => setPassword(e.target.value)} value={pw} type="text" placeholder="PW"/>
  <input onChange={(e) => setNickname(e.target.value)} value={nickname} type="text" placeholder="Nickname"/>

  <button onClick={handleClickSignUpButton} className="text-white border border-white">회원가입하기</button>
    </div>
  </Page>;

}

export default SignUpPage;
