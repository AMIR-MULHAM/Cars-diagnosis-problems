const nextBTN = document.querySelector('.b');
const prevBTN = document.querySelector('.b2');
const para = document.querySelector('.para1');

let texts = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto porro deleniti commodi eligendi, illo voluptas laborum repellat tempora obcaecati fugiat aspernatur voluptatibus, corrupti asperiores nam. Libero debitis laudantium facilis blanditiis.",
  "This is my website",
  "Cars diagnosis system",
  "Made by Amir"
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

const KB = {
  check_engine_light:             ['bad_catalytic_converter', 'faulty_spark_plugs', 'bad_oxygen_sensor', 'loose_gas_cap', 'faulty_mass_airflow_sensor', 'ignition_coil_failure'],
  overheating_issues:             ['coolant_leak', 'clogged_radiator', 'faulty_thermostat', 'broken_water_pump', 'low_coolant_level', 'cooling_fan_failure'],
  oil_leaks:                      ['bad_oil_pan', 'worn_gaskets', 'damaged_seals', 'loose_drain_plug'],
  transmission_troubles:          ['contaminated_transmission_fluid', 'low_transmission_fluid', 'overheating', 'worn_clutch'],
  slipping_gears:                 ['dirty_transmission_fluid', 'worn_clutch', 'faulty_solenoids'],
  delayed_shifting:               ['low_transmission_fluid', 'faulty_solenoids', 'poor_transmission_maintenance'],
  braking_system_concerns:        ['fluid_leaks', 'hydraulic_failures', 'worn_brake_pads'],
  squeaky_brakes:                 ['worn_brake_pads', 'brake_rotors_issue', 'brake_dust', 'moisture'],
  brake_fluid_leaks:              ['corroded_brake_lines', 'damaged_wheel_cylinder_seals', 'ruptured_hoses'],
  dead_battery:                   ['expired_battery', 'alternator_failure', 'loose_connections'],
  fuel_system_challenges:         ['fuel_pump_failure', 'clogged_injectors', 'dirty_fuel_filter'],
  exhaust_system_malfunctions:    ['excessive_heat', 'physical_damage', 'clogged_catalytic_converter'],
  suspension_and_steering_issues: ['worn_components', 'misaligned_wheels', 'damaged_shock_absorbers'],
  ac_not_cooling:                 ['low_refrigerant', 'refrigerant_leak', 'faulty_compressor', 'faulty_condenser', 'faulty_evaporator', 'clogged_cabin_filter'],
  heater_malfunctions:            ['dirty_filters', 'low_coolant_level', 'faulty_thermostat', 'heater_core_blockage'],
};

const WEIGHTS = {
  check_engine_light:             35,
  overheating_issues:             45,
  oil_leaks:                      40,
  transmission_troubles:          45,
  slipping_gears:                 40,
  delayed_shifting:               35,
  braking_system_concerns:        50,
  squeaky_brakes:                 30,
  brake_fluid_leaks:              50,
  dead_battery:                   35,
  fuel_system_challenges:         40,
  exhaust_system_malfunctions:    35,
  suspension_and_steering_issues: 40,
  ac_not_cooling:                 25,
  heater_malfunctions:            25,
};

const DANGER = {
  bad_catalytic_converter:        'medium',
  faulty_spark_plugs:             'low',
  bad_oxygen_sensor:              'low',
  loose_gas_cap:                  'low',
  faulty_mass_airflow_sensor:     'medium',
  ignition_coil_failure:          'medium',
  coolant_leak:                   'high',
  clogged_radiator:               'high',
  faulty_thermostat:              'medium',
  broken_water_pump:              'high',
  low_coolant_level:              'high',
  cooling_fan_failure:            'high',
  bad_oil_pan:                    'medium',
  worn_gaskets:                   'medium',
  damaged_seals:                  'medium',
  loose_drain_plug:               'low',
  contaminated_transmission_fluid:'medium',
  low_transmission_fluid:         'medium',
  overheating:                    'high',
  worn_clutch:                    'high',
  dirty_transmission_fluid:       'medium',
  faulty_solenoids:               'medium',
  poor_transmission_maintenance:  'low',
  fluid_leaks:                    'high',
  hydraulic_failures:             'high',
  worn_brake_pads:                'medium',
  brake_rotors_issue:             'medium',
  brake_dust:                     'low',
  moisture:                       'low',
  corroded_brake_lines:           'high',
  damaged_wheel_cylinder_seals:   'high',
  ruptured_hoses:                 'high',
  expired_battery:                'low',
  alternator_failure:             'medium',
  loose_connections:              'low',
  fuel_pump_failure:              'high',
  clogged_injectors:              'medium',
  dirty_fuel_filter:              'low',
  excessive_heat:                 'high',
  physical_damage:                'medium',
  clogged_catalytic_converter:    'medium',
  worn_components:                'medium',
  misaligned_wheels:              'medium',
  damaged_shock_absorbers:        'high',
  low_refrigerant:                'low',
  refrigerant_leak:               'medium',
  faulty_compressor:              'high',
  faulty_condenser:               'medium',
  faulty_evaporator:              'medium',
  clogged_cabin_filter:           'low',
  dirty_filters:                  'low',
  heater_core_blockage:           'high',
};

const DANGER_RANK  = { high: 3, medium: 2, low: 1 };
const DANGER_ICON  = { high: '🔴', medium: '🟡', low: '🟢' };
const DANGER_LABEL = { high: 'HIGH RISK', medium: 'MODERATE', low: 'LOW RISK' };

const VALID_INPUTS = Object.keys(KB).map(k => k.replace(/_/g, ' '));

function normalizeInput(text) {
  return text.trim().toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '_');
}

function formatFix(raw) {
  return raw.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function scoreFix(problem, fix) {
  const base       = WEIGHTS[problem] || 30;
  const multiplier = DANGER_RANK[DANGER[fix]] || 1;
  return base * multiplier;
}

function rankFixes(problem, fixes) {
  return [...fixes]
    .map(fix => ({ fix, score: scoreFix(problem, fix), danger: DANGER[fix] || 'low' }))
    .sort((a, b) => b.score - a.score);
}

function explain(problem) {
  return `Identified because you reported: "${formatFix(problem)}"`;
}

function riskAnalysis(ranked) {
  const counts = { high: 0, medium: 0, low: 0 };
  ranked.forEach(r => counts[r.danger]++);

  let overall, icon, advice;

  if (counts.high >= 2) {
    overall = 'CRITICAL';
    icon    = '🚨';
    advice  = 'Stop driving immediately. Seek professional repair now.';
  } else if (counts.high === 1) {
    overall = 'HIGH';
    icon    = '⚠️';
    advice  = 'Avoid long trips. Schedule urgent inspection.';
  } else if (counts.medium >= 2) {
    overall = 'MODERATE';
    icon    = '🔔';
    advice  = 'Monitor closely. Book a mechanic soon.';
  } else {
    overall = 'LOW';
    icon    = '✅';
    advice  = 'Not immediately dangerous. Check when convenient.';
  }

  return { overall, icon, advice, counts };
}

function typeWriter(element, lines, delay = 28, onDone) {
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
      const chatBox = document.querySelector('.chat-box');
      chatBox.scrollTop = chatBox.scrollHeight;
      if (charIndex >= text.length) {
        clearInterval(interval);
        lineIndex++;
        setTimeout(typeLine, 100);
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
    chatBox.scrollTop = chatBox.scrollHeight;
    if (onDone) onDone();
  } else {
    chatBox.appendChild(wrapper);
    typeWriter(wrapper, lines, 28, onDone);
  }
}

function appendSeparator() {
  const chatBox = document.querySelector('.chat-box');
  const sep     = document.createElement('div');
  sep.classList.add('chat-separator');
  chatBox.appendChild(sep);
}

function showWelcome() {
  const lines = [
  { text: '🔧 SMART CAR DIAGNOSTIC SYSTEM',        font: 'MyHeavyFont'  },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',   bold: false },
  { text: '📋 HOW TO USE:',                         bold: true  },
  { text: '  Type a car problem and press Send.',   bold: false },
  { text: '📌 EXAMPLE INPUTS:',                     bold: true  },
  { text: '  • check engine light',                 bold: true  }, 
  { text: '  • overheating issues',                 bold: true  }, 
  { text: '  • dead battery',                       bold: true  }, 
  { text: '  • oil leaks',                          bold: true  }, 
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',   bold: false },
  { text: '⚙️  System ready. Awaiting input...',    bold: false },
];

  appendToChat(lines);
}

function validate(raw) {
  if (!raw.trim())
    return { valid: false, error: '⚠️  Input cannot be empty.' };

  if (raw.trim().length < 3)
    return { valid: false, error: '⚠️  Input is too short. Please be more specific.' };

  if (/[^a-z0-9\s]/i.test(raw.trim()))
    return { valid: false, error: '⚠️  Only letters and spaces are allowed.' };

  if (!KB[normalizeInput(raw)])
    return { valid: false, error: `❌  "${raw.trim()}" not recognized.\n💡  Try other examples` };

  return { valid: true };
}

const RunBtn     = document.querySelector('.UI-btn');
const inputField = document.querySelector('.UI-input');

function handleQuery() {
  const rawInput = inputField.value;
  inputField.value = '';

  const check = validate(rawInput);
  if (!check.valid) {
    appendToChat([{ text: check.error, bold: false }]);
    appendSeparator();
    return;
  }

  appendToChat(rawInput.trim(), true, () => {

    const problem = normalizeInput(rawInput);
    const fixes   = KB[problem];
    const ranked  = rankFixes(problem, fixes);
    const risk    = riskAnalysis(ranked);
    const exp     = explain(problem);

    const lines = [
  { text: '                   \n                                              '},   
  { text: `📊 DIAGNOSIS: ${formatFix(problem)}`,           fontWeight: 900  }, 
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',          bold: false },
  { text: `💡 ${exp}`,                                     bold: false },
  { text: '',                                               bold: false },
  { text: `🔍 POSSIBLE CAUSES — Ranked by Risk Score:`,    bold: true  }, 
  
  ...ranked.map((r, i) => ({
    text: `  ${i + 1}. ${DANGER_ICON[r.danger]} ${formatFix(r.fix)} — Score: ${r.score} | ${DANGER_LABEL[r.danger]}`,
    bold: true,
  })),

  { text: '',                                               bold: false },
  { text: '📈 RISK ANALYSIS:',                             bold: true  }, 
  { text: `  ${risk.icon} Overall Risk : ${risk.overall}`, bold: true  },
  { text: `  🔴 High   : ${risk.counts.high} cause(s)`,   bold: true  }, 
  { text: `  🟡 Medium : ${risk.counts.medium} cause(s)`, bold: true  }, 
  { text: `  🟢 Low    : ${risk.counts.low} cause(s)`,    bold: true  }, 
  { text: `  📌 Advice : ${risk.advice}`,                  bold: false },
  { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',          bold: false },
];

    appendToChat(lines, false, () => appendSeparator());
  });
}

RunBtn.addEventListener('click', handleQuery);
inputField.addEventListener('keydown', e => {
  if (e.key === 'Enter') handleQuery();
});

showWelcome();
