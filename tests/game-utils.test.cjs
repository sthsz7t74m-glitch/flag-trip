const test = require("node:test");
const assert = require("node:assert/strict");
const utils = require("../src/main/resources/static/js/game-utils.js");

const japan = {
  code: "JP",
  code3: "JPN",
  ja: "日本",
  en: "Japan",
  region: "Asia",
  difficulty: "easy",
};

test("normalizes spacing, punctuation and accents", () => {
  assert.equal(utils.normalizeAnswer("  United-States  "), "unitedstates");
  assert.equal(utils.normalizeAnswer("Côte d’Ivoire"), "cotedivoire");
  assert.equal(utils.normalizeAnswer("日　本"), "日本");
});

test("accepts Japanese, English and common aliases", () => {
  assert.equal(utils.isAcceptedAnswer("日本", japan), true);
  assert.equal(utils.isAcceptedAnswer("japan", japan), true);
  assert.equal(utils.isAcceptedAnswer("JPN", japan), true);

  const unitedStates = { code: "US", code3: "USA", ja: "アメリカ", en: "United States" };
  assert.equal(utils.isAcceptedAnswer("アメリカ合衆国", unitedStates), true);
  assert.equal(utils.isAcceptedAnswer("USA", unitedStates), true);
});

test("difficulty pools expand from beginner to advanced", () => {
  const countries = [
    { difficulty: "easy" },
    { difficulty: "medium" },
    { difficulty: "hard" },
  ];
  assert.equal(utils.countriesForDifficulty(countries, "easy").length, 1);
  assert.equal(utils.countriesForDifficulty(countries, "medium").length, 2);
  assert.equal(utils.countriesForDifficulty(countries, "hard").length, 3);
});

test("score rewards difficulty, speed and combo", () => {
  const slowBeginner = utils.calculateScore("easy", 10_000, 0);
  const fastAdvanced = utils.calculateScore("hard", 1_000, 5);
  assert.ok(fastAdvanced.total > slowBeginner.total);
  assert.equal(slowBeginner.combo, 0);
  assert.ok(fastAdvanced.combo > 0);
});

test("creates four unique options including the correct country", () => {
  const countries = [
    japan,
    { code: "KR", region: "Asia" },
    { code: "CN", region: "Asia" },
    { code: "TH", region: "Asia" },
    { code: "FR", region: "Europe" },
  ];
  const options = utils.createOptions(japan, countries, 4, () => 0.4);
  assert.equal(options.length, 4);
  assert.equal(new Set(options.map((country) => country.code)).size, 4);
  assert.ok(options.some((country) => country.code === "JP"));
});

test("accuracy is rounded and safe for zero attempts", () => {
  assert.equal(utils.accuracy(7, 9), 78);
  assert.equal(utils.accuracy(0, 0), 0);
});
