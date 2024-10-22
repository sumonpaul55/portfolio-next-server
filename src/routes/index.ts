import { Router } from "express";
import { userRoute } from "../app/modules/user/user.route";

type TmoudulRoute = {
  path: string;
  route: Router;
};
const router = Router();

const moduleRoute: TmoudulRoute[] = [
  {
    path: "user",
    route: userRoute,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
