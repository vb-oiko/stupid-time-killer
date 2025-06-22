const React = require("react");
const Layout = require("./components/Layout");

const OutputView = ({ pure_nonsense, pseudo_productivity, self_care }) => {
  return (
    <Layout>
      <header>
        <article>
          <h1>Stupid Things To Kill Time</h1>
          <ul>
            <li>{pure_nonsense}</li>
            <li>{pseudo_productivity}</li>
            <li>{self_care}</li>
          </ul>
        </article>
      </header>
    </Layout>
  );
};

module.exports = OutputView;
