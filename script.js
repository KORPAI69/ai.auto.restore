const prompts = {
    1: `You are an expert photo restoration specialist. Analyze this photograph and remove all scratches, dust marks, and blemishes.\n\nTASK:\n1. Identify all visible scratches\n2. Locate every dust spot\n3. Remove using healing techniques\n4. Preserve texture\n5. Blend seamlessly\n\nOUTPUT: Clean, scratch-free image.`,
    2: `You are a color correction specialist. Restore and enhance colors in this faded photograph.\n\nTASK:\n1. Identify color fade\n2. Remove color casts\n3. Restore faded colors naturally\n4. Enhance saturation\n5. Balance white balance\n\nOUTPUT: Vibrant, natural colors.`,
    3: `You are an exposure correction specialist. Enhance brightness in this underexposed photograph.\n\nTASK:\n1. Analyze exposure\n2. Brighten proportionally\n3. Recover shadow details\n4. Protect highlights\n5. Maintain natural appearance\n\nOUTPUT: Well-exposed image.`,
    4: `You are a sharpening specialist. Reduce noise and enhance sharpness in this photograph.\n\nTASK:\n1. Reduce noise\n2. Apply smart sharpening\n3. Enhance edges\n4. Preserve fine details\n5. Avoid artifacts\n\nOUTPUT: Clean, sharp image.`,
    5: `You are a detail recovery specialist. Recover fine details from degraded areas.\n\nTASK:\n1. Analyze missing info\n2. Rebuild textures\n3. Enhance micro-contrast\n4. Maintain original subject\n\nOUTPUT: Crisp, naturally restored details.`,
    6: `You are a tonal master. Improve contrast and depth.\n\nTASK:\n1. Establish true black/white points\n2. Adjust midtones\n3. Enhance local contrast\n4. Avoid clipping\n\nOUTPUT: Dynamic, high-contrast image.`,
    7: `You are a color-grading expert. Neutralize color casts (red, blue, yellow).\n\nTASK:\n1. Identify unnatural casts\n2. Target neutrals to recalibrate\n3. Adjust color channels\n4. Keep skin tones accurate\n\nOUTPUT: Balanced color palette.`,
    8: `You are a historical archivist. Restore this vintage film photograph.\n\nTASK:\n1. Preserve monochrome/sepia aesthetic\n2. Remove silver mirroring\n3. Retain authentic film grain\n4. Smooth emulsion deterioration\n\nOUTPUT: Pristine vintage print.`,
    9: `You are a portrait specialist. Enhance and normalize skin tones.\n\nTASK:\n1. Isolate skin tones\n2. Correct blotchiness\n3. Smooth skin gently\n4. Preserve pores/features\n\nOUTPUT: Healthy, natural skin tones.`,
    10: `You are a botanical color specialist. Enhance foliage and natural tones.\n\nTASK:\n1. Isolate earth tones\n2. Boost foliage vibrance\n3. Bring out leaf textures\n4. Maintain organic relations\n\nOUTPUT: Lush, vibrant nature elements.`,
    11: `You are a shadow-recovery expert. Extract detail from dark areas.\n\nTASK:\n1. Lift black levels\n2. Identify hidden structures\n3. Apply targeted noise reduction\n4. Smooth midtone transitions\n\nOUTPUT: Clean, visible shadow details.`,
    12: `You are a Master Restorer. Perform a complete restoration.\n\nTASK:\n1. STRUCTURAL: Remove all damage\n2. TONAL: Fix exposure/contrast\n3. COLOR: Revitalize colors\n4. DETAIL: Sharpen and denoise\n\nOUTPUT: Fully restored, museum-quality photo.`
};

const translations = {
    en: {
        title: "AI Auto-Restore", uploadTitle: "Upload Photograph", dragDrop: "Drag & Drop your image here or Click to Browse",
        fileLimits: "Max 10MB (JPG, PNG, WebP)", analyzeBtn: "Analyze Image", analyzingBtn: "Analyzing...",
        resultsTitle: "Analysis Results", overallScore: "Overall Quality Score", dimClean: "Cleanliness (25%)",
        dimColor: "Color (25%)", dimBright: "Brightness (20%)", dimSharp: "Sharpness (20%)", dimNoise: "Noise (10%)",
        recommendedPrompts: "Recommended Solutions", p1Title: "Remove Scratches", p2Title: "Restore Colors",
        p3Title: "Enhance Brightness", p4Title: "Enhance Sharpness/Reduce Noise", p5Title: "Enhance Detail Recovery",
        p6Title: "Improve Contrast", p7Title: "Fix Color Cast", p8Title: "Restore Vintage Photos", p9Title: "Enhance Skin Tones",
        p10Title: "Enhance Foliage", p11Title: "Recover Shadow Details", p12Title: "Full Restoration", copyBtn: "Copy Prompt",
        copiedSuccess: "Copied!", errorSize: "File is too large. Max 10MB.", errorType: "Invalid file type. Please use JPG, PNG, or WebP.",
        filterFavs: "⭐ Favorites", downloadBtn: "Download", downloadAll: "Download All", historyTitle: "Recent Analyses",
        clearHistory: "Clear All", emptyHistory: "No recent analyses found.", reuseBtn: "Reuse", deleteBtn: "Delete",
        analyticsTitle: "Analytics Dashboard", statTotal: "Total Analyses", statAvgScore: "Avg. Overall Score",
        statTopIssues: "Most Common Issues", statMostCopied: "Most Copied", chartRadar: "Average Dimensions", chartTrend: "Score Trend"
    },
    th: {
        title: "ระบบฟื้นฟูรูปภาพ", uploadTitle: "อัปโหลดรูปภาพ", dragDrop: "ลากและวางรูปภาพของคุณที่นี่",
        fileLimits: "สูงสุด 10MB (JPG, PNG, WebP)", analyzeBtn: "วิเคราะห์รูปภาพ", analyzingBtn: "กำลังวิเคราะห์...",
        resultsTitle: "ผลการวิเคราะห์", overallScore: "คะแนนคุณภาพรวม", dimClean: "ความสะอาด (25%)",
        dimColor: "สี (25%)", dimBright: "ความสว่าง (20%)", dimSharp: "ความคมชัด (20%)", dimNoise: "สัญญาณรบกวน (10%)",
        recommendedPrompts: "วิธีแก้ปัญหาที่แนะนำ", p1Title: "ลบรอยขีดข่วน", p2Title: "ฟื้นฟูสี", p3Title: "เพิ่มความสว่าง",
        p4Title: "เพิ่มความคมชัด", p5Title: "กู้คืนรายละเอียด", p6Title: "ปรับความคอนทราสต์", p7Title: "แก้สีเพี้ยน",
        p8Title: "ฟื้นฟูภาพวินเทจ", p9Title: "ปรับสีผิวให้เป็นธรรมชาติ", p10Title: "เพิ่มสีสันต้นไม้ใบหญ้า", p11Title: "ดึงรายละเอียดในเงามืด",
        p12Title: "ฟื้นฟูแบบเต็มรูปแบบ", copyBtn: "คัดลอกคำสั่ง", copiedSuccess: "คัดลอกแล้ว!", errorSize: "ไฟล์มีขนาดใหญ่เกินไป",
        errorType: "ประเภทไฟล์ไม่ถูกต้อง", filterFavs: "⭐ รายการโปรด", downloadBtn: "ดาวน์โหลด", downloadAll: "โหลดทั้งหมด",
        historyTitle: "การวิเคราะห์ล่าสุด", clearHistory: "ล้างทั้งหมด", emptyHistory: "ไม่พบประวัติการวิเคราะห์", reuseBtn: "ใช้ซ้ำ",
        deleteBtn: "ลบ", analyticsTitle: "แดชบอร์ดสถิติ", statTotal: "วิเคราะห์ทั้งหมด", statAvgScore: "คะแนนเฉลี่ยรวม",
        statTopIssues: "ปัญหาที่พบบ่อย", statMostCopied: "คัดลอกบ่อยสุด", chartRadar: "คะแนนเฉลี่ยแต่ละด้าน", chartTrend: "แนวโน้มคะแนน"
    }
};

// --- STATE MANAGEMENT ---
let currentLang = localStorage.getItem('appLang') || 'en';
let currentTheme = localStorage.getItem('appTheme') || 'light';
let favorites = JSON.parse(localStorage.getItem('appFavorites')) || [];
let historyData = JSON.parse(localStorage.getItem('appHistory')) || [];
let showingOnlyFavorites = false;
let appAnalytics = JSON.parse(localStorage.getItem('appAnalytics')) || { totalAnalyses: 0, sumOverall: 0, sumDimensions: { clean: 0, color: 0, bright: 0, sharp: 0, noise: 0 }, trend: [], copiedPrompts: {} };

// --- DOM ELEMENTS ---
const htmlElement = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const toggleHistoryBtn = document.getElementById('toggleHistoryBtn');
const toggleAnalyticsBtn = document.getElementById('toggleAnalyticsBtn');
const historySection = document.getElementById('historySection');
const analyticsSection = document.getElementById('analyticsSection');

// --- INITIALIZATION ---
function setLanguage(lang) {
    currentLang = lang; localStorage.setItem('appLang', lang); document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n'); if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
}
langToggle.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'th' : 'en'));

function applyTheme(theme) {
    if (theme === 'dark') { htmlElement.setAttribute('data-theme', 'dark'); themeToggle.textContent = '☀️'; } 
    else { htmlElement.removeAttribute('data-theme'); themeToggle.textContent = '🌙'; }
}
themeToggle.addEventListener('click', () => { currentTheme = currentTheme === 'light' ? 'dark' : 'light'; localStorage.setItem('appTheme', currentTheme); applyTheme(currentTheme); if(!analyticsSection.classList.contains('hidden')) renderAnalytics();});

setLanguage(currentLang); applyTheme(currentTheme);

// --- UPLOAD LOGIC ---
const dropZone = document.getElementById('dropZone'); const fileInput = document.getElementById('fileInput');
const previewContainer = document.getElementById('previewContainer'); const imagePreview = document.getElementById('imagePreview');
const analyzeBtn = document.getElementById('analyzeBtn'); const resultsSection = document.getElementById('resultsSection');

dropZone.addEventListener('click', () => fileInput.click());
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(e => dropZone.addEventListener(e, (ev) => { ev.preventDefault(); ev.stopPropagation(); }));
['dragenter', 'dragover'].forEach(e => dropZone.addEventListener(e, () => dropZone.classList.add('dragover')));
['dragleave', 'drop'].forEach(e => dropZone.addEventListener(e, () => dropZone.classList.remove('dragover')));
dropZone.addEventListener('drop', (e) => { if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]); });
fileInput.addEventListener('change', function() { if (this.files.length) handleFile(this.files[0]); });

function handleFile(file) {
    if (file.size > 10 * 1024 * 1024) return alert(translations[currentLang].errorSize);
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return alert(translations[currentLang].errorType);
    
    const reader = new FileReader();
    reader.onload = (e) => {
        imagePreview.src = e.target.result;
        imagePreview.onload = () => {
            const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            document.getElementById('metaFilename').textContent = file.name;
            document.getElementById('metaDetails').textContent = `${imagePreview.naturalWidth}×${imagePreview.naturalHeight} | ${(file.size/(1024*1024)).toFixed(2)}MB | ${file.type.split('/')[1].toUpperCase()} | Uploaded: ${timeStr}`;
            
            previewContainer.classList.remove('hidden'); resultsSection.classList.add('hidden'); analyzeBtn.disabled = false;
            document.querySelectorAll('.progress').forEach(bar => bar.style.width = '0%');
            document.querySelector('.overall-score-circle').style.background = `conic-gradient(#e0e0e0 0%, #e0e0e0 0%)`;
            document.getElementById('overallScoreValue').textContent = '0';
        };
    };
    reader.readAsDataURL(file);
}

// --- ANALYSIS LOGIC ---
analyzeBtn.addEventListener('click', () => {
    analyzeBtn.disabled = true; document.getElementById('loadingSpinner').classList.remove('hidden');
    document.getElementById('analyzeBtnText').textContent = translations[currentLang].analyzingBtn;
    resultsSection.classList.add('hidden');
    
    setTimeout(() => {
        analyzeBtn.disabled = false; document.getElementById('loadingSpinner').classList.add('hidden');
        document.getElementById('analyzeBtnText').textContent = translations[currentLang].analyzeBtn;
        generateScores(); resultsSection.classList.remove('hidden');
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1500);
});

function generateScores() {
    const scores = { clean: Math.floor(Math.random()*50)+30, color: Math.floor(Math.random()*60)+20, bright: Math.floor(Math.random()*50)+40, sharp: Math.floor(Math.random()*45)+35, noise: Math.floor(Math.random()*55)+25 };
    const overall = Math.round((scores.clean*0.25) + (scores.color*0.25) + (scores.bright*0.20) + (scores.sharp*0.20) + (scores.noise*0.10));
    
    animateValue("valClean", "barClean", scores.clean); animateValue("valColor", "barColor", scores.color);
    animateValue("valBright", "barBright", scores.bright); animateValue("valSharp", "barSharp", scores.sharp); animateValue("valNoise", "barNoise", scores.noise);
    
    document.getElementById('overallScoreValue').textContent = overall;
    const circleColor = overall >= 70 ? 'var(--success-color)' : (overall >= 40 ? '#ff9800' : '#f44336');
    document.querySelector('.overall-score-circle').style.background = `conic-gradient(${circleColor} ${overall}%, #e0e0e0 ${overall}%)`;

    const filename = document.getElementById('metaFilename').textContent || "Unknown Image";
    saveToHistory(filename, overall, scores); trackAnalysisData(overall, scores);
}

function animateValue(textId, barId, finalValue) {
    const textEl = document.getElementById(textId); const barEl = document.getElementById(barId);
    let start = 0; const stepTime = Math.abs(Math.floor(1000 / finalValue));
    const timer = setInterval(() => { start++; textEl.textContent = start; if (start >= finalValue) clearInterval(timer); }, stepTime);
    setTimeout(() => { barEl.style.width = finalValue + '%'; barEl.style.background = finalValue >= 70 ? 'var(--success-color)' : (finalValue >= 40 ? '#ff9800' : '#f44336'); }, 50);
}

// --- FAVORITES LOGIC ---
const filterFavoritesBtn = document.getElementById('filterFavoritesBtn'); const favButtons = document.querySelectorAll('.fav-btn'); const promptCards = document.querySelectorAll('.prompt-card');
function initFavorites() {
    document.getElementById('favCount').textContent = favorites.length;
    favButtons.forEach(btn => {
        if(favorites.includes(btn.dataset.id)) { btn.classList.add('active'); btn.textContent = '★'; } 
        else { btn.classList.remove('active'); btn.textContent = '☆'; }
    });
}
favButtons.forEach(btn => btn.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (favorites.includes(id)) { favorites = favorites.filter(f => f !== id); e.target.classList.remove('active'); e.target.textContent = '☆'; } 
    else { favorites.push(id); e.target.classList.add('active'); e.target.textContent = '★'; }
    localStorage.setItem('appFavorites', JSON.stringify(favorites)); document.getElementById('favCount').textContent = favorites.length;
    if (showingOnlyFavorites) promptCards.forEach(c => { if(!favorites.includes(c.dataset.id)) c.classList.add('hidden-filter'); });
}));
filterFavoritesBtn.addEventListener('click', () => {
    showingOnlyFavorites = !showingOnlyFavorites; filterFavoritesBtn.classList.toggle('active');
    promptCards.forEach(c => { if(showingOnlyFavorites && !favorites.includes(c.dataset.id)) c.classList.add('hidden-filter'); else c.classList.remove('hidden-filter'); });
});
initFavorites();

// --- COPY & DOWNLOAD LOGIC ---
function trackCopyAndToast(id) { document.getElementById('toast').classList.remove('hidden'); setTimeout(() => document.getElementById('toast').classList.add('hidden'), 3000); trackPromptCopy(id); }
document.querySelectorAll('.copy-btn').forEach(btn => btn.addEventListener('click', (e) => {
    const id = e.target.dataset.prompt; navigator.clipboard.writeText(prompts[id]).then(() => trackCopyAndToast(id));
}));
function downloadTextFile(filename, content) {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' }); const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url; link.download = filename; link.click(); URL.revokeObjectURL(url);
}
document.querySelectorAll('.download-btn').forEach(btn => btn.addEventListener('click', (e) => {
    const id = e.target.dataset.prompt; const title = e.target.closest('.prompt-card').querySelector('h4 span').textContent;
    downloadTextFile(`solution_${id}_${title.replace(/[^a-z0-9\u0E00-\u0E7F]/gi, '_').toLowerCase()}.txt`, prompts[id]); trackPromptCopy(id);
}));
document.getElementById('downloadAllBtn').addEventListener('click', () => { let delay = 0; document.querySelectorAll('.download-btn').forEach(btn => { setTimeout(() => btn.click(), delay); delay += 200; }); });

// --- HISTORY LOGIC ---
function generateThumbnail(img) { const c = document.createElement('canvas'); const ctx = c.getContext('2d'); const ratio = 100/img.naturalWidth; c.width = 100; c.height = img.naturalHeight*ratio; ctx.drawImage(img, 0, 0, c.width, c.height); return c.toDataURL('image/jpeg', 0.6); }
function saveToHistory(fname, score, detailScores) {
    historyData.unshift({ id: Date.now().toString(), filename: fname, date: new Date().toLocaleString(), thumbnail: generateThumbnail(imagePreview), overall: score, scores: detailScores });
    if(historyData.length > 10) historyData.pop(); localStorage.setItem('appHistory', JSON.stringify(historyData)); renderHistory();
}
function renderHistory() {
    document.getElementById('historyCount').textContent = historyData.length; const list = document.getElementById('historyList');
    if(!historyData.length) { list.innerHTML = ''; list.appendChild(document.getElementById('emptyHistory')); document.getElementById('emptyHistory').style.display='block'; return; }
    list.innerHTML = '';
    historyData.forEach(item => {
        const div = document.createElement('div'); div.className = 'history-item'; const c = item.overall >= 70 ? 'var(--success-color)' : (item.overall >= 40 ? '#ff9800' : '#f44336');
        div.innerHTML = `<img src="${item.thumbnail}" class="history-thumb"><div class="history-info"><div style="font-weight:600;">${item.filename}</div><div class="history-meta">${item.date}</div><div class="history-score-badge" style="background:${c}20;color:${c};border:1px solid ${c};">Score: ${item.overall}</div></div><div class="history-actions"><button class="btn primary-btn reuse-btn" data-id="${item.id}" data-i18n="reuseBtn">Reuse</button><button class="btn danger-btn delete-btn" data-id="${item.id}">🗑️</button></div>`;
        list.appendChild(div);
    });
    document.querySelectorAll('.reuse-btn').forEach(b => b.addEventListener('click', (e) => restoreFromHistory(historyData.find(i => i.id === e.target.dataset.id))));
    document.querySelectorAll('.delete-btn').forEach(b => b.addEventListener('click', (e) => { historyData = historyData.filter(i => i.id !== e.target.closest('button').dataset.id); localStorage.setItem('appHistory', JSON.stringify(historyData)); renderHistory(); }));
    setLanguage(currentLang);
}
function restoreFromHistory(record) {
    imagePreview.src = record.thumbnail; document.getElementById('metaFilename').textContent = record.filename; document.getElementById('metaDetails').textContent = `Loaded from history | ${record.date}`;
    previewContainer.classList.remove('hidden'); resultsSection.classList.remove('hidden'); document.getElementById('overallScoreValue').textContent = record.overall;
    const c = record.overall >= 70 ? 'var(--success-color)' : (record.overall >= 40 ? '#ff9800' : '#f44336'); document.querySelector('.overall-score-circle').style.background = `conic-gradient(${c} ${record.overall}%, #e0e0e0 ${record.overall}%)`;
    animateValue("valClean", "barClean", record.scores.clean); animateValue("valColor", "barColor", record.scores.color); animateValue("valBright", "barBright", record.scores.bright); animateValue("valSharp", "barSharp", record.scores.sharp); animateValue("valNoise", "barNoise", record.scores.noise);
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
document.getElementById('clearHistoryBtn').addEventListener('click', () => { if(confirm("Clear history?")) { historyData = []; localStorage.removeItem('appHistory'); renderHistory(); } });
toggleHistoryBtn.addEventListener('click', () => { historySection.classList.toggle('hidden'); if(!historySection.classList.contains('hidden')) historySection.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
renderHistory();

// --- ANALYTICS LOGIC ---
function trackAnalysisData(score, detailScores) {
    appAnalytics.totalAnalyses++; appAnalytics.sumOverall += score;
    appAnalytics.sumDimensions.clean += detailScores.clean; appAnalytics.sumDimensions.color += detailScores.color; appAnalytics.sumDimensions.bright += detailScores.bright; appAnalytics.sumDimensions.sharp += detailScores.sharp; appAnalytics.sumDimensions.noise += detailScores.noise;
    appAnalytics.trend.push(score); if(appAnalytics.trend.length > 20) appAnalytics.trend.shift();
    localStorage.setItem('appAnalytics', JSON.stringify(appAnalytics)); if(!analyticsSection.classList.contains('hidden')) renderAnalytics();
}
function trackPromptCopy(id) { appAnalytics.copiedPrompts[id] = (appAnalytics.copiedPrompts[id] || 0) + 1; localStorage.setItem('appAnalytics', JSON.stringify(appAnalytics)); if(!analyticsSection.classList.contains('hidden')) renderAnalytics(); }
function renderAnalytics() {
    if(!appAnalytics.totalAnalyses) return;
    const avgOver = Math.round(appAnalytics.sumOverall / appAnalytics.totalAnalyses);
    const avgDims = { clean: appAnalytics.sumDimensions.clean/appAnalytics.totalAnalyses, color: appAnalytics.sumDimensions.color/appAnalytics.totalAnalyses, bright: appAnalytics.sumDimensions.bright/appAnalytics.totalAnalyses, sharp: appAnalytics.sumDimensions.sharp/appAnalytics.totalAnalyses, noise: appAnalytics.sumDimensions.noise/appAnalytics.totalAnalyses };
    document.getElementById('statTotalVal').textContent = appAnalytics.totalAnalyses; document.getElementById('statAvgScoreVal').textContent = avgOver;
    const sorted = Object.entries(avgDims).sort((a,b)=>a[1]-b[1]); const labels = {clean:"Clean", color:"Color", bright:"Bright", sharp:"Sharp", noise:"Noise"};
    document.getElementById('statTopIssuesVal').innerHTML = sorted.slice(0,3).map((d,i)=>`<span>${i+1}. ${labels[d[0]]} (${Math.round(d[1])})</span>`).join('');
    const topId = Object.keys(appAnalytics.copiedPrompts).reduce((a,b)=>appAnalytics.copiedPrompts[a]>appAnalytics.copiedPrompts[b]?a:b, null);
    if(topId) document.getElementById('statMostCopiedVal').textContent = `Prompt #${topId} (${appAnalytics.copiedPrompts[topId]}x)`;
    drawRadarChart(avgDims); drawLineChart(appAnalytics.trend);
}
function drawRadarChart(dims) {
    const c = document.getElementById('radarChart'); const ctx = c.getContext('2d'); const cx = c.width/2; const cy = c.height/2; const r = Math.min(cx,cy)-40; ctx.clearRect(0,0,c.width,c.height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark'; const gColor = isDark ? '#555' : '#ddd'; const tColor = isDark ? '#ccc' : '#666';
    const arr = [dims.clean, dims.color, dims.bright, dims.sharp, dims.noise]; const lbls = ["Clean", "Color", "Bright", "Sharp", "Noise"];
    ctx.strokeStyle = gColor; ctx.lineWidth = 1;
    for(let l=1; l<=5; l++) { ctx.beginPath(); for(let i=0; i<5; i++) { const a = (Math.PI*2/5)*i - Math.PI/2; const x = cx+(r*(l/5))*Math.cos(a); const y = cy+(r*(l/5))*Math.sin(a); if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y); } ctx.closePath(); ctx.stroke(); }
    ctx.font = '12px sans-serif'; ctx.fillStyle = tColor; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for(let i=0; i<5; i++) { const a = (Math.PI*2/5)*i - Math.PI/2; ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+r*Math.cos(a), cy+r*Math.sin(a)); ctx.stroke(); ctx.fillText(lbls[i], cx+(r+20)*Math.cos(a), cy+(r+20)*Math.sin(a)); }
    ctx.beginPath(); for(let i=0; i<5; i++) { const a = (Math.PI*2/5)*i - Math.PI/2; const x = cx+(r*(arr[i]/100))*Math.cos(a); const y = cy+(r*(arr[i]/100))*Math.sin(a); if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y); }
    ctx.closePath(); ctx.fillStyle = 'rgba(102, 126, 234, 0.4)'; ctx.fill(); ctx.strokeStyle = '#667eea'; ctx.lineWidth = 2; ctx.stroke();
}
function drawLineChart(data) {
    const c = document.getElementById('lineChart'); const ctx = c.getContext('2d'); const w = c.width; const h = c.height; ctx.clearRect(0,0,w,h); if(data.length<2) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark'; const pad = 30; const chW = w-pad*2; const chH = h-pad*2;
    const mapX = i => pad + (i/(data.length-1))*chW; const mapY = v => pad + chH - (v/100)*chH;
    ctx.strokeStyle = isDark ? '#555' : '#ddd'; ctx.lineWidth = 1; ctx.beginPath(); [0,50,100].forEach(v => { const y=mapY(v); ctx.moveTo(pad,y); ctx.lineTo(w-pad,y); }); ctx.stroke();
    ctx.strokeStyle = '#4caf50'; ctx.lineWidth = 3; ctx.beginPath(); data.forEach((v,i) => { const x=mapX(i), y=mapY(v); if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y); }); ctx.stroke();
    ctx.fillStyle = isDark ? '#333' : '#fff'; data.forEach((v,i) => { ctx.beginPath(); ctx.arc(mapX(i), mapY(v), 4, 0, Math.PI*2); ctx.fill(); ctx.stroke(); });
}
toggleAnalyticsBtn.addEventListener('click', () => { analyticsSection.classList.toggle('hidden'); if(!analyticsSection.classList.contains('hidden')) { renderAnalytics(); analyticsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); }});