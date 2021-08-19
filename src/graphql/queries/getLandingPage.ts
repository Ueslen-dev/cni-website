import { gql } from 'graphql-request';

const GET_LANDING_PAGE = gql`
  fragment ImageData on UploadFile {
    alternativeText
    url
  }

  fragment ButtonData on ComponentLandingPageButton {
    label
    url
  }

  fragment Header on LandingPage {
    header {
      logo {
        ...ImageData
      }
    }
  }

  fragment BannerHero on LandingPage {
    bannerHero {
      background {
        ...ImageData
      }
      moreAbout {
        title
        subtitle
        buttonLabel
      }
    }
  }

  fragment MainCourses on LandingPage {
    mainCourses {
      title
      subtitle
      course {
        image {
          ...ImageData
        }
        name
        teacher
        price
        offer
      }
    }
  }

  fragment CallToAction on LandingPage {
    callToAction {
      title
      subtitle
      button {
        ...ButtonData
      }
      background {
        ...ImageData
      }
    }
  }

  fragment JoinUs on LandingPage {
    joinUs {
      title
      subtitle
      button {
        ...ButtonData
      }
      image {
        ...ImageData
      }
    }
  }

  fragment Footer on LandingPage {
    footer {
      logo {
        ...ImageData
      }
    }
  }

  query GET_LANDINGPAGE {
    landingPage {
      ...Header
      ...BannerHero
      ...MainCourses
      ...CallToAction
      ...JoinUs
      ...Footer
    }
  }
`;

export default GET_LANDING_PAGE;
