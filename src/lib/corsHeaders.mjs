const allowedOrigins = [
  "*",
];

export const checkOrigin = (request) => {
  const origin = request.headers.get("Origin");
  const found = allowedOrigins.find((allowedOrigin) =>
    allowedOrigin.includes(origin),
  );
  return found ? found : allowedOrigins[0];
};

const corsHeaders = (origin) => ({
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Allow-Origin": origin,
});

export default corsHeaders;
