// /api/new-meetup

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;
  } else {
    res.writeHead(405, {
      "Content-Type": "text/plain",
    });
    res.end("Method not allowed");
  }
}
