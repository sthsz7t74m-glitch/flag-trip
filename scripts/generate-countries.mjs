import fs from "node:fs";
import path from "node:path";

const [worldCountriesPath, wikidataPath, outputPath] = process.argv.slice(2);

if (!worldCountriesPath || !wikidataPath || !outputPath) {
  console.error(
    "Usage: node scripts/generate-countries.mjs <world-countries.json> <wikidata-capitals.json> <output.json>",
  );
  process.exit(1);
}

const sourceCountries = JSON.parse(fs.readFileSync(worldCountriesPath, "utf8"));
const wikidata = JSON.parse(fs.readFileSync(wikidataPath, "utf8"));

const easyCodes = new Set([
  "AR", "AT", "AU", "BE", "BR", "CA", "CH", "CN", "DE", "DK", "EG",
  "ES", "FI", "FR", "GB", "GR", "ID", "IN", "IT", "JP", "KE", "KR",
  "MX", "MY", "NG", "NL", "NO", "NZ", "PH", "PL", "PT", "RU", "SA",
  "SE", "SG", "TH", "TR", "UA", "US", "VN", "ZA",
]);

const mediumCodes = new Set([
  "AE", "AF", "AL", "AM", "AZ", "BD", "BG", "BH", "BO", "CL", "CO",
  "CR", "CU", "CY", "CZ", "DO", "DZ", "EC", "EE", "ET", "GE", "GH",
  "HR", "HU", "IE", "IL", "IQ", "IR", "IS", "JM", "JO", "KZ", "KH",
  "KP", "KW", "LA", "LK", "LT", "LU", "LV", "MA", "MC", "MM", "MN",
  "MT", "NP", "OM", "PA", "PE", "PK", "PR", "QA", "RO", "RS", "SD",
  "SI", "SK", "SY", "TN", "TW", "TZ", "UG", "UY", "UZ", "VE", "ZW",
]);

const regionJa = {
  Africa: "アフリカ",
  Americas: "南北アメリカ",
  Asia: "アジア",
  Europe: "ヨーロッパ",
  Oceania: "オセアニア",
};

const capitalOverrides = {
  JP: "東京",
  US: "ワシントンD.C.",
};

const capitalLabels = new Map();
for (const row of wikidata.results?.bindings ?? []) {
  const code = row.iso2?.value;
  const label = row.capitalLabelJa?.value;
  if (!code || !label) continue;
  const labels = capitalLabels.get(code) ?? [];
  if (!labels.includes(label)) labels.push(label);
  capitalLabels.set(code, labels);
}

const countries = sourceCountries
  .filter((country) => country.unMember || ["VAT", "PSE"].includes(country.cca3))
  .map((country) => {
    const code = country.cca2;
    const capitalsJa = capitalLabels.get(code) ?? [];
    const jaName = country.translations?.jpn?.common
      ?? country.name?.native?.jpn?.common
      ?? country.name.common;

    return {
      code,
      code3: country.cca3,
      ja: jaName,
      en: country.name.common,
      capitalJa: capitalOverrides[code] ?? capitalsJa.join("／") ?? "",
      capitalEn: (country.capital ?? []).join(" / "),
      region: country.region,
      regionJa: regionJa[country.region] ?? country.region,
      flag: country.flag,
      difficulty: easyCodes.has(code) ? "easy" : mediumCodes.has(code) ? "medium" : "hard",
    };
  })
  .sort((a, b) => a.ja.localeCompare(b.ja, "ja"));

if (countries.length !== 195) {
  throw new Error(`Expected 195 countries, generated ${countries.length}`);
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(countries, null, 2)}\n`);
console.log(`Generated ${countries.length} countries at ${outputPath}`);
