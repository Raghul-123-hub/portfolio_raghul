const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

const doc = new jsPDF({
  unit: 'pt',
  format: 'letter',
});

// Dimensions
const pageWidth = doc.internal.pageSize.getWidth();
const margin = 45;
const contentWidth = pageWidth - margin * 2;
let y = 45;

function drawSectionHeader(title) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(24, 43, 73); // Deep Navy / Indigo
  doc.text(title, margin, y);
  y += 4;
  doc.setDrawColor(180, 190, 205);
  doc.setLineWidth(0.75);
  doc.line(margin, y, margin + contentWidth, y);
  y += 14;
}

// ================= PAGE 1 =================
// Name
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.setTextColor(20, 35, 65);
doc.text('RAGHUL D', pageWidth / 2, y, { align: 'center' });
y += 18;

// Subtitle
doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(60, 70, 85);
doc.text('AI/ML Engineering Student  |  Full-Stack Developer  |  Video Editor', pageWidth / 2, y, { align: 'center' });
y += 15;

// Contact info
doc.setFontSize(9);
doc.setTextColor(70, 80, 95);
doc.text('Tamil Nadu, India  |  raghul.darni@gmail.com  |  +91-9042724227  |  LinkedIn  |  GitHub', pageWidth / 2, y, { align: 'center' });
y += 20;

// PROFESSIONAL SUMMARY
drawSectionHeader('PROFESSIONAL SUMMARY');
doc.setFont('helvetica', 'normal');
doc.setFontSize(9.2);
doc.setTextColor(40, 45, 55);
const summary = 'AI/ML undergraduate with full-stack development experience across NestJS, Next.js, and PostgreSQL, plus applied AI project work in recommendation systems. Backed by eight certifications from IBM, Infosys Springboard, and Forage spanning artificial intelligence, deep learning, cloud computing, and simulated real-world data science and cybersecurity work. Also delivers freelance video production (CapCut), with strengths in color grading and motion graphics. Seeking software development, AI/ML, or full-stack engineering roles to apply analytical problem-solving and end-to-end technical versatility.';
const summaryLines = doc.splitTextToSize(summary, contentWidth);
doc.text(summaryLines, margin, y, { lineHeightFactor: 1.35 });
y += summaryLines.length * 12.5 + 12;

// CORE SKILLS
drawSectionHeader('CORE SKILLS');
const skills = [
  { cat: 'Programming & Web', val: 'HTML, CSS, JavaScript, React, Next.js, Node.js, NestJS, Python' },
  { cat: 'Backend & Data', val: 'PostgreSQL, Prisma ORM, REST APIs, Docker, Data Structures & Algorithms' },
  { cat: 'AI / ML', val: 'Machine Learning, Deep Learning Fundamentals, Recommendation Systems, Data Analysis & Visualization' },
  { cat: 'Creative & Media', val: 'Video Editing (CapCut), Color Grading, Audio Mixing, Motion Graphics & Transitions' },
  { cat: 'Tools & Platforms', val: 'Git/GitHub, IBM Cloud, VS Code' },
  { cat: 'Soft Skills', val: 'Analytical Problem Solving, Team Collaboration, Adaptability, Client Communication, Quick Learner' },
];

skills.forEach(s => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(30, 40, 55);
  doc.text(`${s.cat}: `, margin, y);
  const catWidth = doc.getTextWidth(`${s.cat}: `);
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(50, 55, 65);
  const valLines = doc.splitTextToSize(s.val, contentWidth - catWidth);
  doc.text(valLines[0], margin + catWidth, y);
  if (valLines.length > 1) {
    for (let i = 1; i < valLines.length; i++) {
      y += 12;
      doc.text(valLines[i], margin + catWidth, y);
    }
  }
  y += 13.5;
});
y += 8;

// PROJECTS
drawSectionHeader('PROJECTS');

function drawProject(name, roleTech, bullets) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(20, 30, 50);
  doc.text(name, margin, y);
  y += 12;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(80, 90, 105);
  doc.text(roleTech, margin, y);
  y += 12;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(45, 50, 60);
  bullets.forEach(b => {
    const bulletText = `•  ${b}`;
    const bLines = doc.splitTextToSize(bulletText, contentWidth - 10);
    doc.text(bLines, margin + 8, y, { lineHeightFactor: 1.3 });
    y += bLines.length * 11.5 + 2.5;
  });
  y += 4;
}

drawProject(
  'LeadFlow AI — Full-Stack SaaS Lead Generation Platform',
  'Technologies: NestJS, Next.js 14, PostgreSQL, Prisma ORM, Docker',
  [
    'Architected and scaffolded a 68-file full-stack codebase spanning a NestJS backend and Next.js 14 frontend, containerized with Docker for consistent deployment.',
    'Implemented JWT authentication and OAuth (Google, GitHub, Microsoft) alongside a four-role RBAC system and a reusable design system for the frontend.'
  ]
);

drawProject(
  'AI Shopping Assistant',
  'Technologies: Python, Data Analysis, Recommendation Systems',
  [
    'Built an AI-based recommendation engine that parses user input to identify products and surface data-driven purchase suggestions.',
    'Applied data analysis techniques to refine ranking logic, improving the relevance of generated recommendations.'
  ]
);

drawProject(
  'Waste Detection Pipeline',
  'Technologies: Python, Automated Sorting Architecture',
  [
    'Developed a real-time object classification pipeline to detect and classify waste objects, supporting automated sorting workflows.',
    'Applied algorithmic image-processing techniques, including contour detection and classification, to categorize items in live input streams.'
  ]
);

drawProject(
  'Freelance Video Production',
  'Tools: CapCut',
  [
    'Delivered end-to-end video editing for independent clients, from raw footage to final export, across short- and long-form formats.',
    'Applied multi-track editing, color correction, audio syncing, and motion graphics to meet tight client turnaround times.'
  ]
);

// EDUCATION
drawSectionHeader('EDUCATION');
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(20, 30, 50);
doc.text('Bachelor of Engineering / Technology — Artificial Intelligence and Machine Learning', margin, y);
y += 12;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.8);
doc.setTextColor(50, 60, 75);
doc.text('Saveetha Institute of Medical and Technical Sciences (SIMATS), India  |  Expected Graduation: 2028', margin, y);


// ================= PAGE 2 =================
doc.addPage();
y = 45;

doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(50, 60, 75);
doc.text('Relevant Coursework: Data Structures, Operating Systems, Artificial Intelligence, Probability & Linear Algebra, Data Science', margin, y);
y += 24;

// CERTIFICATIONS
drawSectionHeader('CERTIFICATIONS');

const certGroups = [
  {
    title: 'AI, ML & Data Science',
    items: [
      'Introduction to Artificial Intelligence — Infosys Springboard (Feb 2025)',
      'Deep Learning Fundamentals — IBM / DeepLearning.TV (Feb 2025)',
      'Build Your Own Chatbot — IBM (May 2025)',
      'Data Visualization with R — IBM (Mar 2025)',
    ]
  },
  {
    title: 'Cloud Computing',
    items: [
      'IBM Cloud Essentials V3 — IBM (Feb 2025)',
    ]
  },
  {
    title: 'Job Simulations (Forage)',
    items: [
      'Data Science Job Simulation — BCG X (May 2025)',
      'Data Science Job Simulation — Lloyds Banking Group (May 2025)',
      'Cybersecurity Analyst Job Simulation — Tata (May 2025)',
    ]
  }
];

certGroups.forEach(g => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(25, 35, 55);
  doc.text(g.title, margin, y);
  y += 12;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(45, 50, 60);
  g.items.forEach(item => {
    doc.text(`•  ${item}`, margin + 8, y);
    y += 13.5;
  });
  y += 8;
});

// STRENGTHS
drawSectionHeader('STRENGTHS');
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(45, 50, 60);
doc.text('•  Analytical Problem Solving, Quick Learner, Team Collaboration, Adaptability to New Technologies', margin + 8, y);
y += 24;

// INTERESTS
drawSectionHeader('INTERESTS');
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(45, 50, 60);
doc.text('Artificial Intelligence, Financial Technology (FinTech), Cybersecurity, Software Development, Video Production', margin, y);

// Output to public/Raghul_D_Resume.pdf
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
const outPath = path.join(publicDir, 'Raghul_D_Resume.pdf');
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(outPath, pdfBuffer);

console.log(`Resume PDF generated successfully at ${outPath} (${pdfBuffer.length} bytes)`);
