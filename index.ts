import express from "express";
import helmet from "helmet";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import expressReactViews from "express-react-views";
import { COOKIE_PARSER_SECRET } from "./const.ts";
import IndexRouter from "./routes.ts";
import { dirname } from "path";

const __filename = process.argv[1];
const __dirname = dirname(__filename);

const app = express();

app.use(helmet());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(COOKIE_PARSER_SECRET));

app.use(express.static(path.join(__dirname, "public")));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", expressReactViews.createEngine());

app.use("/", IndexRouter);

app.use(function (req, res, next) {
  res.status(404).send("Sorry, can't find that!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
