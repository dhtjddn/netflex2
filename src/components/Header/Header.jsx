import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header({ currentUser }) {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} to="/">
        NETFLEX
      </Link>

      <Link to="/sign-up" className={styles.link}>
        회원가입
      </Link>  <Link to="/log-in" className={styles.link}>
       로그인
      </Link>
      
      
      <div className="flex items-center gap-x-4">
      {
        currentUser === null
      }



<p>{currentUser.nickname}님 반갑다</p>
      </div>
    </header>
  );
}

export default Header;
