import { FC } from "react";

interface IFavoriteBTnProps {
  count: number;
}

const FavoriteBtn: FC<IFavoriteBTnProps> = ({ count }) => {
  return (
    <button className="text-conduit-green border-conduit-green text-center align-middle cursor-pointer select-none border py-1 px-2 text-sm rounded-btnSm hover:text-white hover:bg-conduit-green focus:bg-conduit-darkGreen focus:text-white">
      <i className="ion-heart "></i>
      <span className="ml-1 font-normal">{count}</span>
    </button>
  );
};

export default FavoriteBtn;
