export const GOOGLE_API_KEY = "AIzaSyBxXjhPpXB03iuRmAHzMOrAcgZTuqaWXeY";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// export const YOUTUBE_VIDEO_API =
//   "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=" +
//   GOOGLE_API_KEY;

const YOUTUBE_VIDEO_DETAILS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id={}&key=${GOOGLE_API_KEY}`;

export const DOWNLOAD_YOUTUBE_VIDEO =
  "https://yt-dlp-api.peterli.website/video/?video_url=https://www.youtube.com/watch?v=";

export const SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

//used comment api to get comment from youtube video here we need to pass video id and api key
export const VIDEO_COMMENT_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDgWGBvsp3C2ROLiAbGN1gxpAV7bNaXmVE&textFormat=plainText&part=snippet&videoId=kffacxfA7G4&maxResults=50";

export const RELATED_VIDEO_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=5rOiW_xY-kc&type=video&maxResults=50&key=AIzaSyDgWGBvsp3C2ROLiAbGN1gxpAV7bNaXmVE";

export const SEARCH_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=";
