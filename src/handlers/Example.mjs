import corsHeaders from "../lib/corsHeaders.mjs"; // TODO: Add the correct Origins before dpeloy!
import { checkOrigin } from "../lib/corsHeaders.mjs";

export const GetExample = async (request, env) => {
  // Check the Origin matches one of the Env
  const allowedOrigin = checkOrigin(request);
  const headers = {
    ...corsHeaders(allowedOrigin),
    "Content-type": "application/json",
  };

  const data = {
    status: "Success",
    message: "Fetch metrics names",
    count: {},
  };

  let id = env.COUNTER.idFromName('A')
  let obj = env.COUNTER.get(id)
  let resp = await obj.fetch(request.url)
  let count = parseInt(await resp.text())
  data.count = count

  return new Response(JSON.stringify(data, null, 2), { headers });
};