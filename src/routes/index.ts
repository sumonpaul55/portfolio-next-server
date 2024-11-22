import { Router } from "express";
import { authRoutes } from "../app/modules/auth/auth.route";
import { userRoute } from "../app/modules/user/user.route";
import { postRouter } from "../app/modules/post/post.route";
import { skillsRoutes } from "../app/modules/skills/skills.route";
import { projectRouter } from "../app/modules/projects/projects.route";
import { contactRouter } from "../app/modules/contactMe/contact.route";

type TmoudulRoute = {
  path: string;
  route: Router;
};
const router = Router();

const moduleRoute: TmoudulRoute[] = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/post",
    route: postRouter,
  },
  {
    path: "/skills",
    route: skillsRoutes,
  },
  {
    path: "/project",
    route: projectRouter,
  },
  {
    path: "/",
    route: contactRouter,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
