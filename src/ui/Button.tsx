import { ReactNode } from "react";

interface ButtonProps extends ReactTagProps<"button"> {
  children: ReactNode;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { children, className, ...otherProps } = props;

  return (
    <button {...otherProps} className={className}>
      {children}
    </button>
  );
};

export { Button };
