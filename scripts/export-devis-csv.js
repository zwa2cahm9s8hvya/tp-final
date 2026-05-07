#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Script lance par cron. Il reproduit l'ancien export CRM en relisant le CSV legacy.
// TODO: brancher sur une vraie base quand le CRM sera choisi.

const source = path.join(__dirname, "..", "data", "legacy", "devis-janvier-2026.csv");
const output = path.join(__dirname, "..", "tmp", "devis-export.csv");

function ensureTmpDir() {
  fs.mkdirSync(path.dirname(output), { recursive: true });
}

function main() {
  ensureTmpDir();
  const csv = fs.readFileSync(source, "utf8");
  const lines = csv.trim().split("\n");
  const accepted = lines.filter((line, index) => index === 0 || line.includes(",accepte,"));

  fs.writeFileSync(output, `${accepted.join("\n")}\n`);
  process.stdout.write(`Export devis OK: ${accepted.length - 1} lignes\n`);
}

main();
