const heading = React.createElement(
  "h1",
  {
    style: {
      fontSize: "4rem",
      textAlign: "center",
      color: "red",
    },
  },
  "Topic Covered"
);
const para = React.createElement(
  "p",
  {
    style: {
      fontSize: "4rem",
    },
  },
  "Following list of topics covered in mdn"
);

const anchor1 = React.createElement(
  "a",
  {
    href: "https://developer.mozilla.org/en-US/",
    style: {
      fontSize: "2rem",
    },
  },
  "Getting started with web"
);
const p1 = React.createElement(
  "p",
  {
    style: {
      fontSize: "1.5rem",
    },
  },
  "Provides practical introduction for beginners"
);
const anchor2 = React.createElement(
  "a",
  {
    href: "#",
    style: {
      fontSize: "2rem",
    },
  },
  "HTML- Structuring the web"
);
const p2 = React.createElement(
  "p",
  {
    style: {
      fontSize: "1.5rem",
    },
  },
  "Html the language to make structure of the web"
);
const anchor3 = React.createElement(
  "a",
  {
    href: "#",
    style: {
      fontSize: "2rem",
    },
  },
  "CSS- to styling the web"
);
const p3 = React.createElement(
  "p",
  {
    style: {
      fontSize: "1.5rem",
    },
  },
  "CSS is the language to control the style of web"
);

const mainDiv = React.createElement("div", {}, [
  heading,
  para,
  anchor1,
  p1,
  anchor2,
  p2,
  anchor3,
  p3,
]);

ReactDOM.render(mainDiv, document.getElementById("root"));
