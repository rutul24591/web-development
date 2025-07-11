import React from "react";
import { useSelector } from "react-redux";

import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import GPTSearch from "../components/GPTSearch";

const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();

    return (
        <div>
            {showGptSearch ? (
                <GPTSearch />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </div>
    );
};

export default Browse;
