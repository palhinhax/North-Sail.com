import NextAuth from "next-auth";
import { authConfigBase } from "./config-base";

export const { auth } = NextAuth(authConfigBase);
