const React = require("react");
const Layout = require("./components/Layout");
const InputField = require("./components/InputField.jsx");

const HomeView = () => {
  return (
    <Layout>
      <header>
        <article>
          <h1>Stupid Time Killer</h1>
          <p>Kill time stupidly</p>
        </article>
        <article>
          <form method="POST" action={"/"}>
            <InputField
              name="duration"
              label="How much time would you like to kill?"
              type="duration"
              defaultValue="15 min"
              required
            />
            <InputField
              name="before"
              label="What have you been doing before?"
              type="before"
              defaultValue="took a nap"
            />
            <InputField
              name="after"
              label="What are you planning to do after?"
              type="after"
              defaultValue="have a meeting"
            />

            <button type="submit">Submit</button>
          </form>
        </article>
      </header>
    </Layout>
  );
};

module.exports = HomeView;
