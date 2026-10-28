const express = require("express");

// This application only exposes a public, read-only health endpoint.
// No authenticated sessions or state-changing operations exist.
// nosemgrep: javascript.express.security.audit.express-check-csurf-middleware-usage.express-check-csurf-middleware-usage
const app = express();

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

if (require.main === module) {
    app.listen(3000, () => {
        // console.log("Listening on port 3000");

    });
}

module.exports = app;