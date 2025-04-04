type Props = {
  children?: React.ReactNode;
};

export function Container({ children }: Props) {
  return <div className="container mx-auto">{children}</div>;
}
