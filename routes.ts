import { Router } from "express";
import type { Request, Response, NextFunction } from "express";
import { getStupidActivities } from "./services/StupidActivitiesPrompt";

const indexRouter = Router();

indexRouter.get("/", async function (req, res, _next) {
  res.render("HomeView");
});

indexRouter.post("/", async function (req, res, _next) {
  const { duration, before, after } = req.body;

  const { pure_nonsense, pseudo_productivity, self_care } =
    await getStupidActivities({ duration, before, after });

  res.render("OutputView", { pure_nonsense, pseudo_productivity, self_care });
});

export default indexRouter;
