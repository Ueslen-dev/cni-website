export type ImageProps = {
  alternativeText: string;
  url: string;
};

export type ButtonProps = {
  label: string;
  url: string;
};

export type HeaderProps = {
  logo: ImageProps;
};

export type BannerHeroProps = {
  background: ImageProps;
  moreAbout: {
    title: string;
    subtitle: string;
    buttonLabel: string;
  };
};

export type CourseProps = {
  image: ImageProps;
  name: string;
  teacher: string;
  price: string;
  offer: string;
};

export type MainCoursesProps = {
  title: string;
  subtitle: string;
  course: Array<CourseProps>;
};

export type CallToActionProps = {
  title: string;
  subtitle: string;
  button: ButtonProps;
  background: ImageProps;
};

export type JoinUsProps = {
  title: string;
  subtitle: string;
  button: ButtonProps;
  image: ImageProps;
};

export type FooterProps = {
  logo: ImageProps;
};

export type LandingPageProps = {
  header: HeaderProps;
  bannerHero: BannerHeroProps;
  mainCourses: MainCoursesProps;
  callToAction: CallToActionProps;
  joinUs: JoinUsProps;
  footer: FooterProps;
};
