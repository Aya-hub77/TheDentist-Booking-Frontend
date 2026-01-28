import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const backend = "https://thedentist-booking-backend.onrender.com";
    const path = req.url.replace(/^\/api/, "").replace(/^\//, "");
    const query = req.url.includes("?") ? req.url.split("?")[1] : "";
    const url = query ? `${backend}/${path}?${query}` : `${backend}/${path}`;

    console.log("Forwarding request to backend:", url);

    const response = await fetch(url, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        cookie: req.headers.cookie || "",
      },
      body:
        req.method === "GET" || req.method === "HEAD"
          ? undefined
          : req.body,
    });
    const text = await response.text();

    res.status(response.status);
    res.setHeader("Content-Type", "application/json");
    if (response.headers.get("set-cookie")) {
      res.setHeader("Set-Cookie", response.headers.get("set-cookie"));
    }
    res.send(text);
  } catch (err) {
    console.error("Function error:", err);
    res.status(500).json({ error: "Function crashed" });
  }
}