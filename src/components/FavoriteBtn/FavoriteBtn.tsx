import { FC } from "react";
import { useAuth } from "../hooks/useAuthe";
import { useNavigate } from "react-router-dom";
import { routes } from "../core/routes/Routes";
import {
  useGetFavoriteArticleMutation,
  useGetUnFavoriteArticleMutation,
} from "../redux/api/feedAPI";
import Button from "../Button/Button";

interface IFavoriteBTnProps {
  count: number;
  extended?: boolean;
  slug: string;
  isFavorited: boolean;
}

const FavoriteBtn: FC<IFavoriteBTnProps> = ({
  count,
  extended = false,
  slug,
  isFavorited,
}) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [triggerFavoriteQueryMutation, favoriteQueryState] =
    useGetFavoriteArticleMutation();
  const [triggerUnfavoriteQueryMutation, unFavoriteQueryState] =
    useGetUnFavoriteArticleMutation();

  const handleFavoriteClick = async () => {
    if (!isLoggedIn) {
      navigate(routes.signIn.path);
      return;
    }
    if (!isFavorited) {
      await triggerFavoriteQueryMutation({ slug });
    } else {
      triggerUnfavoriteQueryMutation({ slug });
    }
  };

  return (
    <Button
      btnStyle="GREEN"
      disabled={favoriteQueryState.isLoading || unFavoriteQueryState.isLoading}
      variant={isFavorited ? "BASE" : "OUTLINE"}
      onClick={handleFavoriteClick}
    >
      <i className="ion-heart "></i>
      <span className="ml-1 font-normal">
        {extended && "Favorite Article ("}
        {count}
        {extended && ")"}
      </span>
    </Button>
  );
};

export default FavoriteBtn;
