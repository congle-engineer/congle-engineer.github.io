type Props = {
  children?: React.ReactNode;
};

export function Container({ children }: Props) {
  return <div className="container mx-auto px-5 md:px-20">{children}</div>;
}
