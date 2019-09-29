import {Request, Response, NextFunction, RequestHandler} from "express";

declare function asyncWrapper(
    fn: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>
): RequestHandler;

export = asyncWrapper;