(function createFlagTripUtils(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.FlagTripUtils = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function factory() {
  "use strict";

  const aliases = {
    AE: ["UAE", "United Arab Emirates", "アラブ首長国連邦"],
    BN: ["Brunei Darussalam", "ブルネイ・ダルサラーム"],
    BO: ["Plurinational State of Bolivia", "ボリビア多民族国"],
    CD: ["DR Congo", "DRC", "Congo-Kinshasa", "コンゴ民主共和国"],
    CG: ["Republic of the Congo", "Congo-Brazzaville", "コンゴ共和国"],
    CI: ["Ivory Coast", "Republic of Côte d'Ivoire", "コートジボワール共和国"],
    CN: ["PRC", "People's Republic of China", "中華人民共和国"],
    CV: ["Cape Verde", "カーボヴェルデ"],
    CZ: ["Czech Republic", "チェコ共和国"],
    GB: ["UK", "Britain", "Great Britain", "United Kingdom", "英国", "イギリス連合王国"],
    IR: ["Islamic Republic of Iran", "イラン・イスラム共和国"],
    KR: ["Korea", "Republic of Korea", "South Korea", "大韓民国"],
    KP: ["North Korea", "DPRK", "Democratic People's Republic of Korea", "北朝鮮", "朝鮮民主主義人民共和国"],
    LA: ["Laos", "Lao PDR", "ラオス人民民主共和国"],
    MD: ["Moldavia", "Republic of Moldova", "モルドバ共和国"],
    MK: ["Macedonia", "Former Yugoslav Republic of Macedonia", "マケドニア"],
    MM: ["Burma", "Myanmar", "ビルマ"],
    NL: ["Holland", "Netherlands", "オランダ王国"],
    PS: ["State of Palestine", "Palestinian Territories", "パレスチナ国"],
    RU: ["Russian Federation", "ロシア連邦"],
    SZ: ["Swaziland", "Kingdom of Eswatini", "スワジランド"],
    SY: ["Syrian Arab Republic", "シリア・アラブ共和国"],
    TL: ["East Timor", "Timor Leste", "東ティモール"],
    TR: ["Turkey", "Türkiye", "Republic of Türkiye", "トルコ共和国"],
    TZ: ["United Republic of Tanzania", "タンザニア連合共和国"],
    US: ["USA", "America", "United States of America", "アメリカ合衆国", "米国"],
    VA: ["Vatican", "Vatican City", "Holy See", "ローマ教皇庁"],
    VE: ["Bolivarian Republic of Venezuela", "ベネズエラ・ボリバル共和国"],
    VN: ["Viet Nam", "Socialist Republic of Vietnam", "ベトナム社会主義共和国"],
  };

  function shuffle(items, random = Math.random) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const target = Math.floor(random() * (index + 1));
      [result[index], result[target]] = [result[target], result[index]];
    }
    return result;
  }

  function normalizeAnswer(value) {
    return String(value ?? "")
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("en")
      .replace(/[\s\-‐‑‒–—―_.。,、・'’`´()（）\[\]{}]/g, "")
      .trim();
  }

  function acceptedAnswers(country) {
    return [country.ja, country.en, country.code, country.code3, ...(aliases[country.code] ?? [])]
      .map(normalizeAnswer)
      .filter(Boolean);
  }

  function isAcceptedAnswer(value, country) {
    const normalized = normalizeAnswer(value);
    return normalized.length > 0 && acceptedAnswers(country).includes(normalized);
  }

  function countriesForDifficulty(countries, difficulty) {
    if (difficulty === "easy") return countries.filter((country) => country.difficulty === "easy");
    if (difficulty === "medium") return countries.filter((country) => country.difficulty !== "hard");
    return [...countries];
  }

  function filterQuestionPool(countries, settings) {
    let pool = countriesForDifficulty(countries, settings.difficulty);
    if (settings.region && settings.region !== "all") {
      pool = pool.filter((country) => country.region === settings.region);
    }
    if (Array.isArray(settings.onlyCodes) && settings.onlyCodes.length > 0) {
      const allowedCodes = new Set(settings.onlyCodes);
      pool = pool.filter((country) => allowedCodes.has(country.code));
    }
    return pool;
  }

  function createOptions(correctCountry, countries, count = 4, random = Math.random) {
    const sameRegion = countries.filter(
      (country) => country.code !== correctCountry.code && country.region === correctCountry.region,
    );
    const others = countries.filter(
      (country) => country.code !== correctCountry.code && country.region !== correctCountry.region,
    );
    return shuffle(
      [correctCountry, ...shuffle(sameRegion, random), ...shuffle(others, random)].slice(0, count),
      random,
    );
  }

  function calculateScore(difficulty, elapsedMilliseconds, comboBeforeAnswer) {
    const multiplier = { easy: 1, medium: 1.4, hard: 1.8 }[difficulty] ?? 1;
    const elapsedSeconds = Math.max(0, elapsedMilliseconds) / 1000;
    const base = Math.round(100 * multiplier);
    const speed = Math.max(0, Math.round(90 - elapsedSeconds * 7.5));
    const combo = Math.min(Math.max(0, comboBeforeAnswer) * 12, 120);
    return { base, speed, combo, total: base + speed + combo };
  }

  function accuracy(correct, total) {
    return total > 0 ? Math.round((correct / total) * 100) : 0;
  }

  return {
    acceptedAnswers,
    accuracy,
    calculateScore,
    countriesForDifficulty,
    createOptions,
    filterQuestionPool,
    isAcceptedAnswer,
    normalizeAnswer,
    shuffle,
  };
});
