import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
dotenv.config();

export const login = (req: Request, res: Response) => {
  const accessToken = jwt.sign(
    {
      email: res.locals.email,
    },
    process.env.ACCESS_SECRET as string,
    {
      expiresIn: "10m",
    }
  );

  const refreshToken = jwt.sign(
    {
      email: res.locals.email,
    },
    process.env.REFRESH_SECRET as string,
    {
      expiresIn: "1d",
    }
  );

  //pro HTTPS secure, httpOnly na true
  res.cookie("jwt", refreshToken, {
    sameSite: "none",
    secure: false,
    httpOnly: false,
    maxAge: 1000 * 60 * 60 * 24,
  });
  return res.json({ accessToken });
};

export const refresh = (req: Request, res: Response) => {
  if (!req.cookies.jwt) return res.status(406).json({ msg: "Unauthorized" }); //406 - Not Acceptable
  const refreshToken = req.cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_SECRET as string,
    (err: any, decoded: any) => {
      if (err) return res.status(406).json({ msg: "Unauthorized" }); //Unauthorized
      const accessToken = jwt.sign(
        {
          email: decoded.email,
        },
        process.env.ACCESS_SECRET as string,
        {
          expiresIn: "10m",
        }
      );
      return res.json({ accessToken });
    }
  );
};

export const verify = (req: Request, res: Response, next: NextFunction) => {
  //headerauthorization: Bearer token
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(406).send({ msg: "Unauthorized" });
  jwt.verify(
    token,
    process.env.ACCESS_SECRET as string,
    (err: any, user: any) => {
      if (err) return res.status(403).send({ msg: "Unauthorized" }); //Forbidden access
      res.locals.user = user;
      next();
    }
  );
};
