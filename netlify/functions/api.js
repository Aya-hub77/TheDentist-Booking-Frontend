export async function handler(event) {
  const backend = "https://thedentist-booking-backend.onrender.com";

  const res = await fetch(
    backend + event.path.replace("/api", ""),
    {
      method: event.httpMethod,
      headers: {
        "Content-Type": "application/json",
        cookie: event.headers.cookie || "",
      },
      body: event.body,
    }
  );

  return {
    statusCode: res.status,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": res.headers.get("set-cookie") || "",
    },
    body: await res.text(),
  };
}