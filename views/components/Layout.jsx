const React = require("react");
const DEFAULT_TITLE = "StupidTimeKiller";

// const NAV_LINKS = [
//   {
//     label: "Positions",
//     href: "/positions",
//   },
//   {
//     label: "Contacts",
//     href: "/contacts",
//   },
// ];

const Layout = ({ title = DEFAULT_TITLE, children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        ></link>
        <link rel="stylesheet" href="/css/style.css"></link>
        <title>{title}</title>
      </head>
      <body className="container">
        <header>
          {/* <nav>
            <ul>
              <li>
                <a className="secondary" href="/">
                  <strong>{DEFAULT_TITLE}</strong>
                </a>
              </li>
            </ul>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav> */}
        </header>
        <main className="container" style={{ paddingBlockStart: 0 }}>
          {children}
        </main>
      </body>
    </html>
  );
};

module.exports = Layout;
