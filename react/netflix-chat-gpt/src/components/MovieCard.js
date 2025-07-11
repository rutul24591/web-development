import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className="w-36 md:w-66 h-84 px-4">
            <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
        </div>
    );
};
export default MovieCard;
