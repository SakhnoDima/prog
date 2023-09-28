import { ComponentProps, forwardRef } from "react";

interface IInput {
  placeholder: ComponentProps<"input">["placeholder"];
  name: ComponentProps<"input">["name"];
  type?: ComponentProps<"input">["type"];
  onChange?: ComponentProps<"input">["onChange"];
  onBlur?: ComponentProps<"input">["onBlur"];
}

const Input = forwardRef<HTMLInputElement, IInput>(({ ...inputProps }, ref) => {
  return (
    <input
      ref={ref}
      {...inputProps}
      className="border border-black/15 rounded py-3 px-6 text-xl w-full"
    />
  );
});

export default Input;
