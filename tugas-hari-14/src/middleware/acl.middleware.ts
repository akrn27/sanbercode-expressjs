import { Request, Response, NextFunction } from "express";
import { IReqUser } from "@/utils/interfaces";

export default (roles: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const userRoles = (req as IReqUser).user.roles as any;

    if (!userRoles || !userRoles.some((userRole: any) => roles.includes(userRole))) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    next();
  };