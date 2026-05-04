import React, { useState, useEffect } from "react";
import { Plane, Plus, Eye, EyeOff, Check, X, Trash2, Shuffle, BookOpen, AlertCircle, Pencil, Save, Mail } from "lucide-react";
import { SEED_QUESTIONS } from "./seedQuestions.js";

const ENRICHED_SEEDS = SEED_QUESTIONS.map(q => ({
  ...q,
  status: "new",
  created: "2024-01-01"
}));

const STORAGE_KEY = "phenom100_quiz_v1";
const FEEDBACK_EMAIL = "quizfeedback@biter.com";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editQ, setEditQ] = useState({ category: "", question: "", answer: "" });
  const [newQ, setNewQ] = useState({ category: "", question: "", answer: "" });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      let stored = [];
      if (raw) {
        stored = JSON.parse(raw);
      }
      const storedIds = new Set(stored.map(q => q.id));
      const missingSeeds = ENRICHED_SEEDS.filter(q => !storedIds.has(q.id));
      const merged = [...stored, ...missingSeeds];
      if (missingSeeds.length > 0 || stored.length === 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      }
      setQuestions(merged);
    } catch (e) {
      console.error("load failed", e);
      setQuestions(ENRICHED_SEEDS);
    }
    setLoading(false);
  }, []);

  const persist = (updated) => {
    setQuestions(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("save failed", e);
    }
  };

  const categories = ["All", ...Array.from(new Set(questions.map(q => q.category)))];
  const byCategory = activeCategory === "All" ? questions : questions.filter(q => q.category === activeCategory);
  const filtered = statusFilter === "all"
    ? byCategory
    : byCategory.filter(q => q.status === statusFilter);
  const current = filtered[currentIdx];

  const knownCount = questions.filter(q => q.status === "known").length;
  const reviewCount = questions.filter(q => q.status === "review").length;

  const next = () => {
    setShowAnswer(false);
    setConfirmDelete(false);
    setEditing(false);
    setCurrentIdx(filtered.length === 0 ? 0 : (currentIdx + 1) % filtered.length);
  };

  const prev = () => {
    setShowAnswer(false);
    setConfirmDelete(false);
    setEditing(false);
    setCurrentIdx(filtered.length === 0 ? 0 : (currentIdx - 1 + filtered.length) % filtered.length);
  };

  const shuffleDeck = () => {
    setShowAnswer(false);
    setConfirmDelete(false);
    setEditing(false);
    if (filtered.length > 0) setCurrentIdx(Math.floor(Math.random() * filtered.length));
  };

  const setStatus = (status) => {
    if (!current) return;
    const updated = questions.map(q => q.id === current.id ? { ...q, status } : q);
    persist(updated);
    next();
  };

  const deleteCurrent = () => {
    if (!current) return;
    const updated = questions.filter(q => q.id !== current.id);
    persist(updated);
    setCurrentIdx(0);
    setShowAnswer(false);
    setConfirmDelete(false);
  };

  const startEdit = () => {
    if (!current) return;
    setEditQ({
      category: current.category,
      question: current.question,
      answer: current.answer
    });
    setEditing(true);
    setShowAnswer(true);
  };

  const saveEdit = () => {
    if (!current) return;
    if (!editQ.category.trim() || !editQ.question.trim() || !editQ.answer.trim()) return;
    const updated = questions.map(q => q.id === current.id ? {
      ...q,
      category: editQ.category.trim(),
      question: editQ.question.trim(),
      answer: editQ.answer.trim()
    } : q);
    persist(updated);
    setEditing(false);
  };

  const cancelEdit = () => {
    setEditing(false);
    setEditQ({ category: "", question: "", answer: "" });
  };

  const addQuestion = () => {
    if (!newQ.category.trim() || !newQ.question.trim() || !newQ.answer.trim()) return;
    const q = {
      id: "q-" + Date.now(),
      category: newQ.category.trim(),
      question: newQ.question.trim(),
      answer: newQ.answer.trim(),
      status: "new",
      created: new Date().toISOString().slice(0, 10)
    };
    const updated = [...questions, q];
    persist(updated);
    setNewQ({ category: "", question: "", answer: "" });
    setShowAddForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-amber-400 font-mono">
        Loading flight deck...
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-100 font-mono">
      <style>{`
        .display-font { font-family: 'Oswald', sans-serif; letter-spacing: 0.05em; }
        .glow-text { text-shadow: 0 0 12px rgba(251, 191, 36, 0.4); }
        .glow-cyan { text-shadow: 0 0 12px rgba(56, 189, 248, 0.5); }
      `}</style>

      <div className="min-h-screen">
        {/* Header */}
        <div className="border-b-2 border-amber-500/30 bg-slate-900/80 backdrop-blur">
          <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-amber-500/10 border border-amber-500/40 p-2.5 rounded">
                <Plane className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h1 className="display-font text-2xl font-bold text-amber-400 glow-text">PHENOM 100 CHECKRIDE PREP</h1>
                <p className="text-xs text-slate-400 mt-0.5">FREE FLASHCARD STUDY QUIZ // ANNUAL TYPE RATING</p>
              </div>
            </div>
            <div className="flex gap-3 text-xs">
              <button
                onClick={() => { setStatusFilter("all"); setCurrentIdx(0); setShowAnswer(false); }}
                className={`px-3 py-2 border rounded transition text-left ${
                  statusFilter === "all"
                    ? "border-cyan-400 bg-cyan-500/10 ring-1 ring-cyan-400"
                    : "border-slate-700 bg-slate-900 hover:border-cyan-500/50"
                }`}
                title="Show all questions"
              >
                <div className="text-slate-500">TOTAL</div>
                <div className="text-cyan-400 font-bold text-lg glow-cyan">{questions.length}</div>
              </button>
              <button
                onClick={() => { setStatusFilter("known"); setCurrentIdx(0); setShowAnswer(false); }}
                className={`px-3 py-2 border rounded transition text-left ${
                  statusFilter === "known"
                    ? "border-emerald-400 bg-emerald-500/20 ring-1 ring-emerald-400"
                    : "border-emerald-700/50 bg-emerald-950/30 hover:border-emerald-500"
                }`}
                title="Study only cards marked Got It"
              >
                <div className="text-emerald-600">KNOWN</div>
                <div className="text-emerald-400 font-bold text-lg">{knownCount}</div>
              </button>
              <button
                onClick={() => { setStatusFilter("review"); setCurrentIdx(0); setShowAnswer(false); }}
                className={`px-3 py-2 border rounded transition text-left ${
                  statusFilter === "review"
                    ? "border-amber-400 bg-amber-500/20 ring-1 ring-amber-400"
                    : "border-amber-700/50 bg-amber-950/30 hover:border-amber-500"
                }`}
                title="Study only cards marked Need Review"
              >
                <div className="text-amber-600">REVIEW</div>
                <div className="text-amber-400 font-bold text-lg">{reviewCount}</div>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-6">
          {/* Category Tabs */}
          <div className="flex gap-2 flex-wrap mb-6">
            {categories.map(cat => {
              const count = cat === "All" ? questions.length : questions.filter(q => q.category === cat).length;
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setCurrentIdx(0); setShowAnswer(false); }}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider border transition rounded ${
                    active
                      ? "bg-amber-500 border-amber-500 text-slate-950 font-bold"
                      : "border-slate-700 text-slate-400 hover:border-amber-500/50 hover:text-amber-400"
                  }`}
                >
                  {cat} <span className="opacity-60">[{count}]</span>
                </button>
              );
            })}
          </div>

          {/* Flashcard */}
          {filtered.length === 0 ? (
            <div className="border-2 border-dashed border-slate-700 rounded p-12 text-center text-slate-500">
              <AlertCircle className="w-8 h-8 mx-auto mb-3 text-slate-600" />
              {statusFilter === "known" && "No cards marked Known yet. Hit \"Got It\" on cards as you nail them."}
              {statusFilter === "review" && "No cards in your review pile. Hit \"Need Review\" on cards you want to revisit."}
              {statusFilter === "all" && "No questions in this category yet."}
            </div>
          ) : current && (
            <div className="border-2 border-amber-500/40 bg-slate-900/60 rounded-lg overflow-hidden">
              {/* Card header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-700 bg-slate-900">
                <div className="flex items-center gap-3 text-xs flex-wrap">
                  <span className="text-slate-500">CARD</span>
                  <span className="text-amber-400 font-bold">{currentIdx + 1} / {filtered.length}</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-cyan-400 uppercase tracking-wider">{current.category}</span>
                  {current.status === "known" && <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-[10px] uppercase">Known</span>}
                  {current.status === "review" && <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded text-[10px] uppercase">Review</span>}
                </div>
                <div className={`flex items-center gap-3 ${confirmDelete || editing ? "hidden" : ""}`}>
                  <button
                    onClick={startEdit}
                    className="text-slate-600 hover:text-cyan-400 transition"
                    title="Edit this card"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setConfirmDelete(true)}
                    className="text-slate-600 hover:text-red-400 transition"
                    title="Delete this card"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                {confirmDelete && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-red-400 uppercase tracking-wider">Delete?</span>
                    <button
                      onClick={deleteCurrent}
                      className="px-2 py-1 bg-red-600 hover:bg-red-500 text-white text-[10px] uppercase tracking-wider rounded font-bold"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setConfirmDelete(false)}
                      className="px-2 py-1 border border-slate-700 hover:border-slate-500 text-slate-400 text-[10px] uppercase tracking-wider rounded"
                    >
                      Cancel
                    </button>
                  </div>
                )}
                {editing && (
                  <span className="text-xs text-cyan-400 uppercase tracking-wider">Editing...</span>
                )}
              </div>

              {/* Question / Edit Form */}
              {editing ? (
                <div className="p-6 md:p-8 space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-cyan-500 mb-2 block">Category</label>
                    <input
                      list="edit-cat-list"
                      value={editQ.category}
                      onChange={(e) => setEditQ({ ...editQ, category: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 outline-none rounded text-sm"
                    />
                    <datalist id="edit-cat-list">
                      {categories.filter(c => c !== "All").map(c => <option key={c} value={c} />)}
                    </datalist>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-cyan-500 mb-2 block">Question</label>
                    <textarea
                      value={editQ.question}
                      onChange={(e) => setEditQ({ ...editQ, question: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 outline-none rounded text-base resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-cyan-500 mb-2 block">Answer</label>
                    <textarea
                      value={editQ.answer}
                      onChange={(e) => setEditQ({ ...editQ, answer: e.target.value })}
                      rows={10}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 outline-none rounded text-sm resize-none whitespace-pre-wrap font-mono"
                    />
                  </div>
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={cancelEdit}
                      className="px-4 py-2 border border-slate-700 text-slate-400 hover:text-slate-200 text-xs uppercase tracking-wider transition rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={saveEdit}
                      className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition rounded flex items-center gap-1.5"
                    >
                      <Save className="w-3.5 h-3.5" />
                      Save Changes
                    </button>
                  </div>
                </div>
              ) : (
              <div className="p-6 md:p-8">
                <div className="text-xs uppercase tracking-widest text-amber-500 mb-3">Question</div>
                <div className="display-font text-2xl md:text-3xl text-slate-100 leading-snug mb-8">
                  {current.question}
                </div>

                {!showAnswer ? (
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="w-full py-4 border-2 border-amber-500 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 rounded"
                  >
                    <Eye className="w-5 h-5" />
                    Reveal Answer
                  </button>
                ) : (
                  <div>
                    <div className="text-xs uppercase tracking-widest text-emerald-500 mb-3">Answer</div>
                    <div className="bg-slate-950/80 border-l-4 border-emerald-500 p-5 rounded-r mb-5 whitespace-pre-wrap text-slate-200 leading-relaxed">
                      {current.answer}
                    </div>
                    <button
                      onClick={() => setShowAnswer(false)}
                      className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1.5 mb-4"
                    >
                      <EyeOff className="w-3.5 h-3.5" />
                      Hide answer
                    </button>
                  </div>
                )}
              </div>
              )}

              {/* Card footer / nav */}
              <div className="border-t border-slate-700 bg-slate-900 px-5 py-4 flex items-center justify-between flex-wrap gap-3">
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={prev}
                    className="px-4 py-2 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 text-xs uppercase tracking-wider transition rounded"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={next}
                    className="px-4 py-2 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 text-xs uppercase tracking-wider transition rounded"
                  >
                    Next →
                  </button>
                  <button
                    onClick={shuffleDeck}
                    className="px-4 py-2 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 text-xs uppercase tracking-wider transition rounded flex items-center gap-1.5"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                    Shuffle
                  </button>
                </div>
                {showAnswer && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setStatus("review")}
                      className="px-4 py-2 border border-amber-700/60 bg-amber-950/30 hover:bg-amber-900/40 text-amber-400 text-xs uppercase tracking-wider transition rounded flex items-center gap-1.5"
                    >
                      <X className="w-3.5 h-3.5" />
                      Need Review
                    </button>
                    <button
                      onClick={() => setStatus("known")}
                      className="px-4 py-2 border border-emerald-700/60 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-400 text-xs uppercase tracking-wider transition rounded flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Got It
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Add question */}
          <div className="mt-6">
            {!showAddForm ? (
              <button
                onClick={() => setShowAddForm(true)}
                className="w-full py-4 border-2 border-dashed border-slate-700 hover:border-amber-500 text-slate-500 hover:text-amber-400 text-sm uppercase tracking-wider transition flex items-center justify-center gap-2 rounded"
              >
                <Plus className="w-4 h-4" />
                Add Your Own Question
              </button>
            ) : (
              <div className="border-2 border-cyan-500/40 bg-slate-900/60 rounded p-5">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <h3 className="display-font text-cyan-400 uppercase tracking-wider">New Question</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-slate-500 uppercase tracking-wider">Category</label>
                    <input
                      list="cat-list"
                      value={newQ.category}
                      onChange={(e) => setNewQ({ ...newQ, category: e.target.value })}
                      placeholder="e.g. Electrical, Hydraulic, Limits"
                      className="w-full mt-1 px-3 py-2 bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 outline-none rounded text-sm"
                    />
                    <datalist id="cat-list">
                      {categories.filter(c => c !== "All").map(c => <option key={c} value={c} />)}
                    </datalist>
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 uppercase tracking-wider">Question</label>
                    <textarea
                      value={newQ.question}
                      onChange={(e) => setNewQ({ ...newQ, question: e.target.value })}
                      rows={2}
                      className="w-full mt-1 px-3 py-2 bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 outline-none rounded text-sm resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 uppercase tracking-wider">Answer</label>
                    <textarea
                      value={newQ.answer}
                      onChange={(e) => setNewQ({ ...newQ, answer: e.target.value })}
                      rows={5}
                      className="w-full mt-1 px-3 py-2 bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 outline-none rounded text-sm resize-none"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Your custom questions are saved in your browser only. Clearing your browser data will remove them.
                  </p>
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => { setShowAddForm(false); setNewQ({ category: "", question: "", answer: "" }); }}
                      className="px-4 py-2 border border-slate-700 text-slate-400 hover:text-slate-200 text-xs uppercase tracking-wider transition rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={addQuestion}
                      className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition rounded"
                    >
                      Save Question
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center mt-10 pb-6 space-y-3">
            <div className="text-[11px] text-slate-600 uppercase tracking-widest">
              Fly the airplane // Tom Norton
            </div>
            <a
              href={`mailto:${FEEDBACK_EMAIL}?subject=Phenom%20100%20Quiz%20Feedback`}
              className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 hover:text-amber-400 transition uppercase tracking-wider"
            >
              <Mail className="w-3 h-3" />
              Send Feedback
            </a>
            <div className="text-[10px] text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Free study tool. Not a substitute for the POH, AFM, QRH, or your training. Always verify against current official documentation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
