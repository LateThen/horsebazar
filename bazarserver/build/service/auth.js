"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.refresh = exports.login = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const login = (req, res) => {
    const accessToken = jsonwebtoken_1.default.sign({
        email: res.locals.email,
    }, process.env.ACCESS_SECRET, {
        expiresIn: "10m",
    });
    const refreshToken = jsonwebtoken_1.default.sign({
        email: res.locals.email,
    }, process.env.REFRESH_SECRET, {
        expiresIn: "1d",
    });
    //pro HTTPS secure, httpOnly na true
    res.cookie("jwt", refreshToken, {
        sameSite: "none",
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24,
    });
    return res.json({ accessToken });
};
exports.login = login;
const refresh = (req, res) => {
    if (!req.cookies.jwt)
        return res.status(406).json({ msg: "Unauthorized" }); //406 - Not Acceptable
    const refreshToken = req.cookies.jwt;
    jsonwebtoken_1.default.verify(refreshToken, process.env.REFRESH_SECRET, (err, decoded) => {
        if (err)
            return res.status(406).json({ msg: "Unauthorized" }); //Unauthorized
        const accessToken = jsonwebtoken_1.default.sign({
            email: decoded.email,
        }, process.env.ACCESS_SECRET, {
            expiresIn: "10m",
        });
        return res.json({ accessToken });
    });
};
exports.refresh = refresh;
const verify = (req, res, next) => {
    //headerauthorization: Bearer token
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
        return res.status(406).send({ msg: "Unauthorized" });
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_SECRET, (err, user) => {
        if (err)
            return res.status(403).send({ msg: "Unauthorized" }); //Forbidden access
        res.locals.user = user;
        next();
    });
};
exports.verify = verify;
