const buttons = [
  {
    id: 1,
    name: "Accept the Frame",
    category: "foundation",
    summary: "Treat subjective reality as a usable filter, even if it is not the whole truth.",
    meaning:
      "Start by accepting that people do not live in pure objective reality. They live through perception, story, emotion, and framing. You may only be changing your impression of reality, but if that improves prediction and your life, that is still useful.",
    why:
      "This is the doorway into the whole framework. If you reject perception as a force, the rest of the buttons look silly. If you accept that framing shapes lived experience, the rest starts to make sense.",
    uses: [
      "Before reacting, ask: what frame am I in right now?",
      "When stuck, try a new frame instead of more force.",
      "Ask: what story am I telling myself that might not be the only story?"
    ],
    prompt:
      "Where in your life are you treating one frame as reality itself, when it may just be one interpretation?"
  },
  {
    id: 2,
    name: "Systems vs Goals",
    category: "foundation",
    summary: "Build repeatable ways of operating instead of chasing endpoints.",
    meaning:
      "Goals are targets. Systems are habits, processes, and routines that keep producing motion. Systems are what you do every day, whether or not motivation shows up.",
    why:
      "A goal can fail once and die. A system can survive bad days, drift, and setbacks. Systems make progress more likely and less emotional.",
    uses: [
      "Replace one goal with a weekly system.",
      "Turn 'get fit' into a fixed workout rhythm.",
      "Turn 'grow business' into daily outreach, shipping, and review blocks."
    ],
    prompt:
      "What goal in your life should be turned into a system this week?"
  },
  {
    id: 3,
    name: "Talent Stacking",
    category: "foundation",
    summary: "A smart mix of skills can multiply your usefulness.",
    meaning:
      "Instead of trying to be the best in the world at one thing, combine several useful abilities. Writing plus sales plus design plus teaching can create unusual range and advantage.",
    why:
      "The right stack opens doors because most people only look at single-skill excellence. A good mix can become rare and powerful.",
    uses: [
      "List your current skill stack and find the missing piece.",
      "Pick one skill that boosts your existing strengths.",
      "Learn a support skill, not just a prestige skill."
    ],
    prompt:
      "What one skill, if added this year, would multiply your current stack instead of merely adding to it?"
  },
  {
    id: 4,
    name: "Affirmations",
    category: "foundation",
    summary: "Repeated written or spoken intention can shape behavior, attention, and outcomes.",
    meaning:
      "Affirmations are repeated statements of what you want, who you are becoming, or what you are moving toward. The claim here is not that magic is proven. The claim is that repetition seems to direct your mind and behavior in useful ways.",
    why:
      "When used consistently, affirmations may alter what you notice, what you attempt, and how you carry yourself. That alone can change outcomes.",
    uses: [
      "Write one short identity-based affirmation.",
      "Read it in the morning and at night.",
      "Pair it with a real action so it does not stay fantasy."
    ],
    prompt:
      "What sentence would you repeat daily if you wanted to become more intentional about the life you are building?"
  },
  {
    id: 5,
    name: "Mating Intentions",
    category: "motivation",
    summary: "Much of human behavior is downstream of status display and mate signaling.",
    meaning:
      "People often present, perform, dress, signal, and compete in ways tied to attraction, status, and perceived value. Even when they do not say it that way, that drive sits under many actions.",
    why:
      "Seeing this clearly can explain a lot of behavior that otherwise feels random, vain, or irrational.",
    uses: [
      "Watch how status display changes speech and posture.",
      "Notice where your own choices are partly performance.",
      "Use this insight to understand people, not to become cynical."
    ],
    prompt:
      "What recent decision of yours may have been influenced by status display more than you first admitted?"
  },
  {
    id: 6,
    name: "Freedom",
    category: "motivation",
    summary: "People will trade a lot for autonomy, flexibility, and control.",
    meaning:
      "Freedom can mean time control, money, independence, choice, mobility, or not being trapped by another person’s schedule or permission structure.",
    why:
      "Freedom is one of the strongest motivators. It explains many career, money, and lifestyle decisions.",
    uses: [
      "Ask which option gives you more long-term freedom.",
      "Offer freedom when persuading or negotiating.",
      "Treat time ownership as a serious form of wealth."
    ],
    prompt:
      "What in your life currently costs you the most freedom?"
  },
  {
    id: 7,
    name: "Fear",
    category: "motivation",
    summary: "Fear moves people fast, though it is blunt and easy to misuse.",
    meaning:
      "Fear can get attention, change behavior, and stop harmful action. It is powerful, but it can also damage trust and shrink thinking.",
    why:
      "Understanding fear helps you spot when it is controlling you or being used on you.",
    uses: [
      "Notice whether your current decision is fear-driven.",
      "Use fear sparingly and only for genuine protection.",
      "Convert vague fear into a clear risk and a next step."
    ],
    prompt:
      "Where is fear helping you right now, and where is it distorting you?"
  },
  {
    id: 8,
    name: "Curiosity",
    category: "attention",
    summary: "Curiosity pulls attention forward by creating an open loop.",
    meaning:
      "People lean in when they sense there is something just beyond reach. Questions, suspense, mystery, and unfinished threads keep attention alive.",
    why:
      "Curiosity is useful in teaching, writing, sales, leadership, and self-motivation.",
    uses: [
      "Start explanations with a puzzle or tension.",
      "Use questions that make people need the answer.",
      "Design learning around discovery, not just dumping facts."
    ],
    prompt:
      "How could you make your next lesson, post, or pitch harder to ignore by making people curious?"
  },
  {
    id: 9,
    name: "Novelty",
    category: "attention",
    summary: "Newness helps attention and memory stick.",
    meaning:
      "The brain filters out sameness. A fresh angle, surprise, or unusual image can snap attention back and make a message more memorable.",
    why:
      "If you want people to remember something, make it stand apart from the background.",
    uses: [
      "Change format, sequence, or visual style.",
      "Use a surprising example instead of a generic one.",
      "Refresh stale routines with small twists."
    ],
    prompt:
      "Where in your work has sameness made people stop noticing?"
  },
  {
    id: 10,
    name: "Contrast",
    category: "attention",
    summary: "People understand choices better in comparison than in isolation.",
    meaning:
      "Contrast makes differences visible. Cheap next to expensive, better next to worse, current pain next to possible improvement.",
    why:
      "Contrast helps teaching, sales, writing, and decision-making because it makes meaning sharper.",
    uses: [
      "Show before and after.",
      "Compare weak vs strong versions.",
      "Frame options side by side instead of alone."
    ],
    prompt:
      "What idea of yours would become clearer if shown through contrast instead of explanation alone?"
  },
  {
    id: 11,
    name: "Repetition",
    category: "attention",
    summary: "Repeated signals carve stronger mental grooves.",
    meaning:
      "People usually do not learn or believe important things after hearing them once. Repetition strengthens memory and familiarity.",
    why:
      "If a message matters, it probably needs to return in multiple forms and moments.",
    uses: [
      "Repeat the core point in different wording.",
      "Revisit lessons instead of assuming one pass is enough.",
      "Build ritual and rhythm into important ideas."
    ],
    prompt:
      "What truth in your life do you know intellectually but have not repeated enough to actually live?"
  },
  {
    id: 12,
    name: "Simplicity",
    category: "attention",
    summary: "Simple ideas survive contact with the human brain better than tangled ones.",
    meaning:
      "The brain discards complexity when overloaded. Clean, short, clear messages travel farther and last longer.",
    why:
      "Simplicity helps your own thinking and makes your communication far more usable.",
    uses: [
      "Cut one layer of abstraction from your explanation.",
      "Turn one long idea into one plain sentence.",
      "Ask: would a tired person understand this?"
    ],
    prompt:
      "What are you making harder than it needs to be?"
  },
  {
    id: 13,
    name: "Fake Because",
    category: "persuasion",
    summary: "People often act on thin reasons, not fully logical ones.",
    meaning:
      "Humans do not require airtight logic to move. They accept social reasons, emotional reasons, convenient reasons, and post-hoc reasons all the time.",
    why:
      "This matters because waiting for perfect logic can make you less effective than someone who understands how people actually work.",
    uses: [
      "Do not confuse a reason with the real reason.",
      "Notice when you or others are using a story as justification.",
      "Aim for honest clarity, but stay aware that humans move on less than pure logic."
    ],
    prompt:
      "Where in your life are you pretending logic is the full driver when emotion or identity is doing most of the work?"
  },
  {
    id: 14,
    name: "Pacing and Leading",
    category: "persuasion",
    summary: "Meet people where they are first, then guide them.",
    meaning:
      "Pacing means matching someone’s current state enough that they feel understood. Leading means nudging them toward a new conclusion, action, or mood after rapport exists.",
    why:
      "People resist being dragged. They follow more easily when they feel seen first.",
    uses: [
      "Reflect someone’s concern before offering a solution.",
      "Match tone before shifting tone.",
      "Start from agreement before asking for change."
    ],
    prompt:
      "Who in your life are you trying to lead without first pacing?"
  },
  {
    id: 15,
    name: "Aspiration",
    category: "persuasion",
    summary: "Appeal to the better self people want to become.",
    meaning:
      "Aspiration persuades by calling someone upward. It says, be the kind of person who sees more, does better, rises higher.",
    why:
      "This is often stronger than fear because it recruits identity, pride, and meaning.",
    uses: [
      "Frame choices around the person someone wants to be.",
      "Use dignity instead of threat when possible.",
      "Call yourself upward, not just outward."
    ],
    prompt:
      "What would the better version of you do in the situation you are facing now?"
  },
  {
    id: 16,
    name: "Association",
    category: "persuasion",
    summary: "Things borrow emotional color from whatever they are paired with.",
    meaning:
      "When a person, idea, or product sits beside something pleasant, some of that feeling rubs off. The same happens with negative pairings.",
    why:
      "Association quietly shapes liking, trust, and mood.",
    uses: [
      "Pair your work with good design, good energy, and good experiences.",
      "Avoid putting important ideas next to ugly or draining contexts.",
      "Be careful what your name repeatedly appears beside."
    ],
    prompt:
      "What is your work currently associated with, and is that helping or hurting you?"
  },
  {
    id: 17,
    name: "Pattern Recognition",
    category: "cognition",
    summary: "Humans are pattern-detecting creatures, often faster than they are accurate.",
    meaning:
      "People rely on patterns to navigate life quickly. That helps with speed and consistency, but it also creates bias, lazy generalization, and false certainty.",
    why:
      "This explains both intuition and prejudice. It is one of our greatest tools and one of our biggest flaws.",
    uses: [
      "Ask whether your pattern is based on enough evidence.",
      "Use consistency to build trust.",
      "Challenge old stories built on tiny samples."
    ],
    prompt:
      "What pattern are you treating as truth even though your sample size is weak?"
  },
  {
    id: 18,
    name: "Visualization",
    category: "cognition",
    summary: "The brain is heavily driven by inner imagery and imagined outcomes.",
    meaning:
      "Visualization means mentally simulating scenes, outcomes, and identity. In this framework, it is one of the strongest buttons because what you can vividly imagine often shapes what you notice and how you act.",
    why:
      "Visualization can direct confidence, effort, attention, and emotional readiness.",
    uses: [
      "Rehearse a difficult conversation before having it.",
      "Picture the next right action clearly, not just the dream result.",
      "Use mental imagery with real-world execution."
    ],
    prompt:
      "What future are you rehearsing in your mind every day, whether on purpose or by accident?"
  }
];

const STORAGE_KEYS = {
  favorites: "reality-interface-favorites",
  notes: "reality-interface-notes",
  selected: "reality-interface-selected-id",
  todaySeed: "reality-interface-daily-seed"
};

const grid = document.getElementById("buttonGrid");
const detailEmpty = document.getElementById("detailEmpty");
const detailContent = document.getElementById("detailContent");
const detailCategory = document.getElementById("detailCategory");
const detailTitle = document.getElementById("detailTitle");
const detailSummary = document.getElementById("detailSummary");
const detailMeaning = document.getElementById("detailMeaning");
const detailWhy = document.getElementById("detailWhy");
const detailUseList = document.getElementById("detailUseList");
const detailPrompt = document.getElementById("detailPrompt");
const favoriteBtn = document.getElementById("favoriteBtn");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const randomBtn = document.getElementById("randomBtn");
const showFavoritesBtn = document.getElementById("showFavoritesBtn");
const showAllBtn = document.getElementById("showAllBtn");

const dailyFocusCard = document.getElementById("dailyFocusCard");

const journalTitle = document.getElementById("journalTitle");
const journalText = document.getElementById("journalText");
const saveJournalBtn = document.getElementById("saveJournalBtn");
const savedNotesList = document.getElementById("savedNotesList");
const clearNotesBtn = document.getElementById("clearNotesBtn");

let selectedId = loadSelectedId() || 18;
let favorites = loadFavorites();
let notes = loadNotes();
let favoritesOnly = false;

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function loadFavorites() {
  return loadFromStorage(STORAGE_KEYS.favorites, []);
}

function loadNotes() {
  return loadFromStorage(STORAGE_KEYS.notes, []);
}

function loadSelectedId() {
  return loadFromStorage(STORAGE_KEYS.selected, null);
}

function saveSelectedId(id) {
  saveToStorage(STORAGE_KEYS.selected, id);
}

function getButtonById(id) {
  return buttons.find((b) => b.id === id);
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter((favId) => favId !== id);
  } else {
    favorites.push(id);
  }
  saveToStorage(STORAGE_KEYS.favorites, favorites);
  renderGrid();
  renderDetail(selectedId);
}

function matchesSearch(button, term) {
  if (!term) return true;
  const haystack = [
    button.name,
    button.summary,
    button.meaning,
    button.why,
    button.prompt,
    button.category,
    ...button.uses
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(term.toLowerCase());
}

function getFilteredButtons() {
  const term = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  return buttons.filter((button) => {
    const categoryOk = category === "all" ? true : button.category === category;
    const searchOk = matchesSearch(button, term);
    const favoritesOk = favoritesOnly ? favorites.includes(button.id) : true;
    return categoryOk && searchOk && favoritesOk;
  });
}

function createCard(button) {
  const card = document.createElement("article");
  card.className = "button-card";
  if (button.id === selectedId) card.classList.add("active");

  card.innerHTML = `
    <div class="button-card-top">
      <div class="button-number">#${button.id}</div>
      <button class="star ${favorites.includes(button.id) ? "active" : ""}" aria-label="Favorite ${button.name}">
        ${favorites.includes(button.id) ? "★" : "☆"}
      </button>
    </div>
    <div>
      <div class="legend-chip ${button.category}">${capitalize(button.category)}</div>
      <h3 class="button-name">${button.name}</h3>
      <p class="button-summary">${button.summary}</p>
    </div>
  `;

  card.addEventListener("click", (e) => {
    if (e.target.classList.contains("star")) return;
    selectedId = button.id;
    saveSelectedId(selectedId);
    renderGrid();
    renderDetail(selectedId);
  });

  const starBtn = card.querySelector(".star");
  starBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(button.id);
  });

  return card;
}

function renderGrid() {
  const filtered = getFilteredButtons();
  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-notes">
        No buttons match your current search or filter.
      </div>
    `;
    return;
  }

  filtered.forEach((button) => {
    grid.appendChild(createCard(button));
  });
}

function renderDetail(id) {
  const button = getButtonById(id);
  if (!button) return;

  detailEmpty.classList.add("hidden");
  detailContent.classList.remove("hidden");

  detailCategory.className = `category-tag ${button.category}`;
  detailCategory.textContent = capitalize(button.category);
  detailTitle.textContent = `${button.id}. ${button.name}`;
  detailSummary.textContent = button.summary;
  detailMeaning.textContent = button.meaning;
  detailWhy.textContent = button.why;
  detailPrompt.textContent = button.prompt;

  favoriteBtn.textContent = favorites.includes(button.id) ? "★ Favorited" : "☆ Favorite";

  detailUseList.innerHTML = "";
  button.uses.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    detailUseList.appendChild(li);
  });

  favoriteBtn.onclick = () => toggleFavorite(button.id);
}

function renderDailyFocus() {
  const button = getDailyButton();
  dailyFocusCard.innerHTML = `
    <div class="legend-chip ${button.category}">${capitalize(button.category)}</div>
    <h3>${button.id}. ${button.name}</h3>
    <p>${button.summary}</p>
    <p><strong>Prompt:</strong> ${button.prompt}</p>
    <button class="btn primary" id="studyDailyBtn">Study This Button</button>
  `;

  const studyBtn = document.getElementById("studyDailyBtn");
  studyBtn.addEventListener("click", () => {
    selectedId = button.id;
    saveSelectedId(selectedId);
    renderGrid();
    renderDetail(selectedId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getDailyButton() {
  const todayKey = getTodayKey();
  const stored = loadFromStorage(STORAGE_KEYS.todaySeed, null);

  if (stored && stored.date === todayKey) {
    return getButtonById(stored.id) || buttons[0];
  }

  const dayNumber = parseInt(todayKey.replaceAll("-", ""), 10);
  const index = dayNumber % buttons.length;
  const chosen = buttons[index];

  saveToStorage(STORAGE_KEYS.todaySeed, {
    date: todayKey,
    id: chosen.id
  });

  return chosen;
}

function renderNotes() {
  savedNotesList.innerHTML = "";

  if (notes.length === 0) {
    savedNotesList.innerHTML = `<div class="empty-notes">No saved notes yet.</div>`;
    return;
  }

  notes
    .slice()
    .reverse()
    .forEach((note) => {
      const card = document.createElement("div");
      card.className = "note-card";

      card.innerHTML = `
        <h4>${escapeHtml(note.title || "Untitled note")}</h4>
        <div class="note-meta">${escapeHtml(note.date)}</div>
        <div class="note-body">${escapeHtml(note.text)}</div>
        <div class="note-actions">
          <button class="btn danger" data-id="${note.id}">Delete</button>
        </div>
      `;

      const deleteBtn = card.querySelector("button");
      deleteBtn.addEventListener("click", () => {
        notes = notes.filter((n) => n.id !== note.id);
        saveToStorage(STORAGE_KEYS.notes, notes);
        renderNotes();
      });

      savedNotesList.appendChild(card);
    });
}

function saveNote() {
  const title = journalTitle.value.trim();
  const text = journalText.value.trim();

  if (!text) {
    alert("Write something in the journal before saving.");
    return;
  }

  const note = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    title,
    text,
    date: new Date().toLocaleString()
  };

  notes.push(note);
  saveToStorage(STORAGE_KEYS.notes, notes);
  renderNotes();

  journalTitle.value = "";
  journalText.value = "";
}

function pickRandomButton() {
  const filtered = getFilteredButtons();
  const source = filtered.length > 0 ? filtered : buttons;
  const random = source[Math.floor(Math.random() * source.length)];

  selectedId = random.id;
  saveSelectedId(selectedId);
  renderGrid();
  renderDetail(selectedId);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

searchInput.addEventListener("input", renderGrid);
categoryFilter.addEventListener("change", renderGrid);
randomBtn.addEventListener("click", pickRandomButton);

showFavoritesBtn.addEventListener("click", () => {
  favoritesOnly = true;
  renderGrid();
});

showAllBtn.addEventListener("click", () => {
  favoritesOnly = false;
  renderGrid();
});

saveJournalBtn.addEventListener("click", saveNote);

clearNotesBtn.addEventListener("click", () => {
  const ok = confirm("Delete all saved notes?");
  if (!ok) return;
  notes = [];
  saveToStorage(STORAGE_KEYS.notes, notes);
  renderNotes();
});

renderGrid();
renderDetail(selectedId);
renderDailyFocus();
renderNotes();