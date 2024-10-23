import { Router } from "express";
import { authRoutes } from "../app/modules/auth/auth.route";
import { userRoute } from "../app/modules/user/user.route";

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
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
