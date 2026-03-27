import { DefaultSession } from "next-auth";
 
declare module "next-auth" {
  interface Session {
    jwt?: string;
    user?: DefaultSession["user"];
  }
 
  interface User {
    id: string;
    name: string;
    email: string;
    jwt: string;
  }
}
 
declare module "next-auth/jwt" {
  interface JWT {
    jwt?: string;
  }
}