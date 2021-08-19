export type ImageProps = {
  alternativeText: string;
  url: string;
};

export type ButtonProps = {
  label: string;
  url: string;
};

export type MainProps = {
  logo: ImageProps;
  button: ButtonProps;
  title: string;
  subtitle: string;
};

export type WelcomeProps = {
  Main: MainProps;
};
