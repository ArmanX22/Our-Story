/**
 * ============================================================================
 * OUR STORY ❤️ — A CINEMATIC ROMANTIC STORYBOOK JOURNEY
 * DEDICATED TO: Arman & Tulip
 * ============================================================================
 */

/* ============================================================================
   1. CENTRAL CONFIGURATION
   ============================================================================ */
const CONFIG = {
    coupleName1: "Arman",
    coupleName2: "Tulip",
    anniversaryDate: "2026-09-30T00:00:00",

    profilePhoto: "assets/images/WhatsApp Image 2026-09-29 at 7.28.59 PM.jpeg",
    backgroundMusic: "assets/music/song.mp3?v=20260911_05",

    loveLetter: `My Dearest Tulip,

Thank you for coming into my life and turning my whole world into a beautiful dream.

Thank you for every gentle smile,
every late-night conversation,
and every little moment that made my heart race.

You made ordinary days feel magical.

No matter where our journey leads,
I promise to hold your hand, make you laugh,
and choose you more with every passing second.`,

    reasons: [
        "Your breathtaking smile that brightens my whole day, Tulip.",
        "The gentle kindness and warmth inside your heart.",
        "The way your eyes sparkle whenever you laugh.",
        "Even your cute little anger and dramatic moments!",
        "You make every place feel like home when I'm with you.",
        "Because loving you, Tulip, is the easiest and best thing I have ever done."
    ],

    futurePlans: [
        "More Adventures Together",
        "Late Night Long Drives & Coffee",
        "A Million Laughs with Tulip",
        "Endless Cute Pictures & Memories",
        "Achieving Our Dreams Side by Side",
        "Growing Old and Loving You Forever"
    ],

    memories: [
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.28.59 PM.jpeg",
            date: "Green Serenity",
            title: "সবুজ মাঠ আর কানের ফুল 🌼🌾",
            location: "প্রকৃতির কোলে",
            description: "খোলা আকাশের নিচে সবুজ ঘাসের বুকে বসে থাকা। টিউলিপের কানে গুঁজে দেওয়া সেই হলুদ ফুলটি যেন প্রকৃতির সব রূপ এক পলকে এনে দিয়েছিল।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.00 PM.jpeg",
            date: "Breeze & Smiles",
            title: "বাতাসে উড়ো চুল আর মিষ্টি হাসি 🍃✨",
            location: "উন্মুক্ত আকাশ",
            description: "বাতাসের দোলায় উড়ে যাওয়া তোমার চুল আর ঠোঁটের কোণে লেগে থাকা সেই মিষ্টি অমলিন হাসি—এ যেন পৃথিবীর সবচেয়ে শান্তির দৃশ্য।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.00 PM (1).jpeg",
            date: "Late Night Call",
            title: "দূরত্বের মাঝেও ভিডিও কল 📱🌙",
            location: "পর্দার ওপারে",
            description: "রাত যত গভীর হতো, স্ক্রিনের ওপারে তোমার ক্লান্ত কিন্তু ভালোবাসায় ভরা মুখটা দেখে সারাদিনের ক্লান্তি নিমেষেই হারিয়ে যেত।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.00 PM (2).jpeg",
            date: "Cozy Warmth",
            title: "একান্ত আপন কিছু মুহূর্ত 🛋️❤️",
            location: "আমাদের নিজস্ব ভুবন",
            description: "পাশাপাশি শুয়ে থাকা, কোনো তাড়া নেই, কোনো ক্লান্তি নেই—শুধু দুজন দুজনের সান্নিধ্যে পৃথিবীর সবচেয়ে নিরাপদ আশ্রয় খুঁজে পাওয়া।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.00 PM (3).jpeg",
            date: "Festive Vibes",
            title: "শাড়ি আর রুপালি ঝুমকা 🥻🌸",
            location: "সবুজ ছায়াতলে",
            description: "গাঢ় রঙের শাড়ি আর কানের দুল দুলিয়ে যখন আমার পাশে এসে দাঁড়ালে, সেদিন যেন পুরো প্রকৃতি তোমাকে দেখে ঈর্ষা করছিল।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.01 PM.jpeg",
            date: "Bridge of Love",
            title: "রঙিন ঝুলন্ত ব্রিজে হাত ধরে 🌉🌿",
            location: "ঝুলন্ত ব্রিজ",
            description: "নিচে বয়ে চলা জল আর দোলায়মান রঙিন ব্রিজে তোমার হাত শক্ত করে ধরে হাঁটা—সেদিন মনে হয়েছিল জীবনের পথটাও এভাবে একসাথে পার হব।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.01 PM (1).jpeg",
            date: "Cute Outing",
            title: "নীল চুড়ি আর খুনসুটি 💙☕",
            location: "ক্যাফে কর্নার",
            description: "হাতে পরা নীল কাচের রিনিঝিনি চুড়ি আর গালে হাত দিয়ে তাকিয়ে থাকা—তোমার এই মিষ্টি চাহনিতেই আরমান বারবার ধরাশায়ী।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.01 PM (2).jpeg",
            date: "Campus Days",
            title: "ক্যাম্পাসের ছায়াতলে প্রথম হাঁটা 🏫🍃",
            location: "BAUST প্রাঙ্গণ",
            description: "ক্যাম্পাসের পরিচিত গাছঘেরা পিচঢালা পথ, ক্লাস ফাঁকি দিয়ে চুপিচুপি দুজনার একসঙ্গে হেঁটে যাওয়া সেই সোনালী দিনগুলো।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.02 PM.jpeg",
            date: "Sunlit Glow",
            title: "রোদের ঝিলিক আর কপালে কালো টিপ ☀️🖤",
            location: "বৃক্ষছায়ায়",
            description: "গাছের পাতার ফাঁক দিয়ে ঠিকরে আসা নরম রোদ তোমার মুখে পড়ছিল, আর কপালে থাকা ছোট্ট কালো টিপটা মন কেড়ে নিচ্ছিল বারবার।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.02 PM (1).jpeg",
            date: "Pure Adoration",
            title: "চোখে চোখ রেখে অপলক তাকানো 👁️💫",
            location: "অনুভবের সীমানা",
            description: "আমার দিকে তোমার সেই মায়াবী চোখে তাকিয়ে থাকা—যেখানে কোনো মিথ্যে নেই, আছে কেবল বুকভরা অকৃত্রিম ভালোবাসা।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.02 PM (2).jpeg",
            date: "Peaceful Rest",
            title: "কাঁধে মাথা রেখে পরম শান্তি 🫂🤍",
            location: "আমার কাঁধ, তোমার আশ্রয়",
            description: "আমার কাঁধে যখন তোমার মাথাটি এলিয়ে দিলে, মনে হলো পৃথিবীর সব ঝড় থেমে গেছে। এই নির্ভরতার চেয়ে বড় প্রাপ্তি আর কী হতে পারে!"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.02 PM (3).jpeg",
            date: "University Life",
            title: "আমাদের ভালোবাসার ক্যাম্পাস 🎓🏛️",
            location: "BAUST মেইন ক্যাম্পাস",
            description: "যে ক্যাম্পাসে আমাদের স্বপ্নের শুরু, যেখানে প্রতিটি ইট আর করিডোর সাক্ষী হয়ে আছে আমাদের হাজারো না-বলা কথার।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.03 PM.jpeg",
            date: "Mirror Selfie",
            title: "নীল শাড়িতে আয়নার সেলফি 🪞💙",
            location: "করিডোরের আয়না",
            description: "নীল শাড়ি আর নীল কাচের চুড়িতে তুমি সেদিন অপরূপা। আয়নার ফ্রেমে ধরা পড়া আমাদের এই সাজ চিরকাল অমলিন হয়ে থাকবে।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.03 PM (1).jpeg",
            date: "Winter Walk",
            title: "শীতের সকালে চাদর জড়িয়ে 🧣❄️",
            location: "কুয়াশাঘেরা পথ",
            description: "হালকা শীতের আমেজে চাদর মুড়িয়ে পাশে বসে থাকা। কনকনে ঠান্ডাতেও তোমার মিষ্টি উপস্থিতিতে চারপাশে এক উষ্ণ অনুভূতি ছড়াত।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.04 PM.jpeg",
            date: "Golden Saree",
            title: "হলুদ শাড়িতে বসন্তের ছোঁয়া 💛🎋",
            location: "বাঁশবাগানের ধারে",
            description: "হলুদ শাড়িতে তোমাকে দেখে মনে হয়েছিল বসন্ত বুঝি নিজেই ধরা দিয়েছে। আমার হাতটা ধরে তোমার সেই মায়াবী করে দাঁড়িয়ে থাকা।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.04 PM (1).jpeg",
            date: "Warm Embrace",
            title: "গাঢ় আলিঙ্গনে ভালোবাসার উষ্ণতা 🤗🌲",
            location: "বনের নিস্তব্ধতায়",
            description: "বুকের ভেতর জড়িয়ে ধরার সেই মুহূর্ত—যেখানে সব শব্দ স্তব্ধ হয়ে শুধু দুটি হৃদস্পন্দন এক হয়ে বাজছিল।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.04 PM (2).jpeg",
            date: "Cheek to Cheek",
            title: "গা ঘেঁষে দাঁড়ানো মিষ্টি খুনসুটি 🥰🌸",
            location: "মিষ্টি বিকেল",
            description: "গোলাপি স্কার্ফে তোমার নিষ্পাপ মুখ আর আমার দুষ্টুমি ভরা চাহনি—এই ছোট ছোট স্মৃতিগুলোই আমাদের ভালোবাসার শ্রেষ্ঠ সম্পদ।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.04 PM (3).jpeg",
            date: "Pure Smiles",
            title: "তোমার ওই প্রাণখোলা অমলিন হাসি 😁✨",
            location: "হাসির ঝিলিক",
            description: "যখনই তুমি এভাবে প্রাণখুলে হাসো, মনে হয় পুরো পৃথিবীটাই উজ্জ্বল হয়ে উঠেছে। এই হাসি যেন কোনোদিন ম্লান না হয়।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.05 PM.jpeg",
            date: "Sweet Kiss",
            title: "গালে আলতো ভালোবাসার পরশ 💋💕",
            location: "অনুভবের গভীরে",
            description: "গালে আলতো চুমুর স্পর্শে তোমার লজ্জা মাখা মিষ্টি হাসি। ভালোবাসার এই নীরব প্রকাশ চিরকাল হৃদয়ে অমূল্য রতন হয়ে থাকবে।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.06 PM.jpeg",
            date: "Night Lights",
            title: "রাতের আলোয় কনসার্টের মাঠে 🌃🎶",
            location: "আলো ঝলমলে মাঠ",
            description: "হালকা শীতের রাতে ফ্লাডলাইটের আলোয় খোলা মাঠে তোমার সাথে সময় কাটানো। চারপাশের কোলাহল ভুলে তখন কেবল তুমি আর আমি।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.06 PM (1).jpeg",
            date: "Silly Moments",
            title: "উল্টো চোখে দুষ্টুমি আর ভালোবাসা 🤪💖",
            location: "মজার মুহূর্ত",
            description: "মাথা কাত করে তোমার সেই চঞ্চল খুনসুটি আর হাসিমুখ। তোমার এই পাগলামি আর দুষ্টুমিগুলোই আমার প্রতিদিনের হাসির কারণ।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.06 PM (2).jpeg",
            date: "Airport Dreams",
            title: "এয়ারপোর্টের চত্বরে নতুন স্বপ্নের শুরু ✈️🏢",
            location: "ঢাকা এয়ারপোর্ট",
            description: "এয়ারপোর্টের সামনে দাঁড়িয়ে একসঙ্গে দূর দেশে পাড়ি জমানোর স্বপ্ন দেখা। হাত ধরে পুরো পৃথিবী ঘুরে দেখার অঙ্গীকার।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.07 PM.jpeg",
            date: "The Red Rose",
            title: "হাতে হাত আর রক্তিম গোলাপ 🌹💍",
            location: "ভালোবাসার প্রতিশ্রুতি",
            description: "তোমার হাতে আমার হাত আর মাঝে রক্তিম তাজা গোলাপ। এই পাপড়ির মতোই সতেজ আর পবিত্র আমাদের ভালোবাসার চিরন্তন বন্ধন।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.07 PM (1).jpeg",
            date: "Mehendi Hands",
            title: "মেহেদি রাঙা হাত আর নির্ভরতা 🌿💅",
            location: "ইটের দেয়ালের পাশে",
            description: "মেহেদির রঙে রাঙানো তোমার হাতটি যখন আমার কাঁধ স্পর্শ করেছিল, মনে হয়েছিল দুটি জীবনের ভাগ্যরেখা এক বিন্দুতে মিলে গেছে।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.07 PM (2).jpeg",
            date: "Candid Laughter",
            title: "তোমার লাজুক হাসি আর মধুর চাহনি 🙈💚",
            location: "গাছের ছায়ায়",
            description: "গালে হাত দিয়ে তোমার ওই লাজুক হাসিমুখ আর আড়চোখে তাকানো—আমার দিকে তাকিয়ে হাসা এই মুখটিই আমার বেঁচে থাকার সেরা অনুপ্রেরণা।"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.07 PM (3).jpeg",
            date: "Childhood Days",
            title: "শৈশবের সেই নিষ্পাপ দিনগুলো 👶👧",
            location: "স্মৃতির উৎস",
            description: "ছোট্ট বেলার সেই নিষ্পাপ দিনগুলোতে কে জানত, বিধাতা সেই তখনই আমাদের ভাগ্য এক সুতোয় বেঁধে রেখেছিলেন!"
        },
        {
            image: "assets/images/WhatsApp Image 2026-09-29 at 7.29.08 PM.jpeg",
            date: "Little Princess",
            title: "গোলাপি ফ্রকে ছোট্ট পরী 👗🎀",
            location: "শৈশবের অ্যালবাম",
            description: "গোলাপি ফ্রক পরা ছোট্ট রাজকন্যা টিউলিপ—আজ এত বছর পর সে আমার জীবনের সম্রাজ্ঞী ও ভালোবাসার একমাত্র ঠিকানা।"
        }
    ],

    timeline: [
        {
            date: "01",
            title: "শৈশবের সেই প্রথম দেখা",
            description: "ছোট্ট বেলার সেই নিষ্পাপ স্মৃতি, যেখানে অজান্তেই বাঁধা পড়েছিল দুটি জীবনের সুতো।"
        },
        {
            date: "02",
            title: "ক্যাম্পাসের প্রথম আলাপ",
            description: "BAUST ক্যাম্পাসের গাছঘেরা পথে প্রথম কথা বলা এবং মনের অজান্তেই প্রেমে পড়া।"
        },
        {
            date: "03",
            title: "পাশাপাশি প্রথম ছবি",
            description: "একটি ছবি যা ক্যামেরার ফ্রেমে বন্দী করেছিল আমাদের না-বলা ভালোবাসার হাজারো অনুভূতি।"
        },
        {
            date: "04",
            title: "আমাদের ২ বছর অ্যানিভার্সারি",
            description: "৩০ সেপ্টেম্বর — দুটি বছরের অনন্ত ভালোবাসা, মিষ্টি মান-অভিমান আর আজীবন পাশে থাকার অঙ্গীকার।"
        },
        {
            date: "05",
            title: "অনন্তকালের পথচলা",
            description: "আজ, কাল এবং চিরকাল — প্রতিটি পলকে তোমাকেই নতুন করে বেছে নেওয়া।"
        }
    ]
};

/* ============================================================================
   2. AUTHENTICATION CONFIGURATION (STRICTLY for Tulip)
   ============================================================================ */
const LOGIN = {
    username: "tulip", // Strict username
    validPasswords: ["forever", "Arman", "love", "1234", "tulip"]
};

/* Global Application State */
const APP_STATE = {
    isLoggedIn: false,
    audioPlaying: false,
    audioInitialized: false,
    currentReasonIndex: 0,
    isLetterOpen: false,
    gameScore: 0,
    gameTarget: 10,
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
};

/* In-memory session fallback */
const SessionStorageHelper = {
    get: (key) => {
        try {
            return sessionStorage.getItem(key);
        } catch (e) {
            return window["__session_" + key] || null;
        }
    },
    set: (key, val) => {
        try {
            sessionStorage.setItem(key, val);
        } catch (e) {
            window["__session_" + key] = val;
        }
    }
};

/* ============================================================================
   3. AUDIO ENGINE (HTML5 Audio + Web Audio Synth Fallback)
   ============================================================================ */
class RomanticAudioEngine {
    constructor() {
        this.audioEl = document.getElementById("bg-music");
        this.toggleBtn = document.getElementById("audio-toggle");
        this.statusText = document.getElementById("audio-status-text");
        this.volumeSlider = document.getElementById("volume-slider");
        this.isPlaying = false;
        this.synthCtx = null;
        this.synthMasterGain = null;
        this.synthTimer = null;
        this.useSynth = false;
        this.lastVolume = 0.75;
        this.audioFailed = false;

        this.initEvents();
    }

    initEvents() {
        const trigger = (e) => {
            if (e && e.preventDefault) e.preventDefault();
            // Guard against the duplicated click+touch events firing on mobile
            const now = Date.now();
            if (now - (this._lastToggleAt || 0) < 350) {
                this._lastToggleAt = now;
                return;
            }
            this._lastToggleAt = now;
            this.togglePlay();
        };

        if (this.toggleBtn) {
            // 'click' fires on both desktop and mobile; touch will also emit a
            // synthetic click, so no separate touchend handler is needed.
            this.toggleBtn.addEventListener("click", trigger);
        }
        if (this.volumeSlider) {
            this.volumeSlider.addEventListener("input", (e) => {
                const vol = parseFloat(e.target.value);
                this.lastVolume = vol;
                if (this.audioEl) this.audioEl.volume = vol;
                if (this.synthMasterGain) this.synthMasterGain.gain.setTargetAtTime(vol * 0.6, this.synthCtx.currentTime, 0.05);
            });
        }
        if (this.audioEl) {
            this.audioEl.volume = this.lastVolume;
            // Resume the element (helps wake iOS audio session)
            this.audioEl.addEventListener("play", () => {
                if (this.audioEl) this.audioEl.volume = this.lastVolume;
            });
            this.audioEl.addEventListener("error", () => {
                console.log("Audio file unavailable on this device; using Web Audio Synthesizer.");
                this.audioFailed = true;
            });
            // If media metadata loads successfully, confirm the file is usable
            this.audioEl.addEventListener("loadedmetadata", () => {
                this.audioFailed = false;
            });
        }

        // Warm up the AudioContext on the first user gesture so it is alive for the synth fallback
        const unlock = () => {
            if (this.synthCtx && this.synthCtx.state === "suspended") {
                this.synthCtx.resume();
            }
        };
        document.addEventListener("pointerdown", unlock, { once: false });
        document.addEventListener("touchstart", unlock, { once: false, passive: true });
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        if (this.isPlaying) return;

        const tryPreload = () => new Promise((resolve) => {
            // Give the element a moment to surface a load error before committing to HTML5 path
            if (!this.audioEl || this.audioFailed) return resolve(false);
            const check = () => {
                if (this.audioFailed) return resolve(false);
                if (this.audioEl.readyState >= 2 || this.audioEl.duration > 0) return resolve(true);
                resolve(false);
            };
            if (this.audioEl.error) { this.audioFailed = true; return resolve(false); }
            check();
        });

        if (this.audioEl && !this.useSynth) {
            let playResult;
            try {
                playResult = this.audioEl.play();
            } catch (err) {
                playResult = Promise.reject(err);
            }

            if (playResult !== undefined && typeof playResult.then === "function") {
                playResult.then(() => {
                    // Element should actually be unpaused; if not, treat as carrier failure
                    if (this.audioEl && this.audioEl.paused) {
                        this.useSynth = true;
                        this.startSynth();
                    }
                    this.onPlaySuccess();
                }).catch(() => {
                    this.utilizeSynthFallback();
                });
            } else {
                // Some browsers return undefined from play(); verify after a tick
                tryPreload().then((ok) => {
                    if (ok && this.audioEl && !this.audioEl.paused) {
                        this.onPlaySuccess();
                    } else {
                        this.useSynth = true;
                        this.startSynth();
                        this.onPlaySuccess();
                    }
                });
            }
        } else {
            this.useSynth = true;
            this.startSynth();
            this.onPlaySuccess();
        }
    }

    utilizeSynthFallback() {
        this.useSynth = true;
        this.startSynth();
        this.onPlaySuccess();
    }

    pause() {
        this.isPlaying = false;
        APP_STATE.audioPlaying = false;
        if (this.audioEl) this.audioEl.pause();
        if (this.synthTimer) clearInterval(this.synthTimer);
        this.updateUI();
    }

    onPlaySuccess() {
        this.isPlaying = true;
        APP_STATE.audioPlaying = true;
        this.updateUI();
    }

    updateUI() {
        const icon = this.toggleBtn ? this.toggleBtn.querySelector(".audio-icon") : null;
        if (this.isPlaying) {
            if (icon) {
                icon.classList.remove("paused-icon");
                icon.classList.add("playing-icon");
            }
            if (this.statusText) this.statusText.textContent = "Music On";
        } else {
            if (icon) {
                icon.classList.remove("playing-icon");
                icon.classList.add("paused-icon");
            }
            if (this.statusText) this.statusText.textContent = "Play Music";
        }
    }

    fadeVolume(targetVol, duration = 1500) {
        if (!this.audioEl && !this.synthMasterGain) return;
        const startVol = this.audioEl ? this.audioEl.volume : (this.synthMasterGain ? this.synthMasterGain.gain.value : 0.5);
        const steps = 30;
        const stepTime = duration / steps;
        const volStep = (targetVol - startVol) / steps;
        let curStep = 0;

        const interval = setInterval(() => {
            curStep++;
            const newVol = Math.max(0, Math.min(1, startVol + volStep * curStep));
            if (this.audioEl) this.audioEl.volume = newVol;
            if (this.synthMasterGain) this.synthMasterGain.gain.value = newVol * 0.65;
            if (curStep >= steps) clearInterval(interval);
        }, stepTime);
    }

    playChime(freq = 523.25) { // High C chime
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        try {
            const ctx = new AudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(0.01, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.85);
        } catch (e) {
            // Audio context not allowed or restricted
        }
    }

    startSynth() {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        if (!this.synthCtx) {
            this.synthCtx = new AudioCtx();
            this.synthMasterGain = this.synthCtx.createGain();
            // Higher, clearly audible synth master volume for devices where the
            // HTML5 audio file cannot play (common on mobile browsers).
            this.synthMasterGain.gain.value = (this.volumeSlider ? parseFloat(this.volumeSlider.value) : 0.75) * 0.65;
            this.synthMasterGain.connect(this.synthCtx.destination);
        }

        if (this.synthCtx.state === "suspended") {
            this.synthCtx.resume();
        }

        const chordNotes = [
            [261.63, 329.63, 392.00, 493.88], // C, E, G, B
            [220.00, 261.63, 329.63, 392.00], // A, C, E, G
            [174.61, 220.00, 261.63, 329.63], // F, A, C, E
            [196.00, 246.94, 293.66, 392.00]  // G, B, D, G
        ];

        let chordIdx = 0;
        let noteIdx = 0;

        const playChimeNote = (freq, vel) => {
            if (!this.synthCtx) return;

            const osc = this.synthCtx.createOscillator();
            const osc2 = this.synthCtx.createOscillator();
            const gain = this.synthCtx.createGain();
            const t = this.synthCtx.currentTime;

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, t);
            osc2.type = "triangle";
            osc2.frequency.setValueAtTime(freq, t);

            gain.gain.setValueAtTime(0.0001, t);
            gain.gain.exponentialRampToValueAtTime(vel, t + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);

            // Slight detune for a warm, lush tone
            osc2.detune.setValueAtTime(4, t);

            osc.connect(gain);
            osc2.connect(gain);
            gain.connect(this.synthMasterGain);

            osc.start(t);
            osc2.start(t);
            osc.stop(t + 2.7);
            osc2.stop(t + 2.7);
        };

        if (this.synthTimer) clearInterval(this.synthTimer);
        this.synthTimer = setInterval(() => {
            const currentChord = chordNotes[chordIdx];
            const vel = 0.22;
            playChimeNote(currentChord[noteIdx], vel);

            noteIdx++;
            if (noteIdx >= currentChord.length) {
                noteIdx = 0;
                chordIdx = (chordIdx + 1) % chordNotes.length;
            }
        }, 430);
    }
}

let audioElementInstance = null;
function initMusic() {
    audioElementInstance = new RomanticAudioEngine();
}

/* ============================================================================
   4. ADAPTIVE CANVAS PARTICLE ENGINE (Stars, Hearts, Petals, Glow Dots)
   ============================================================================ */
function initParticles() {
    const canvas = document.getElementById("ambient-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const getTargetCount = () => {
        if (width <= 480) return 35;
        if (width <= 900) return 70;
        return 120;
    };

    let targetCount = getTargetCount();
    let particles = [];

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        targetCount = getTargetCount();
        adjustParticles();
    });

    class Particle {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : height + 20;
            this.type = Math.random() < 0.65 ? "star" : (Math.random() < 0.6 ? "heart" : "petal");
            this.size = Math.random() * (this.type === "star" ? 2.5 : 9) + (this.type === "star" ? 1 : 4);
            this.speedY = -(Math.random() * 0.4 + 0.15);
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.6 + 0.2;
            this.pulse = Math.random() * Math.PI * 2;
            this.pulseSpeed = Math.random() * 0.03 + 0.01;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.02;

            const colors = ["#ff6f9f", "#ff9fbd", "#d8b477", "#ffffff", "#ff4081"];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX + Math.sin(this.pulse) * 0.2;
            this.pulse += this.pulseSpeed;
            this.rotation += this.rotSpeed;

            if (this.y < -30 || this.x < -30 || this.x > width + 30) {
                this.reset();
            }
        }

        draw(c) {
            const currentAlpha = Math.max(0.1, this.opacity + Math.sin(this.pulse) * 0.2);
            c.save();
            c.translate(this.x, this.y);
            c.rotate(this.rotation);
            c.globalAlpha = currentAlpha;
            c.fillStyle = this.color;
            c.shadowColor = this.color;
            c.shadowBlur = this.type === "star" ? 4 : 8;

            if (this.type === "star") {
                c.beginPath();
                c.arc(0, 0, this.size, 0, Math.PI * 2);
                c.fill();
            } else if (this.type === "heart") {
                const s = this.size * 0.14;
                c.beginPath();
                c.moveTo(0, s * 3);
                c.bezierCurveTo(-s * 5, -s * 2, -s * 8, s * 4, 0, s * 8);
                c.bezierCurveTo(s * 8, s * 4, s * 5, -s * 2, 0, s * 3);
                c.fill();
            } else {
                c.beginPath();
                c.ellipse(0, 0, this.size * 0.5, this.size, 0, 0, Math.PI * 2);
                c.fill();
            }
            c.restore();
        }
    }

    function adjustParticles() {
        while (particles.length < targetCount) particles.push(new Particle());
        while (particles.length > targetCount) particles.pop();
    }

    adjustParticles();

    function render() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw(ctx);
        }
        requestAnimationFrame(render);
    }

    render();
}

/* ============================================================================
   5. CINEMATIC LOGIN SYSTEM (STRICTLY FOR Tulip)
   ============================================================================ */
function initLogin() {
    const loginSection = document.getElementById("login");
    const loginCard = document.getElementById("login-card");
    const loginForm = document.getElementById("login-form");
    const userInp = document.getElementById("login-nickname");
    const passInp = document.getElementById("login-password");
    const errorBox = document.getElementById("login-error");
    const submitBtn = document.getElementById("login-submit-btn");

    if (!loginForm) return;

    // Check if session already authenticated
    if (SessionStorageHelper.get("our_story_authenticated") === "true") {
        APP_STATE.isLoggedIn = true;
        loginSection.style.display = "none";
        document.getElementById("home").classList.add("active-scene");

        // Show auto-scroll controller for returning users
        setTimeout(() => {
            AutoScrollEngine.showController();
        }, 500);
        return;
    }

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = userInp.value.trim().toLowerCase();
        const password = passInp.value.trim().toLowerCase();

        // 1. STRICT CHECK: ONLY Tulip CAN ENTER!
        if (username !== LOGIN.username) {
            loginCard.classList.remove("shake");
            void loginCard.offsetWidth;
            loginCard.classList.add("shake");

            errorBox.textContent = "Sorry! This magical universe is strictly reserved for Tulip ❤️. Only Tulip can enter!";
            errorBox.classList.add("visible");
            return;
        }

        // 2. Password Check: Accept any sweet password from Tulip
        const isPasswordValid = LOGIN.validPasswords.includes(password) || password.length >= 2;

        if (isPasswordValid) {
            errorBox.classList.remove("visible");
            SessionStorageHelper.set("our_story_authenticated", "true");
            APP_STATE.isLoggedIn = true;

            submitBtn.style.transform = "scale(0.92)";

            gsap.to(loginCard, {
                scale: 1.08,
                opacity: 0,
                filter: "blur(20px)",
                duration: 1.2,
                ease: "power2.inOut"
            });

            const emblem = document.querySelector(".login-emblem-wrap");
            if (emblem) {
                gsap.to(emblem, {
                    scale: 2.2,
                    opacity: 0,
                    duration: 1.4,
                    ease: "power3.in"
                });
            }

            if (audioElementInstance) {
                audioElementInstance.play();
            }

            // Show cinematic elements after login
            setTimeout(() => {
                AutoScrollEngine.showController();
            }, 1500);

            setTimeout(() => {
                loginSection.style.display = "none";
                initIntroSequence();
            }, 1200);

        } else {
            loginCard.classList.remove("shake");
            void loginCard.offsetWidth;
            loginCard.classList.add("shake");

            errorBox.textContent = "Please enter the secret password, my love ❤️";
            errorBox.classList.add("visible");
        }
    });
}

/* ============================================================================
   6. CINEMATIC INTRO SYSTEM (PAGE 02)
   ============================================================================ */
function initIntroSequence() {
    const introSection = document.getElementById("intro");
    const singularity = document.getElementById("intro-singularity");
    const flare = document.getElementById("intro-flare");
    const q1 = document.getElementById("intro-quote-1");
    const q2 = document.getElementById("intro-quote-2");
    const q3 = document.getElementById("intro-quote-3");
    const namesCard = document.getElementById("intro-names-card");
    const coupleNamesText = document.getElementById("intro-couple-names");
    const continueBtn = document.getElementById("skip-intro-btn");

    if (!introSection) return;

    introSection.classList.add("active-scene");

    // Activate cinematic vignette during intro
    const vignette = document.getElementById('cinematic-vignette');
    const bars = document.getElementById('cinematic-bars');
    if (vignette) vignette.classList.add('active');
    if (bars) bars.classList.add('active');

    if (coupleNamesText) {
        coupleNamesText.innerHTML = `${CONFIG.coupleName1} <span class="heart-symbol">❤️</span> ${CONFIG.coupleName2}`;
    }

    const tl = gsap.timeline({
        onComplete: () => {
            gsap.to(continueBtn, { opacity: 1, y: 0, duration: 0.8 });
            // Deactivate cinematic effects after intro
            if (vignette) vignette.classList.remove('active');
            if (bars) bars.classList.remove('active');
        }
    });

    tl.to(singularity, { opacity: 1, duration: 1, scale: 3, ease: "power2.in" })
      .to(flare, { opacity: 1, scaleX: 1.5, duration: 0.8, ease: "power2.out" })
      .to([singularity, flare], { opacity: 0, duration: 0.8, ease: "power2.in" })

      // First quote with dramatic pause
      .to(q1, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.5, ease: "power2.out" })
      .to(q1, { opacity: 0, filter: "blur(8px)", y: -15, duration: 1, delay: 1.5 })

      // Second quote
      .to(q2, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.2, ease: "power2.out" })
      .to(q2, { opacity: 0, filter: "blur(8px)", y: -15, duration: 1, delay: 1 })

      // Third quote — the punchline
      .to(q3, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.5, ease: "power2.out" })
      .to(q3, { opacity: 0, filter: "blur(8px)", y: -15, duration: 1, delay: 1.5 })

      // Names reveal with elastic bounce
      .to(namesCard, { opacity: 1, filter: "blur(0px)", scale: 1, duration: 2, ease: "elastic.out(1, 0.75)" });

    const finishIntro = () => {
        gsap.to(introSection, {
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut",
            onComplete: () => {
                introSection.style.display = "none";
                scrollToSection("home");
            }
        });
    };

    if (continueBtn) {
        continueBtn.addEventListener("click", finishIntro);
    }
}

/* ============================================================================
   7. ANIMATED ROMANTIC RIDE & LOVE TRAIN INTERACTION (PAGE 03)
   ============================================================================ */
function initAnimatedJourney() {
    const whistleBtn = document.getElementById("train-whistle-btn");
    const train = document.getElementById("romantic-train");
    const bicycle = document.getElementById("romantic-bicycle");

    const triggerTrainWhistle = (x, y) => {
        if (audioElementInstance) {
            audioElementInstance.playChime(659.25); // E5 note
            setTimeout(() => audioElementInstance.playChime(523.25), 150); // C5 note
        }
        triggerCanvasHeartBurst(x || window.innerWidth * 0.5, y || window.innerHeight * 0.45);

        // Burst extra heart puffs
        const engine = document.querySelector(".train-engine");
        if (engine) {
            gsap.fromTo(engine, { y: -4 }, { y: 0, yoyo: true, repeat: 3, duration: 0.1 });
        }
    };

    if (whistleBtn) {
        whistleBtn.addEventListener("click", (e) => {
            triggerTrainWhistle(e.clientX, e.clientY);
        });
    }

    if (train) {
        train.addEventListener("click", (e) => {
            triggerTrainWhistle(e.clientX, e.clientY);
        });
    }

    if (bicycle) {
        bicycle.addEventListener("click", (e) => {
            if (audioElementInstance) {
                audioElementInstance.playChime(880); // A5 high bell
            }
            triggerCanvasHeartBurst(e.clientX, e.clientY);
        });
    }
}

/* ============================================================================
   8. OUR STORY CHAPTERS (PAGE 04)
   ============================================================================ */
function initStory() {
    if (typeof ScrollTrigger === "undefined") return;

    const chapters = document.querySelectorAll(".story-chapter");
    chapters.forEach((chap) => {
        ScrollTrigger.create({
            trigger: chap,
            start: "top 75%",
            onEnter: () => chap.classList.add("visible")
        });
    });
}

/* ============================================================================
   9. RELATIONSHIP TIMELINE (PAGE 05)
   ============================================================================ */
function initTimeline() {
    const list = document.getElementById("timeline-list");
    const modal = document.getElementById("timeline-modal");
    const closeBtn = document.getElementById("close-timeline-modal");
    const modalDate = document.getElementById("modal-date");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");

    if (!list) return;

    list.innerHTML = "";
    CONFIG.timeline.forEach((item) => {
        const card = document.createElement("div");
        card.className = "timeline-card-node glass-card magnetic-btn";
        card.innerHTML = `
            <div class="timeline-step-badge">${item.date}</div>
            <h3 class="timeline-node-title">${item.title}</h3>
            <p class="timeline-node-desc">${item.description}</p>
        `;

        card.addEventListener("click", (e) => {
            if (modalDate) modalDate.textContent = item.date;
            if (modalTitle) modalTitle.textContent = item.title;
            if (modalDesc) modalDesc.textContent = item.description;

            modal.classList.add("active");
            triggerCanvasHeartBurst(e.clientX, e.clientY);
        });

        list.appendChild(card);
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    }
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.remove("active");
        });
    }
}

/* ============================================================================
   10. 3D MEMORY GALLERY & FULLSCREEN LIGHTBOX (PAGE 06)
   ============================================================================ */
function initMemoryGallery() {
    const grid = document.getElementById("memory-gallery-grid");
    const lightbox = document.getElementById("lightbox");
    const closeBtn = document.getElementById("lightbox-close");
    const imgEl = document.getElementById("lightbox-img");
    const dateEl = document.getElementById("lightbox-date");
    const titleEl = document.getElementById("lightbox-title");
    const locEl = document.getElementById("lightbox-location");
    const descEl = document.getElementById("lightbox-description");

    if (!grid) return;

    grid.innerHTML = "";
    CONFIG.memories.forEach((mem) => {
        const card = document.createElement("div");
        card.className = "memory-card glass-card";
        card.innerHTML = `
            <div class="memory-img-box">
                <img src="${mem.image}" alt="${mem.title}" class="memory-img" loading="lazy" onerror="this.onerror=null; this.src='assets/images/pic1.jpeg';" style="max-width: 100% !important; max-height: 100% !important; width: auto !important; height: auto !important; object-fit: contain !important; display: block !important;">
                <div class="memory-caption">
                    <span class="memory-date">${mem.date}</span>
                    <h4 class="memory-card-title">${mem.title}</h4>
                    <span class="memory-location">📍 ${mem.location}</span>
                </div>
            </div>
        `;

        card.addEventListener("click", () => {
            if (imgEl) imgEl.src = mem.image;
            if (dateEl) dateEl.textContent = mem.date;
            if (titleEl) titleEl.textContent = mem.title;
            if (locEl) locEl.textContent = `📍 ${mem.location}`;
            if (descEl) descEl.textContent = mem.description;

            lightbox.classList.add("active");
        });

        grid.appendChild(card);
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => lightbox.classList.remove("active"));
    }
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) lightbox.classList.remove("active");
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox && lightbox.classList.contains("active")) {
            lightbox.classList.remove("active");
        }
    });
}

/* ============================================================================
   11. REALISTIC LOVE LETTER & 3D ENVELOPE (PAGE 07)
   ============================================================================ */
function initLoveLetter() {
    const envelope = document.getElementById("envelope-interactive");
    const textBox = document.getElementById("letter-text-box");
    const authorEl = document.getElementById("letter-author");
    const statusHint = document.getElementById("envelope-status-hint");
    const recloseBtn = document.getElementById("reclose-letter-btn");

    const cleanLetter = CONFIG.loveLetter
        .split("\n")
        .map((line) => line.trim())
        .join("\n")
        .trim();
    textBox.textContent = cleanLetter;
    if (authorEl) authorEl.textContent = `Forever yours, ${CONFIG.coupleName1} ❤️`;

    const openLetter = () => {
        if (APP_STATE.isLetterOpen) return;
        APP_STATE.isLetterOpen = true;

        envelope.classList.add("open");
        if (statusHint) statusHint.textContent = "Written from the depths of Arman's heart for Tulip ❤️";
        if (recloseBtn) recloseBtn.classList.remove("hidden");

        triggerCanvasHeartBurst(window.innerWidth / 2, window.innerHeight * 0.55);
    };

    const closeLetter = () => {
        if (!APP_STATE.isLetterOpen) return;
        APP_STATE.isLetterOpen = false;

        envelope.classList.remove("open");
        if (statusHint) statusHint.textContent = "Tap the envelope to unseal ❤️";
        if (recloseBtn) recloseBtn.classList.add("hidden");
    };

    envelope.addEventListener("click", openLetter);
    envelope.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") openLetter();
    });

    if (recloseBtn) {
        recloseBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closeLetter();
        });
    }
}

/* ============================================================================
   12. LOVE TEST QUIZ (NEW INTERACTIVE FEATURE)
   ============================================================================ */
function initLoveQuiz() {
    const questionTitle = document.getElementById("quiz-question-title");
    const optionsContainer = document.getElementById("quiz-options-container");
    const progressFill = document.getElementById("quiz-progress-fill");
    const questionCounter = document.getElementById("quiz-question-counter");
    const feedbackBanner = document.getElementById("quiz-feedback");
    const feedbackText = document.getElementById("feedback-text");
    const trophyBanner = document.getElementById("quiz-result-trophy");
    const replayBtn = document.getElementById("quiz-replay-btn");

    if (!questionTitle || !optionsContainer) return;

    const QUIZ_QUESTIONS = [
        {
            question: "Who fell in love first?",
            options: [
                { text: "Arman without a doubt! ❤️", comment: "Exactly! Arman was completely enchanted by Tulip from the start!" },
                { text: "Tulip made the magic happen ✨", comment: "Indeed! Your sweetness made it impossible not to fall!" },
                { text: "It was instant cosmic chemistry! 🌌", comment: "True! Two souls destined to be together across time." }
            ]
        },
        {
            question: "What is Arman's absolute favorite thing about Tulip?",
            options: [
                { text: "Her radiant, glowing smile 😍", comment: "That smile is his favorite sight in the universe!" },
                { text: "Her cute little anger and drama 😂", comment: "Even when you're acting dramatic, you're the cutest!" },
                { text: "Her pure heart and caring soul ❤️", comment: "Your kindness means the world to him." },
                { text: "All of the above and a million more! 💖", comment: "Spot on! He loves every single piece of you, Tulip!" }
            ]
        },
        {
            question: "When Tulip feels sad or upset, what cures it best?",
            options: [
                { text: "Arman's tight hugs & sweet apologies 🤗", comment: "His arms will always be your safe haven!" },
                { text: "Her favorite treats and chocolates 🍫", comment: "Food & love always work wonders!" },
                { text: "Endless late-night talks under the moon 🌙", comment: "Conversations with you fix everything." }
            ]
        },
        {
            question: "How long will Arman love Tulip?",
            options: [
                { text: "A hundred years", comment: "Too short! Much longer than that!" },
                { text: "Until the stars run out of light ✨", comment: "Even then, his love will shine on!" },
                { text: "Forever, always, and in every lifetime ❤️", comment: "100% YES! Eternal and unshakeable love!" }
            ]
        }
    ];

    let currentQ = 0;

    function renderQuestion() {
        const q = QUIZ_QUESTIONS[currentQ];
        questionTitle.textContent = q.question;
        questionCounter.textContent = `Question ${currentQ + 1} of ${QUIZ_QUESTIONS.length}`;
        progressFill.style.width = `${((currentQ + 1) / QUIZ_QUESTIONS.length) * 100}%`;
        optionsContainer.innerHTML = "";

        if (feedbackBanner) feedbackBanner.classList.add("hidden");

        q.options.forEach((opt) => {
            const btn = document.createElement("button");
            btn.className = "quiz-option-btn magnetic-btn";
            btn.textContent = opt.text;

            btn.addEventListener("click", (e) => {
                btn.classList.add("correct");
                triggerCanvasHeartBurst(e.clientX, e.clientY);

                if (feedbackBanner && feedbackText) {
                    feedbackText.textContent = opt.comment;
                    feedbackBanner.classList.remove("hidden");
                }

                // Advance to next question after 1.2s
                setTimeout(() => {
                    currentQ++;
                    if (currentQ < QUIZ_QUESTIONS.length) {
                        renderQuestion();
                    } else {
                        // Show Trophy
                        questionTitle.textContent = "Quiz Complete!";
                        optionsContainer.innerHTML = "";
                        if (feedbackBanner) feedbackBanner.classList.add("hidden");
                        if (trophyBanner) trophyBanner.classList.remove("hidden");
                        triggerCanvasHeartBurst(window.innerWidth / 2, window.innerHeight * 0.5);
                    }
                }, 1300);
            });

            optionsContainer.appendChild(btn);
        });
    }

    renderQuestion();

    if (replayBtn) {
        replayBtn.addEventListener("click", () => {
            currentQ = 0;
            if (trophyBanner) trophyBanner.classList.add("hidden");
            renderQuestion();
        });
    }
}

/* ============================================================================
   13. MIDNIGHT HEART CATCHER MINI-GAME (PAGE 09)
   ============================================================================ */
function initHeartCatcherGame() {
    const canvasArea = document.getElementById("game-canvas-area");
    const scoreEl = document.getElementById("game-heart-score");
    const noteEl = document.getElementById("game-note-text");
    const basket = document.getElementById("player-basket");
    const chestModal = document.getElementById("secret-chest-modal");
    const closeChestBtn = document.getElementById("close-chest-btn");

    if (!canvasArea || !scoreEl) return;

    let score = 0;
    const target = 10;
    const loveNotes = [
        "Tulip, you are my favorite human in the world! ❤️",
        "Your smile is Arman's happiest view! ✨",
        "Arman loves you more than words can express! 💖",
        "You're cute even when you're mad at me! 😂",
        "Every single heartbeat belongs to you, Tulip! 💓",
        "My heart found its true home in you! 🌸",
        "Forever grateful that fate brought us together! 💍",
        "You make ordinary days extraordinary! ✨",
        "Holding your hand is my favorite feeling! 🤝",
        "Arman + Tulip = Written in the stars! 🌌"
    ];

    // Basket tracking
    canvasArea.addEventListener("mousemove", (e) => {
        const rect = canvasArea.getBoundingClientRect();
        const x = e.clientX - rect.left;
        if (basket) {
            basket.style.left = `${Math.max(30, Math.min(rect.width - 30, x))}px`;
        }
    });

    canvasArea.addEventListener("touchmove", (e) => {
        const rect = canvasArea.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        if (basket) {
            basket.style.left = `${Math.max(30, Math.min(rect.width - 30, x))}px`;
        }
    });

    // Spawn falling hearts continuously
    function spawnFallingHeart() {
        if (!document.getElementById("game")) return;
        const heart = document.createElement("div");
        heart.className = "falling-game-heart";

        const heartIcons = ["❤️", "💖", "✨", "🌸", "💕", "💘"];
        heart.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];

        const rect = canvasArea.getBoundingClientRect();
        const startX = Math.random() * (rect.width - 40) + 20;
        const duration = Math.random() * 2.5 + 3.2; // 3.2 to 5.7s

        heart.style.left = `${startX}px`;
        heart.style.animationDuration = `${duration}s`;

        const catchHeart = (e) => {
            if (heart.dataset.caught) return;
            heart.dataset.caught = "true";

            score++;
            scoreEl.textContent = `${score} / ${target}`;

            if (noteEl) {
                noteEl.textContent = loveNotes[(score - 1) % loveNotes.length];
            }

            if (audioElementInstance) {
                audioElementInstance.playChime(587.33); // D5 chime
            }

            triggerCanvasHeartBurst(e.clientX || startX, e.clientY || 200);
            heart.remove();

            if (score >= target && chestModal) {
                chestModal.classList.remove("hidden");
                triggerCanvasHeartBurst(window.innerWidth / 2, window.innerHeight * 0.45);
            }
        };

        heart.addEventListener("click", catchHeart);
        heart.addEventListener("touchstart", catchHeart);

        canvasArea.appendChild(heart);

        setTimeout(() => {
            if (heart.parentNode) heart.remove();
        }, duration * 1000);
    }

    setInterval(spawnFallingHeart, 1400);

    if (closeChestBtn && chestModal) {
        closeChestBtn.addEventListener("click", () => {
            chestModal.classList.add("hidden");
        });
    }
}

/* ============================================================================
   14. WHY I LOVE YOU INTERACTIVE HEART (PAGE 10)
   ============================================================================ */
function initReasons() {
    const heartBtn = document.getElementById("reason-tap-heart");
    const shockwave = document.getElementById("heart-shockwave");
    const counterBadge = document.getElementById("reason-counter-badge");
    const activeText = document.getElementById("reason-active-text");
    const dotsBar = document.getElementById("reason-dots-bar");
    const climaxBox = document.getElementById("reasons-climax-box");

    if (!heartBtn || !activeText) return;

    if (dotsBar) {
        dotsBar.innerHTML = "";
        CONFIG.reasons.forEach((_, idx) => {
            const dot = document.createElement("span");
            dot.className = `reason-dot ${idx === 0 ? "active" : ""}`;
            dotsBar.appendChild(dot);
        });
    }

    let currentIndex = 0;

    heartBtn.addEventListener("click", (e) => {
        if (shockwave) {
            shockwave.classList.remove("burst");
            void shockwave.offsetWidth;
            shockwave.classList.add("burst");
        }

        triggerCanvasHeartBurst(e.clientX, e.clientY);

        currentIndex = (currentIndex + 1) % (CONFIG.reasons.length + 1);

        if (currentIndex < CONFIG.reasons.length) {
            if (climaxBox) climaxBox.classList.add("hidden");
            if (counterBadge) counterBadge.textContent = `Reason #${currentIndex + 1}`;

            gsap.fromTo(
                activeText,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
            );
            activeText.textContent = `“${CONFIG.reasons[currentIndex]}”`;

            const dots = dotsBar ? dotsBar.querySelectorAll(".reason-dot") : [];
            dots.forEach((dot, idx) => {
                if (idx === currentIndex) dot.classList.add("active");
                else dot.classList.remove("active");
            });
        } else {
            if (counterBadge) counterBadge.textContent = "Infinity & Beyond";
            activeText.textContent = "“And in every single heartbeat, I fall for you again, Tulip.”";
            if (climaxBox) climaxBox.classList.remove("hidden");

            gsap.fromTo(
                heartBtn,
                { scale: 0.9 },
                { scale: 1.35, duration: 0.5, yoyo: true, repeat: 3, ease: "elastic.out(1, 0.3)" }
            );
        }
    });
}

/* ============================================================================
   15. THREE.JS 3D COSMOS UNIVERSE (PAGE 11)
   ============================================================================ */
function initUniverse() {
    const container = document.getElementById("three-universe-canvas");
    if (!container) return;

    if (typeof THREE === "undefined") return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 80;

    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);
    } catch (e) {
        return;
    }

    const starCount = window.innerWidth <= 768 ? 600 : 1500;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
        starPos[i] = (Math.random() - 0.5) * 300;
        starPos[i + 1] = (Math.random() - 0.5) * 300;
        starPos[i + 2] = (Math.random() - 0.5) * 300;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));

    const starMat = new THREE.PointsMaterial({
        color: 0xff9fbd,
        size: 1.5,
        transparent: true,
        opacity: 0.8
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    const createGlowingStarMesh = (colorHex) => {
        const geo = new THREE.SphereGeometry(2.2, 16, 16);
        const mat = new THREE.MeshBasicMaterial({ color: colorHex });
        return new THREE.Mesh(geo, mat);
    };

    const starTulip = createGlowingStarMesh(0xff6f9f); // Rose Pink (Tulip)
    const starArman = createGlowingStarMesh(0xd8b477); // Champagne Gold (Arman)
    scene.add(starTulip);
    scene.add(starArman);

    let mergeProgress = 0;

    if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.create({
            trigger: "#universe",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
                mergeProgress = self.progress;

                const steps = document.querySelectorAll(".universe-story-step");
                const stepIdx = Math.min(steps.length - 1, Math.floor(mergeProgress * steps.length));
                steps.forEach((st, i) => {
                    if (i === stepIdx) st.classList.add("active");
                    else st.classList.remove("active");
                });
            }
        });
    }

    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    let clock = new THREE.Clock();
    function animateThree() {
        requestAnimationFrame(animateThree);
        const elapsed = clock.getElapsedTime();

        starField.rotation.y = elapsed * 0.02;
        starField.rotation.x = elapsed * 0.01;

        const separation = (1 - Math.min(mergeProgress, 1)) * 42;
        starTulip.position.set(-separation, Math.sin(elapsed * 1.5) * 3, 0);
        starArman.position.set(separation, -Math.sin(elapsed * 1.5) * 3, 0);

        if (mergeProgress > 0.85) {
            const pulse = 1 + Math.sin(elapsed * 4) * 0.15;
            starTulip.scale.set(pulse, pulse, pulse);
            starArman.scale.set(pulse, pulse, pulse);
        } else {
            starTulip.scale.set(1, 1, 1);
            starArman.scale.set(1, 1, 1);
        }

        renderer.render(scene, camera);
    }

    animateThree();
}

/* ============================================================================
   16. OUR FUTURE CONSTELLATION (PAGE 12)
   ============================================================================ */
function initFuture() {
    const grid = document.getElementById("future-cards-grid");
    if (!grid) return;

    const icons = ["🏔️", "🌌", "🥂", "📸", "🏰", "⏳"];

    grid.innerHTML = "";
    CONFIG.futurePlans.forEach((plan, i) => {
        const card = document.createElement("div");
        card.className = "future-card glass-card";
        card.innerHTML = `
            <span class="future-card-icon">${icons[i % icons.length]}</span>
            <h4 class="future-card-title">${plan}</h4>
        `;
        grid.appendChild(card);
    });
}

/* ============================================================================
   17. ANNIVERSARY LIVE COUNTDOWN (PAGE 13)
   ============================================================================ */
function initCountdown() {
    const dEl = document.getElementById("count-days");
    const hEl = document.getElementById("count-hours");
    const mEl = document.getElementById("count-minutes");
    const sEl = document.getElementById("count-seconds");
    const dateLabel = document.getElementById("countdown-date-label");
    const celebBox = document.getElementById("celebration-box");

    const targetTime = new Date(CONFIG.anniversaryDate).getTime();
    if (dateLabel) {
        const dateObj = new Date(CONFIG.anniversaryDate);
        dateLabel.textContent = "September 30, 2026 — Celebrating Our 2 Year Anniversary ❤️";
    }

    let lastS = -1;

    function updateCounter() {
        const now = new Date().getTime();
        let diff = targetTime - now;

        if (diff <= 0) {
            if (dEl) dEl.textContent = "00";
            if (hEl) hEl.textContent = "00";
            if (mEl) mEl.textContent = "00";
            if (sEl) sEl.textContent = "00";
            if (celebBox) celebBox.classList.remove("hidden");
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const pad = (n) => String(n).padStart(2, "0");

        if (dEl) dEl.textContent = pad(days);
        if (hEl) hEl.textContent = pad(hours);
        if (mEl) mEl.textContent = pad(minutes);

        if (sEl && lastS !== seconds) {
            sEl.textContent = pad(seconds);
            sEl.classList.add("tick");
            setTimeout(() => sEl.classList.remove("tick"), 200);
            lastS = seconds;
        }
    }

    updateCounter();
    setInterval(updateCounter, 1000);
}

/* ============================================================================
   18. FINAL SURPRISE & CINEMATIC CLIMAX (PAGE 14)
   ============================================================================ */
function initFinalSurprise() {
    const openBtn = document.getElementById("open-surprise-btn");
    const theater = document.getElementById("cinema-theater");
    const lightOrb = document.getElementById("theater-light-orb");
    const photoFrame = document.getElementById("final-photo-frame");
    const headMsg = document.getElementById("final-head-msg");
    const line1 = document.getElementById("final-line-1");
    const line2 = document.getElementById("final-line-2");
    const vowMsg = document.getElementById("final-vow-msg");
    const namesCross = document.getElementById("final-names-cross");
    const epilogue = document.getElementById("epilogue-panel");
    const replayBtn = document.getElementById("replay-experience-btn");

    if (!openBtn || !theater) return;

    openBtn.addEventListener("click", () => {
        theater.classList.remove("hidden");
        theater.setAttribute("aria-hidden", "false");

        // Hide auto-scroll controller during theater
        const autoCtrl = document.getElementById('auto-scroll-controller');
        const audioCtrl = document.getElementById('audio-controller');
        if (autoCtrl) autoCtrl.style.display = 'none';
        if (audioCtrl) audioCtrl.style.display = 'none';

        // Pause auto-scroll during theater
        if (AutoScrollEngine.isPlaying) {
            AutoScrollEngine.pause();
        }

        if (audioElementInstance) {
            audioElementInstance.fadeVolume(0.35, 1000);
        }

        // Dramatic light orb expansion
        gsap.to(lightOrb, {
            opacity: 1,
            scale: 30,
            duration: 2.5,
            ease: "power2.inOut",
            onComplete: () => {
                startFireworksClimax();

                // Photo frame dramatic entrance
                gsap.fromTo(photoFrame, {
                    opacity: 0,
                    scale: 0.5,
                    rotateY: 15
                }, {
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    duration: 1.8,
                    ease: "elastic.out(1, 0.7)"
                });

                // Typewriter messages with dramatic pauses
                typeWriterText(headMsg, `Happy 2nd Anniversary, ${CONFIG.coupleName2} ❤️`, 45, () => {
                    setTimeout(() => {
                        typeWriterText(line1, "Thank you for being my favorite part of life.", 35, () => {
                            setTimeout(() => {
                                typeWriterText(line2, "Two beautiful years of love, laughs, and magic — and forever more to go.", 35, () => {
                                    setTimeout(() => {
                                        typeWriterText(vowMsg, "Forever & Always Yours ❤️", 45, () => {
                                            namesCross.textContent = `${CONFIG.coupleName1} ❤️ ${CONFIG.coupleName2}`;
                                            gsap.fromTo(namesCross, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1 });

                                            setTimeout(() => {
                                                if (epilogue) {
                                                    epilogue.classList.remove("hidden");
                                                    gsap.fromTo(epilogue, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2 });
                                                }
                                            }, 1500);
                                        });
                                    }, 800);
                                });
                            }, 600);
                        });
                    }, 500);
                });
            }
        });
    });

    if (replayBtn) {
        replayBtn.addEventListener("click", () => {
            theater.classList.add("hidden");
            theater.setAttribute("aria-hidden", "true");
            if (epilogue) epilogue.classList.add("hidden");

            // Restore auto-scroll controller
            const autoCtrl = document.getElementById('auto-scroll-controller');
            const audioCtrl = document.getElementById('audio-controller');
            if (autoCtrl) autoCtrl.style.display = '';
            if (audioCtrl) audioCtrl.style.display = '';

            scrollToSection("home");
        });
    }
}

function typeWriterText(el, text, speed = 40, callback = null) {
    if (!el) return;
    el.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
        el.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(timer);
            if (callback) setTimeout(callback, 300);
        }
    }, speed);
}

function startFireworksClimax() {
    const canvas = document.getElementById("surprise-fireworks-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let sparks = [];
    const colors = ["#ff6f9f", "#ff9fbd", "#d8b477", "#ffffff", "#ff4081", "#ffd54f"];

    for (let i = 0; i < 200; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 2;
        sparks.push({
            x: canvas.width / 2,
            y: canvas.height * 0.4,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            alpha: 1,
            decay: Math.random() * 0.015 + 0.008,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 3 + 2
        });
    }

    function renderFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = 0;
        for (let i = 0; i < sparks.length; i++) {
            const p = sparks[i];
            if (p.alpha > 0) {
                alive++;
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.05;
                p.alpha -= p.decay;

                ctx.save();
                ctx.globalAlpha = Math.max(0, p.alpha);
                ctx.fillStyle = p.color;
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 6;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }
        if (alive > 0) requestAnimationFrame(renderFireworks);
    }

    renderFireworks();
}

/* ============================================================================
   19. SCROLL TO SECTION (Cinematic Transition)
   ============================================================================ */
function scrollToSection(targetId) {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    const overlay = document.getElementById("cinematic-transition");
    if (overlay && !APP_STATE.reducedMotion) {
        overlay.classList.add("active");
        setTimeout(() => {
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
            setTimeout(() => {
                overlay.classList.remove("active");
            }, 400);
        }, 300);
    } else {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

/* ============================================================================
   20. FLOW BUTTONS — Continue to next section
   ============================================================================ */
function initFlowButtons() {
    const continueFlowBtns = document.querySelectorAll(".continue-flow-btn, .flow-next-bridge[data-target]");
    continueFlowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-target");
            if (target) scrollToSection(target);
        });
    });
}

/* ============================================================================
   20. MICRO-INTERACTIONS & CURSOR GLOW
   ============================================================================ */
function initMicroInteractions() {
    const cursor = document.getElementById("cursor-glow");
    if (cursor && window.matchMedia("(hover: hover)").matches) {
        window.addEventListener("mousemove", (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
    }

    const magneticButtons = document.querySelectorAll(".magnetic-btn");
    magneticButtons.forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "";
        });
    });
}

function triggerCanvasHeartBurst(x, y) {
    const canvas = document.getElementById("ambient-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let burstParticles = [];
    for (let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1.5;
        burstParticles.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 1,
            alpha: 1,
            size: Math.random() * 12 + 6
        });
    }

    function renderBurst() {
        let alive = 0;
        for (let i = 0; i < burstParticles.length; i++) {
            const p = burstParticles[i];
            if (p.alpha > 0) {
                alive++;
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= 0.035;

                ctx.save();
                ctx.globalAlpha = Math.max(0, p.alpha);
                ctx.fillStyle = "#ff6f9f";
                ctx.font = `${p.size}px serif`;
                ctx.fillText("❤️", p.x, p.y);
                ctx.restore();
            }
        }
        if (alive > 0) requestAnimationFrame(renderBurst);
    }

    renderBurst();
}

/* ============================================================================
   21. CINEMATIC TRAILER ENGINE — SCENE BREAKS, SCROLL EFFECTS, DRAMATIC REVEALS
   ============================================================================ */
function initCinematicTrailer() {
    const sceneBreaks = document.querySelectorAll('.scene-break');
    const vignette = document.getElementById('cinematic-vignette');
    const bars = document.getElementById('cinematic-bars');
    const scrollProgress = document.getElementById('scroll-progress');
    const lightLeak1 = document.getElementById('light-leak-1');
    const lightLeak2 = document.getElementById('light-leak-2');

    // Scene Break Observer — dramatic reveals on scroll
    const breakObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.3 });

    sceneBreaks.forEach(brk => breakObserver.observe(brk));

    // Fade-in elements observer
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-cinematic').forEach(el => fadeObserver.observe(el));

    // Also observe .scene-header for its children's staggered reveal
    document.querySelectorAll('.scene-header').forEach(el => fadeObserver.observe(el));

    // Scroll Progress Bar
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = `${progress}%`;
        });
    }

    // Light leaks — subtle ambient animation
    if (lightLeak1 && lightLeak2) {
        setTimeout(() => {
            lightLeak1.classList.add('active');
            lightLeak2.classList.add('active');
        }, 2000);
    }

    // Vignette — activate during cinematic moments
    if (vignette) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollTop / docHeight;
            if (progress > 0.2 && progress < 0.8) {
                vignette.classList.add('active');
            } else {
                vignette.classList.remove('active');
            }
        });
    }

    // Letterbox bars — show during scene breaks
    if (bars) {
        const barObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bars.classList.add('active');
                } else {
                    bars.classList.remove('active');
                }
            });
        }, { threshold: 0.5 });

        sceneBreaks.forEach(brk => barObserver.observe(brk));
    }

    // Add fade-cinematic class to key elements for scroll reveal
    // NOTE: .scene-header excluded — its children (.scene-subtitle, .scene-title, .scene-desc)
    // have their own staggered reveal via perfect-layout.css + .in-view class
    document.querySelectorAll('.glass-card, .story-chapter, .timeline-card-node, .memory-card, .future-card').forEach((el, i) => {
        el.classList.add('fade-cinematic');
        el.style.transitionDelay = `${Math.min(i * 0.05, 0.4)}s`;
        fadeObserver.observe(el);
    });

    // GSAP Scroll Animations — only add subtle parallax effects, NOT opacity (CSS handles reveal)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Photo frames — subtle parallax float only
        document.querySelectorAll('.glass-photo-frame').forEach(frame => {
            gsap.fromTo(frame, { y: 20 }, {
                y: 0, duration: 1, ease: "power2.out",
                scrollTrigger: { trigger: frame, start: "top 90%", toggleActions: "play none none none" }
            });
        });

        // Countdown tiles — subtle scale entrance only
        document.querySelectorAll('.countdown-tile').forEach((tile, i) => {
            gsap.fromTo(tile, { scale: 0.9, rotateX: 15 }, {
                scale: 1, rotateX: 0, duration: 0.6, delay: i * 0.1, ease: "back.out(1.4)",
                scrollTrigger: { trigger: tile, start: "top 90%", toggleActions: "play none none none" }
            });
        });
    }
}

/* ============================================================================
   22. AUTO-SCROLL CINEMATIC ENGINE — AUTO PLAY WITH TOUCH PAUSE
   ============================================================================ */
const AutoScrollEngine = {
    isPlaying: false,
    currentIndex: 0,
    sections: [],
    timer: null,
    countdown: 5,
    countdownMax: 5,
    countdownInterval: null,
    isPaused: false,
    userInteracted: false,

    elements: {
        toggleBtn: null,
        playIcon: null,
        pauseIcon: null,
        timerFill: null,
        timerLabel: null,
        status: null,
        controller: null,
        pauseOverlay: null,
        indicator: null
    },

    init() {
        this.elements.toggleBtn = document.getElementById('auto-scroll-toggle');
        this.elements.playIcon = document.getElementById('auto-play-icon');
        this.elements.pauseIcon = document.getElementById('auto-pause-icon');
        this.elements.timerFill = document.getElementById('timer-fill');
        this.elements.timerLabel = document.getElementById('timer-label');
        this.elements.status = document.getElementById('auto-scroll-status');
        this.elements.controller = document.getElementById('auto-scroll-controller');
        this.elements.pauseOverlay = document.getElementById('auto-pause-overlay');
        this.elements.indicator = document.getElementById('auto-section-indicator');

        // Get all sections in order
        this.sections = Array.from(document.querySelectorAll('section[id]')).filter(s => s.id !== 'login' && s.id !== 'intro');

        // Build section indicator dots
        this.buildIndicator();

        // Event listeners
        if (this.elements.toggleBtn) {
            this.elements.toggleBtn.addEventListener('click', () => this.toggle());
        }

        // Touch/Mouse hold to pause
        this.setupTouchPause();

        // Show controller after login
        if (APP_STATE.isLoggedIn) {
            this.showController();
        }

        // Keyboard shortcut: Space to toggle
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && e.target === document.body) {
                e.preventDefault();
                this.toggle();
            }
        });
    },

    showController() {
        if (this.elements.controller) {
            this.elements.controller.classList.add('visible');
        }
    },

    buildIndicator() {
        if (!this.elements.indicator) return;
        this.elements.indicator.innerHTML = '';
        this.sections.forEach((sec, i) => {
            const dot = document.createElement('div');
            dot.className = 'auto-indicator-dot';
            dot.dataset.index = i;
            this.elements.indicator.appendChild(dot);
        });
    },

    updateIndicator() {
        if (!this.elements.indicator) return;
        const dots = this.elements.indicator.querySelectorAll('.auto-indicator-dot');
        dots.forEach((dot, i) => {
            dot.classList.remove('active', 'passed');
            if (i === this.currentIndex) dot.classList.add('active');
            else if (i < this.currentIndex) dot.classList.add('passed');
        });
    },

    toggle() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },

    play() {
        if (this.isPlaying) return;
        this.isPlaying = true;
        this.isPaused = false;
        this.userInteracted = false;

        // Update UI
        if (this.elements.playIcon) this.elements.playIcon.classList.add('hidden');
        if (this.elements.pauseIcon) this.elements.pauseIcon.classList.remove('hidden');
        if (this.elements.status) this.elements.status.textContent = 'Playing';
        if (this.elements.controller) this.elements.controller.classList.add('playing');
        if (this.elements.indicator) this.elements.indicator.classList.add('visible');
        if (this.elements.pauseOverlay) this.elements.pauseOverlay.classList.remove('active');

        // Find current section based on scroll position
        this.updateCurrentIndex();

        // Start countdown
        this.startCountdown();
    },

    pause() {
        if (!this.isPlaying) return;
        this.isPlaying = false;
        this.isPaused = false;

        // Update UI
        if (this.elements.playIcon) this.elements.playIcon.classList.remove('hidden');
        if (this.elements.pauseIcon) this.elements.pauseIcon.classList.add('hidden');
        if (this.elements.status) this.elements.status.textContent = 'Auto Play';
        if (this.elements.controller) this.elements.controller.classList.remove('playing');
        if (this.elements.indicator) this.elements.indicator.classList.remove('visible');
        if (this.elements.pauseOverlay) this.elements.pauseOverlay.classList.remove('active');

        // Stop countdown
        this.stopCountdown();
    },

    pauseOnTouch() {
        if (!this.isPlaying || this.isPaused) return;
        this.isPaused = true;
        this.stopCountdown();

        // Show pause overlay
        if (this.elements.pauseOverlay) {
            this.elements.pauseOverlay.classList.add('active');
        }
    },

    resumeOnRelease() {
        if (!this.isPlaying || !this.isPaused) return;
        this.isPaused = false;

        // Hide pause overlay
        if (this.elements.pauseOverlay) {
            this.elements.pauseOverlay.classList.remove('active');
        }

        // Resume countdown
        this.startCountdown();
    },

    startCountdown() {
        this.stopCountdown();
        this.countdown = this.countdownMax;
        this.updateTimerUI();

        this.countdownInterval = setInterval(() => {
            if (this.isPaused) return;

            this.countdown--;
            this.updateTimerUI();

            if (this.countdown <= 0) {
                this.moveToNext();
            }
        }, 1000);
    },

    stopCountdown() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
            this.countdownInterval = null;
        }
    },

    updateTimerUI() {
        if (this.elements.timerLabel) {
            this.elements.timerLabel.textContent = this.countdown;
        }
        if (this.elements.timerFill) {
            const circumference = 2 * Math.PI * 16; // r=16
            const offset = circumference * (1 - this.countdown / this.countdownMax);
            this.elements.timerFill.style.strokeDashoffset = offset;
        }
    },

    updateCurrentIndex() {
        const scrollY = window.scrollY + window.innerHeight / 3;
        for (let i = this.sections.length - 1; i >= 0; i--) {
            if (this.sections[i].offsetTop <= scrollY) {
                this.currentIndex = i;
                break;
            }
        }
        this.updateIndicator();
    },

    moveToNext() {
        this.currentIndex++;

        if (this.currentIndex >= this.sections.length) {
            // Reached the end — pause auto-scroll
            this.pause();
            return;
        }

        const target = this.sections[this.currentIndex];
        if (target) {
            // Cinematic transition
            const overlay = document.getElementById('cinematic-transition');
            if (overlay && !APP_STATE.reducedMotion) {
                overlay.classList.add('active');
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setTimeout(() => overlay.classList.remove('active'), 400);
                }, 250);
            } else {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            this.updateIndicator();

            // Restart countdown after scroll completes
            setTimeout(() => {
                if (this.isPlaying && !this.isPaused) {
                    this.countdown = this.countdownMax;
                    this.updateTimerUI();
                }
            }, 1200);
        }
    },

    setupTouchPause() {
        const pauseEvents = ['touchstart', 'mousedown'];
        const resumeEvents = ['touchend', 'mouseup', 'touchcancel'];

        pauseEvents.forEach(evt => {
            document.addEventListener(evt, (e) => {
                if (!this.isPlaying) return;
                // Don't pause if clicking on the auto-scroll controller itself
                if (e.target.closest('#auto-scroll-controller')) return;
                // Don't pause if clicking on interactive elements
                if (e.target.closest('button, a, input, .quiz-option-btn, .falling-game-heart, .reason-heart-button')) return;
                this.pauseOnTouch();
            }, { passive: true });
        });

        resumeEvents.forEach(evt => {
            document.addEventListener(evt, () => {
                if (!this.isPlaying) return;
                this.resumeOnRelease();
            }, { passive: true });
        });

        // Also pause on scroll (user manually scrolling)
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (!this.isPlaying || this.isPaused) return;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // User stopped scrolling, resume if we were paused by scroll
            }, 200);
        }, { passive: true });
    }
};

/* ============================================================================
   23. MAIN APPLICATION BOOTSTRAP
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    initMusic();
    initLogin();
    initAnimatedJourney();
    initStory();
    initTimeline();
    initMemoryGallery();
    initLoveLetter();
    initLoveQuiz();
    initHeartCatcherGame();
    initReasons();
    initUniverse();
    initFuture();
    initCountdown();
    initFinalSurprise();
    initFlowButtons();
    initMicroInteractions();
    initCinematicTrailer();
    AutoScrollEngine.init();

    // Dismiss loading screen
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
        }, 1200);
    }

    console.log("Our Story ❤️ loaded for Arman & Tulip. Ready for romance.");
});
