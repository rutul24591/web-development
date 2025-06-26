const YOUTUBE_API_KEY = "AIzaSyCUU2PABFymSKZ5RtZ97Xg_D79_zaHm8Ys";

export const YOUTUBE_VIDEOS_URL =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=150&key=" +
    YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_URL =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
    YOUTUBE_API_KEY +
    "&id=";
