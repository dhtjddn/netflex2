/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Children, useEffect, useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import RootLayout from "./Layouts/RootLayout/RootLayout";
import movieDetailPageLoader from "./pages/MovieDetailPage/MovieDetailPage.loader";
import MyPage from "./pages/MyPage/MyPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Mypage from "./pages/MyPage/MyPage";

const routes = [
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      {
        path: "/",
        element: <HomePage/>

      }
      {
        path: "/",
        element: <SignUpPage/>
      }
      {
        path: "/",
        element: <LoginPage/>
      }
      {
        path: "/",
        element: <MyPage />
      }
      {
        path:"/movies/:movieId",
        element: <MovieDetailPage/>,
        loader: movieDetailPageLoader,
      }
      {
        path: "my-page", element: <Mypage />,
      }
    ]}
]


const router = createBrowserRouter

function Router() {
  return <RouterProvider router={router} />
}

export default Router;

// 어느 페이지에 들어가던지 헤더가 존재
// 회원가입 버튼 추가 -> 페이지 접속
// 홈페이지에서 영화 눌렀을 때 영화 상세 페이지 접속
// 동적 라우팅을 사용해 구현

function Router() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
 



  const signUp = (newUser) => {
    const newUsers = [...users, newUser];

    setUsers(newUsers);

    const logIn = [(id, password)] = () => {
     const user = users.find(user => user.id === id)
     if(!user) return alert("존재하지 않는 기억입니다.")

      if (user.password === password) return alert("잘못된 비밀번호입니다.")

        alert("로그인 되었습니다");
        setCurrentUser(user);




    }


  };


  const toggleLikeMovie = (movieId) => {
    const isLiked = likedMovieIds.includes(movieId); // 포함되어 있는지 판별

    const [likedMovieIds, setLikedMovies] = useState([]);

    let newLikedMovieIds = [];
    if (isLiked) {
      const newLikedMovies = likedMovieIds.filter(
        (movie) => movie.id !== movieId
      );
    } else {
      newLikedMovieIds = [...likedMovieIds, movieId]; // 새로운 배열을 만들어 집어넣기
      setLikedMovies(newLikedMovieIds);
    }
  };

  const checkIsLiked = (movieId) => { likedMovieIds.includes(movieId)

  }

  useEffect(()=>{
    console.log(users);
  }, [users])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage  signUp={signUp}/>} />
          <Route path="/log-in" element={<LoginPage logIn={logIn} />} />
          <Route
            path="/my-page"
            element={
              <MyPage
                likeMovie={likedMovieIds}
                toggleLikeMovie={toggleLikeMovie}
                
              />
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <MovieDetailPage
              checkIsLiked={checkIsLiked}
              
                toggleLikeMovie={toggleLikeMovie}
              />
            }
            loader={movieDetailPageLoader}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
