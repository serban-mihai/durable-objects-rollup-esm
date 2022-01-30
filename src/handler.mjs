import { Router } from "itty-router";
import corsHeaders from "./lib/corsHeaders.mjs";
import { checkOrigin } from "./lib/corsHeaders.mjs";
import { GetExample } from "./handlers/Example.mjs";

const baseRouter = Router({ base: "/api" });

baseRouter
  .get("/", () => new Response("OK", { status: 200 }))
  .get("/example", GetExample)
  .all("*", () => new Response("Not Found", { status: 404 }));

export const handleRequest = async (request, env) => {
  if (request.method === "OPTIONS") {
    const allowedOrigin = checkOrigin(request);
    return new Response("OK", { headers: corsHeaders(allowedOrigin) });
  }
  return baseRouter.handle(request, env);
};
