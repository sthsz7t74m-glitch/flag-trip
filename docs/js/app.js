(() => {
  "use strict";

  const utils = window.FlagTripUtils;
  const STATS_KEY = "flag-trip:stats:v1";
  const LANGUAGE_KEY = "flag-trip:language";
  const SOUND_KEY = "flag-trip:sound";

  const translations = {
    ja: {
      heroLead: "国旗を覚えて、世界をめぐろう！",
      accuracy: "正答率",
      bestStreak: "最高連続正解",
      learnedCountries: "学習した国",
      chooseCourse: "コースを選ぶ",
      whereNext: "次はどこへ行く？",
      allModesFree: "すべて無料で遊べます",
      flagToName: "国旗 → 国名",
      flagToNameDesc: "国旗を見て4択から国名を選ぼう",
      nameToFlag: "国名 → 国旗",
      nameToFlagDesc: "国名に合う国旗を4枚から探そう",
      typingQuiz: "国名入力",
      typingQuizDesc: "ヒントなしで国名を入力する上級コース",
      learnMode: "学習モード",
      learnModeDesc: "図鑑とカードで195か国をじっくり学習",
      todayTip: "今日の旅メモ",
      reviewWeak: "苦手を復習",
      backHome: "ホームへ",
      boardingPass: "BOARDING PASS",
      chooseTripSettings: "旅のコースを設定しよう",
      difficulty: "難易度",
      beginner: "初級",
      beginnerDesc: "有名な41か国",
      intermediate: "中級",
      intermediateDesc: "初級＋64か国",
      advanced: "上級",
      advancedDesc: "世界195か国",
      region: "地域",
      questions: "問題数",
      allWorld: "世界すべて",
      asia: "アジア",
      europe: "ヨーロッパ",
      africa: "アフリカ",
      americas: "南北アメリカ",
      oceania: "オセアニア",
      explanationTiming: "解説のタイミング",
      explainNow: "1問ごとに解説",
      explainLater: "最後にまとめて解説",
      depart: "出発する",
      quit: "やめる",
      score: "SCORE",
      combo: "COMBO",
      speedHint: "早く答えるとボーナス！",
      nextQuestion: "次の問題へ",
      arrival: "ARRIVAL!",
      tripComplete: "旅を完走しました！",
      finalScore: "FINAL SCORE",
      newRecord: "NEW RECORD!",
      correctAnswers: "正解数",
      bestCombo: "最大コンボ",
      answerReview: "答えを振り返る",
      retry: "もう一度",
      worldPassport: "WORLD PASSPORT",
      flagEncyclopedia: "世界の国旗図鑑",
      learnHeaderDesc: "気になる国を選んで、国旗と基本情報を覚えよう。",
      countriesVisited: "か国訪問",
      gallery: "図鑑",
      flashcards: "カード",
      tapToFlip: "カードを押すと答えが見えます",
      previous: "前へ",
      next: "次へ",
      remembered: "覚えた！",
      whichCountry: "この国旗はどこの国？",
      whichFlag: "「{country}」の国旗はどれ？",
      typeCountry: "この国旗の国名を入力しよう",
      answerPlaceholder: "国名を入力",
      answerButton: "回答する",
      correct: "正解！",
      incorrect: "おしい！",
      correctWas: "正解は {country}",
      capital: "首都",
      level: "レベル",
      easy: "初級",
      medium: "中級",
      hard: "上級",
      countryCode: "国コード",
      markLearned: "覚えた国に追加",
      markedLearned: "覚えた国に追加しました！",
      searchPlaceholder: "国名・首都で検索",
      noCountries: "条件に合う国が見つかりませんでした。",
      noWeakCountries: "苦手な国はまだありません。まずはクイズに挑戦しよう！",
      needMoreWeakCountries: "苦手な国が4か国たまると復習コースを作れます。",
      loadingError: "国データを読み込めませんでした。再読み込みしてください。",
      exitConfirm: "途中の成績は保存されません。ホームへ戻りますか？",
      greatResult: "すごい！世界一周クラスの国旗力です。",
      goodResult: "ナイスフライト！あと少しで国旗マスターです。",
      keepGoing: "旅は始まったばかり。苦手な国を復習してみよう！",
      instantCorrect: "正解！ +{points}点",
      instantWrong: "正解は {country}",
      travelTipDefault: "間違えた国は自動で記録され、次の復習に役立ちます。",
      travelTipWeak: "いまの復習候補は「{country}」。もう一度見てみよう！",
      allAnswered: "この地域の問題をすべて出題します。",
    },
    en: {
      heroLead: "Learn flags and travel around the world!",
      accuracy: "Accuracy",
      bestStreak: "Best streak",
      learnedCountries: "Countries learned",
      chooseCourse: "CHOOSE A COURSE",
      whereNext: "Where will you go next?",
      allModesFree: "All modes are free to play",
      flagToName: "Flag → Country",
      flagToNameDesc: "See a flag and choose its country from four answers",
      nameToFlag: "Country → Flag",
      nameToFlagDesc: "Find the matching flag from four choices",
      typingQuiz: "Type the Country",
      typingQuizDesc: "A challenging course with no answer choices",
      learnMode: "Study Mode",
      learnModeDesc: "Explore all 195 countries with a guide and cards",
      todayTip: "TRAVEL TIP",
      reviewWeak: "Review weak flags",
      backHome: "Home",
      boardingPass: "BOARDING PASS",
      chooseTripSettings: "Choose your travel course",
      difficulty: "Difficulty",
      beginner: "Beginner",
      beginnerDesc: "41 famous countries",
      intermediate: "Intermediate",
      intermediateDesc: "Beginner + 64 countries",
      advanced: "Advanced",
      advancedDesc: "All 195 countries",
      region: "Region",
      questions: "Questions",
      allWorld: "All regions",
      asia: "Asia",
      europe: "Europe",
      africa: "Africa",
      americas: "Americas",
      oceania: "Oceania",
      explanationTiming: "Show explanations",
      explainNow: "After each question",
      explainLater: "At the end",
      depart: "Start the trip",
      quit: "Quit",
      score: "SCORE",
      combo: "COMBO",
      speedHint: "Answer quickly for a bonus!",
      nextQuestion: "Next question",
      arrival: "ARRIVAL!",
      tripComplete: "Trip complete!",
      finalScore: "FINAL SCORE",
      newRecord: "NEW RECORD!",
      correctAnswers: "Correct",
      bestCombo: "Best combo",
      answerReview: "Review your answers",
      retry: "Try again",
      worldPassport: "WORLD PASSPORT",
      flagEncyclopedia: "World Flag Guide",
      learnHeaderDesc: "Pick a country to learn its flag and key facts.",
      countriesVisited: "visited",
      gallery: "Gallery",
      flashcards: "Cards",
      tapToFlip: "Tap the card to reveal the answer",
      previous: "Previous",
      next: "Next",
      remembered: "Got it!",
      whichCountry: "Which country does this flag belong to?",
      whichFlag: "Which flag belongs to {country}?",
      typeCountry: "Type the country for this flag",
      answerPlaceholder: "Enter a country name",
      answerButton: "Answer",
      correct: "Correct!",
      incorrect: "Not quite!",
      correctWas: "The answer is {country}",
      capital: "Capital",
      level: "Level",
      easy: "Beginner",
      medium: "Intermediate",
      hard: "Advanced",
      countryCode: "Country code",
      markLearned: "Add to learned countries",
      markedLearned: "Added to your learned countries!",
      searchPlaceholder: "Search country or capital",
      noCountries: "No countries match these filters.",
      noWeakCountries: "You have no weak flags yet. Try a quiz first!",
      needMoreWeakCountries: "Review unlocks after you miss four different countries.",
      loadingError: "Country data could not be loaded. Please refresh the page.",
      exitConfirm: "Your current run will not be saved. Return home?",
      greatResult: "Amazing! Your flag knowledge is ready for a world tour.",
      goodResult: "Great flight! You are close to becoming a flag master.",
      keepGoing: "The journey has just begun. Review the flags you missed!",
      instantCorrect: "Correct! +{points} pts",
      instantWrong: "The answer is {country}",
      travelTipDefault: "Missed countries are saved automatically for future review.",
      travelTipWeak: "Try reviewing {country} next!",
      allAnswered: "All available countries in this region will be used.",
    },
  };

  const elements = {};
  let countries = [];
  let language = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "ja";
  let soundEnabled = localStorage.getItem(SOUND_KEY) !== "off";
  let selectedMode = "flag-to-name";
  let quiz = null;
  let toastTimer = 0;
  let audioContext = null;
  let learnView = "gallery";
  let visibleLearnCountries = [];
  let flashcardIndex = 0;

  const stats = loadStats();

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    cacheElements();
    bindEvents();
    applyLanguage();
    updateSoundButton();

    try {
      const response = await fetch("./data/countries.json", { cache: "force-cache" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      countries = await response.json();
      if (!Array.isArray(countries) || countries.length !== 195) {
        throw new Error("Invalid country data");
      }
      renderHomeStats();
    } catch (error) {
      console.error(error);
      showToast(t("loadingError"));
      document.querySelectorAll(".mode-card").forEach((button) => {
        button.disabled = true;
      });
    }
  }

  function cacheElements() {
    const ids = [
      "brand-button", "sound-toggle", "sound-icon", "home-accuracy", "home-streak",
      "home-learned", "travel-tip", "weak-review-button", "learn-mode-button",
      "setup-title", "quiz-setup-form", "region-select", "question-count-select",
      "quit-quiz-button", "question-number", "question-total", "progress-percent",
      "progress-bar", "current-score", "combo-count", "speed-message", "question-kind",
      "quiz-prompt", "question-visual", "answer-area", "feedback-card", "feedback-icon",
      "feedback-title", "feedback-answer", "points-earned", "feedback-facts",
      "next-question-button", "result-message", "result-score-value", "new-record-badge",
      "result-correct", "result-accuracy", "result-streak", "review-section", "review-list",
      "result-home-button", "retry-button", "learned-counter-value", "country-search",
      "learn-region-select", "country-grid", "flashcard-area", "flashcard", "flashcard-front",
      "flashcard-back", "flashcard-position", "previous-card-button", "next-card-button",
      "known-card-button", "country-dialog", "dialog-close-button", "dialog-content", "toast",
      "confetti-layer",
    ];
    ids.forEach((id) => { elements[toCamel(id)] = document.getElementById(id); });
  }

  function bindEvents() {
    elements.brandButton.addEventListener("click", navigateHome);
    document.querySelectorAll("[data-back-home]").forEach((button) => {
      button.addEventListener("click", navigateHome);
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.language));
    });
    elements.soundToggle.addEventListener("click", toggleSound);
    document.querySelectorAll("[data-mode]").forEach((button) => {
      button.addEventListener("click", () => openSetup(button.dataset.mode));
    });
    elements.learnModeButton.addEventListener("click", openLearnMode);
    elements.quizSetupForm.addEventListener("submit", handleSetupSubmit);
    elements.quitQuizButton.addEventListener("click", navigateHome);
    elements.nextQuestionButton.addEventListener("click", goToNextQuestion);
    elements.resultHomeButton.addEventListener("click", navigateHome);
    elements.retryButton.addEventListener("click", retryQuiz);
    elements.weakReviewButton.addEventListener("click", startWeakReview);
    elements.countrySearch.addEventListener("input", renderLearnMode);
    elements.learnRegionSelect.addEventListener("change", renderLearnMode);
    document.querySelectorAll("[data-learn-view]").forEach((button) => {
      button.addEventListener("click", () => setLearnView(button.dataset.learnView));
    });
    elements.flashcard.addEventListener("click", toggleFlashcard);
    elements.flashcard.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleFlashcard();
      }
    });
    elements.previousCardButton.addEventListener("click", () => moveFlashcard(-1));
    elements.nextCardButton.addEventListener("click", () => moveFlashcard(1));
    elements.knownCardButton.addEventListener("click", markFlashcardKnown);
    elements.dialogCloseButton.addEventListener("click", () => elements.countryDialog.close());
    elements.countryDialog.addEventListener("click", (event) => {
      if (event.target === elements.countryDialog) elements.countryDialog.close();
    });
  }

  function loadStats() {
    const empty = {
      totalAnswered: 0,
      totalCorrect: 0,
      bestScore: 0,
      bestStreak: 0,
      gamesPlayed: 0,
      countries: {},
    };
    try {
      return { ...empty, ...JSON.parse(localStorage.getItem(STATS_KEY) ?? "{}") };
    } catch {
      return empty;
    }
  }

  function saveStats() {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    renderHomeStats();
  }

  function t(key, replacements = {}) {
    let value = translations[language][key] ?? translations.ja[key] ?? key;
    Object.entries(replacements).forEach(([name, replacement]) => {
      value = value.replaceAll(`{${name}}`, replacement);
    });
    return value;
  }

  function setLanguage(nextLanguage) {
    if (!translations[nextLanguage]) return;
    language = nextLanguage;
    localStorage.setItem(LANGUAGE_KEY, language);
    applyLanguage();
    renderHomeStats();
    if (document.getElementById("learn-screen").classList.contains("is-active")) renderLearnMode();
    if (quiz && document.getElementById("quiz-screen").classList.contains("is-active") && !quiz.answered) {
      renderQuestion();
    }
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.language === language);
    });
    elements.countrySearch.placeholder = t("searchPlaceholder");
    if (selectedMode) elements.setupTitle.textContent = modeName(selectedMode);
  }

  function updateSoundButton() {
    elements.soundIcon.textContent = soundEnabled ? "🔊" : "🔇";
    elements.soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem(SOUND_KEY, soundEnabled ? "on" : "off");
    updateSoundButton();
    if (soundEnabled) playSound("tap");
  }

  function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.toggle("is-active", screen.id === screenId);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function navigateHome() {
    const isQuizActive = document.getElementById("quiz-screen").classList.contains("is-active");
    if (isQuizActive && quiz && quiz.index < quiz.questions.length && !window.confirm(t("exitConfirm"))) return;
    quiz = null;
    renderHomeStats();
    showScreen("home-screen");
  }

  function openSetup(mode) {
    if (countries.length === 0) return;
    selectedMode = mode;
    elements.setupTitle.textContent = modeName(mode);
    showScreen("setup-screen");
  }

  function modeName(mode) {
    return {
      "flag-to-name": t("flagToName"),
      "name-to-flag": t("nameToFlag"),
      typing: t("typingQuiz"),
    }[mode] ?? t("flagToName");
  }

  function handleSetupSubmit(event) {
    event.preventDefault();
    const data = new FormData(elements.quizSetupForm);
    startQuiz({
      mode: selectedMode,
      difficulty: data.get("difficulty"),
      region: data.get("region"),
      questionCount: Number(data.get("questionCount")),
      explanation: data.get("explanation"),
    });
  }

  function startQuiz(settings) {
    const questionPool = utils.filterQuestionPool(countries, settings);
    const optionPool = utils.filterQuestionPool(countries, { ...settings, onlyCodes: undefined });
    if (questionPool.length === 0) {
      showToast(t("noCountries"));
      return;
    }
    if (optionPool.length < 4) {
      showToast(t("noCountries"));
      return;
    }

    const requestedCount = Math.max(1, settings.questionCount || 10);
    const questionCount = Math.min(requestedCount, questionPool.length);
    if (questionCount < requestedCount) showToast(t("allAnswered"));

    quiz = {
      settings: { ...settings, questionCount },
      optionPool,
      questions: utils.shuffle(questionPool).slice(0, questionCount),
      answers: [],
      index: 0,
      score: 0,
      combo: 0,
      maxCombo: 0,
      answered: false,
      startedAt: 0,
    };

    elements.questionTotal.textContent = String(questionCount);
    showScreen("quiz-screen");
    renderQuestion();
  }

  function renderQuestion() {
    if (!quiz) return;
    const country = quiz.questions[quiz.index];
    quiz.answered = false;
    quiz.startedAt = performance.now();
    elements.feedbackCard.hidden = true;
    elements.feedbackCard.classList.remove("is-wrong");

    const progress = ((quiz.index + 1) / quiz.questions.length) * 100;
    elements.questionNumber.textContent = String(quiz.index + 1);
    elements.progressPercent.textContent = `${Math.round(progress)}%`;
    elements.progressBar.style.width = `${progress}%`;
    elements.currentScore.textContent = quiz.score.toLocaleString();
    elements.comboCount.textContent = String(quiz.combo);
    elements.questionKind.textContent = modeName(quiz.settings.mode).toUpperCase();

    if (quiz.settings.mode === "flag-to-name") {
      renderFlagToNameQuestion(country);
    } else if (quiz.settings.mode === "name-to-flag") {
      renderNameToFlagQuestion(country);
    } else {
      renderTypingQuestion(country);
    }
    bindFlagFallbacks(elements.questionVisual);
    bindFlagFallbacks(elements.answerArea);
  }

  function renderFlagToNameQuestion(country) {
    elements.quizPrompt.textContent = t("whichCountry");
    elements.questionVisual.innerHTML = flagMarkup(country, "flag-frame", true);
    const options = utils.createOptions(country, quiz.optionPool);
    elements.answerArea.innerHTML = options.map((option) => `
      <button class="answer-button" type="button" data-answer-code="${option.code}">
        ${escapeHtml(countryName(option))}
      </button>
    `).join("");
    bindChoiceButtons();
  }

  function renderNameToFlagQuestion(country) {
    const name = countryName(country);
    elements.quizPrompt.textContent = t("whichFlag", { country: name });
    elements.questionVisual.innerHTML = `
      <div class="name-question">
        <strong>${escapeHtml(name)}</strong>
        <small>${escapeHtml(language === "ja" ? country.en : country.ja)}</small>
      </div>
    `;
    const options = utils.createOptions(country, quiz.optionPool);
    elements.answerArea.innerHTML = options.map((option) => `
      <button class="answer-flag" type="button" data-answer-code="${option.code}" aria-label="${escapeHtml(countryName(option))}">
        ${flagImageContent(option)}
      </button>
    `).join("");
    bindChoiceButtons();
  }

  function renderTypingQuestion(country) {
    elements.quizPrompt.textContent = t("typeCountry");
    elements.questionVisual.innerHTML = flagMarkup(country, "flag-frame", true);
    elements.answerArea.innerHTML = `
      <form class="typing-form" id="typing-answer-form">
        <input id="typing-answer-input" type="text" autocomplete="off" autocapitalize="words"
          placeholder="${escapeHtml(t("answerPlaceholder"))}" aria-label="${escapeHtml(t("answerPlaceholder"))}">
        <button class="primary-button" type="submit">${escapeHtml(t("answerButton"))}</button>
      </form>
    `;
    const form = document.getElementById("typing-answer-form");
    const input = document.getElementById("typing-answer-input");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (quiz.answered || !input.value.trim()) return;
      const correct = utils.isAcceptedAnswer(input.value, country);
      input.disabled = true;
      form.querySelector("button").disabled = true;
      input.style.borderColor = correct ? "var(--success)" : "var(--danger)";
      submitAnswer(correct, input.value);
    });
    requestAnimationFrame(() => input.focus());
  }

  function bindChoiceButtons() {
    elements.answerArea.querySelectorAll("[data-answer-code]").forEach((button) => {
      button.addEventListener("click", () => {
        if (quiz.answered) return;
        const selectedCode = button.dataset.answerCode;
        const country = quiz.questions[quiz.index];
        elements.answerArea.querySelectorAll("[data-answer-code]").forEach((candidate) => {
          candidate.disabled = true;
          if (candidate.dataset.answerCode === country.code) candidate.classList.add("is-correct");
        });
        const correct = selectedCode === country.code;
        if (!correct) button.classList.add("is-wrong");
        submitAnswer(correct, selectedCode);
      });
    });
  }

  function submitAnswer(correct, givenAnswer) {
    if (!quiz || quiz.answered) return;
    quiz.answered = true;
    const country = quiz.questions[quiz.index];
    const elapsed = performance.now() - quiz.startedAt;
    let points = 0;

    if (correct) {
      const breakdown = utils.calculateScore(country.difficulty, elapsed, quiz.combo);
      points = breakdown.total;
      quiz.combo += 1;
      quiz.score += points;
      quiz.maxCombo = Math.max(quiz.maxCombo, quiz.combo);
      playSound("correct");
      if (quiz.combo >= 3) launchConfetti(24);
    } else {
      quiz.combo = 0;
      playSound("wrong");
    }

    quiz.answers.push({ country, correct, points, givenAnswer, elapsed });
    recordAnswer(country, correct);
    elements.currentScore.textContent = quiz.score.toLocaleString();
    elements.comboCount.textContent = String(quiz.combo);

    if (quiz.settings.explanation === "immediate") {
      showFeedback(country, correct, points);
    } else {
      showToast(correct
        ? t("instantCorrect", { points: String(points) })
        : t("instantWrong", { country: countryName(country) }));
      window.setTimeout(goToNextQuestion, 780);
    }
  }

  function showFeedback(country, correct, points) {
    elements.feedbackCard.hidden = false;
    elements.feedbackCard.classList.toggle("is-wrong", !correct);
    elements.feedbackIcon.textContent = correct ? "🎉" : "🧭";
    elements.feedbackTitle.textContent = correct ? t("correct") : t("incorrect");
    elements.feedbackAnswer.textContent = t("correctWas", { country: countryName(country) });
    elements.pointsEarned.textContent = correct ? `+${points}` : "+0";
    elements.pointsEarned.style.background = correct ? "var(--green)" : "var(--danger)";
    elements.feedbackFacts.innerHTML = `
      <div class="feedback-fact"><small>${escapeHtml(t("capital"))}</small><strong>${escapeHtml(capitalName(country))}</strong></div>
      <div class="feedback-fact"><small>${escapeHtml(t("region"))}</small><strong>${escapeHtml(regionName(country))}</strong></div>
    `;
    elements.nextQuestionButton.focus({ preventScroll: true });
    elements.feedbackCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function goToNextQuestion() {
    if (!quiz || !quiz.answered) return;
    if (quiz.index + 1 >= quiz.questions.length) {
      finishQuiz();
      return;
    }
    quiz.index += 1;
    renderQuestion();
  }

  function finishQuiz() {
    const correct = quiz.answers.filter((answer) => answer.correct).length;
    const resultAccuracy = utils.accuracy(correct, quiz.answers.length);
    const isNewRecord = quiz.score > stats.bestScore;
    stats.bestScore = Math.max(stats.bestScore, quiz.score);
    stats.bestStreak = Math.max(stats.bestStreak, quiz.maxCombo);
    stats.gamesPlayed += 1;
    saveStats();

    elements.resultMessage.textContent = resultAccuracy >= 90
      ? t("greatResult")
      : resultAccuracy >= 60 ? t("goodResult") : t("keepGoing");
    elements.resultScoreValue.textContent = quiz.score.toLocaleString();
    elements.newRecordBadge.hidden = !isNewRecord;
    elements.resultCorrect.textContent = `${correct} / ${quiz.answers.length}`;
    elements.resultAccuracy.textContent = `${resultAccuracy}%`;
    elements.resultStreak.textContent = String(quiz.maxCombo);
    elements.reviewList.innerHTML = quiz.answers.map((answer) => `
      <div class="review-item ${answer.correct ? "" : "is-wrong"}">
        <div class="review-flag">${flagImageContent(answer.country)}</div>
        <div><strong>${escapeHtml(countryName(answer.country))}</strong><small>${escapeHtml(capitalName(answer.country))}</small></div>
        <span class="review-result-icon">${answer.correct ? "✓" : "×"}</span>
      </div>
    `).join("");
    bindFlagFallbacks(elements.reviewList);
    launchConfetti(resultAccuracy >= 80 ? 70 : 32);
    playSound("finish");
    showScreen("result-screen");
  }

  function retryQuiz() {
    if (!quiz) return;
    startQuiz({ ...quiz.settings });
  }

  function recordAnswer(country, correct) {
    const record = stats.countries[country.code] ?? { attempts: 0, correct: 0, learned: false };
    record.attempts += 1;
    if (correct) {
      record.correct += 1;
      record.learned = true;
    }
    record.lastSeen = Date.now();
    stats.countries[country.code] = record;
    stats.totalAnswered += 1;
    if (correct) stats.totalCorrect += 1;
    saveStats();
  }

  function startWeakReview() {
    const weakCodes = Object.entries(stats.countries)
      .filter(([, record]) => record.attempts - record.correct > 0)
      .sort(([, a], [, b]) => (b.attempts - b.correct) - (a.attempts - a.correct))
      .map(([code]) => code);
    if (weakCodes.length === 0) {
      showToast(t("noWeakCountries"));
      return;
    }
    if (weakCodes.length < 4) showToast(t("needMoreWeakCountries"));
    startQuiz({
      mode: "flag-to-name",
      difficulty: "hard",
      region: "all",
      questionCount: Math.min(10, weakCodes.length),
      explanation: "immediate",
      onlyCodes: weakCodes,
    });
  }

  function renderHomeStats() {
    const learnedCount = Object.values(stats.countries).filter((record) => record.learned).length;
    elements.homeAccuracy.textContent = stats.totalAnswered
      ? `${utils.accuracy(stats.totalCorrect, stats.totalAnswered)}%`
      : "--%";
    elements.homeStreak.textContent = String(stats.bestStreak);
    elements.homeLearned.textContent = `${learnedCount} / 195`;

    const weak = Object.entries(stats.countries)
      .filter(([, record]) => record.attempts - record.correct > 0)
      .sort(([, a], [, b]) => (b.attempts - b.correct) - (a.attempts - a.correct))[0];
    const weakCountry = weak && countries.find((country) => country.code === weak[0]);
    elements.travelTip.textContent = weakCountry
      ? t("travelTipWeak", { country: countryName(weakCountry) })
      : t("travelTipDefault");
  }

  function openLearnMode() {
    if (countries.length === 0) return;
    flashcardIndex = 0;
    renderLearnMode();
    showScreen("learn-screen");
  }

  function setLearnView(view) {
    learnView = view;
    document.querySelectorAll("[data-learn-view]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.learnView === view);
    });
    elements.countryGrid.hidden = view !== "gallery";
    elements.flashcardArea.hidden = view !== "cards";
    flashcardIndex = 0;
    renderLearnMode();
  }

  function renderLearnMode() {
    const query = utils.normalizeAnswer(elements.countrySearch.value);
    const region = elements.learnRegionSelect.value || "all";
    visibleLearnCountries = countries.filter((country) => {
      if (region !== "all" && country.region !== region) return false;
      if (!query) return true;
      return [country.ja, country.en, country.capitalJa, country.capitalEn, country.code]
        .some((value) => utils.normalizeAnswer(value).includes(query));
    });
    const learnedCount = Object.values(stats.countries).filter((record) => record.learned).length;
    elements.learnedCounterValue.textContent = String(learnedCount);

    if (learnView === "gallery") {
      renderCountryGrid();
    } else {
      flashcardIndex = Math.min(flashcardIndex, Math.max(0, visibleLearnCountries.length - 1));
      renderFlashcard();
    }
  }

  function renderCountryGrid() {
    if (visibleLearnCountries.length === 0) {
      elements.countryGrid.innerHTML = `<div class="empty-state">🧭<p>${escapeHtml(t("noCountries"))}</p></div>`;
      return;
    }
    elements.countryGrid.innerHTML = visibleLearnCountries.map((country) => `
      <button class="country-card ${stats.countries[country.code]?.learned ? "is-learned" : ""}"
        type="button" data-country-code="${country.code}">
        <span class="country-card__flag">${flagImageContent(country, true)}</span>
        <strong>${escapeHtml(countryName(country))}</strong>
        <small>${escapeHtml(regionName(country))}</small>
      </button>
    `).join("");
    bindFlagFallbacks(elements.countryGrid);
    elements.countryGrid.querySelectorAll("[data-country-code]").forEach((button) => {
      button.addEventListener("click", () => openCountryDialog(button.dataset.countryCode));
    });
  }

  function openCountryDialog(code) {
    const country = countries.find((candidate) => candidate.code === code);
    if (!country) return;
    markLearned(country.code, false);
    elements.dialogContent.innerHTML = `
      <div class="dialog-hero">
        <div class="dialog-flag">${flagImageContent(country)}</div>
        <h3>${escapeHtml(countryName(country))}</h3>
        <p>${escapeHtml(language === "ja" ? country.en : country.ja)}</p>
      </div>
      <div class="dialog-body">
        <div class="dialog-facts">
          <div class="dialog-fact"><small>${escapeHtml(t("capital"))}</small><strong>${escapeHtml(capitalName(country))}</strong></div>
          <div class="dialog-fact"><small>${escapeHtml(t("region"))}</small><strong>${escapeHtml(regionName(country))}</strong></div>
          <div class="dialog-fact"><small>${escapeHtml(t("countryCode"))}</small><strong>${country.code} / ${country.code3}</strong></div>
          <div class="dialog-fact"><small>${escapeHtml(t("level"))}</small><strong>${escapeHtml(t(country.difficulty))}</strong></div>
        </div>
        <button class="primary-button" id="dialog-learned-button" type="button">${escapeHtml(t("markLearned"))} ✓</button>
      </div>
    `;
    bindFlagFallbacks(elements.dialogContent);
    document.getElementById("dialog-learned-button").addEventListener("click", () => {
      markLearned(country.code, true);
      elements.countryDialog.close();
    });
    elements.countryDialog.showModal();
  }

  function renderFlashcard() {
    if (visibleLearnCountries.length === 0) {
      elements.flashcardFront.innerHTML = `<div class="empty-state">🧭<p>${escapeHtml(t("noCountries"))}</p></div>`;
      elements.flashcardBack.innerHTML = "";
      elements.flashcardPosition.textContent = "0 / 0";
      elements.knownCardButton.disabled = true;
      elements.previousCardButton.disabled = true;
      elements.nextCardButton.disabled = true;
      return;
    }
    const country = visibleLearnCountries[flashcardIndex];
    elements.flashcard.classList.remove("is-flipped");
    elements.flashcardFront.innerHTML = `<div class="flashcard__flag">${flagImageContent(country)}</div>`;
    elements.flashcardBack.innerHTML = `
      <h3>${escapeHtml(countryName(country))}</h3>
      <p>${escapeHtml(language === "ja" ? country.en : country.ja)}</p>
      <div class="flashcard-facts">
        <div><small>${escapeHtml(t("capital"))}</small><strong>${escapeHtml(capitalName(country))}</strong></div>
        <div><small>${escapeHtml(t("region"))}</small><strong>${escapeHtml(regionName(country))}</strong></div>
      </div>
    `;
    elements.flashcardPosition.textContent = `${flashcardIndex + 1} / ${visibleLearnCountries.length}`;
    elements.knownCardButton.disabled = false;
    elements.previousCardButton.disabled = visibleLearnCountries.length < 2;
    elements.nextCardButton.disabled = visibleLearnCountries.length < 2;
    bindFlagFallbacks(elements.flashcardFront);
  }

  function toggleFlashcard() {
    if (visibleLearnCountries.length > 0) elements.flashcard.classList.toggle("is-flipped");
  }

  function moveFlashcard(amount) {
    if (visibleLearnCountries.length === 0) return;
    flashcardIndex = (flashcardIndex + amount + visibleLearnCountries.length) % visibleLearnCountries.length;
    renderFlashcard();
  }

  function markFlashcardKnown() {
    const country = visibleLearnCountries[flashcardIndex];
    if (!country) return;
    markLearned(country.code, true);
    moveFlashcard(1);
  }

  function markLearned(code, notify) {
    const record = stats.countries[code] ?? { attempts: 0, correct: 0, learned: false };
    record.learned = true;
    record.lastSeen = Date.now();
    stats.countries[code] = record;
    saveStats();
    if (notify) showToast(t("markedLearned"));
    if (document.getElementById("learn-screen").classList.contains("is-active")) {
      const learnedCount = Object.values(stats.countries).filter((item) => item.learned).length;
      elements.learnedCounterValue.textContent = String(learnedCount);
    }
  }

  function countryName(country) {
    return language === "ja" ? country.ja : country.en;
  }

  function capitalName(country) {
    if (language === "ja") return country.capitalJa || country.capitalEn || "—";
    return country.capitalEn || country.capitalJa || "—";
  }

  function regionName(country) {
    return language === "ja" ? country.regionJa : country.region;
  }

  function flagUrl(country) {
    return `https://flagcdn.com/w320/${country.code.toLowerCase()}.png`;
  }

  function flagImageContent(country, lazy = false) {
    return `<img src="${flagUrl(country)}" alt="" ${lazy ? "loading=\"lazy\"" : ""} data-flag-image>
      <span class="flag-fallback" aria-hidden="true">${country.flag}</span>`;
  }

  function flagMarkup(country, className, eager = false) {
    return `<div class="${className}" role="img" aria-label="${escapeHtml(countryName(country))}">
      ${flagImageContent(country, !eager)}
    </div>`;
  }

  function bindFlagFallbacks(root) {
    root.querySelectorAll("img[data-flag-image]").forEach((image) => {
      if (image.dataset.bound) return;
      image.dataset.bound = "true";
      image.addEventListener("error", () => image.parentElement?.classList.add("is-fallback"), { once: true });
    });
  }

  function playSound(type) {
    if (!soundEnabled) return;
    try {
      audioContext ??= new (window.AudioContext || window.webkitAudioContext)();
      const sequences = {
        tap: [[520, 0, 0.06]],
        correct: [[523, 0, 0.09], [659, 0.08, 0.1], [784, 0.17, 0.12]],
        wrong: [[245, 0, 0.12], [185, 0.1, 0.16]],
        finish: [[523, 0, 0.1], [659, 0.1, 0.1], [784, 0.2, 0.1], [1047, 0.3, 0.2]],
      };
      const now = audioContext.currentTime;
      (sequences[type] ?? sequences.tap).forEach(([frequency, offset, duration]) => {
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        oscillator.type = "sine";
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(0.0001, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.12, now + offset + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + duration);
        oscillator.connect(gain).connect(audioContext.destination);
        oscillator.start(now + offset);
        oscillator.stop(now + offset + duration + 0.02);
      });
    } catch (error) {
      console.debug("Sound is unavailable", error);
    }
  }

  function launchConfetti(count) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const colors = ["#176bff", "#67d7ff", "#ff5b8d", "#ff9f1c", "#ffd84d", "#2ecb77"];
    for (let index = 0; index < count; index += 1) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = colors[index % colors.length];
      piece.style.animationDelay = `${Math.random() * 0.35}s`;
      piece.style.setProperty("--drift", `${Math.random() * 220 - 110}px`);
      piece.style.setProperty("--spin", `${Math.random() * 900 - 450}deg`);
      elements.confettiLayer.appendChild(piece);
      window.setTimeout(() => piece.remove(), 2300);
    }
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2800);
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      "\"": "&quot;",
    })[character]);
  }

  function toCamel(value) {
    return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  }
})();
