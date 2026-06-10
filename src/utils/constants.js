// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About',        href: '#about'       },
  { label: 'Domains',      href: '#domains'     },
  { label: 'Events',       href: '#events'      },
  { label: 'Team',         href: '#leadership'  },
  { label: 'Gallery',      href: '#gallery'     },
  { label: 'Achievements', href: '#achievements'},
  { label: 'Contact',      href: '#contact'     },
]

// ─── Leadership Team ──────────────────────────────────────────────────────────
export const TEAM = [
  {
    name: 'Richandel',
    role: 'President',
    initials: 'RC',
    bio: 'Driving vision and strategy for Advanced Tech Club\'s growth and innovation.',
  },
  {
    name: 'Deekshith',
    role: 'Vice President',
    initials: 'DK',
    bio: 'Supporting operations and bridging team collaboration across all domains.',
  },
  {
    name: 'Vedasri',
    role: 'Operations Head',
    initials: 'VS',
    bio: 'Orchestrating seamless execution of events, workshops, and club activities.',
  },
  {
    name: 'Narendra',
    role: 'Finance Head',
    initials: 'NR',
    bio: 'Managing club finances and ensuring sustainable resource allocation.',
  },
  {
    name: 'Tanisha',
    role: 'Outreach Head',
    initials: 'TN',
    bio: 'Building partnerships and expanding the club\'s reach across communities.',
  },
  {
    name: 'Ayush',
    role: 'Creative & Design Head',
    initials: 'AY',
    bio: 'Shaping the visual identity and creative direction of ATC\'s brand.',
  },
  {
    name: 'Tanmay',
    role: 'Social Media Head',
    initials: 'TM',
    bio: 'Amplifying ATC\'s presence and story across digital platforms.',
  },
]

// ─── Events ───────────────────────────────────────────────────────────────────
export const UPCOMING_EVENTS = [
  {
    id: 1,
    name: 'RoboBlitz 2025',
    date: 'August 15, 2025',
    category: 'Competition',
    description: 'Annual robotics challenge where teams design and program autonomous bots to navigate obstacle courses under strict time limits.',
    registrationLink: '#',
    tag: 'Upcoming',
  },
  {
    id: 2,
    name: 'IoT Bootcamp',
    date: 'September 3–5, 2025',
    category: 'Workshop',
    description: 'A 3-day intensive workshop covering ESP32, sensor integration, MQTT protocol, and building real-time IoT dashboards from scratch.',
    registrationLink: '#',
    tag: 'Upcoming',
  },
  {
    id: 3,
    name: 'Hackathon: Build the Future',
    date: 'October 12, 2025',
    category: 'Hackathon',
    description: '24-hour hackathon challenging participants to prototype tech solutions for real-world urban problems using robotics and IoT.',
    registrationLink: '#',
    tag: 'Upcoming',
  },
]

export const PAST_EVENTS = [
  {
    id: 4,
    name: 'Circuit Slam 1.0',
    date: 'January 20, 2025',
    category: 'Workshop',
    description: 'Introductory hardware workshop covering PCB design, soldering, and basic circuit theory with hands-on projects for 60+ attendees.',
    tag: 'Past',
  },
  {
    id: 5,
    name: 'Tech Orientation 2025',
    date: 'February 8, 2025',
    category: 'Orientation',
    description: 'Annual club induction event introducing new members to ATC\'s vision, ongoing projects, mentorship structure, and upcoming roadmap.',
    tag: 'Past',
  },
  {
    id: 6,
    name: 'Arduino Zero to Hero',
    date: 'March 15, 2025',
    category: 'Workshop',
    description: 'Hands-on Arduino programming workshop from absolute basics to building a smart home prototype — participated by 80+ students.',
    tag: 'Past',
  },
]

// ─── Achievements ─────────────────────────────────────────────────────────────
export const STATS = [
  { value: 200, suffix: '+', label: 'Active Members'      },
  { value: 15,  suffix: '+', label: 'Workshops Hosted'    },
  { value: 8,   suffix: '+', label: 'Projects Deployed'   },
  { value: 3,   suffix: '+', label: 'Awards Won'          },
]

export const MILESTONES = [
  {
    year: '2024',
    title: 'Club Founded',
    description: 'Advanced Tech Club established at NIAT with a founding cohort of 40 passionate students.',
  },
  {
    year: '2024',
    title: 'First Robotics Workshop',
    description: 'Hosted a 2-day robotics workshop attracting 100+ participants from across departments.',
  },
  {
    year: '2025',
    title: 'IoT Lab Partnership',
    description: 'Secured access to a dedicated IoT prototyping lab with industry-grade equipment.',
  },
  {
    year: '2025',
    title: 'Regional Recognition',
    description: 'ATC projects showcased at regional tech fest, winning Best Innovation Award.',
  },
  {
    year: '2025',
    title: '200+ Member Community',
    description: 'Grew to a 200+ member community with structured mentorship and project tracks.',
  },
]

// ─── Gallery placeholders ─────────────────────────────────────────────────────
export const GALLERY_ITEMS = [
  { id: 1, aspect: 'tall',   label: 'Robotics Workshop 2025',    hue: '220,38,38', src: '/img1.png'   },
  { id: 2, aspect: 'wide',   label: 'Circuit Slam 1.0',          hue: '153,27,27', src: '/photo2.png'   },
  { id: 3, aspect: 'square', label: 'IoT Bootcamp Setup',        hue: '185,28,28', src: '/photo3.png'   },
  { id: 4, aspect: 'tall',   label: 'Team Collaboration',        hue: '220,38,38', src: '/img4.png'   },
  { id: 5, aspect: 'square', label: 'Arduino Session',           hue: '127,29,29', src: '/photo5.png'   },
  { id: 6, aspect: 'wide',   label: 'Tech Orientation 2025',     hue: '153,27,27', src: '/img6.png'   },
  { id: 7, aspect: 'square', label: 'Project Demo Day',          hue: '185,28,28'   },
  { id: 8, aspect: 'tall',   label: 'Hackathon Highlights',      hue: '220,38,38'   },
  { id: 9, aspect: 'wide',   label: 'RoboBlitz 2024 Finals',     hue: '127,29,29'   },
]

// ─── Social & Contact ─────────────────────────────────────────────────────────
export const CONTACT = {
  email: 'advancedtechclub.niatxcdu@gmail.com',
  instagram: 'https://www.instagram.com/adv_club_niatxcdu/',
  emailSubject: 'Join Advanced Tech Club',
  emailBody: `Hi Advanced Tech Club Team,\n\nI would like to join the club and learn more about membership. Please let me know the next steps.\n\nThanks,\n[Your Name]`,
}
