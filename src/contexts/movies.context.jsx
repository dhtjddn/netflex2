/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const initialValue = {
    likedMovieIds: [],
    toggleLikeMovie: () => {},
    checkIsLiked: () => {},
}
const MoviesContext = createContext();

export const useMovies = () => useContext(MoviesContext);
const toggleLikeMovie = (movieId) => {
    const isLiked = likedMovieIds.includes(movieId); // 포함되어 있는지 판별

    const [likedMovieIds, setLikedMovies] = useState([]);

    const { currentUser } = useAuth();

    const toggleLikeMovie = (movieId) => {
        if (!currentUser) return alert("로그인 후에 이용해 주세요");


    const isLiked = likedMovieIds.includes(movieId);


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



export function MoviesProvider({children}) {
    const value = {
        likedMovieIds
        toggleLikeMovie,
        checkIsLiked,
    };


    useEffect(() => {
        if (currentUser === null ){
            setLikedMovieIds([]);
        }
    }, [currentUser])
  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  )
}

