const nextBTN = document.querySelector('.b');
const prevBTN = document.querySelector('.b2');
const para = document.querySelector('.para1');
const fixedBottom = document.querySelector('#fixed');

let texts = [
  "Vehicle maintenance often feels like a guessing game for many drivers, but the Car Diagnostic & Repair Program replaces this uncertainty with logic throughan interactive platform designed to bridge the gap between complex mechanics and everyday users.",
  "By utilizing a structured diagnostic engine that maps user-reported symptoms such as unusual noises, vibrations, or dashboard warnings to specific faults, the system provides immediate, data-driven results and practical repair solutions.",
  "Whether addressing an engine misfire or a cooling system leak, the program offers a clear path to resolution, empowering car owners with the knowledge to understand their vehicle's health and avoid unnecessary costs before ever steppinginto a workshop.",
  "Once the system identifies the vehicle’s issue, it provides actionable solutions with easy-to-follow repair guides and tool checklists for minor fixes, while also calculating accurate parts and labor costs so users can confidently consult a mechanic knowing what’s needed and the expected price."
];

const cir1 = document.querySelector('.circle:nth-of-type(1)');
const cir2 = document.querySelector('.circle:nth-of-type(2)');
const cir3 = document.querySelector('.circle:nth-of-type(3)');
const cir4 = document.querySelector('.circle:nth-of-type(4)');

const cirs = [cir1,cir2,cir3,cir4];

let index = 0;

function updateText(){
  document.querySelector(".para1").innerText = texts[index];
   if(index === 0){
      prevBTN.style.backgroundColor = "grey";
      prevBTN.style.color = "black";
  }else{
      prevBTN.style.backgroundColor = "white";
      prevBTN.style.color = "#01514F";
  }

  if(index === texts.length - 1){
      nextBTN.style.backgroundColor = "grey";
      nextBTN.style.color = "black";
  }else{
      nextBTN.style.backgroundColor = "white";
      nextBTN.style.color = "#01514F";
  }
  updateCircles();
}

function updateCircles(){

    for(let i = 0; i < cirs.length; i++){
        cirs[i].style.backgroundColor = "white";
    }

    cirs[index].style.backgroundColor = "#01514F";
}

function nextText(){
    if(index < texts.length-1){
        index++;
        updateText();
    }
}


function prevText(){
  if(index > 0){
        index--;
        updateText();
}
}
 let icon1 = document.querySelector('.icons:nth-of-type(1)');
 let icon2 = document.querySelector('.icons:nth-of-type(2)');
 let icon3 = document.querySelector('.icons:nth-of-type(3)');

icon1.addEventListener('click',()=>{
    alert('Snapchat: amir717sd');
})
icon2.addEventListener('click',()=>{
    alert('Instagram: amir717sd');
})
icon3.addEventListener('click',()=>{
    alert('Whatsapp: 0544225320');
})
let btnC1 = document.querySelector('#c1');
let btnBox = document.querySelector('#box');
let btnProject = document.querySelector('#project');

function goToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const circs2 = document.querySelectorAll('.circle2');
let index2 = 0;

function loop() {
  circs2.forEach(c => c.style.backgroundColor = '');

  circs2[index2].style.backgroundColor = 'white';

  index2 = (index2 + 1) % circs2.length;
  setTimeout(loop, 4500);
}

loop();

const KB_RULES = [
  { symptom: 'engine_wont_start',     cause: 'dead_battery'       },
  { symptom: 'engine_wont_start',     cause: 'faulty_spark_plugs' },
  { symptom: 'car_cranks_slowly',     cause: 'alternator_failure' },
  { symptom: 'dashboard_lights_dim',  cause: 'dead_battery'       },
  { symptom: 'engine_overheating',    cause: 'low_coolant_level'  },
  { symptom: 'engine_overheating',    cause: 'broken_water_pump'  },
  { symptom: 'oil_puddles_under_car', cause: 'bad_oil_pan'        },
  { symptom: 'gear_slipping',         cause: 'worn_clutch'        },
  { symptom: 'ac_not_working',        cause: 'low_refrigerant'    },
];

const SYMPTOM_LIST = [
  'engine_wont_start',
  'car_cranks_slowly',
  'dashboard_lights_dim',
  'engine_overheating',
  'oil_puddles_under_car',
  'gear_slipping',
  'ac_not_working',
];

const WEIGHTS = {
  engine_wont_start:     40,
  car_cranks_slowly:     30,
  dashboard_lights_dim:  20,
  engine_overheating:    45,
  oil_puddles_under_car: 40,
  gear_slipping:         45,
  ac_not_working:        35,
};

const DANGER_LEVELS = {
  dead_battery:       'low',
  faulty_spark_plugs: 'low',
  alternator_failure: 'medium',
  low_coolant_level:  'high',
  broken_water_pump:  'high',
  bad_oil_pan:        'medium',
  worn_clutch:        'high',
  low_refrigerant:    'low',
};

const DANGER_ICON  = { high: '🔴', medium: '🟡', low: '🟢' };
const DANGER_LABEL = { high: 'HIGH RISK', medium: 'MODERATE', low: 'LOW RISK' };

let answers       = {};
let stepIndex     = 0;
let diagnosisMode = false;
let started       = false;

function fmt(atom) {
  return atom.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function clearMemory() {
  answers   = {};
  stepIndex = 0;
}

function storeAnswer(symptom, value) {
  answers[symptom] = value;
}

function symptomWeight(symptom) {
  return WEIGHTS[symptom] || 0;
}

function validateKB() {
  KB_RULES.forEach(({ symptom, cause }) => {
    if (WEIGHTS[symptom] === undefined) {
      console.warn(`[WARNING] Missing weight for symptom     : ${symptom}`);
    }
    if (DANGER_LEVELS[cause] === undefined) {
      console.warn(`[WARNING] Missing danger level for cause : ${cause}`);
    }
  });
}

function problemScore(cause) {
  const relatedRules = KB_RULES.filter(r => r.cause === cause);

  const yesTotal  = relatedRules
    .filter(r => answers[r.symptom] === true)
    .reduce((sum, r) => sum + symptomWeight(r.symptom), 0);

  const noPenalty = relatedRules
    .filter(r => answers[r.symptom] === false)
    .reduce((sum, r) => sum + symptomWeight(r.symptom), 0);

  const maxTotal  = relatedRules
    .reduce((sum, r) => sum + symptomWeight(r.symptom), 0);

  if (maxTotal === 0) return 0;

  const raw = yesTotal - (noPenalty * 0.5);
  return Math.max(0, Math.round((raw / maxTotal) * 100));
}

function explainCause(cause) {
  return KB_RULES
    .filter(r => r.cause === cause && answers[r.symptom] === true)
    .map(r => fmt(r.symptom));
}

function showDanger(cause) {
  return DANGER_LEVELS[cause] || 'unknown';
}

function diagnose() {
  const rawCauses = KB_RULES
    .filter(r => answers[r.symptom] === true)
    .map(r => r.cause);

  const causes = [...new Set(rawCauses)];

  return causes
    .map(cause => ({
      cause,
      score:    problemScore(cause),
      symptoms: explainCause(cause),
      danger:   showDanger(cause),
    }))
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score);
}

function buildResultLines(ranked) {
  if (ranked.length === 0) {
    return [
      { text: '✅  No problems detected based on your answers.', bold: true },
    ];
  }

  const topCause = ranked[0];

  const lines = [
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',                bold: false },
    { text: '🔎  DIAGNOSTIC COMPLETE',                              bold: true  },
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',                bold: false },
    { text: '',                                                      bold: false },
    { text: `🚗  YOUR CAR'S PROBLEM IS:`,                           bold: true  },
    { text: `    👉  ${fmt(topCause.cause)}`,                       bold: true  },
    { text: `    ${DANGER_ICON[topCause.danger]}  Risk Level : ${DANGER_LABEL[topCause.danger]}`, bold: true },
    { text: `    💡  Triggered by : ${topCause.symptoms.join(', ')}`, bold: false },
    { text: '',                                                      bold: false },
  ];

  if (ranked.length > 1) {
    lines.push(
      { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', bold: false },
      { text: '📋  OTHER POSSIBLE CAUSES (RANKED):',  bold: true  },
      { text: '',                                      bold: false },
    );

    ranked.slice(1).forEach((r, i) => {
      lines.push(
        { text: `  ${i + 2}. ${DANGER_ICON[r.danger]}  ${fmt(r.cause)}`,           bold: true  },
        { text: `      📈 Confidence : ${r.score}%  |  ${DANGER_LABEL[r.danger]}`, bold: false },
        { text: `      💡 Triggered by : ${r.symptoms.join(', ')}`,                bold: false },
        { text: '',                                                                  bold: false },
      );
    });
  }

  const counts = { high: 0, medium: 0, low: 0 };
  ranked.forEach(r => counts[r.danger]++);

  let advice, riskIcon;
  if      (counts.high >= 2)   { riskIcon = '🚨'; advice = 'Stop driving immediately. Seek repair now.';       }
  else if (counts.high === 1)  { riskIcon = '⚠️';  advice = 'Avoid long trips. Urgent inspection needed.';     }
  else if (counts.medium >= 2) { riskIcon = '🔔'; advice = 'Monitor closely. Book a mechanic soon.';           }
  else                         { riskIcon = '✅'; advice = 'Not immediately dangerous. Check when convenient.'; }

  lines.push(
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',     bold: false },
    { text: '📈  RISK ANALYSIS',                        bold: true  },
    { text: `  🔴 High   : ${counts.high} cause(s)`,   bold: true  },
    { text: `  🟡 Medium : ${counts.medium} cause(s)`, bold: true  },
    { text: `  🟢 Low    : ${counts.low} cause(s)`,    bold: true  },
    { text: `  ${riskIcon}  Advice : ${advice}`,        bold: false },
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',     bold: false },
  );

  return lines;
}

function typeWriter(element, lines, delay = 18, onDone) {
  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) {
      if (onDone) onDone();
      return;
    }

    const { text, bold } = lines[lineIndex];
    const div = document.createElement('div');
    div.classList.add('chat-line');
    if (bold) div.classList.add('bold-line');
    element.appendChild(div);

    let charIndex = 0;
    const interval = setInterval(() => {
      div.textContent += text[charIndex];
      charIndex++;
      document.querySelector('.chat-box').scrollTop = 999999;
      if (charIndex >= text.length) {
        clearInterval(interval);
        lineIndex++;
        setTimeout(typeLine, 80);
      }
    }, delay);
  }

  typeLine();
}

function appendToChat(lines, isUser = false, onDone) {
  const chatBox = document.querySelector('.chat-box');
  const wrapper = document.createElement('div');
  wrapper.classList.add('chat-message', isUser ? 'user-message' : 'bot-message');

  if (isUser) {
    wrapper.textContent = lines;
    chatBox.appendChild(wrapper);
    chatBox.scrollTop = 999999;
    if (onDone) onDone();
  } else {
    chatBox.appendChild(wrapper);
    typeWriter(wrapper, lines, 18, onDone);
  }
}

function appendSeparator() {
  const chatBox = document.querySelector('.chat-box');
  const sep = document.createElement('div');
  sep.classList.add('chat-separator');
  chatBox.appendChild(sep);
}

const yesBTN = document.querySelector('.yes-btn');
const noBTN  = document.querySelector('.no-btn');

function setButtons(enabled) {
  yesBTN.disabled = !enabled;
  noBTN.disabled  = !enabled;
}

setButtons(false);

function askQuestion() {
  if (stepIndex >= SYMPTOM_LIST.length) {
    diagnosisMode = false;
    setButtons(false);
    appendToChat([
      { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', bold: false },
      { text: '⚙️  Analysing your answers...',       bold: false },
    ], false, () => {
      setTimeout(() => {
        const ranked = diagnose();
        appendToChat(buildResultLines(ranked), false, () => appendSeparator());
      }, 400);
    });
    return;
  }

  const symptom = SYMPTOM_LIST[stepIndex];
  appendToChat([
    { text: `❓  Does the car have: ${fmt(symptom)}?`, bold: true },
  ]);
}

function startDiagnosis() {
  try {
    clearMemory();
    validateKB();
    diagnosisMode = true;
    appendSeparator();
    appendToChat([
      { text: '🔧  DIAGNOSIS STARTED',                  bold: true  },
      { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',   bold: false },
      { text: '  Answer each question with Yes or No.', bold: false },
    ], false, () => {
      setButtons(true);
      askQuestion();
    });
  } catch (error) {
    console.error('[ERROR] Diagnosis session failed:', error);
  } finally {
    // Ensures a clean state is restored if anything goes wrong
    if (!diagnosisMode) clearMemory();
  }
}

function showWelcome() {
  appendToChat([
    { text: '🔧  SMART CAR EXPERT SYSTEM',                bold: true  },
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',       bold: false },
    { text: '📋  HOW IT WORKS:',                           bold: true  },
    { text: '  I will ask you about your car symptoms.',   bold: false },
    { text: '  Answer each with Yes or No buttons.',       bold: false },
    { text: '  I will diagnose the problem for you.',      bold: false },
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',       bold: false },
    { text: '⚙️  Starting diagnosis...',                   bold: false },
  ], false, () => {
    appendSeparator();
    startDiagnosis();
  });
}

function handleAnswer(answer) {
  appendToChat(answer ? 'Yes' : 'No', true);
  storeAnswer(SYMPTOM_LIST[stepIndex], answer);
  stepIndex++;
  setButtons(false);
  setTimeout(() => {
    askQuestion();
    if (diagnosisMode) setButtons(true);
  }, 300);
}

yesBTN.addEventListener('click', () => handleAnswer(true));
noBTN.addEventListener('click',  () => handleAnswer(false));

yesBTN.disabled = true;
noBTN.disabled  = true;

fixedBottom.addEventListener('click', () => {
  showWelcome();
  yesBTN.disabled = true;
  noBTN.disabled  = true;
});
