export type Problem = {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  descriptionTitle?: string;
  keyRequirementsTitle?: string;
  keyRequirements: string[];
  expectedSolutionTitle?: string;
  expectedSolutionIntro?: string;
  expectedSolution: string[];
};

export type Theme = {
  id: string;
  number: number;
  title: string;
  problems: Problem[];
};

export const themes: Theme[] = [
  {
    id: "theme-1",
    number: 1,
    title:
      "Integrated Smart Hostel Monitoring & Information Management System",
    problems: [
      {
        id: "PS-001",
        shortTitle: "Smart Screening at Hostel Entry",
        title: "Smart & Respectful Screening at Hostel Entry Points",
        description:
          "Hostel authorities have observed that some students sneak prohibited items such as outside food or alcohol into the hostel by hiding them inside everyday objects like steel water bottles and containers. Current security checks rely mainly on visual inspection, which makes it difficult to detect concealed items. Strict physical inspection may also create privacy concerns and discomfort for students. A practical solution is required that can help identify hidden prohibited items while maintaining student dignity and avoiding intrusive checks.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Help hostel staff detect concealed prohibited items inside containers",
          "Reduce the need for manual physical inspection",
          "Respect student privacy and dignity",
          "Ensure fairness and transparency during screening",
          "Be cost-effective and practical for hostel deployment",
          "Work without requiring complex infrastructure",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "A quick and practical screening mechanism",
          "Technology or logic that helps detect concealed items",
          "A system that minimizes manual inspection",
          "A solution that maintains student privacy and fairness",
          "A deployable model suitable for hostel environments",
        ],
      },
      {
        id: "PS-002",
        shortTitle: "Smart Hostel Management Portal",
        title: "Smart Hostel Information & Management Portal",
        description:
          "Hostel administration manages student records, room allocations, maintenance requests, and hostel activities. Currently much of this information is handled manually or across disconnected systems. This makes it difficult to retrieve information quickly, track complaints efficiently, and maintain smooth communication between students and hostel management.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Maintain student records and hostel room allocation",
          "Track maintenance requests and complaints",
          "Record hostel activity logs and late entries",
          "Provide an administrative dashboard for hostel authorities",
          "Allow students to easily access hostel information",
          "Ensure role-based access control and data privacy",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Centralized hostel management web platform",
          "Student record and room allocation management module",
          "Maintenance request tracking system",
          "Admin dashboard for hostel operations",
          "Student portal for accessing hostel information",
        ],
      },
      {
        id: "P-003",
        shortTitle: "AI Intrusion & Activity Monitoring",
        title: "AI-Based Intrusion & Activity Monitoring System",
        description:
          "Hostel safety relies mostly on manual supervision and occasional CCTV monitoring. There is currently no automated system to detect animal intrusion or abnormal activities in hostel common areas, especially during night hours. Incidents may go unnoticed until reported manually, leading to delayed responses and limited data about high-risk areas.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Detect animal intrusion using sensors or camera analysis",
          "Identify abnormal activity patterns without facial recognition",
          "Send real-time alerts to hostel security staff",
          "Provide incident heatmap analytics for hostel areas",
          "Ensure complete student privacy and avoid personal identification",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Sensor or vision-based detection system",
          "Abnormal activity detection logic",
          "Real-time alert system for security staff",
          "Incident analytics and heatmap dashboard",
          "Privacy-preserving monitoring framework",
        ],
      },
    ],
  },

  {
    id: "theme-2",
    number: 2,
    title: "Unified Water Intelligence & Sustainability",
    problems: [
      {
        id: "PS-004",
        shortTitle: "Smart Water Monitoring",
        title: "Smart Water Monitoring & Leakage Detection for Hostel Facilities",
        description:
          "Hostel buildings depend on multiple water tanks and pipelines. Water levels are often monitored manually, pumps may run inefficiently, and leaks can remain unnoticed for long periods. This leads to water wastage, higher electricity usage, and maintenance difficulties.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Automatically monitor water tank levels",
          "Prevent pump dry-running and overflow",
          "Detect pipeline leaks or abnormal flow",
          "Monitor basic water quality parameters",
          "Provide alerts to maintenance staff",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Sensor-based water level monitoring",
          "Automated pump control logic",
          "Leak detection system",
          "Water quality monitoring module",
          "Dashboard and alert system for maintenance teams",
        ],
      },
      {
        id: "PS-005",
        shortTitle: "RO Water Quality Monitoring",
        title: "Smart Drinking Water Quality Monitoring for Hostel RO Systems",
        description:
          "Hostels provide drinking water through RO purification systems, but monitoring water quality is usually done manually. Students cannot easily know whether water is safe, and contamination or filtration failures may go unnoticed.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Continuously monitor water quality parameters like pH and turbidity",
          "Detect contamination or unsafe water conditions",
          "Track water flow in the filtration system",
          "Send alerts when water quality exceeds safe limits",
          "Provide monitoring dashboard for maintenance staff",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Water quality sensing module",
          "Real-time monitoring and alert system",
          "Water flow tracking system",
          "Dashboard for quality tracking and records",
          "Low-cost implementation suitable for hostel RO systems",
        ],
      },
    ],
  },

  {
    id: "theme-3",
    number: 3,
    title: "Mess & Dining Optimization",
    problems: [
      {
        id: "PS-006",
        shortTitle: "Smart Mess Menu & Nutrition",
        title: "Smart Mess Menu & Nutrition Information System",
        description:
          "Hostel mess menus are usually displayed on notice boards, providing limited information about the nutritional value of food. Students cannot track their nutrition intake and mess administrators struggle to understand food preferences and demand patterns.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Display daily mess menu digitally",
          "Show nutrition details such as calories and protein",
          "Allow students to rate food or provide feedback",
          "Allow students to indicate food preferences in advance",
          "Provide analytics to reduce food wastage",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Digital mess menu platform",
          "Nutrition information system",
          "Student feedback and rating module",
          "Food preference collection system",
          "Analytics dashboard for mess management",
        ],
      },
    ],
  },

  {
    id: "theme-4",
    number: 4,
    title: "Efficient Laundry Facility Coordination System",
    problems: [
      {
        id: "PS-007",
        shortTitle: "Smart Laundry Coordination",
        title: "Smart Laundry Coordination for Hostel Students",
        description:
          "Students rely on hostel laundry services but often face confusion about drop-off schedules, laundry tracking, and pickup readiness. This leads to unnecessary visits, wasted time, and inefficiencies in laundry management.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Clearly communicate laundry drop-off schedules",
          "Track submitted laundry items",
          "Notify students when laundry is ready for pickup",
          "Reduce unnecessary visits to the laundry facility",
          "Ensure the system is simple and low-cost",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Laundry tracking platform",
          "Drop-off schedule communication system",
          "Notification system for laundry completion",
          "Student and staff interface for coordination",
          "Low-cost and practical implementation",
        ],
      },
    ],
  },

  {
    id: "theme-5",
    number: 5,
    title: "Student Well-being & Counselling",
    problems: [
      {
        id: "PS-008",
        shortTitle: "Happiness & Stress Analytics",
        title: "Happiness Index, Stress Analytics & Counselling Management System",
        description:
          "Hostel students often experience academic pressure and personal challenges. Currently there is no simple system to track mood trends, schedule counselling sessions, or analyze overall well-being patterns within hostel blocks.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Allow students to log daily mood or stress level quickly",
          "Enable students to book counselling sessions",
          "Automatically schedule counselling appointments",
          "Provide anonymized analytics of happiness trends",
          "Alert wardens about blocks with high stress levels",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Mood logging system with quick input interface",
          "Counselling appointment booking platform",
          "Automated scheduling system",
          "Analytics dashboard showing hostel well-being trends",
          "Privacy-focused design ensuring student confidentiality",
        ],
      },
      {
        id: "PS-009",
        shortTitle: "Hospital Visit Authorization",
        title: "Hospital Visit Authorization & Escalation System",
        description:
          "Hospital visits for hostel students are currently handled manually, causing delays and poor communication between students, wardens, and parents. There is also no structured tracking system for guard assignments or visit records.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Online hospital visit request and approval system",
          "Allow wardens to approve requests digitally",
          "Assign hostel guards when required",
          "Escalate emergencies to parents or authorities",
          "Maintain visit records and feedback analytics",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Online hospital visit request portal",
          "Digital approval workflow for wardens",
          "Guard assignment tracking system",
          "Emergency alert and escalation mechanism",
          "Analytics dashboard for visit records",
        ],
      },
    ],
  },
];