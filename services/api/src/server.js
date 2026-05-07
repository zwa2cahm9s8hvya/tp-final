const http = require("http");
const { estimateQuote } = require("./pricing");

const goats = [
  { id: "G-001", name: "Marguerite", breed: "Alpine", speciality: "ronces", status: "active", dailyRate: 42 },
  { id: "G-002", name: "Noisette", breed: "Naine", speciality: "petites surfaces", status: "active", dailyRate: 35 },
  { id: "G-003", name: "Gaston", breed: "Rove", speciality: "terrains escarpes", status: "active", dailyRate: 48 },
  { id: "G-004", name: "Biscotte", breed: "Poitevine", speciality: "herbe haute", status: "active", dailyRate: 39 },
  { id: "G-005", name: "Rosalie", breed: "Alpine", speciality: "sous-bois", status: "active", dailyRate: 44 },
  { id: "G-006", name: "Pixel", breed: "Naine", speciality: "animations client", status: "active", dailyRate: 34 },
  { id: "G-007", name: "Tornade", breed: "Rove", speciality: "friches", status: "active", dailyRate: 51 },
  { id: "G-008", name: "Ficelle", breed: "Alpine", speciality: "ronces", status: "repos", dailyRate: 40 },
  { id: "G-009", name: "Moka", breed: "Massif Central", speciality: "terrain humide", status: "active", dailyRate: 46 },
  { id: "G-010", name: "Olive", breed: "Poitevine", speciality: "herbe fine", status: "active", dailyRate: 36 },
  { id: "G-011", name: "Praline", breed: "Naine", speciality: "petites surfaces", status: "active", dailyRate: 35 },
  { id: "G-012", name: "Ulysse", breed: "Rove", speciality: "debroussaillage lourd", status: "active", dailyRate: 53 }
];

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  res.end(JSON.stringify(payload));
}

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url || "/", "http://localhost");

    if (req.method === "GET" && url.pathname === "/health") {
      sendJson(res, 200, {
        status: "ok",
        service: "loueunechevre-api",
        version: "0.4.0"
      });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/goats") {
      sendJson(res, 200, { goats });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/quote") {
      const amount = estimateQuote(url.searchParams.get("surface"), url.searchParams.get("terrain"));
      sendJson(res, 200, {
        currency: "EUR",
        estimatedAmount: amount,
        note: "Estimation indicative. Validation terrain obligatoire."
      });
      return;
    }

    sendJson(res, 404, { error: "Not found" });
  });
}

if (require.main === module) {
  const port = Number(process.env.API_PORT || 3001);
  createServer().listen(port, () => {
    console.log(`LoueUneChevre API listening on ${port}`);
  });
}

module.exports = { createServer, estimateQuote };
