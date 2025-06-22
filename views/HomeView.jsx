const React = require("react");
const Layout = require("./components/Layout");
const InputField = require("./components/InputField.jsx");

const DURATIONS = ["15 minutes", "30 minutes", "1 hour"];

const HomeView = () => {
  return (
    <Layout>
      <header>
        <article>
          <h1 style={{ textShadow: "2px 2px #ff0000;" }}>
            WELCOME TO STUPID TIME KILLER™
          </h1>
          <p>Your gateway to profoundly dumb productivity</p>
        </article>
        <form method="POST" action={"/"}>
          <article className="form">
            <div className="field">
              <label>🧨 Choose your self-destruction duration"</label>
              <select
                className="stSelectbox"
                name="duration"
                type="duration"
                defaultValue="15 min"
                required
              >
                {DURATIONS.map((duration) => (
                  <option>{duration}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label labelFor="before">
                💡 What were you doing before this?
              </label>
              <input
                id="before"
                className="stTextInput"
                type="text"
                name="before"
                placeholder="Be honest. We know it was LinkedIn."
              />
            </div>

            <div className="field">
              <label labelFor="after">
                🧘‍♂️ What will you allegedly do after this?
              </label>
              <input
                id="after"
                className="stTextInput"
                type="text"
                name="after"
                placeholder="Sure, buddy."
              />
            </div>

            <div className="stButton">
              <button type="submit">🚀 NEXT (BEGIN THE DUMBNESS)</button>
            </div>
          </article>
        </form>
      </header>
    </Layout>
  );
};

module.exports = HomeView;
