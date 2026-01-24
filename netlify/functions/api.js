import fetch from "node-fetch";

export async function handler(event) {
  try {
    const backend = "https://thedentist-booking-backend.onrender.com";

    const url =
      backend +
      event.path.replace("/api", "") +
      (event.rawQuery ? `?${event.rawQuery}` : "");

    const res = await fetch(url, {
      method: event.httpMethod,
      headers: {
        "Content-Type": "application/json",
        cookie: event.headers.cookie || "",
      },
      body:
        event.httpMethod === "GET" || event.httpMethod === "HEAD"
          ? undefined
          : event.body,
    });

    return {
      statusCode: res.status,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": res.headers.get("set-cookie") || "",
      },
      body: await res.text(),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Function crashed" }),
    };
  }
}