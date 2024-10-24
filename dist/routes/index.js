"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../app/modules/auth/auth.route");
const user_route_1 = require("../app/modules/user/user.route");
const post_route_1 = require("../app/modules/auth/post/post.route");
const router = (0, express_1.Router)();
const moduleRoute = [
    {
        path: "/auth",
        route: auth_route_1.authRoutes,
    },
    {
        path: "/user",
        route: user_route_1.userRoute,
    },
    {
        path: "/post",
        route: post_route_1.postRouter,
    },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));
exports.default = router;
