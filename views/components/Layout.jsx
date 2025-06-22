const React = require("react");
const DEFAULT_TITLE = "StupidTimeKiller";

const Layout = ({ title = DEFAULT_TITLE, children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css"></link>
        <title>{title}</title>
      </head>
      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  );
};

module.exports = Layout;
