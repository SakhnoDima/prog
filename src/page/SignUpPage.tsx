import { FC } from "react";
import { toast } from "react-toastify";
import Container from "../components/Container/Container";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../components/Button/Button";
import { useLazySignUpQuery } from "../components/redux/api/reposetoryAPI";
import { setUser } from "../components/redux/slice/auth.slise";
import { useAppDispatch } from "../components/redux/store";

interface ISignUpPage {}

interface ISignUpFormValues {
  username: string;
  email: string;
  password: string;
}

const validationSchema: yup.ObjectSchema<ISignUpFormValues> = yup.object({
  username: yup.string().required().min(3),
  email: yup.string().required(),
  password: yup.string().required().min(6),
});

const SignUpPage: FC<ISignUpPage> = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState } = useForm<ISignUpFormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const [triggerSignUpQuery] = useLazySignUpQuery();
  const navigate = useNavigate();

  const onSubmit = async (values: ISignUpFormValues) => {
    try {
      const { data } = await triggerSignUpQuery(values, false);
      if (!data) {
        throw new Error();
      }
      dispatch(setUser(data!.user));
      toast.success(`You are hear ${data.user.username}`);
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong try again");
    }
  };

  return (
    <Container>
      <h2 className="text-4xl text-center mb-4">Sign Up</h2>
      <p className="text-center mb-4">
        <Link to="/sign-in">Have an account?</Link>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto flex flex-col gap-4"
        noValidate
      >
        <ul className=" list-disc pl-10">
          {(
            Object.keys(formState.errors) as (keyof typeof formState.errors)[]
          ).map((field) => (
            <li
              key={`error - ${field}`}
              className="text-conduit-red font-bold  "
            >
              {formState.errors[field]!.message}
            </li>
          ))}
        </ul>
        <Input {...register("username")} placeholder="Username" />
        <Input {...register("email")} placeholder="Email" type="email" />
        <Input
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        <div className="flex justify-end">
          <Button
            size={"LG"}
            btnStyle={"GREEN"}
            disabled={formState.isSubmitting}
            type="submit"
          >
            Sign Up
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default SignUpPage;
