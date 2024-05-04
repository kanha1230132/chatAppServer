import { Router } from "express";
import { PathName } from "./pathName";


export const routes = (router: Router) => {
    router.post(PathName.Register, controllers.RegisterUser);
    router.post(PathName.Login, controllers.Login);
}