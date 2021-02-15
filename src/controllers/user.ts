"use strict";

import { Response, Request, NextFunction } from "express";
import { User, UserDocument } from "../models/User";
import { CallbackError, NativeError } from "mongoose";
import UserNotFoundException from "../exceptions/UserNotFoundException";
export const getUserById = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  User.findById(id, (err: NativeError, user: UserDocument) => {
    if (err) {
      return next(err);
    }

    if (user) {
      res.send(user);
    } else {
      next(new UserNotFoundException(id));
    }
  });
};
