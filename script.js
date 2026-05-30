/* ═══════════════════════════════════════════════════════
   AHMED IBRAHIM AHMED — Portfolio JavaScript
   ═══════════════════════════════════════════════════════ */

// ─── Translations ───
const translations = {
  en: {
    // Navigation
    nav_name: "Ahmed",
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_services: "Services",
    nav_contact: "Contact",

    // Hero
    hero_badge: "Available for Opportunities",
    hero_greeting: "Hi, I'm",
    hero_name: "Ahmed Ibrahim",
    hero_role: "IT & Web Professional",
    hero_description: "IT Support Specialist & Web Developer with hands-on experience in troubleshooting, system administration, and building modern web solutions. I combine technical infrastructure expertise with front-end development skills to deliver reliable, effective IT solutions.",
    hero_cta_contact: "Get in Touch",
    hero_cta_projects: "View Projects",
    hero_cta_cv: "Download CV",
    hero_stat_years: "Years Experience",
    hero_stat_projects: "Projects Delivered",
    hero_stat_skills: "Technical Skills",

    // About
    about_label: "About Me",
    about_title: "Bridging IT Infrastructure & Web Development",
    about_subtitle: "Passionate about solving technical challenges and building digital experiences that make a difference.",
    about_info_exp: "Years Exp",
    about_info_projects: "Projects",
    about_info_degree: "CS Degree",
    about_info_degree_value: "B.Sc",
    about_heading: "Turning Complex Problems into Simple Solutions",
    about_p1: "I'm Ahmed Ibrahim Ahmed, an IT Support Specialist and Web Developer based in Egypt. With a Bachelor's degree in Computer Science and Information Systems from October 6 University (Very Good grade), I bring a strong technical foundation combined with real-world experience.",
    about_p2: "My journey spans from troubleshooting network infrastructure and managing CMS platforms to building responsive web applications. At OMC, I enhanced platform functionality by 20%, trained 15+ staff members, and reduced feature adoption time by 40%. I'm driven by the challenge of optimizing systems and creating seamless digital experiences.",
    about_location_label: "Location",
    about_location_value: "Egypt",
    about_email_label: "Email",
    about_phone_label: "Phone",
    about_languages_label: "Languages",
    about_languages_value: "Arabic · English",

    // Skills
    skills_label: "Technical Arsenal",
    skills_title: "Skills & Technologies",
    skills_subtitle: "A comprehensive toolkit built through education, certifications, and hands-on project experience.",
    skill_web_title: "Web & Development",
    skill_cms_title: "CMS & Hosting",
    skill_network_title: "Networking",
    skill_hardware_title: "Hardware & Support",
    skill_os_title: "OS & Tools",
    skill_soft_title: "Soft Skills",
    skill_problem: "Problem Solving",
    skill_team: "Team Collaboration",
    skill_comm: "Communication",
    skill_training: "Training & Mentoring",
    skill_time: "Time Management",

    // Experience
    exp_label: "Career Journey",
    exp_title: "Professional Experience",
    exp_subtitle: "A proven track record of delivering results across IT support, web development, and CMS management.",
    exp1_date: "October 2022 - Present",
    exp1_role: "Freelance Web Developer",
    exp1_company: "Self-Employed · Remote",
    exp1_a1: "Building responsive, modern websites for clients using React, HTML5, CSS3, and JavaScript",
    exp1_a2: "Managing end-to-end web projects from concept to deployment with WordPress and custom solutions",
    exp1_a3: "Delivering pixel-perfect, SEO-optimized websites with cross-browser compatibility",
    exp2_date: "Jul 2023 – Aug 2024",
    exp2_role: "Web Master & IT Support",
    exp2_a1: "Developed and launched 3+ product features, enhancing platform functionality and boosting user engagement by 20%",
    exp2_a2: "Executed 12+ monthly WordPress CMS updates to maintain up-to-date content and support user engagement",
    exp2_a3: "Trained 15+ staff members on CMS operations, reducing feature adoption time by 40%",
    exp2_a4: "Assisted in identifying and fixing network issues, including connectivity and configuration problems",
    exp2_a5: "Collaborated with marketing on 5+ conversion-focused UX tests",
    exp2_a6: "Provided hardware and software troubleshooting support for end-user devices",
    exp3_date: "March 2022 - July 2022, Cairo, Egypt",
    exp3_role: "Front End Developer Intern",
    exp3_a1: "Built 3+ responsive sites using HTML5, CSS3, and ES6+, achieving a 100% mobile performance score and cross-browser consistency.",

    // Projects
    proj_label: "Featured Work",
    proj_title: "Projects & Portfolio",
    proj_subtitle: "A selection of projects showcasing my development skills and problem-solving approach.",
    proj_live: "Live",
    proj_code: "Code",
    proj1_title: "Travel Agency Landing Page",
    proj1_desc: "A visually stunning landing page for a travel agency featuring modern design, smooth animations, and fully responsive layout optimized for conversions.",
    proj2_title: "Product Listing Application",
    proj2_desc: "A dynamic product catalog application with filtering, sorting, and responsive grid layout. Built with vanilla JavaScript demonstrating clean code architecture.",
    proj3_title: "Meal Recipe Finder",
    proj3_desc: "An interactive meal discovery application that fetches recipes from an external API, featuring search functionality, category filtering, and detailed recipe views.",
    proj4_title: "CRUD Operations App",
    proj4_desc: "A full-featured data management application implementing Create, Read, Update, and Delete operations with local storage persistence and form validation.",
    proj5_title: "Portfolio Website",
    proj5_desc: "A professional personal portfolio website showcasing skills, projects, and experience with modern design principles and smooth user experience.",
    proj6_title: "Customer Transactions System",
    proj6_desc: "A customer transaction management system with data visualization, filtering capabilities, and organized financial data display for business analytics.",

    // Education
    edu_label: "Education & Certifications",
    edu_title: "Academic Background & Credentials",
    edu_subtitle: "A solid foundation in Computer Science complemented by industry-recognized certifications.",
    edu1_title: "B.Sc. in Computer Science & Information Systems",
    edu1_inst: "October 6 University",
    edu1_grade: "Grade: Very Good",
    edu2_title: "Front End Development Program",
    edu2_inst: "Route Academy · Cairo, Egypt",
    edu2_date: "July 2022",
    cert1_name: "CompTIA A+",
    cert1_issuer: "CompTIA · IT Fundamentals",
    cert2_name: "Cisco CCNA",
    cert2_issuer: "Cisco · Networking",
    cert3_name: "React Development",
    cert3_issuer: "Route Academy · Front End",

    // Services
    svc_label: "What I Offer",
    svc_title: "Services & Strengths",
    svc_subtitle: "From IT infrastructure to web development — I deliver end-to-end technology solutions.",
    svc1_title: "Web Development",
    svc1_desc: "Building responsive, modern websites and web applications using React, Next.js, and vanilla JavaScript with clean, maintainable code.",
    svc2_title: "IT Support & Troubleshooting",
    svc2_desc: "Diagnosing and resolving hardware, software, and network issues efficiently. End-user support with a patient, solution-oriented approach.",
    svc3_title: "CMS & WordPress Management",
    svc3_desc: "Complete WordPress site management including content updates, plugin management, performance optimization, and hosting via cPanel.",
    svc4_title: "Network Configuration",
    svc4_desc: "Setting up and maintaining network infrastructure including TCP/IP, DNS, DHCP, LAN/WAN with CompTIA A+ and CCNA knowledge.",
    svc5_title: "UI/UX Optimization",
    svc5_desc: "Improving user engagement through conversion-focused UX testing, responsive design, and intuitive interface improvements.",
    svc6_title: "Training & Documentation",
    svc6_desc: "Creating training programs and documentation for teams. Proven ability to train 15+ staff members with a 40% reduction in adoption time.",

    // Testimonials
    test_label: "Testimonials",
    test_title: "What People Say",
    test_subtitle: "Feedback from colleagues and clients I've had the pleasure of working with.",
    test1_text: "Ahmed consistently demonstrated strong problem-solving skills and a proactive approach to IT challenges. His ability to train team members on CMS operations significantly improved our workflow efficiency. A reliable and dedicated professional.",
    test1_name: "Mohamed Khalil",
    test1_role: "Team Lead at OMC",

    // Contact
    contact_label: "Get in Touch",
    contact_title: "Let's Work Together",
    contact_subtitle: "Have a project in mind or need IT support? I'd love to hear from you. Let's build something great.",
    contact_info_title: "Contact Information",
    contact_info_desc: "Feel free to reach out through any of the channels below. I typically respond within 24 hours.",
    contact_email_label: "Email",
    contact_phone_label: "Phone",
    form_name: "Full Name",
    form_email: "Email Address",
    form_subject: "Subject",
    form_message: "Message",
    form_submit: "Send Message",
    form_name_ph: "Your full name",
    form_email_ph: "your@email.com",
    form_subject_ph: "How can I help?",
    form_message_ph: "Tell me about your project or question...",

    // Footer
    footer_name: "Ahmed Ibrahim Ahmed",
    footer_rights: "All rights reserved.",
  },

  ar: {
    // Navigation
    nav_name: "أحمد",
    nav_about: "عني",
    nav_skills: "المهارات",
    nav_experience: "الخبرات",
    nav_projects: "المشاريع",
    nav_education: "التعليم",
    nav_services: "الخدمات",
    nav_contact: "تواصل",

    // Hero
    hero_badge: "متاح لفرص العمل",
    hero_greeting: "مرحباً، أنا",
    hero_name: "أحمد إبراهيم",
    hero_role: "محترف تقنية و ويب",
    hero_description: "متخصص في الدعم الفني وتطوير الويب مع خبرة عملية في استكشاف الأخطاء وإصلاحها، وإدارة الأنظمة، وبناء حلول ويب حديثة. أجمع بين خبرة البنية التحتية التقنية ومهارات تطوير الواجهات الأمامية لتقديم حلول تقنية موثوقة وفعالة.",
    hero_cta_contact: "تواصل معي",
    hero_cta_projects: "عرض المشاريع",
    hero_cta_cv: "تحميل السيرة الذاتية",
    hero_stat_years: "سنوات خبرة",
    hero_stat_projects: "مشروع منجز",
    hero_stat_skills: "مهارة تقنية",

    // About
    about_label: "عني",
    about_title: "ربط البنية التحتية لتقنية المعلومات بتطوير الويب",
    about_subtitle: "شغوف بحل التحديات التقنية وبناء تجارب رقمية تصنع الفارق.",
    about_info_exp: "سنوات خبرة",
    about_info_projects: "مشاريع",
    about_info_degree: "علوم الحاسب",
    about_info_degree_value: "بكالوريوس",
    about_heading: "تحويل المشكلات المعقدة إلى حلول بسيطة",
    about_p1: "أنا أحمد إبراهيم أحمد، متخصص في الدعم الفني ومطور ويب مقيم في مصر. حاصل على بكالوريوس علوم الحاسب ونظم المعلومات من جامعة ٦ أكتوبر (تقدير جيد جداً)، أمتلك أساساً تقنياً قوياً مع خبرة عملية حقيقية.",
    about_p2: "رحلتي تمتد من استكشاف مشكلات البنية التحتية للشبكات وإدارة منصات CMS إلى بناء تطبيقات ويب متجاوبة. في شركة OMC، حسّنت وظائف المنصة بنسبة ٢٠٪، ودرّبت أكثر من ١٥ موظفاً، وقلّلت وقت تبني الميزات بنسبة ٤٠٪.",
    about_location_label: "الموقع",
    about_location_value: "مصر",
    about_email_label: "البريد الإلكتروني",
    about_phone_label: "الهاتف",
    about_languages_label: "اللغات",
    about_languages_value: "العربية · الإنجليزية",

    // Skills
    skills_label: "الترسانة التقنية",
    skills_title: "المهارات والتقنيات",
    skills_subtitle: "مجموعة أدوات شاملة بُنيت من خلال التعليم والشهادات والخبرة العملية في المشاريع.",
    skill_web_title: "تطوير الويب",
    skill_cms_title: "أنظمة إدارة المحتوى والاستضافة",
    skill_network_title: "الشبكات",
    skill_hardware_title: "الأجهزة والدعم الفني",
    skill_os_title: "أنظمة التشغيل والأدوات",
    skill_soft_title: "المهارات الشخصية",
    skill_problem: "حل المشكلات",
    skill_team: "العمل الجماعي",
    skill_comm: "التواصل",
    skill_training: "التدريب والتوجيه",
    skill_time: "إدارة الوقت",

    // Experience
    exp_label: "المسيرة المهنية",
    exp_title: "الخبرات المهنية",
    exp_subtitle: "سجل حافل من تحقيق النتائج في الدعم الفني وتطوير الويب وإدارة المحتوى.",
    exp1_date: "أكتوبر ٢٠٢٢ – الحالي",
    exp1_role: "مطور ويب مستقل",
    exp1_company: "عمل حر · عن بعد",
    exp1_a1: "بناء مواقع ويب حديثة ومتجاوبة للعملاء باستخدام React و HTML5 و CSS3 و JavaScript",
    exp1_a2: "إدارة مشاريع الويب من الفكرة حتى النشر مع WordPress والحلول المخصصة",
    exp1_a3: "تقديم مواقع ويب محسّنة لمحركات البحث ومتوافقة مع جميع المتصفحات",
    exp2_date: "يوليو ٢٠٢٣ – أغسطس ٢٠٢٤",
    exp2_role: "مسؤول الويب والدعم الفني",
    exp2_a1: "تطوير وإطلاق أكثر من ٣ ميزات جديدة، مما عزز وظائف المنصة وزاد تفاعل المستخدمين بنسبة ٢٠٪",
    exp2_a2: "تنفيذ أكثر من ١٢ تحديثاً شهرياً لنظام WordPress للحفاظ على المحتوى محدثاً",
    exp2_a3: "تدريب أكثر من ١٥ موظفاً على عمليات نظام إدارة المحتوى، مما قلّل وقت تبني الميزات بنسبة ٤٠٪",
    exp2_a4: "المساعدة في تحديد وإصلاح مشكلات الشبكة بما في ذلك مشاكل الاتصال والتكوين",
    exp2_a5: "التعاون مع فريق التسويق في أكثر من ٥ اختبارات UX موجهة للتحويل",
    exp2_a6: "تقديم الدعم الفني لاستكشاف الأخطاء في الأجهزة والبرمجيات",
    exp3_date: "مارس ٢٠٢٢ - يوليو ٢٠٢٢ · القاهرة، مصر",
    exp3_role: "متدرب تطوير واجهات أمامية",
    exp3_a1: "بناء أكثر من ٣ مواقع متجاوبة باستخدام HTML5 و CSS3 و ES6+، محققاً أداء ١٠٠٪ على الجوال وتوافقاً تاماً عبر المتصفحات.",

    // Projects
    proj_label: "أعمال مميزة",
    proj_title: "المشاريع والأعمال",
    proj_subtitle: "مجموعة مختارة من المشاريع التي تعرض مهاراتي في التطوير ومنهجي في حل المشكلات.",
    proj_live: "معاينة",
    proj_code: "الكود",
    proj1_title: "صفحة وكالة سفر",
    proj1_desc: "صفحة هبوط بصرية مذهلة لوكالة سفر تتميز بتصميم حديث ورسوم متحركة سلسة وتخطيط متجاوب مُحسّن للتحويلات.",
    proj2_title: "تطبيق عرض المنتجات",
    proj2_desc: "تطبيق كتالوج منتجات ديناميكي مع خاصية التصفية والفرز وشبكة عرض متجاوبة. مبني بجافاسكريبت مع بنية كود نظيفة.",
    proj3_title: "تطبيق البحث عن الوصفات",
    proj3_desc: "تطبيق تفاعلي لاكتشاف الوجبات يجلب الوصفات من API خارجي مع خاصية البحث وتصفية الفئات وعرض تفاصيل الوصفات.",
    proj4_title: "تطبيق عمليات CRUD",
    proj4_desc: "تطبيق إدارة بيانات كامل يُطبق عمليات الإنشاء والقراءة والتحديث والحذف مع التخزين المحلي والتحقق من صحة النماذج.",
    proj5_title: "موقع البورتفوليو",
    proj5_desc: "موقع بورتفوليو شخصي احترافي يعرض المهارات والمشاريع والخبرات بمبادئ تصميم حديثة وتجربة مستخدم سلسة.",
    proj6_title: "نظام معاملات العملاء",
    proj6_desc: "نظام إدارة معاملات العملاء مع تصور البيانات وإمكانيات التصفية وعرض البيانات المالية المنظمة لتحليلات الأعمال.",

    // Education
    edu_label: "التعليم والشهادات",
    edu_title: "الخلفية الأكاديمية والاعتمادات",
    edu_subtitle: "أساس متين في علوم الحاسب مدعوم بشهادات معترف بها في الصناعة.",
    edu1_title: "بكالوريوس علوم الحاسب ونظم المعلومات",
    edu1_inst: "جامعة ٦ أكتوبر",
    edu1_grade: "التقدير: جيد جداً",
    edu2_title: "برنامج تطوير الواجهات الأمامية",
    edu2_inst: "أكاديمية Route · القاهرة، مصر",
    edu2_date: "يوليو ٢٠٢٢",
    cert1_name: "شهادة CompTIA A+",
    cert1_issuer: "CompTIA · أساسيات تقنية المعلومات",
    cert2_name: "شهادة Cisco CCNA",
    cert2_issuer: "Cisco · الشبكات",
    cert3_name: "تطوير React",
    cert3_issuer: "أكاديمية Route · الواجهات الأمامية",

    // Services
    svc_label: "ما أقدمه",
    svc_title: "الخدمات ونقاط القوة",
    svc_subtitle: "من البنية التحتية لتقنية المعلومات إلى تطوير الويب — أقدم حلولاً تقنية شاملة.",
    svc1_title: "تطوير الويب",
    svc1_desc: "بناء مواقع وتطبيقات ويب حديثة ومتجاوبة باستخدام React و Next.js و JavaScript مع كود نظيف وقابل للصيانة.",
    svc2_title: "الدعم الفني واستكشاف الأخطاء",
    svc2_desc: "تشخيص وحل مشكلات الأجهزة والبرمجيات والشبكات بكفاءة. دعم المستخدمين بنهج صبور وموجه نحو الحلول.",
    svc3_title: "إدارة CMS و WordPress",
    svc3_desc: "إدارة شاملة لمواقع WordPress تشمل تحديثات المحتوى وإدارة الإضافات وتحسين الأداء والاستضافة عبر cPanel.",
    svc4_title: "تكوين الشبكات",
    svc4_desc: "إعداد وصيانة البنية التحتية للشبكات بما في ذلك TCP/IP و DNS و DHCP و LAN/WAN بمعرفة CompTIA A+ و CCNA.",
    svc5_title: "تحسين واجهة وتجربة المستخدم",
    svc5_desc: "تحسين تفاعل المستخدمين من خلال اختبارات UX الموجهة للتحويل والتصميم المتجاوب وتحسينات الواجهة البديهية.",
    svc6_title: "التدريب والتوثيق",
    svc6_desc: "إنشاء برامج تدريبية ووثائق للفرق. قدرة مثبتة على تدريب أكثر من ١٥ موظفاً مع تقليل وقت التبني بنسبة ٤٠٪.",

    // Testimonials
    test_label: "آراء",
    test_title: "ماذا يقولون عني",
    test_subtitle: "تقييمات من زملاء وعملاء سعدت بالعمل معهم.",
    test1_text: "أظهر أحمد باستمرار مهارات قوية في حل المشكلات ونهجاً استباقياً في مواجهة التحديات التقنية. قدرته على تدريب أعضاء الفريق على عمليات نظام إدارة المحتوى حسّنت كفاءة سير العمل بشكل كبير. محترف موثوق ومتفانٍ.",
    test1_name: "محمد خليل",
    test1_role: "قائد فريق في OMC",

    // Contact
    contact_label: "تواصل معي",
    contact_title: "لنعمل معاً",
    contact_subtitle: "هل لديك مشروع في ذهنك أو تحتاج دعم تقني؟ يسعدني سماعك. لنبني شيئاً رائعاً.",
    contact_info_title: "معلومات التواصل",
    contact_info_desc: "لا تتردد في التواصل عبر أي من القنوات أدناه. عادةً أرد خلال ٢٤ ساعة.",
    contact_email_label: "البريد الإلكتروني",
    contact_phone_label: "الهاتف",
    form_name: "الاسم الكامل",
    form_email: "البريد الإلكتروني",
    form_subject: "الموضوع",
    form_message: "الرسالة",
    form_submit: "إرسال الرسالة",
    form_name_ph: "اسمك الكامل",
    form_email_ph: "بريدك@الإلكتروني.com",
    form_subject_ph: "كيف يمكنني المساعدة؟",
    form_message_ph: "أخبرني عن مشروعك أو سؤالك...",

    // Footer
    footer_name: "أحمد إبراهيم أحمد",
    footer_rights: "جميع الحقوق محفوظة.",
  }
};

// ─── Testimonials Data ───
const testimonials = {
  en: [
    {
      text: "Ahmed consistently demonstrated strong problem-solving skills and a proactive approach to IT challenges. His ability to train team members on CMS operations significantly improved our workflow efficiency. A reliable and dedicated professional.",
      name: "Mohamed Khalil",
      role: "Team Lead at OMC",
      initials: "MK"
    },
    {
      text: "Working with Ahmed on our website was a great experience. He delivered a responsive, modern design that exceeded our expectations. His attention to detail and commitment to deadlines make him an excellent freelance developer.",
      name: "Sara Ahmad",
      role: "Business Owner",
      initials: "SA"
    },
    {
      text: "Ahmed's technical knowledge in networking and IT support is impressive. He quickly resolved our network issues and set up reliable systems. His ability to explain complex concepts in simple terms is a real asset.",
      name: "Hassan Youssef",
      role: "IT Manager",
      initials: "HY"
    }
  ],
  ar: [
    {
      text: "أظهر أحمد باستمرار مهارات قوية في حل المشكلات ونهجاً استباقياً في مواجهة التحديات التقنية. قدرته على تدريب أعضاء الفريق على عمليات نظام إدارة المحتوى حسّنت كفاءة سير العمل بشكل كبير. محترف موثوق ومتفانٍ.",
      name: "محمد خليل",
      role: "قائد فريق في OMC",
      initials: "مخ"
    },
    {
      text: "العمل مع أحمد على موقعنا الإلكتروني كان تجربة رائعة. قدّم تصميماً حديثاً ومتجاوباً فاق توقعاتنا. اهتمامه بالتفاصيل والتزامه بالمواعيد النهائية يجعله مطور ويب مستقل ممتاز.",
      name: "سارة أحمد",
      role: "صاحبة عمل",
      initials: "سأ"
    },
    {
      text: "المعرفة التقنية لأحمد في الشبكات والدعم الفني مثيرة للإعجاب. حلّ مشاكل الشبكة لدينا بسرعة وأنشأ أنظمة موثوقة. قدرته على شرح المفاهيم المعقدة بعبارات بسيطة ميزة حقيقية.",
      name: "حسن يوسف",
      role: "مدير تقنية المعلومات",
      initials: "حي"
    }
  ]
};

// ─── State ───
let currentLang = 'en';
let currentTheme = 'dark';
let currentTestimonial = 0;

// ─── DOM Ready ───
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavigation();
  initScrollAnimations();
  initTestimonials();
  initContactForm();
  initBackToTop();
  initCounterAnimation();
  initCvPrint();
});

function initCvPrint() {
  const downloadCvBtn = document.getElementById('downloadCvBtn');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  }
}

// ═══════════════════════════════════════════════
// THEME TOGGLE
// ═══════════════════════════════════════════════
function initTheme() {
  const saved = getStoredPreference('portfolio-theme');
  if (saved === 'dark' || saved === 'light') {
    currentTheme = saved;
  } else {
    // Default dark
    currentTheme = 'dark';
  }
  applyTheme();

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setStoredPreference('portfolio-theme', currentTheme);
      applyTheme();
    });
  }
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute('content', currentTheme === 'dark' ? '#0a0f1e' : '#fafbff');
  }

  const icon = document.getElementById('themeIcon');
  if (icon) {
    if (currentTheme === 'dark') {
      icon.className = 'bx bx-sun';
    } else {
      icon.className = 'bx bx-moon';
    }
  }

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(currentTheme === 'dark'));
  }
}

// ═══════════════════════════════════════════════
// LANGUAGE TOGGLE
// ═══════════════════════════════════════════════
function initLanguage() {
  const saved = getStoredPreference('portfolio-lang');
  if (saved === 'en' || saved === 'ar') {
    currentLang = saved;
  }
  applyLanguage();

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ar' : 'en';
      setStoredPreference('portfolio-lang', currentLang);
      applyLanguage();
    });
  }
}

function getStoredPreference(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function setStoredPreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // Storage may be unavailable in private or restricted browsing contexts.
  }
}

function applyLanguage() {
  const html = document.documentElement;
  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

  if (currentLang === 'ar') {
    document.body.style.fontFamily = "var(--font-arabic)";
  } else {
    document.body.style.fontFamily = "var(--font-primary)";
  }

  // Translate text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.setAttribute('aria-label', currentLang === 'ar' ? 'Switch language to English' : 'Switch language to Arabic');
  }

  // Update testimonial
  updateTestimonial();
}

// ═══════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (!navbar || !mobileMenuBtn || !mobileNav) return;

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Update active nav link
    updateActiveNavLink();
    lastScroll = scrollY;
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileNav.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMobileMenu();
      mobileMenuBtn.focus();
    }
  });

  // Mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('open');
    mobileMenuBtn.setAttribute('aria-expanded', String(!isOpen));
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  function closeMobileMenu() {
    mobileMenuBtn.classList.remove('active');
    mobileNav.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ═══════════════════════════════════════════════
// SCROLL REVEAL ANIMATIONS
// ═══════════════════════════════════════════════
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

// ═══════════════════════════════════════════════
// TESTIMONIALS CAROUSEL
// ═══════════════════════════════════════════════
function initTestimonials() {
  if (!document.getElementById('testimonialCard')) return;

  const dots = document.querySelectorAll('.testimonial-dot');
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentTestimonial = parseInt(dot.getAttribute('data-index'));
      updateTestimonial();
    });
  });

  // Auto-rotate
  setInterval(() => {
    const langData = testimonials[currentLang] || testimonials.en;
    currentTestimonial = (currentTestimonial + 1) % langData.length;
    updateTestimonial();
  }, 6000);
}

function updateTestimonial() {
  const langData = testimonials[currentLang] || testimonials.en;
  const data = langData[currentTestimonial];

  const textEl = document.getElementById('testimonialText');
  const nameEl = document.getElementById('testimonialName');
  const roleEl = document.getElementById('testimonialRole');
  const avatarEl = document.getElementById('testimonialAvatar');
  const card = document.getElementById('testimonialCard');

  if (!textEl || !nameEl || !roleEl || !avatarEl || !card || !data) return;

  // Fade out
  card.style.opacity = '0';
  card.style.transform = 'translateY(10px)';

  setTimeout(() => {
    textEl.textContent = data.text;
    nameEl.textContent = data.name;
    roleEl.textContent = data.role;
    avatarEl.textContent = data.initials;

    // Fade in
    card.style.transition = 'all 0.4s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 300);

  // Update dots
  document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentTestimonial);
  });
}

// ═══════════════════════════════════════════════
// CONTACT FORM
// ═══════════════════════════════════════════════
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.reportValidity()) return;

    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const subjectEl = document.getElementById('subject');
    const messageEl = document.getElementById('message');

    if (!nameEl || !emailEl || !subjectEl || !messageEl) return;

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const subject = subjectEl.value.trim();
    const message = messageEl.value.trim();

    nameEl.value = name;
    emailEl.value = email;
    subjectEl.value = subject;
    messageEl.value = message;

    if (!name || !email || !subject || !message) {
      form.reportValidity();
      return;
    }

    // Open mail client as fallback
    const mailtoLink = `mailto:ahmedehatab@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;

    // Visual feedback
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<i class="bx bx-check"></i> <span>' + (currentLang === 'ar' ? 'تم الإرسال!' : 'Sent!') + '</span>';
      btn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';

      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.style.background = '';
        form.reset();
      }, 3000);
    }
  });
}

// ═══════════════════════════════════════════════
// BACK TO TOP
// ═══════════════════════════════════════════════
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ═══════════════════════════════════════════════
// COUNTER ANIMATION
// ═══════════════════════════════════════════════
function initCounterAnimation() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
}

function animateCounter(element) {
  const text = element.textContent;
  const match = text.match(/(\d+)/);
  if (!match) return;

  const target = parseInt(match[1]);
  const suffix = text.replace(match[1], '');
  let current = 0;
  const increment = target / 40;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + suffix;
  }, 30);
}

// ═══════════════════════════════════════════════
// MOUSE GLOW EFFECT (Desktop only)
// ═══════════════════════════════════════════════
if (window.matchMedia('(min-width: 768px)').matches) {
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
  });
}
