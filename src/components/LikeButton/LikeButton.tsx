import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handlerLike = () => {
    setLiked(!liked);
    console.log("clicked");
  };

  return liked ? (
    <FaHeart color="red" size={50} onClick={handlerLike}></FaHeart>
  ) : (
    <IoIosHeartEmpty
      color="red"
      size={50}
      onClick={handlerLike}
    ></IoIosHeartEmpty>
  );
};

export default LikeButton;
