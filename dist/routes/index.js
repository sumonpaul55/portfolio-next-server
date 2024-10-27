"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../app/modules/auth/auth.route");
const user_route_1 = require("../app/modules/user/user.route");
const post_route_1 = require("../app/modules/post/post.route");
const skills_route_1 = require("../app/modules/skills/skills.route");
const projects_route_1 = require("../app/modules/projects/projects.route");
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
    {
        path: "/skills",
        route: skills_route_1.skillsRoutes,
    },
    {
        path: "/project",
        route: projects_route_1.projectRouter,
    },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));
exports.default = router;
