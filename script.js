// ============================================
// GEMINI FLOW - 7 FITUR DENGAN SIMULASI INTERAKTIF
// ============================================

// ============================================
// 1. DATA GAME - BACKGROUNDS & KARAKTER
// ============================================
const gameData = {
    backgrounds: {
        gemini: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        chat: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=300&fit=crop",
        voice: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop",
        workspace: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
        video: "https://images.unsplash.com/photo-1536240474400-95dad987e6a5?w=400&h=300&fit=crop",
        research: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
        gems: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
        music: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop",
        success: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop"
    },
    
   character: "bintang.png",
    
    // ============================================
    // 2. SCENES - 7 FITUR GEMINI
    // ============================================
    scenes: [
        // ========== INTRO ==========
        {
            id: 0,
            text: "Halo! Aku Bintang Permana. Yuk kita coba langsung 7 fitur keren Gemini dengan simulasi interaktif!",
            bg: "gemini",
            feature: "✨ 7 Fitur Gemini",
            // Scene intro punya tombol lanjut
            hasNextButton: true
        },
        
        // ========== FEATURE 1: GEMINI 3 (PENJELASAN) ==========
        {
            id: 1,
            text: "FITUR 1: GEMINI 3 - Model AI canggih untuk menjawab pertanyaan kompleks!",
            bg: "chat",
            feature: "🤖 Gemini 3",
            flowDiagram: {
                icon: "🤖",
                title: "Gemini 3 - Model Utama",
                subtitle: "Chat dengan AI",
                steps: [
                    { number: 1, title: "Buka Gemini", desc: "gemini.google.com" },
                    { number: 2, title: "Pilih Model", desc: "Pilih 'Gemini 3'" },
                    { number: 3, title: "Ketik Pertanyaan", desc: "Tanya apa saja" },
                    { number: 4, title: "Dapatkan Jawaban", desc: "Respons instan" }
                ]
            },
            // Scene penjelasan punya tombol lanjut
            hasNextButton: true
        },
        {
            id: 2,
            text: "Coba chat langsung dengan Gemini 3! Ketik pertanyaanmu di bawah:",
            bg: "chat",
            feature: "🤖 Gemini 3",
            simulation: {
                type: "chat",
                icon: "🤖",
                title: "Gemini 3 - Live Chat",
                placeholder: "Ketik pesan dan tekan kirim...",
                suggestions: [
                    "Apa itu ekonomi digital?",
                    "Jelaskan AI pakai analogi",
                    "Bantu outline skripsi",
                    "Rekomendasi buku"
                ],
                responses: {
                    "Apa itu ekonomi digital?": {
                        icon: "📊",
                        text: "**Ekonomi digital** adalah aktivitas ekonomi yang memanfaatkan internet dan teknologi digital. Contohnya: e-commerce (Shopee, Tokopedia), fintech (GoPay, OVO), marketplace, dan layanan streaming. Bayangkan semua transaksi yang dulu manual, sekarang bisa digital!",
                        time: "2 detik"
                    },
                    "Jelaskan AI pakai analogi": {
                        icon: "🤖",
                        text: "**AI itu seperti anak kecil yang belajar** 🤓\n\n• Pertama, dikasih tahu (data training)\n• Lalu dicontohin (supervised learning)\n• Makin sering latihan, makin pintar (machine learning)\n• Akhirnya bisa nalar sendiri (deep learning)\n\nSama seperti kamu belajar naik sepeda - makin sering makin lancar!",
                        time: "3 detik"
                    },
                    "Bantu outline skripsi": {
                        icon: "📝",
                        text: "**Outline Skripsi Standar:**\n\n📌 BAB 1: Pendahuluan\n├─ Latar Belakang\n├─ Rumusan Masalah\n├─ Tujuan Penelitian\n└─ Manfaat Penelitian\n\n📌 BAB 2: Tinjauan Pustaka\n├─ Landasan Teori\n├─ Penelitian Terdahulu\n└─ Kerangka Berpikir\n\n📌 BAB 3: Metodologi\n├─ Jenis Penelitian\n├─ Populasi/Sampel\n├─ Instrumen\n└─ Analisis Data\n\n📌 BAB 4: Hasil & Pembahasan\n📌 BAB 5: Kesimpulan & Saran\n\nMau saya detailkan bagian tertentu?",
                        time: "4 detik"
                    },
                    "Rekomendasi buku": {
                        icon: "📚",
                        text: "**Rekomendasi Buku Populer:**\n\n1. **Sapiens** - Yuval Noah Harari\n   ↳ Sejarah umat manusia\n\n2. **Atomic Habits** - James Clear\n   ↳ Cara membangun kebiasaan baik\n\n3. **7 Habits** - Stephen Covey\n   ↳ 7 kebiasaan manusia efektif\n\n4. **The Psychology of Money** - Morgan Housel\n   ↳ Psikologi mengelola uang\n\nMau sinopsis salah satunya?",
                        time: "3 detik"
                    }
                }
            }
        },
        
        // ========== FEATURE 2: GEMINI LIVE ==========
        {
            id: 3,
            text: "FITUR 2: GEMINI LIVE - Ngobrol langsung pakai suara!",
            bg: "voice",
            feature: "🎤 Gemini Live",
            flowDiagram: {
                icon: "🎤",
                title: "Gemini Live - Voice Mode",
                subtitle: "Ngobrol seperti dengan teman",
                steps: [
                    { number: 1, title: "Buka Aplikasi", desc: "Gemini di HP" },
                    { number: 2, title: "Klik Ikon Suara", desc: "Ikon gelombang" },
                    { number: 3, title: "Mulai Bicara", desc: "Langsung ngobrol" },
                    { number: 4, title: "Bisa Disela", desc: "Interupsi kapan saja" }
                ]
            },
            hasNextButton: true
        },
        {
            id: 4,
            text: "Tekan mikrofon dan coba bicara! Simulasi voice interaktif:",
            bg: "voice",
            feature: "🎤 Gemini Live",
            simulation: {
                type: "voice",
                icon: "🎤",
                title: "Gemini Live - Voice Assistant",
                status: "Siap mendengarkan...",
                commands: [
                    { 
                        text: "Halo, apa kabar?", 
                        response: "Halo! Aku baik-baik saja. Ada yang bisa aku bantu untuk tugas kuliahmu hari ini? 😊",
                        emotion: "senang"
                    },
                    { 
                        text: "Rekomendasi film", 
                        response: "Rekomendasi film bagus nih! 🎬\n\n• Inception (Sci-Fi)\n• The Social Network (Biopic)\n• 3 idiots (Motivasi)\n• The Imitation Game (Sejarah)\n\nMau trailer atau sinopsis?",
                        emotion: "semangat"
                    },
                    { 
                        text: "Ide konten YouTube", 
                        response: "Ide konten YouTube untuk mahasiswa! 📹\n\n1. 🖥️ Tutorial Coding 5 menit\n2. 📚 Tips belajar efektif\n3. 🎒 Daily vlog kampus\n4. 💻 Review gadget murah\n5. 📝 Cara dapat beasiswa\n\nMau aku elaborasi salah satu?",
                        emotion: "kreatif"
                    },
                    { 
                        text: "Bagaimana cara fokus belajar", 
                        response: "Tips fokus belajar ala produktif! 🎯\n\n1️⃣ **Pomodoro Technique**\n   25 menit belajar - 5 menit istirahat\n\n2️⃣ **Hilangkan Distraksi**\n   Jauhkan HP, matikan notif\n\n3️⃣ **Tempat Nyaman**\n   Cari spot yang mendukung fokus\n\n4️⃣ **Tujuan Jelas**\n   Target spesifik per sesi\n\nMau aku jelasin lebih detail?",
                        emotion: "fokus"
                    }
                ]
            }
        },
        
        // ========== FEATURE 3: FLOW EXTENSIONS ==========
        {
            id: 5,
            text: "FITUR 3: FLOW - Hubungkan Gemini dengan Google Workspace!",
            bg: "workspace",
            feature: "🔌 Flow Extensions",
            flowDiagram: {
                icon: "🔌",
                title: "Flow Extensions",
                subtitle: "Integrasi dengan Google",
                steps: [
                    { number: 1, title: "Aktifkan Extension", desc: "Settings → Extensions" },
                    { number: 2, title: "Centang Workspace", desc: "Drive, Gmail, Docs" },
                    { number: 3, title: "Beri Perintah", desc: "Cari, ringkas, buat" },
                    { number: 4, title: "Dapatkan Hasil", desc: "Data dari akunmu" }
                ]
            },
            hasNextButton: true
        },
        {
            id: 6,
            text: "Coba perintah untuk akses Google Workspace-mu:",
            bg: "workspace",
            feature: "🔌 Flow Extensions",
            simulation: {
                type: "workspace",
                icon: "🔌",
                title: "Flow - Google Workspace",
                files: [
                    { name: "Proposal Skripsi.pdf", type: "pdf", size: "2.4 MB", modified: "Kemarin" },
                    { name: "Presentasi TA.pptx", type: "ppt", size: "5.1 MB", modified: "3 hari lalu" },
                    { name: "Jurnal Referensi.docx", type: "doc", size: "1.2 MB", modified: "Seminggu lalu" },
                    { name: "Data Penelitian.xlsx", type: "xls", size: "3.7 MB", modified: "2 hari lalu" }
                ],
                emails: [
                    { from: "Dosen Pembimbing", subject: "Revisi Bab 3", time: "1 jam lalu" },
                    { from: "BAAK", subject: "Jadwal Sidang", time: "3 jam lalu" },
                    { from: "Teman Kelompok", subject: "Hasil Diskusi", time: "Kemarin" }
                ],
                commands: [
                    { text: "Cari file proposal", action: "search", result: "Menemukan 3 file proposal..." },
                    { text: "Ringkas email hari ini", action: "summary", result: "Ada 5 email penting hari ini..." },
                    { text: "Buat draft laporan", action: "create", result: "Draft laporan siap di Docs..." }
                ]
            }
        },
        
        // ========== FEATURE 4: VEO 3.1 ==========
        {
            id: 7,
            text: "FITUR 4: VEO 3.1 - Bikin video dari teks dengan AI!",
            bg: "video",
            feature: "🎬 Veo 3.1",
            flowDiagram: {
                icon: "🎬",
                title: "Veo 3.1 - Video AI",
                subtitle: "Generate video dalam detik",
                steps: [
                    { number: 1, title: "Deskripsi Video", desc: "Tulis detail video" },
                    { number: 2, title: "Pilih Gaya", desc: "Sinematik, animasi, dll" },
                    { number: 3, title: "Generate", desc: "Tunggu 30-60 detik" },
                    { number: 4, title: "Download", desc: "Video siap pakai" }
                ]
            },
            hasNextButton: true
        },
        {
            id: 8,
            text: "Deskripsikan video yang ingin kamu buat:",
            bg: "video",
            feature: "🎬 Veo 3.1",
            simulation: {
                type: "video",
                icon: "🎬",
                title: "Veo 3.1 - Video Generator",
                presets: [
                    { 
                        name: "Sinematik Alam", 
                        prompt: "Video sinematik hutan hujan tropis dengan efek cahaya matahari menembus dedaunan, gerakan kamera lambat, kualitas 4K",
                        preview: "🌳✨🎥",
                        duration: "5 detik",
                        style: "Sinematik"
                    },
                    { 
                        name: "Animasi 3D", 
                        prompt: "Animasi 3D produk smartphone berputar 360 derajat dengan efek cahaya hologram, background futuristik",
                        preview: "📱🔄✨",
                        duration: "8 detik",
                        style: "3D Animation"
                    },
                    { 
                        name: "Explainervideo", 
                        prompt: "Video explainer tentang AI dengan gaya motion graphics, warna biru dan putih, animasi 2D yang dinamis",
                        preview: "🤖📊🎨",
                        duration: "10 detik",
                        style: "Motion Graphics"
                    },
                    { 
                        name: "Vlog Style", 
                        prompt: "Video vlog casual dengan gaya first person view, suasana kampus, lighting natural",
                        preview: "🎒🏫📱",
                        duration: "15 detik",
                        style: "Realistis"
                    }
                ]
            }
        },
        
        // ========== FEATURE 5: DEEP RESEARCH ==========
        {
            id: 9,
            text: "FITUR 5: DEEP RESEARCH - Riset mendalam dengan banyak sumber!",
            bg: "research",
            feature: "🔍 Deep Research",
            flowDiagram: {
                icon: "🔍",
                title: "Deep Research",
                subtitle: "Riset otomatis",
                steps: [
                    { number: 1, title: "Pilih Mode", desc: "Deep Research" },
                    { number: 2, title: "Masukkan Topik", desc: "Topik risetmu" },
                    { number: 3, title: "AI Mencari", desc: "2-3 menit" },
                    { number: 4, title: "Dapatkan Laporan", desc: "Lengkap + sumber" }
                ]
            },
            hasNextButton: true
        },
        {
            id: 10,
            text: "Pilih topik riset yang ingin dianalisis:",
            bg: "research",
            feature: "🔍 Deep Research",
            simulation: {
                type: "research",
                icon: "🔍",
                title: "Deep Research - AI Analyst",
                topics: [
                    {
                        name: "Dampak AI terhadap Pekerjaan",
                        sources: 24,
                        time: "3 menit",
                        summary: "Berdasarkan analisis dari 24 sumber (jurnal, berita, laporan industri), AI diprediksi akan mengotomatisasi 30% pekerjaan rutin pada 2030, namun juga menciptakan 15% lapangan kerja baru di bidang teknologi.",
                        keyPoints: [
                            "Pekerjaan administratif paling terdampak",
                            "Kebutuhan skill digital meningkat 200%",
                            "5 sektor baru muncul: AI ethics, prompt engineering, AI training"
                        ]
                    },
                    {
                        name: "Ekonomi Digital Indonesia 2025",
                        sources: 18,
                        time: "2.5 menit",
                        summary: "Ekonomi digital Indonesia diprediksi mencapai US$ 130 miliar pada 2025, didorong oleh e-commerce, fintech, dan edutech. UMKM jadi tulang punggung dengan 64% kontribusi.",
                        keyPoints: [
                            "E-commerce tumbuh 40% per tahun",
                            "Pengguna internet 215 juta",
                            "Startup unicorn bertambah 5"
                        ]
                    },
                    {
                        name: "Perubahan Iklim di Asia Tenggara",
                        sources: 31,
                        time: "4 menit",
                        summary: "Asia Tenggara menjadi region paling rentan terhadap perubahan iklim. Kenaikan permukaan laut mengancam kota-kota pesisir. Suhu rata-rata naik 1.5°C dalam 50 tahun.",
                        keyPoints: [
                            "Jakarta tenggelam 10cm/tahun",
                            "Petani rugi 20% gagal panen",
                            "Perlu adaptasi teknologi hijau"
                        ]
                    }
                ]
            }
        },
        
        // ========== FEATURE 6: GEMINI GEMS ==========
        {
            id: 11,
            text: "FITUR 6: GEMS - Bikin asisten AI khusus sesuai kebutuhan!",
            bg: "gems",
            feature: "💎 Gemini Gems",
            flowDiagram: {
                icon: "💎",
                title: "Gemini Gems",
                subtitle: "AI Kustom",
                steps: [
                    { number: 1, title: "Buka Menu Gems", desc: "Sidebar kiri" },
                    { number: 2, title: "Create New Gem", desc: "Klik +" },
                    { number: 3, title: "Beri Nama", desc: "Contoh: Guru Coding" },
                    { number: 4, title: "Isi Instruksi", desc: "Perintah khusus" }
                ]
            },
            hasNextButton: true
        },
        {
            id: 12,
            text: "Buat asisten AI kustom sesuai kebutuhanmu:",
            bg: "gems",
            feature: "💎 Gemini Gems",
            simulation: {
                type: "gems",
                icon: "💎",
                title: "Gemini Gems - AI Builder",
                templates: [
                    {
                        name: "Guru Python",
                        icon: "🐍",
                        instruction: "Kamu adalah guru Python yang sabar. Jelaskan konsep coding dengan analogi sederhana, berikan contoh kode, dan jawab pertanyaan dengan detail.",
                        preview: "Halo! Aku Guru Python. Ada yang mau ditanya tentang coding?"
                    },
                    {
                        name: "Editor Skripsi",
                        icon: "📝",
                        instruction: "Kamu adalah editor profesional. Bantu perbaiki tata bahasa, struktur kalimat, dan beri saran untuk tulisan akademik.",
                        preview: "Siap bantu perbaiki skripsimu! Kirimkan teksmu."
                    },
                    {
                        name: "Tutor Bahasa Inggris",
                        icon: "🇬🇧",
                        instruction: "Kamu adalah tutor bahasa Inggris yang ramah. Bantu practice conversation, koreksi grammar, dan beri tips belajar.",
                        preview: "Hi! Let's practice English together!"
                    },
                    {
                        name: "Research Assistant",
                        icon: "🔬",
                        instruction: "Kamu adalah asisten riset. Bantu cari jurnal, ringkas artikel, dan format sitasi APA/MLA.",
                        preview: "Siap bantu risetmu! Mau cari referensi apa?"
                    }
                ]
            }
        },
        
        // ========== FEATURE 7: LYRIA 3 ==========
        {
            id: 13,
            text: "FITUR 7: LYRIA 3 - Bikin musik original pake AI!",
            bg: "music",
            feature: "🎵 Lyria 3",
            flowDiagram: {
                icon: "🎵",
                title: "Lyria 3 - Music AI",
                subtitle: "Generate musik",
                steps: [
                    { number: 1, title: "Deskripsi Musik", desc: "Genre, suasana" },
                    { number: 2, title: "Atur Durasi", desc: "30-60 detik" },
                    { number: 3, title: "Create", desc: "AI bikin musik" },
                    { number: 4, title: "Download", desc: "Audio siap pakai" }
                ]
            },
            hasNextButton: true
        },
        {
            id: 14,
            text: "Pilih genre musik yang ingin kamu buat:",
            bg: "music",
            feature: "🎵 Lyria 3",
            simulation: {
                type: "music",
                icon: "🎵",
                title: "Lyria 3 - Music Studio",
                genres: [
                    {
                        name: "Akustik Santai",
                        icon: "🎸",
                        description: "Musik akustik dengan gitar fingerstyle, tempo lambat, cocok untuk belajar",
                        duration: "45 detik",
                        instruments: "Gitar akustik, piano",
                        mood: "Tenang, fokus"
                    },
                    {
                        name: "Electronic Beat",
                        icon: "🎧",
                        description: "Electronic beat dengan synth modern, bass kuat, cocok untuk konten tech",
                        duration: "60 detik",
                        instruments: "Synthesizer, drum elektronik",
                        mood: "Enerjik, modern"
                    },
                    {
                        name: "Orkestra Epik",
                        icon: "🎻",
                        description: "Musik orkestra dengan strings dan brass, dramatis, cocok untuk opening video",
                        duration: "50 detik",
                        instruments: "String section, brass, timpani",
                        mood: "Heroik, dramatis"
                    },
                    {
                        name: "Jazz Malam",
                        icon: "🎷",
                        description: "Jazz santai dengan saksofon, piano, dan double bass, suasana kafe",
                        duration: "55 detik",
                        instruments: "Saksofon, piano, double bass",
                        mood: "Romantis, santai"
                    }
                ]
            }
        },
        
        // ========== RECAP ==========
        {
            id: 15,
            text: "Wah! Kamu sudah mencoba 7 fitur Gemini dengan simulasi interaktif!",
            bg: "gemini",
            feature: "🎯 Complete!",
            hasNextButton: true
        },
        {
            id: 16,
            text: "1. 🤖 Gemini 3 - Chat dengan AI\n2. 🎤 Gemini Live - Voice interaction\n3. 🔌 Flow - Google Workspace\n4. 🎬 Veo 3.1 - Video generation\n5. 🔍 Deep Research - Riset\n6. 💎 Gems - AI kustom\n7. 🎵 Lyria 3 - Musik AI",
            bg: "gemini",
            feature: "✨ 7 Fitur",
            hasNextButton: true
        },
        {
            id: 17,
            text: "Semua fitur bisa dicoba langsung di gemini.google.com. Selamat berkreasi!",
            bg: "success",
            feature: "🚀 Siap Praktek",
            hasNextButton: true
        }
    ]
};

// ============================================
// 3. GAME STATE
// ============================================
let currentScene = 0;
let score = 0;
let featuresLearned = {
    gemini3: false,
    live: false,
    flow: false,
    veo: false,
    research: false,
    gems: false,
    lyria: false
};

// ============================================
// 4. DOM ELEMENTS
// ============================================
const elements = {
    // Visual
    bg: document.getElementById('bg-layer'),
    character: document.getElementById('character'),
    
    // Chat
    speaker: document.getElementById('speaker-name'),
    message: document.getElementById('message'),
    
    // Flow & Simulation
    flowContainer: document.getElementById('flow-container'),
    simulationContainer: document.getElementById('simulation-container'),
    
    // Choices
    choicePanel: document.getElementById('choice-panel'),
    choiceGrid: document.getElementById('choice-grid'),
    
    // Navigation
    nextBtn: document.getElementById('next-btn'),
    
    // Score
    score: document.getElementById('score'),
    
    // Popup
    popup: document.getElementById('success-popup'),
    popupIcon: document.getElementById('popup-icon'),
    popupTitle: document.getElementById('popup-title'),
    popupDesc: document.getElementById('popup-desc'),
    
    // End Screen
    endScreen: document.getElementById('end-screen'),
    finalScore: document.getElementById('final-score'),
    rankCard: document.getElementById('rank-card'),
    finalQuote: document.getElementById('final-quote'),
    
    // Badges
    featureChip: document.getElementById('feature-chip'),
    chipIcon: document.getElementById('chip-icon'),
    chipText: document.getElementById('chip-text'),
    currentStep: document.getElementById('current-step'),
    totalSteps: document.getElementById('total-steps'),
    typing: document.getElementById('typing')
};

// ============================================
// 5. INITIALIZATION
// ============================================
function init() {
    console.log("✨ Gemini Flow - Game Started");
    
    // Set character
    if (elements.character) {
        elements.character.src = gameData.character;
    }
    
    // Set total steps
    if (elements.totalSteps) {
        elements.totalSteps.textContent = gameData.scenes.length;
    }
    
    // Load first scene
    loadScene(0);
    
    // Add event listener to next button
    if (elements.nextBtn) {
        elements.nextBtn.addEventListener('click', nextScene);
    }
}

// ============================================
// 6. SCENE MANAGEMENT - DIPERBAIKI DENGAN TOMBOL LANJUT
// ============================================
function loadScene(id) {
    const scene = gameData.scenes[id];
    
    if (!scene) {
        finish();
        return;
    }
    
    console.log(`Loading scene ${id}: ${scene.feature || 'Intro'}`);
    
    // Update background
    if (elements.bg && scene.bg) {
        elements.bg.style.backgroundImage = `url(${gameData.backgrounds[scene.bg]})`;
    }
    
    // Update message
    if (elements.message) {
        elements.message.textContent = scene.text;
    }
    
    // Update step
    if (elements.currentStep) {
        elements.currentStep.textContent = id + 1;
    }
    
    // Update feature chip
    if (elements.featureChip) {
        if (scene.feature) {
            const icon = scene.feature.split(' ')[0];
            const text = scene.feature.substring(icon.length + 1);
            
            elements.chipIcon.textContent = icon;
            elements.chipText.textContent = text;
            elements.featureChip.classList.remove('hidden');
        } else {
            elements.featureChip.classList.add('hidden');
        }
    }
    
    // Animate character
    animateCharacter();
    
    // Hide elements
    if (elements.choicePanel) {
        elements.choicePanel.classList.add('hidden');
    }
    
    // Clear containers
    if (elements.flowContainer) {
        elements.flowContainer.innerHTML = '';
    }
    
    if (elements.simulationContainer) {
        elements.simulationContainer.innerHTML = '';
    }
    
    // Show flow diagram if available
    if (scene.flowDiagram) {
        renderFlowDiagram(scene.flowDiagram);
    }
    
    // Show simulation if available
    if (scene.simulation) {
        renderSimulation(scene.simulation);
    }
    
    // Show choices if available (fallback)
    if (scene.choices && !scene.simulation) {
        renderChoices(scene.choices);
    }
    
    // TAMPILKAN TOMBOL LANJUT UNTUK SCENE INTRO DAN PENJELASAN
    if (scene.hasNextButton) {
        if (elements.nextBtn) {
            elements.nextBtn.classList.remove('hidden');
        }
    } else {
        if (elements.nextBtn) {
            elements.nextBtn.classList.add('hidden');
        }
    }
}

// ============================================
// 7. FLOW DIAGRAM RENDERER
// ============================================
function renderFlowDiagram(diagram) {
    if (!elements.flowContainer) return;
    
    let stepsHTML = '';
    
    diagram.steps.forEach((step, index) => {
        stepsHTML += `
            <div class="flow-step">
                <div class="step-bubble">${step.number}</div>
                <div class="step-content">
                    <div class="step-title">${step.title}</div>
                    <div class="step-desc">${step.desc}</div>
                </div>
            </div>
        `;
        
        if (index < diagram.steps.length - 1) {
            stepsHTML += `<div class="step-connector"></div>`;
        }
    });
    
    const flowHTML = `
        <div class="flow-diagram">
            <div class="flow-header">
                <div class="flow-header-icon">${diagram.icon}</div>
                <div>
                    <div class="flow-header-title">${diagram.title}</div>
                    <div class="flow-header-sub">${diagram.subtitle || 'Langkah-langkah'}</div>
                </div>
            </div>
            <div class="flow-steps">${stepsHTML}</div>
        </div>
    `;
    
    elements.flowContainer.innerHTML = flowHTML;
}

// ============================================
// 8. MAIN SIMULATION DISPATCHER
// ============================================
function renderSimulation(simulation) {
    if (!elements.simulationContainer) return;
    
    switch(simulation.type) {
        case 'chat':
            renderChatSimulation(simulation);
            break;
        case 'voice':
            renderVoiceSimulation(simulation);
            break;
        case 'workspace':
            renderWorkspaceSimulation(simulation);
            break;
        case 'video':
            renderVideoSimulation(simulation);
            break;
        case 'research':
            renderResearchSimulation(simulation);
            break;
        case 'gems':
            renderGemsSimulation(simulation);
            break;
        case 'music':
            renderMusicSimulation(simulation);
            break;
    }
}

// ============================================
// 9. CHAT SIMULATION - DENGAN TOMBOL LANJUT
// ============================================
function renderChatSimulation(sim) {
    let chatCompleted = false;
    
    const html = `
        <div class="simulation-card chat-sim">
            <div class="sim-header">
                <span class="sim-icon">${sim.icon}</span>
                <span class="sim-title">${sim.title}</span>
            </div>
            
            <div class="chat-window">
                <div class="chat-messages" id="chat-messages">
                    <div class="message bot">
                        <div class="avatar">🤖</div>
                        <div class="bubble bot-bubble">Halo! Ada yang bisa saya bantu? Silakan ketik pertanyaanmu.</div>
                    </div>
                </div>
                
                <div class="suggestions" id="suggestions">
                    ${sim.suggestions.map(s => `<button class="suggestion-chip" data-text="${s}">${s}</button>`).join('')}
                </div>
                
                <div class="chat-input-area">
                    <input type="text" class="chat-input" id="chat-input" placeholder="${sim.placeholder}">
                    <button class="send-btn" id="send-btn">📤 Kirim</button>
                </div>
            </div>
            
            <!-- TOMBOL LANJUT - MUNCUL SETELAH INTERAKSI -->
            <div class="simulation-footer hidden" id="chat-footer">
                <button class="continue-btn" id="continue-chat">Lanjut ke Fitur Berikutnya →</button>
            </div>
        </div>
    `;
    
    elements.simulationContainer.innerHTML = html;
    
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');
    const chatFooter = document.getElementById('chat-footer');
    const continueBtn = document.getElementById('continue-chat');
    
    // Suggestion chips
    document.querySelectorAll('.suggestion-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            chatInput.value = this.dataset.text;
        });
    });
    
    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;
        
        // Disable input
        chatInput.disabled = true;
        sendBtn.disabled = true;
        
        // Add user message
        chatMessages.innerHTML += `
            <div class="message user">
                <div class="bubble user-bubble">${text}</div>
                <div class="avatar">👤</div>
            </div>
        `;
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Show typing
        chatMessages.innerHTML += `
            <div class="message bot" id="typing-indicator">
                <div class="avatar">🤖</div>
                <div class="bubble typing"><span>⚡</span><span>⚡</span><span>⚡</span></div>
            </div>
        `;
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Response
        setTimeout(() => {
            document.getElementById('typing-indicator')?.remove();
            
            // Cari response
            let response = sim.responses[text] || sim.responses[Object.keys(sim.responses)[0]];
            
            chatMessages.innerHTML += `
                <div class="message bot">
                    <div class="avatar">🤖</div>
                    <div class="bubble bot-bubble">
                        <div style="display: flex; gap: 8px;">
                            <span style="font-size: 1.5rem;">${response.icon}</span>
                            <div>
                                ${response.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}
                                <div style="font-size:0.7rem; color:#999; margin-top:8px;">⚡ ${response.time}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Update score
            score += 5;
            elements.score.textContent = score;
            featuresLearned.gemini3 = true;
            
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // TAMPILKAN TOMBOL LANJUT
            if (!chatCompleted) {
                chatCompleted = true;
                chatFooter.classList.remove('hidden');
            }
            
            // Enable input lagi
            chatInput.disabled = false;
            sendBtn.disabled = false;
            chatInput.value = '';
            
        }, 1500);
    }
    
    sendBtn.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    
    // EVENT LISTENER TOMBOL LANJUT
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            currentScene++;
            loadScene(currentScene);
        });
    }
}

// ============================================
// 10. VOICE SIMULATION - DENGAN TOMBOL LANJUT
// ============================================
function renderVoiceSimulation(sim) {
    let voiceCompleted = false;
    
    const html = `
        <div class="simulation-card voice-sim">
            <div class="sim-header">
                <span class="sim-icon">${sim.icon}</span>
                <span class="sim-title">${sim.title}</span>
            </div>
            
            <div class="voice-container">
                <div class="voice-wave" id="voice-wave">
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
                
                <div class="voice-status" id="voice-status">${sim.status}</div>
                
                <div class="voice-commands">
                    <p class="commands-title">📋 Klik perintah suara untuk mencoba:</p>
                    <div class="commands-grid">
                        ${sim.commands.map(cmd => `
                            <button class="command-btn" data-command="${cmd.text}">
                                <span>🎤</span>
                                ${cmd.text}
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                <div class="voice-response" id="voice-response"></div>
            </div>
            
            <!-- TOMBOL LANJUT - MUNCUL SETELAH INTERAKSI -->
            <div class="simulation-footer hidden" id="voice-footer">
                <button class="continue-btn" id="continue-voice">Lanjut ke Fitur Berikutnya →</button>
            </div>
        </div>
    `;
    
    elements.simulationContainer.innerHTML = html;
    
    const voiceWave = document.getElementById('voice-wave');
    const voiceStatus = document.getElementById('voice-status');
    const voiceResponse = document.getElementById('voice-response');
    const voiceFooter = document.getElementById('voice-footer');
    const continueBtn = document.getElementById('continue-voice');
    
    document.querySelectorAll('.command-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Disable all command buttons
            document.querySelectorAll('.command-btn').forEach(b => {
                b.disabled = true;
                b.style.opacity = '0.5';
            });
            
            const command = this.dataset.command;
            const cmdData = sim.commands.find(c => c.text === command);
            
            // Animate voice wave
            voiceWave.classList.add('active');
            voiceStatus.textContent = 'Mendengarkan...';
            
            // Simulate listening
            setTimeout(() => {
                voiceWave.classList.remove('active');
                voiceStatus.textContent = 'Memproses...';
                
                setTimeout(() => {
                    voiceStatus.textContent = 'Selesai!';
                    voiceResponse.innerHTML = `
                        <div class="voice-response-card" style="border-left-color: ${getEmotionColor(cmdData.emotion)}">
                            <div style="display: flex; gap: 12px;">
                                <span style="font-size: 2rem;">${cmdData.text.includes('Halo') ? '👋' : 
                                    cmdData.text.includes('film') ? '🎬' : 
                                    cmdData.text.includes('konten') ? '📹' : '🎯'}</span>
                                <div>
                                    <p style="font-weight: 600; margin-bottom: 8px; color: #4285F4;">"${cmdData.text}"</p>
                                    <p style="color: #333; line-height: 1.5;">${cmdData.response}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    // Update score
                    score += 10;
                    elements.score.textContent = score;
                    
                    if (!featuresLearned.live) {
                        featuresLearned.live = true;
                    }
                    
                    // TAMPILKAN TOMBOL LANJUT
                    if (!voiceCompleted) {
                        voiceCompleted = true;
                        voiceFooter.classList.remove('hidden');
                    }
                    
                }, 1500);
            }, 2000);
        });
    });
    
    // EVENT LISTENER TOMBOL LANJUT
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            currentScene++;
            loadScene(currentScene);
        });
    }
    
    function getEmotionColor(emotion) {
        switch(emotion) {
            case 'senang': return '#34A853';
            case 'semangat': return '#FBBC05';
            case 'kreatif': return '#4285F4';
            case 'fokus': return '#EA4335';
            default: return '#4285F4';
        }
    }
}

// ============================================
// 11. WORKSPACE SIMULATION - DENGAN TOMBOL LANJUT
// ============================================
function renderWorkspaceSimulation(sim) {
    let workspaceCompleted = false;
    
    const html = `
        <div class="simulation-card workspace-sim">
            <div class="sim-header">
                <span class="sim-icon">${sim.icon}</span>
                <span class="sim-title">${sim.title}</span>
            </div>
            
            <div class="workspace-container">
                <div class="workspace-tabs">
                    <button class="tab-btn active" data-tab="files">📁 Files</button>
                    <button class="tab-btn" data-tab="emails">📧 Emails</button>
                    <button class="tab-btn" data-tab="commands">⚡ Commands</button>
                </div>
                
                <div class="workspace-content" id="workspace-content">
                    <div class="files-view active">
                        ${sim.files.map(file => `
                            <div class="file-item">
                                <span class="file-icon">${file.type === 'pdf' ? '📄' : 
                                    file.type === 'ppt' ? '📊' : 
                                    file.type === 'doc' ? '📝' : '📈'}</span>
                                <div class="file-info">
                                    <div class="file-name">${file.name}</div>
                                    <div class="file-meta">${file.size} • ${file.modified}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="emails-view hidden">
                        ${sim.emails.map(email => `
                            <div class="email-item">
                                <span class="email-from">${email.from}</span>
                                <span class="email-subject">${email.subject}</span>
                                <span class="email-time">${email.time}</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="commands-view hidden">
                        <p class="commands-hint">Coba ketik perintah:</p>
                        <div class="command-input-group">
                            <input type="text" class="command-input" id="command-input" placeholder="Contoh: Cari file proposal">
                            <button class="command-execute" id="command-execute">▶ Jalankan</button>
                        </div>
                        <div class="command-result" id="command-result"></div>
                    </div>
                </div>
            </div>
            
            <!-- TOMBOL LANJUT - MUNCUL SETELAH INTERAKSI -->
            <div class="simulation-footer hidden" id="workspace-footer">
                <button class="continue-btn" id="continue-workspace">Lanjut ke Fitur Berikutnya →</button>
            </div>
        </div>
    `;
    
    elements.simulationContainer.innerHTML = html;
    
    const workspaceFooter = document.getElementById('workspace-footer');
    const continueBtn = document.getElementById('continue-workspace');
    
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.files-view, .emails-view, .commands-view').forEach(v => v.classList.add('hidden'));
            
            const tab = this.dataset.tab;
            if (tab === 'files') document.querySelector('.files-view').classList.remove('hidden');
            if (tab === 'emails') document.querySelector('.emails-view').classList.remove('hidden');
            if (tab === 'commands') document.querySelector('.commands-view').classList.remove('hidden');
        });
    });
    
    // Command execution
    const commandInput = document.getElementById('command-input');
    const commandExecute = document.getElementById('command-execute');
    const commandResult = document.getElementById('command-result');
    
    commandExecute.addEventListener('click', () => {
        const cmd = commandInput.value.toLowerCase();
        let result = '';
        
        if (cmd.includes('cari file') || cmd.includes('proposal')) {
            result = '🔍 Menemukan 3 file: Proposal Skripsi.pdf, Proposal TA.docx, Proposal Penelitian.pptx';
        } else if (cmd.includes('ringkas email')) {
            result = '📧 Ringkasan 5 email hari ini:\n• Dosen: Revisi Bab 3\n• BAAK: Jadwal Sidang\n• Teman: Hasil Diskusi\n• Perpustakaan: Peminjaman\n• UKM: Rapat Mingguan';
        } else if (cmd.includes('buat draft')) {
            result = '📝 Draft laporan dibuat di Google Docs: "Laporan_Analisis_2025" - siap diedit!';
        } else {
            result = '⚡ Perintah tidak dikenali. Coba: "Cari file proposal", "Ringkas email", atau "Buat draft laporan"';
        }
        
        commandResult.innerHTML = `
            <div style="background: #f0f7ff; padding: 15px; border-radius: 12px; border-left: 4px solid #4285F4;">
                ${result.replace(/\n/g, '<br>')}
            </div>
        `;
        
        // Update score
        score += 10;
        elements.score.textContent = score;
        
        if (!featuresLearned.flow) {
            featuresLearned.flow = true;
        }
        
        // TAMPILKAN TOMBOL LANJUT
        if (!workspaceCompleted) {
            workspaceCompleted = true;
            workspaceFooter.classList.remove('hidden');
        }
    });
    
    // EVENT LISTENER TOMBOL LANJUT
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            currentScene++;
            loadScene(currentScene);
        });
    }
}

// ============================================
// 12. VIDEO SIMULATION - DENGAN TOMBOL LANJUT
// ============================================
function renderVideoSimulation(sim) {
    let videoCompleted = false;
    
    const html = `
        <div class="simulation-card video-sim">
            <div class="sim-header">
                <span class="sim-icon">${sim.icon}</span>
                <span class="sim-title">${sim.title}</span>
            </div>
            
            <div class="video-container">
                <div class="video-presets">
                    ${sim.presets.map(preset => `
                        <button class="preset-btn" data-prompt="${preset.prompt}" data-name="${preset.name}">
                            <span class="preset-preview">${preset.preview}</span>
                            <span class="preset-name">${preset.name}</span>
                            <span class="preset-style">${preset.style}</span>
                        </button>
                    `).join('')}
                </div>
                
                <div class="video-preview" id="video-preview">
                    <div class="preview-placeholder">
                        <span class="preview-icon">🎬</span>
                        <p>Pilih preset atau tulis prompt</p>
                    </div>
                </div>
                
                <div class="video-custom">
                    <textarea class="video-prompt" id="video-prompt" placeholder="Atau tulis prompt sendiri..."></textarea>
                    <button class="generate-btn" id="generate-video">✨ Generate Video</button>
                </div>
            </div>
            
            <!-- TOMBOL LANJUT - MUNCUL SETELAH INTERAKSI -->
            <div class="simulation-footer hidden" id="video-footer">
                <button class="continue-btn" id="continue-video">Lanjut ke Fitur Berikutnya →</button>
            </div>
        </div>
    `;
    
    elements.simulationContainer.innerHTML = html;
    
    const videoPreview = document.getElementById('video-preview');
    const videoPrompt = document.getElementById('video-prompt');
    const videoFooter = document.getElementById('video-footer');
    const continueBtn = document.getElementById('continue-video');
    
    function generateVideo(prompt, name) {
        // Disable buttons while generating
        document.querySelectorAll('.preset-btn, #generate-video').forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.5';
        });
        
        videoPreview.innerHTML = `
            <div class="video-loading">
                <div class="spinner"></div>
                <p>Membuat video ${name ? '"' + name + '"' : ''}...</p>
            </div>
        `;
        
        setTimeout(() => {
            videoPreview.innerHTML = `
                <div class="video-result">
                    <video controls style="width: 100%; border-radius: 12px; background: #000;">
                        <source src="#" type="video/mp4">
                        <div style="color: white; text-align: center; padding: 20px;">[Preview Video]</div>
                    </video>
                    <div style="display: flex; gap: 10px; margin-top: 10px;">
                        <span class="video-badge">✨ Durasi: 8 detik</span>
                        <span class="video-badge">🎬 Siap download</span>
                    </div>
                </div>
            `;
            
            // Update score
            score += 15;
            elements.score.textContent = score;
            
            if (!featuresLearned.veo) {
                featuresLearned.veo = true;
            }
            
            // TAMPILKAN TOMBOL LANJUT
            if (!videoCompleted) {
                videoCompleted = true;
                videoFooter.classList.remove('hidden');
            }
            
            // Re-enable buttons
            document.querySelectorAll('.preset-btn, #generate-video').forEach(btn => {
                btn.disabled = false;
                btn.style.opacity = '1';
            });
            
        }, 2500);
    }
    
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const prompt = this.dataset.prompt;
            const name = this.dataset.name;
            generateVideo(prompt, name);
        });
    });
    
    document.getElementById('generate-video').addEventListener('click', function() {
        if (!videoPrompt.value.trim()) {
            alert('Silakan tulis prompt video terlebih dahulu');
            return;
        }
        generateVideo(videoPrompt.value, 'Custom');
    });
    
    // EVENT LISTENER TOMBOL LANJUT
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            currentScene++;
            loadScene(currentScene);
        });
    }
}

// ============================================
// 13. RESEARCH SIMULATION - DENGAN TOMBOL LANJUT
// ============================================
function renderResearchSimulation(sim) {
    let researchCompleted = false;
    
    const html = `
        <div class="simulation-card research-sim">
            <div class="sim-header">
                <span class="sim-icon">${sim.icon}</span>
                <span class="sim-title">${sim.title}</span>
            </div>
            
            <div class="research-container">
                <div class="research-topics">
                    ${sim.topics.map(topic => `
                        <button class="topic-btn" data-topic='${JSON.stringify(topic)}'>
                            <span class="topic-icon">🔍</span>
                            <span class="topic-name">${topic.name}</span>
                            <span class="topic-sources">${topic.sources} sumber</span>
                        </button>
                    `).join('')}
                </div>
                
                <div class="research-result" id="research-result"></div>
            </div>
            
            <!-- TOMBOL LANJUT - MUNCUL SETELAH INTERAKSI -->
            <div class="simulation-footer hidden" id="research-footer">
                <button class="continue-btn" id="continue-research">Lanjut ke Fitur Berikutnya →</button>
            </div>
        </div>
    `;
    
    elements.simulationContainer.innerHTML = html;
    
    const researchResult = document.getElementById('research-result');
    const researchFooter = document.getElementById('research-footer');
    const continueBtn = document.getElementById('continue-research');
    
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Disable all topic buttons
            document.querySelectorAll('.topic-btn').forEach(b => {
                b.disabled = true;
                b.style.opacity = '0.5';
            });
            
            const topic = JSON.parse(this.dataset.topic);
            
            researchResult.innerHTML = `
                <div class="research-loading">
                    <div class="spinner"></div>
                    <p>AI mencari ${topic.sources} sumber...</p>
                </div>
            `;
            
            setTimeout(() => {
                researchResult.innerHTML = `
                    <div class="research-card">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                            <h3 style="color: #4285F4;">${topic.name}</h3>
                            <span style="background: #34A853; color: white; padding: 4px 10px; border-radius: 20px;">
                                ⚡ ${topic.time}
                            </span>
                        </div>
                        
                        <p style="margin-bottom: 15px; line-height: 1.5;">${topic.summary}</p>
                        
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 12px;">
                            <p style="font-weight: 600; margin-bottom: 8px;">📌 Poin Penting:</p>
                            <ul style="padding-left: 20px;">
                                ${topic.keyPoints.map(point => `<li style="margin-bottom: 5px;">${point}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div style="margin-top: 15px; display: flex; gap: 10px;">
                            <span class="source-badge">📚 ${topic.sources} sumber</span>
                            <span class="source-badge">✅ Terverifikasi</span>
                        </div>
                    </div>
                `;
                
                // Update score
                score += 20;
                elements.score.textContent = score;
                
                if (!featuresLearned.research) {
                    featuresLearned.research = true;
                }
                
                // TAMPILKAN TOMBOL LANJUT
                if (!researchCompleted) {
                    researchCompleted = true;
                    researchFooter.classList.remove('hidden');
                }
                
            }, 3000);
        });
    });
    
    // EVENT LISTENER TOMBOL LANJUT
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            currentScene++;
            loadScene(currentScene);
        });
    }
}

// ============================================
// 14. GEMS SIMULATION - DENGAN TOMBOL LANJUT
// ============================================
function renderGemsSimulation(sim) {
    let gemsCompleted = false;
    
    const html = `
        <div class="simulation-card gems-sim">
            <div class="sim-header">
                <span class="sim-icon">${sim.icon}</span>
                <span class="sim-title">${sim.title}</span>
            </div>
            
            <div class="gems-container">
                <div class="gems-templates">
                    ${sim.templates.map(template => `
                        <button class="gem-template" data-template='${JSON.stringify(template)}'>
                            <span class="gem-icon">${template.icon}</span>
                            <span class="gem-name">${template.name}</span>
                        </button>
                    `).join('')}
                </div>
                
                <div class="gem-preview" id="gem-preview">
                    <p class="preview-hint">Pilih template untuk membuat Gem</p>
                </div>
                
                <div class="gem-custom hidden" id="gem-custom">
                    <input type="text" class="gem-name-input" id="gem-name" placeholder="Nama Gem" value="Custom AI">
                    <textarea class="gem-instruction" id="gem-instruction" placeholder="Instruksi untuk Gem..."></textarea>
                    <button class="create-gem-btn" id="create-gem">💎 Create Gem</button>
                </div>
            </div>
            
            <!-- TOMBOL LANJUT - MUNCUL SETELAH INTERAKSI -->
            <div class="simulation-footer hidden" id="gems-footer">
                <button class="continue-btn" id="continue-gems">Lanjut ke Fitur Berikutnya →</button>
            </div>
        </div>
    `;
    
    elements.simulationContainer.innerHTML = html;
    
    const gemPreview = document.getElementById('gem-preview');
    const gemCustom = document.getElementById('gem-custom');
    const gemName = document.getElementById('gem-name');
    const gemInstruction = document.getElementById('gem-instruction');
    const createBtn = document.getElementById('create-gem');
    const gemsFooter = document.getElementById('gems-footer');
    const continueBtn = document.getElementById('continue-gems');
    
    document.querySelectorAll('.gem-template').forEach(btn => {
        btn.addEventListener('click', function() {
            const template = JSON.parse(this.dataset.template);
            
            gemCustom.classList.remove('hidden');
            gemName.value = template.name;
            gemInstruction.value = template.instruction;
            
            gemPreview.innerHTML = `
                <div class="gem-live-preview">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                        <span style="font-size: 2rem;">${template.icon}</span>
                        <span style="font-weight: 800; color: #4285F4;">${template.name}</span>
                    </div>
                    <div style="background: #f0f7ff; padding: 15px; border-radius: 12px;">
                        ${template.preview}
                    </div>
                </div>
            `;
        });
    });
    
    createBtn.addEventListener('click', function() {
        const name = gemName.value;
        const instruction = gemInstruction.value;
        
        if (!name || !instruction) {
            alert('Harap isi nama dan instruksi Gem');
            return;
        }
        
        // Disable create button
        createBtn.disabled = true;
        createBtn.style.opacity = '0.5';
        
        gemPreview.innerHTML = `
            <div class="gem-success" style="text-align: center; padding: 20px;">
                <div class="spinner" style="margin: 20px auto;"></div>
                <p>Membuat Gem "${name}"...</p>
            </div>
        `;
        
        setTimeout(() => {
            gemPreview.innerHTML = `
                <div class="gem-success" style="text-align: center; padding: 20px;">
                    <span style="font-size: 3rem;">✅</span>
                    <h3 style="color: #34A853; margin: 10px 0;">Gem "${name}" berhasil dibuat!</h3>
                    <p style="color: #666;">${instruction.substring(0, 50)}...</p>
                </div>
            `;
            
            // Update score
            score += 20;
            elements.score.textContent = score;
            
            if (!featuresLearned.gems) {
                featuresLearned.gems = true;
            }
            
            // TAMPILKAN TOMBOL LANJUT
            if (!gemsCompleted) {
                gemsCompleted = true;
                gemsFooter.classList.remove('hidden');
            }
            
        }, 2000);
    });
    
    // EVENT LISTENER TOMBOL LANJUT
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            currentScene++;
            loadScene(currentScene);
        });
    }
}

// ============================================
// 15. MUSIC SIMULATION - DENGAN TOMBOL LANJUT
// ============================================
function renderMusicSimulation(sim) {
    let musicCompleted = false;
    
    const html = `
        <div class="simulation-card music-sim">
            <div class="sim-header">
                <span class="sim-icon">${sim.icon}</span>
                <span class="sim-title">${sim.title}</span>
            </div>
            
            <div class="music-container">
                <div class="music-genres">
                    ${sim.genres.map(genre => `
                        <button class="genre-btn" data-genre='${JSON.stringify(genre)}'>
                            <span class="genre-icon">${genre.icon}</span>
                            <span class="genre-name">${genre.name}</span>
                        </button>
                    `).join('')}
                </div>
                
                <div class="music-player" id="music-player">
                    <div class="player-placeholder">
                        <span class="note-icon">🎵</span>
                        <p>Pilih genre untuk membuat musik</p>
                    </div>
                </div>
            </div>
            
            <!-- TOMBOL LANJUT - MUNCUL SETELAH INTERAKSI -->
            <div class="simulation-footer hidden" id="music-footer">
                <button class="continue-btn" id="continue-music">Lanjut ke Fitur Berikutnya →</button>
            </div>
        </div>
    `;
    
    elements.simulationContainer.innerHTML = html;
    
    const musicPlayer = document.getElementById('music-player');
    const musicFooter = document.getElementById('music-footer');
    const continueBtn = document.getElementById('continue-music');
    
    document.querySelectorAll('.genre-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Disable all genre buttons
            document.querySelectorAll('.genre-btn').forEach(b => {
                b.disabled = true;
                b.style.opacity = '0.5';
            });
            
            const genre = JSON.parse(this.dataset.genre);
            
            musicPlayer.innerHTML = `
                <div class="music-loading">
                    <div class="spinner"></div>
                    <p>AI menciptakan musik ${genre.name}...</p>
                </div>
            `;
            
            setTimeout(() => {
                musicPlayer.innerHTML = `
                    <div class="music-playing">
                        <div class="music-waveform">
                            <span></span><span></span><span></span><span></span><span></span>
                            <span></span><span></span><span></span><span></span><span></span>
                        </div>
                        
                        <div style="text-align: center; margin: 15px 0;">
                            <span style="font-size: 3rem;">${genre.icon}</span>
                            <h3 style="color: #4285F4;">${genre.name}</h3>
                        </div>
                        
                        <div style="display: flex; gap: 20px; justify-content: center; margin: 15px 0; flex-wrap: wrap;">
                            <span class="music-badge">⏱️ ${genre.duration}</span>
                            <span class="music-badge">🎸 ${genre.instruments}</span>
                            <span class="music-badge">🎭 ${genre.mood}</span>
                        </div>
                        
                        <div style="background: #f0f7ff; padding: 15px; border-radius: 12px; margin: 15px 0;">
                            ${genre.description}
                        </div>
                        
                        <div style="display: flex; gap: 10px; justify-content: center;">
                            <button class="play-btn" id="play-music">▶ Play Preview</button>
                            <button class="download-btn" disabled>⬇ Download</button>
                        </div>
                        
                        <div class="music-progress" style="margin-top: 15px;">
                            <div class="progress-bar" style="width: 0%;"></div>
                        </div>
                    </div>
                `;
                
                // Play button functionality
                const playBtn = document.getElementById('play-music');
                const progressBar = document.querySelector('.progress-bar');
                
                playBtn.addEventListener('click', function() {
                    if (this.textContent === '▶ Play Preview') {
                        this.textContent = '⏸ Pause';
                        let width = 0;
                        const interval = setInterval(() => {
                            width += 1;
                            progressBar.style.width = width + '%';
                            if (width >= 100) {
                                clearInterval(interval);
                                this.textContent = '▶ Play Preview';
                            }
                        }, 300);
                    } else {
                        this.textContent = '▶ Play Preview';
                    }
                });
                
                // Update score
                score += 15;
                elements.score.textContent = score;
                
                if (!featuresLearned.lyria) {
                    featuresLearned.lyria = true;
                }
                
                // TAMPILKAN TOMBOL LANJUT
                if (!musicCompleted) {
                    musicCompleted = true;
                    musicFooter.classList.remove('hidden');
                }
                
            }, 2500);
        });
    });
    
    // EVENT LISTENER TOMBOL LANJUT
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            currentScene++;
            loadScene(currentScene);
        });
    }
}

// ============================================
// 16. CHOICE RENDERER (FALLBACK)
// ============================================
function renderChoices(choices) {
    if (!elements.choiceGrid || !elements.choicePanel) return;
    
    elements.choiceGrid.innerHTML = '';
    elements.choicePanel.classList.remove('hidden');
    
    choices.forEach((choice) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        
        btn.innerHTML = `
            <span>${choice.text}</span>
            <span class="gemini-badge">✨ Coba</span>
        `;
        
        btn.onclick = () => {
            // Update score
            score += choice.score;
            elements.score.textContent = score;
            
            // Mark feature as learned
            if (choice.feature && featuresLearned.hasOwnProperty(choice.feature)) {
                featuresLearned[choice.feature] = true;
            }
            
            // Show success message
            showPopup({
                icon: "✅",
                title: "Praktik Berhasil!",
                desc: choice.msg
            });
            
            btn.style.pointerEvents = 'none';
            btn.style.opacity = '0.7';
            
            // Tampilkan next button setelah klik
            if (elements.nextBtn) {
                elements.nextBtn.classList.remove('hidden');
            }
        };
        
        elements.choiceGrid.appendChild(btn);
    });
}

// ============================================
// 17. POPUP
// ============================================
function showPopup(data) {
    if (!elements.popup) return;
    
    elements.popupIcon.textContent = data.icon;
    elements.popupTitle.textContent = data.title;
    elements.popupDesc.textContent = data.desc;
    
    elements.popup.classList.remove('hidden');
    
    setTimeout(() => {
        elements.popup.classList.add('hidden');
    }, 2000);
}

// ============================================
// 18. ANIMATIONS
// ============================================
function animateCharacter() {
    if (!elements.character) return;
    
    elements.character.style.transform = 'scale(1)';
    
    setTimeout(() => {
        elements.character.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            elements.character.style.transform = 'scale(1)';
        }, 200);
    }, 100);
}

// ============================================
// 19. NAVIGATION
// ============================================
function nextScene() {
    if (currentScene < gameData.scenes.length - 1) {
        currentScene++;
        loadScene(currentScene);
    } else {
        finish();
    }
}

// ============================================
// 20. FINISH GAME
// ============================================
function finish() {
    console.log("Game finished! Score:", score);
    
    const learnedCount = Object.values(featuresLearned).filter(v => v).length;
    
    let rank = "Gemini Explorer";
    let quote = "Terus eksplor fitur Gemini di gemini.google.com!";
    
    if (score >= 200 && learnedCount === 7) {
        rank = "🌟 GEMINI MASTER 🌟";
        quote = "Luar biasa! Kamu menguasai semua 7 fitur Gemini!";
    } else if (score >= 150 && learnedCount >= 5) {
        rank = "⭐ GEMINI EXPERT ⭐";
        quote = "Hebat! Kamu sudah paham 5+ fitur Gemini!";
    } else if (score >= 100 && learnedCount >= 3) {
        rank = "GEMINI ENTHUSIAST";
        quote = "Bagus! Kamu sudah kenal 3 fitur utama!";
    } else if (score >= 50) {
        rank = "GEMINI BEGINNER";
        quote = "Terus belajar dan praktikkan fitur-fiturnya!";
    }
    
    // Update end screen
    if (elements.finalScore) {
        elements.finalScore.textContent = score;
    }
    
    if (elements.rankCard) {
        elements.rankCard.innerHTML = `<span class="rank-title">${rank}</span>`;
    }
    
    if (elements.finalQuote) {
        elements.finalQuote.textContent = quote;
    }
    
    // Show end screen
    if (elements.endScreen) {
        elements.endScreen.classList.remove('hidden');
    }
}

// ============================================
// 21. START GAME
// ============================================
document.addEventListener('DOMContentLoaded', init);