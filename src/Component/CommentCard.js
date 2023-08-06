import { useEffect, useState } from "react";
import { VIDEO_COMMENT_API } from "../utils/constant";
import { GOOGLE_API_KEY } from "../utils/constant";

const CommentCard = ({ videoId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    getVideoComment();
  }, []);

  const getVideoComment = async () => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=50`
      );
      const json = await data.json();
      console.log(json);
      setComment(json?.items);
    } catch (error) {
      console.log(error);
    }
  };
  const handleImgError = (e) => {
    e.target.src =
      "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg";
  };

  if (comment === null) return null;

  return (
    <div className="border ">
      <div className="bg-gray-300  rounded-lg shadow-2xl p-1 ">
        <h1 className="text-xl font-semibold p-2">Comment </h1>
      </div>
      <div className=" bg-gray-100 ">
        {comment.map((comment) => {
          const { textDisplay, authorProfileImageUrl, authorDisplayName } =
            comment?.snippet?.topLevelComment?.snippet;
          return (
            <div key={comment.id} className="flex gap-5 mb-3 p-4">
              {
                <img
                  src={authorProfileImageUrl}
                  className="rounded-full w-12 h-12"
                  onError={handleImgError}
                />
              }
              <div>
                <p className="font-semibold">{authorDisplayName}</p>
                <p>{textDisplay}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentCard;
