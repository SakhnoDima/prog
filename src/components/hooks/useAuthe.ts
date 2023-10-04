import { selectUser } from "../redux/selectors/authSelectors";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  useLazySignInQuery,
  useLazySignUpQuery,
} from "../redux/api/reposetoryAPI";
import { SignInOutDTO } from "../redux/dto/sign-in-out";
import { setUser } from "../redux/slice/auth.slise";
import { toast } from "react-toastify";
import { SignUpOutDTO } from "../redux/dto/sign-up-out";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const isLoggedIn = Boolean(user);

  const [triggerSignInQuery] = useLazySignInQuery();
  const [triggerSignUpQuery] = useLazySignUpQuery();

  const signIn = async (values: SignInOutDTO["user"]) => {
    const { data } = await triggerSignInQuery(values, false);
    if (!data) {
      throw new Error();
    }
    dispatch(setUser(data!.user));
    toast.success(`You are hear ${data.user.username}`);
  };

  const signUp = async (values: SignUpOutDTO["user"]) => {
    const { data } = await triggerSignUpQuery(values, false);
    if (!data) {
      throw new Error();
    }
    dispatch(setUser(data!.user));
    toast.success(`You are hear ${data.user.username}`);
  };
  const logOut = () => {
    dispatch(setUser(null));
    toast.success(`Have a nice day!`);
  };
  return { isLoggedIn, signIn, signUp, logOut };
};
