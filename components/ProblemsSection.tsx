"use client";

import { useState } from "react";
import ProblemCard from "./ProblemCard";
import ProblemModal from "./ProblemModal";

const problems = [
  {
    id: "PS-001",
    title: "Smart Hostel Water Monitoring & Management System (Hardware + Software)",
    description:
      "Hostel water systems suffer from irregular supply, overflow losses, unnoticed leakages, and delayed maintenance. Manual monitoring is inefficient and reactive. A sensor-driven IoT system combined with a real-time dashboard can enable proactive water management, reduce wastage, and ensure uninterrupted access to safe drinking water. Teams are expected to design a hardware-enabled water monitoring system integrated with a digital platform to track water levels, flow rates, and quality indicators, and provide predictive insights for hostel authorities.",
    descriptionTitle: "Description",
    keyRequirementsTitle: "Key Requirements (IoT-focused)",
    keyRequirements: [
      "Water level sensing in overhead/underground tanks (ultrasonic or float sensors)",
      "Flow sensors to detect consumption rates and leakage patterns",
      "Optional water quality sensing (TDS / turbidity as a prototype)",
      "Microcontroller-based data transmission (ESP32/ESP8266)",
      "Real-time alerts for:",
      "o Low water levels",
      "o Overflow",
      "o Abnormal flow (possible leakage)",
      "Predictive logic for refill timing based on historical usage",
      "Web/mobile dashboard showing live status and trends",
    ],
    expectedSolutionTitle: "Expected Solution",
    expectedSolutionIntro: "A hybrid IoT + software solution demonstrating:",
    expectedSolution: [
      "Hardware prototype with sensors collecting real-time water data",
      "Cloud/backend system ingesting and storing sensor data",
      "Alerting engine for critical water events",
      "Dashboard visualizing tank levels, flow trends, and predictions",
      "Analytics module suggesting refill schedules and maintenance needs",
    ],
  },
  {
    id: "PS-002",
    title: "Smart Water Tank Monitoring System for Hostels (Hardware + Software)",
    description:
      "Hostel water tanks often face unpredictable water levels, contamination risks, and inefficient usage, leading to wastage and delayed maintenance. Manual monitoring makes it difficult to detect low levels, overflow, or quality issues in time. A smart water tank monitoring system can use basic sensors to track real-time tank levels, usage, and simple quality parameters, while a software platform visualizes data, generates alerts, and supports proactive water management decisions.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Real-time monitoring of tank water levels and usage",
      "Basic water quality sensing (e.g., turbidity or TDS)",
      "Alerts for low water, overflow, contamination risk, or scheduled cleaning",
      "Historical data tracking and usage reports",
      "Simple web or mobile interface for maintenance staff",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "Level and flow sensors connected to a controller unit",
      "Basic water quality sensor integration",
      "Real-time telemetry sent to a software platform",
      "Alerting system for abnormal conditions",
      "Dashboard showing tank status and usage trends",
    ],
  },
  {
    id: "PS-003",
    title: "Real-Time Drinking Water Availability and Alert System (Hardware + Software)",
    description:
      "Students frequently face drinking water shortages due to low tank levels, overflow, or contamination, often without prior notice. Manual checks delay corrective action and disrupt daily routines. A real-time drinking water alert system can continuously monitor availability and quality at drinking water points, detect anomalies, and instantly notify hostel authorities to ensure uninterrupted access.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Real-time monitoring of drinking water availability",
      "Tank level and basic quality sensing",
      "Instant alerts for low supply, contamination, or overflow",
      "Usage pattern tracking and automated reports",
      "Web or mobile dashboard for hostel staff",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "Sensors to monitor tank levels and drinking water flow",
      "Quality sensing for basic contamination detection",
      "Software-based alert and notification system",
      "Analytics for usage and shortage trends",
      "Central dashboard for monitoring and action",
    ],
  },
  {
    id: "PS-004",
    title: "Smart Restroom Water Wastage Monitoring System (Hardware + Software)",
    description:
      "Restrooms are a major source of water wastage due to leaks, overflushing, or taps left running. Such issues often go unnoticed until significant water loss occurs. A smart restroom water management system can monitor real-time flow, detect continuous or abnormal usage, and alert maintenance teams promptly, helping reduce wastage and improve conservation efforts.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Real-time monitoring of water flow in restrooms",
      "Detection of leaks, continuous flow, or abnormal usage",
      "Alerts to maintenance teams for quick action",
      "Usage reports to identify high-wastage areas",
      "Dashboard for monitoring and analysis",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "Flow sensors installed at restroom water lines",
      "Detection logic for leaks and continuous flow",
      "Alert system for maintenance notifications",
      "Dashboard showing usage and problem areas",
      "Analytics to support water conservation planning",
    ],
  },
  {
    id: "PS-005",
    title: "Smart Mess Food Wastage Reduction System (Hardware + Software)",
    description:
      "Mess food wastage occurs due to inaccurate demand estimation and lack of real-time consumption visibility. While data analytics helps, ground-level sensing at serving and waste points can drastically improve prediction accuracy. A hybrid system combining lightweight hardware inputs and intelligent software analytics can significantly reduce food wastage.",
    descriptionTitle: "Description",
    keyRequirementsTitle: "Key Requirements (IoT innovation)",
    keyRequirements: [
      "Smart input mechanisms for real-time data capture:",
      "o Load cells / weight sensors at waste bins (prototype-level)",
      "o QR/RFID-based student meal check-in (optional)",
      "Manual + sensor hybrid approach (teams can simulate where needed)",
      "ESP32/Arduino-based data collection from sensors",
      "Demand prediction models using historical + live data",
      "Alerts for:",
      "o Overproduction risk",
      "o Unusual wastage spikes",
      "Dashboard for mess staff showing live demand vs supply",
    ],
    expectedSolutionTitle: "Expected Solution",
    expectedSolutionIntro: "A data-driven mess optimization system consisting of:",
    expectedSolution: [
      "Hardware prototype to measure leftover/waste quantity",
      "Meal attendance tracking module",
      "Prediction engine for next-meal demand",
      "Live dashboard for decision-making",
      "Reports on wastage reduction and cost savings",
      "Hardware is optional but encouraged, teams may simulate sensors if needed.",
    ],
  },
  {
    id: "PS-006",
    title: "Smart Mess Menu Management System (Software)",
    description:
      "Large hostel campuses often operate multiple messes across different hostels, making menu planning, coordination, and updates difficult to manage. Menu changes are frequently communicated manually or inconsistently, causing confusion among students. Additionally, the absence of a structured feedback system limits the ability to understand student preferences and improve food quality. A centralized software-based mess menu management system can standardize menu planning, enable real-time updates, and provide students with easy access to daily or weekly menus. By collecting structured and genuine feedback, the system helps mess administrators make data-driven improvements and maintain transparency across all hostel messes.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Centralized platform to manage menus for multiple messes and hostels",
      "Ability to update daily or weekly menus in real time",
      "Student-accessible interface for menu viewing",
      "Structured and authentic feedback collection from students",
      "Analytics to identify popular items and recurring issues",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "Menu planning module: Create, schedule, and manage menus across messes.",
      "Real-time menu updates: Ensure students always see the latest menu details.",
      "Student interface: Provide a simple web or mobile view for menu access.",
      "Feedback system: Collect genuine meal feedback and quality inputs.",
      "Analytics dashboard: Analyze feedback trends to support menu optimization.",
    ],
  },
  {
    id: "PS-007",
    title: "Smart Digital Queue Management System for Campus Food Parks",
    description:
      "Campus food parks often face severe overcrowding during peak hours, leading to long queues, confusion, and discomfort for students and staff. Manual queue handling makes it difficult to estimate waiting times, manage rush periods, and distribute crowds evenly across multiple food stalls. This results in inefficient stall utilization and a poor dining experience. A smart, software-based queue management system can allow students to join queues digitally, view real-time queue status, and receive estimated waiting times for each stall. Food stall staff can manage queue progress through a dedicated interface, while authorities can analyze crowd patterns to improve operations. Optional hardware such as digital display boards or entry scanners may be integrated for enhanced visibility, but the system is designed to function independently as a software platform.",
    descriptionTitle: "Description",
    keyRequirementsTitle: "Key Requirements",
    keyRequirements: [
      "Real-time monitoring of queues across multiple food stalls",
      "Digital queue or token generation for students",
      "Display of estimated waiting time for each stall",
      "Crowd management during peak dining hours",
      "Simple interface for students and food park staff",
    ],
    expectedSolutionTitle: "Expected Solution",
    expectedSolution: [
      "Digital queue and token-based system for students",
      "Real-time queue length and waiting time tracking",
      "Student-facing web or mobile interface for queue visibility",
      "Staff management panel for updating queue progress",
      "Analytics to identify peak hours and optimize stall operations",
    ],
  },
  {
    id: "PS-008",
    title: "Smart Campus Animal Intrusion Detection & Alert System (Hardware + Software)",
    description:
      "Animal intrusions, especially by monkeys, pose safety and hygiene risks in hostel areas. A purely manual reporting system is slow. Introducing basic sensing or vision-based triggers along with a reporting platform can enable faster alerts and long-term prevention planning.",
    descriptionTitle: "Description",
    keyRequirementsTitle: "Key Requirements (IoT additions)",
    keyRequirements: [
      "Hardware-triggered detection (prototype-level) using:",
      "o PIR motion sensors",
      "o Camera-based detection (ML optional / simulated)",
      "Edge device (ESP32 / Raspberry Pi) to trigger alerts",
      "Location tagging of sensor nodes",
      "Manual reporting fallback via mobile/web app",
      "Real-time alerts to authorities",
      "Heatmap analytics of intrusion-prone zones",
    ],
    expectedSolutionTitle: "Expected Solution",
    expectedSolutionIntro: "A smart alert ecosystem featuring:",
    expectedSolution: [
      "Hardware trigger system for animal movement detection",
      "Backend alert service pushing instant notifications",
      "Incident logging & mapping",
      "Analytics dashboard identifying recurring hotspots",
      "Preventive insights for campus planning",
    ],
  },
  {
    id: "PS-009",
    title: "Smart Activity Recognition System for Hostel Common Areas (Software + Optional Hardware)",
    description:
      "Hostel common areas may sometimes experience unsafe or disruptive activities such as conflicts, rough behaviour, or overcrowding. Continuous physical monitoring of these spaces is difficult and resource intensive. A software-driven activity recognition system can help analyse movement or activity data, detect unusual patterns, and alert hostel authorities in a timely manner. The system may use existing digital inputs such as CCTV feeds, simulated datasets, or manual reports to recognize abnormal activity patterns. Where feasible, optional hardware sensors may be integrated to enhance detection accuracy, provided student privacy is maintained.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Analyse movement or activity data from common areas in real time or near real time.",
      "Detect unusual or unsafe activity patterns based on predefined rules or models.",
      "Generate timely alerts to hostel authorities when incidents are detected.",
      "Analyse historical data to identify recurring incidents and high-risk zones.",
      "Ensure privacy by avoiding personal identification or facial recognition.",
      "Optional integration of simple hardware sensors to enhance activity detection.",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "A software module that processes activity or movement data.",
      "A logic engine to identify abnormal or unsafe behaviour patterns.",
      "An alerting system to notify hostel authorities.",
      "A dashboard displaying incidents and high-risk areas.",
      "An analytics module for trend and pattern analysis.",
      "Optional hardware integration to improve data accuracy.",
    ],
  },
  {
    id: "PS-010",
    title: "Smart Night-Time Human Movement Monitoring System for Hostel Safety (Software + Optional Hardware)",
    description:
      "Student safety during night-time hours is a major concern in hostel environments, especially in corridors, staircases, common rooms, and entry points. Reduced supervision at night makes it difficult to detect unusual movements such as prolonged loitering, unauthorized access, overcrowding, or conflicts. A smart monitoring system can help analyze human movement patterns during night hours and alert hostel authorities when unsafe situations arise. The solution should primarily rely on software-based analysis of movement or activity data. Where feasible, simple sensing hardware can be integrated to capture movement information in a privacy-preserving manner, without identifying individual students.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Monitor human movement patterns in selected hostel areas during night-time.",
      "Detect unusual or potentially unsafe movement behaviors.",
      "Generate timely alerts for hostel authorities or security staff.",
      "Identify recurring incidents and high-risk zones using historical data.",
      "Ensure privacy by avoiding facial recognition or personal identification.",
      "Support integration of simple hardware sensors for movement detection.",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "A software system that analyzes night-time movement data to identify abnormal activity.",
      "A detection logic that flags behaviors such as loitering, sudden crowd formation, or repeated movement in restricted areas.",
      "An alerting mechanism that notifies authorities when unusual activity is detected.",
      "A dashboard displaying incident locations and high-risk areas.",
      "An analytics module for analyzing night-time movement trends.",
      "Optional hardware integration, such as:",
      "o PIR motion sensors to detect movement in corridors or staircases",
      "o Low-resolution cameras for silhouette or count-based movement detection",
      "o Door sensors to track entry and exit activity during night hours",
    ],
  },
  {
    id: "PS-011",
    title: "Hostel Student Happy Index & Well-being Tracker (Software-Centric)",
    description:
      "Mental well-being plays a significant role in student performance and overall hostel life, yet it often remains unnoticed until serious issues arise. Direct hardware-based monitoring of individuals can be intrusive and ethically inappropriate in this context. A software-centric approach that relies on voluntary student input, privacy-preserving analytics, and consent-based alerts can help identify well-being trends while respecting personal boundaries. The system should allow students to log their moods and stress levels regularly and use this data to analyse trends over time. To provide additional context without invading privacy, the system may optionally incorporate non-personal ambient data from common areas, such as noise levels or general usage patterns.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Allow students to voluntarily log moods or stress levels on a regular basis.",
      "Ensure a privacy-first design with anonymity and consent-based data usage.",
      "Analyse mood data to detect prolonged stress or declining well-being trends.",
      "Generate alerts for counsellors only when defined risk patterns appear.",
      "Provide aggregate insights for hostel authorities without revealing identities.",
      "Support optional ambient inputs such as",
      "-> common-area noise levels",
      "-> app usage trends.",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "A simple web or mobile interface for student mood logging.",
      "A trend analysis module to identify prolonged stress patterns.",
      "A counsellor alert system based on predefined thresholds.",
      "Aggregated dashboards showing overall hostel well-being trends.",
      "Privacy and consent controls for ethical data handling.",
      "Optional ambient data integration for contextual insights",
    ],
  },
  {
    id: "PS-012",
    title:
      "Develop a smart stress analysis and support system for hostel students that identifies stress triggers, analyzes behavioral and academic patterns, and provides personalized coping suggestions and early interventions while maintaining privacy.",
    description:
      "While general happiness tracking provides a high-level view of student well-being, stress often develops due to specific triggers such as academic workload, sleep irregularities, hostel environment, or social pressures. These stressors may accumulate gradually and remain unnoticed until they affect student health or academic performance. A smart, software-first stress analysis system can go beyond basic mood tracking by allowing students to voluntarily report stress levels and contributing factors, analyzing recurring stress patterns, and offering targeted coping support. By combining self-reported inputs with contextual academic or time-based data, the system can help students understand their stress drivers while enabling authorities to plan proactive mental wellness initiatives using anonymized insights, without being intrusive.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Mechanism for students to report stress levels along with possible stress triggers",
      "Pattern analysis to identify recurring or high-risk stress periods",
      "Personalized stress insights and coping suggestions for students",
      "Early warning indicators for prolonged or escalating stress trends",
      "Privacy-focused design with anonymized analytics for authorities",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "Stress input module: Interface for students to log stress levels and contributing factors.",
      "Pattern analysis engine: Analyze stress trends across time periods such as exams or late hours.",
      "Personalized insights module: Provide tailored suggestions like rest reminders or counseling options.",
      "Early intervention system: Flag prolonged or abnormal stress patterns for counselor attention.",
      "Analytics dashboard: Aggregate anonymized stress trends to support wellness planning.",
    ],
  },
  {
    id: "PS-013",
    title:
      "Develop a block-based student counselling automation system that streamlines student registration, counsellor assignment, session scheduling, and counselling record tracking for hostels.",
    description:
      "During hostel onboarding, students are assigned to specific blocks, after which counselling and student support activities are often handled manually. This leads to uneven counsellor workloads, inconsistent follow-ups, and limited visibility into counselling history at a block or student level. Over time, this reduces the effectiveness of hostel mental health support systems. A centralized, software-only counselling automation system can organize students block-wise, automatically assign counsellors, schedule sessions, and securely maintain counselling records. Block-based automation enables targeted support, balanced counsellor distribution, and improved visibility into counselling trends across different hostel blocks while ensuring strict privacy and access control.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Digital student registration linked to hostel block allocation",
      "Automated counsellor assignment based on block distribution",
      "Scheduling and tracking of counselling sessions",
      "Block-wise visibility of counselling activities and follow-ups",
      "Secure storage of counselling records with privacy controls",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "Registration and block mapping module: Capture student details and map them to hostel blocks.",
      "Counsellor assignment engine: Automatically assign counsellors based on block-wise logic.",
      "Counselling management module: Schedule, record, and track counselling sessions digitally.",
      "Block-level analytics dashboard: Provide anonymized counselling trends per block.",
      "Privacy and access control layer: Restrict counselling data access to authorized personnel only.",
    ],
  },
  {
    id: "PS-014",
    title: "Smart Room Cleanliness Rating System (Software + Optional Hardware)",
    description:
      "Maintaining cleanliness and hygiene in hostel rooms is essential for student comfort and health. Hostel authorities often rely on manual inspections or informal complaints, which do not provide continuous or structured feedback. A digital room rating system can help collect regular cleanliness feedback, identify problem areas early, and improve maintenance planning. The system should allow students to rate rooms based on cleanliness and related factors. The collected data should be analyzed to generate insights and alerts for hostel authorities. Where suitable, optional hardware inputs may be used to support room identification or basic cleanliness indicators.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Students should be able to submit ratings for hostel rooms based on cleanliness and maintenance factors.",
      "The system should store ratings securely while ensuring student anonymity.",
      "Ratings should be analyzed to identify rooms or areas that require attention.",
      "Alerts should be generated for consistently low-rated rooms or sudden negative changes.",
      "The system should track cleanliness trends over time to monitor improvements or recurring issues.",
      "Optional use of simple hardware such as QR codes, NFC tags, or basic environmental sensors may be included.",
      "A web or mobile dashboard should be provided for hostel authorities to view ratings and insights.",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "A web or mobile interface that allows students to submit cleanliness ratings in a simple and user-friendly manner.",
      "A backend system that aggregates room-wise ratings and maintains historical cleanliness data.",
      "An analytics module that identifies low-performing rooms and recurring cleanliness issues.",
      "An alerting mechanism that notifies hostel authorities when cleanliness levels fall below defined thresholds.",
      "A dashboard that visually presents room ratings, trends, and alerts for easy monitoring.",
    ],
  },
  {
    id: "PS-015",
    title: "Smart Waste Classification and Management System for Hostels (Software + Hardware)",
    description:
      "Improper waste segregation in hostels leads to environmental pollution, inefficient recycling, and increased maintenance costs. Students often lack guidance on correct disposal, and hostel authorities have limited visibility into waste generation patterns. A smart waste classification system can help guide students during disposal, classify waste types, and provide insights into waste trends. The system should combine software-based classification and analytics with feasible hardware inputs to demonstrate real-time waste identification. By tracking disposal behavior and waste patterns, hostel authorities can improve segregation practices and optimize waste management processes.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Classify waste into biodegradable, recyclable, and non-recyclable categories.",
      "Provide real-time guidance to students for correct waste disposal.",
      "Detect and alert authorities about improper disposal or abnormal patterns.",
      "Analyze waste generation trends across hostel areas.",
      "Ensure the solution is feasible for a 24-hour prototype.",
      "Use a web or mobile dashboard for monitoring and decision-making.",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "A waste classification module using image-based or rule-based logic.",
      "Hardware support such as a camera or weight sensor for waste input.",
      "A guidance system displaying correct disposal instructions.",
      "An alerting mechanism for improper segregation events.",
      "A dashboard showing waste patterns and problem areas.",
      "An analytics module for waste trend analysis.",
    ],
  },
  {
    id: "PS-016",
    title:
      "Develop a smart misconduct monitoring system for hostel premises that identifies, records, and manages incidents such as rule violations, unsafe behavior, and repeated misconduct, enabling timely action and preventive measures.",
    description:
      "Hostel premises may experience various forms of misconduct such as false fire alarm triggering, fights, vandalism, unauthorized gatherings, substance misuse, or loitering in restricted areas. These incidents are often reported manually, leading to delayed response, incomplete documentation, and difficulty in identifying repeat offenders or high-risk zones. A smart misconduct monitoring system can digitally log incidents, categorize their severity, and track patterns over time to support fair and consistent disciplinary action. The system can remain software-driven for reporting and analytics, while selectively integrating hardware inputs such as fire alarm triggers, access control logs, or motion sensors in restricted areas to strengthen incident validation and response, without relying on intrusive surveillance.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Mechanism to report and log different types of misconduct incidents",
      "Categorization of incidents by type and severity level",
      "Tracking of repeat misconduct at individual or block level",
      "Alerting authorities for serious or recurring violations",
      "Secure record-keeping with controlled access",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "Incident reporting module: Allow staff or authorities to digitally log misconduct incidents.",
      "Categorization engine: Classify incidents based on type and seriousness.",
      "Repeat behavior tracking: Identify students or locations with frequent violations.",
      "Alerts and escalation system: Notify authorities for critical or repeated incidents.",
      "Analytics dashboard: Visualize misconduct trends to support preventive actions.",
    ],
  },
  {
    id: "PS-017",
    title: "Digital Late Monitoring and Analysis System for Hostel Outings (Software Only)",
    description:
      "Hostel authorities often find it difficult to identify students who repeatedly violate outing return-time rules. Manual tracking of outing records makes it hard to detect patterns, flag repeat offenders, and enforce policies consistently. A digital late monitoring system can automatically analyze return-time data and provide actionable insights. Participants must design the system as a standalone software platform. A CSV dataset containing historical outing records will be provided to validate the solution. The system should focus on accurate delay detection, pattern analysis, and clear reporting without relying on any hardware components.",
    descriptionTitle: "Description",
    keyRequirementsTitle: "Key Requirements",
    keyRequirements: [
      "Track student return times from outing records.",
      "Calculate delays beyond permitted return limits.",
      "Identify and flag students with repeated late returns.",
      "Provide searchable student-wise outing history.",
      "Analyze lateness patterns using the given CSV dataset.",
      "Offer a dashboard for hostel authorities.",
    ],
    expectedSolutionTitle: "Expected Solution",
    expectedSolution: [
      "A web or mobile application for managing outing records.",
      "Automatic delay calculation from return-time data.",
      "Logic to identify repeated late offenders.",
      "Use of the provided CSV dataset for validation.",
      "Dashboards showing lateness trends and patterns.",
      "Reports supporting policy and enforcement decisions.",
    ],
  },
  {
    id: "PS-018",
    title: "Digital Hospital Visit Authorization and Feedback System for Hostels",
    description:
      "Hostel students are required to obtain prior authorization before visiting a hospital, which is commonly handled through manual paperwork and physical approvals. This approach is slow, difficult to track, and especially inefficient during emergencies. Maintaining accurate records of medical visits and monitoring service quality further becomes a challenge with paper-based systems. A software-driven digital platform can enable students to submit hospital visit requests online, allow authorized hostel staff to review and approve requests digitally, and generate secure visit authorizations. The system can also capture visit timelines and collect post-visit feedback, helping hostel authorities improve medical support services while maintaining transparent and traceable records. Optional hardware elements such as QR code scanners at exit points may be integrated to streamline verification, but the core system remains software-centric.",
    descriptionTitle: "Description",
    keyRequirementsTitle: "Key Requirements",
    keyRequirements: [
      "Online submission of hospital visit requests by students",
      "Digital approval workflow for authorized hostel authorities",
      "Secure digital authorization mechanism (QR code or digital pass)",
      "Capture of student identity, visit reason, and departure time",
      "Status tracking of visit requests (pending, approved, completed",
      "Collection of post-visit feedback from students",
    ],
    expectedSolutionTitle: "Expected Solution",
    expectedSolution: [
      "Student-facing digital request and authorization portal.",
      "Role-based approval dashboard for hostel authorities",
      "Secure digital pass generation for approved visits",
      "Visit timeline and status tracking system",
      "Feedback collection and service quality monitoring",
      "Centralized dashboard with visit records and analytics",
    ],
  },
  {
    id: "PS-019",
    title: "Smart Laundry Automation and Tracking System for Hostels (Software + Hardware)",
    description:
      "Laundry management in hostels is often inefficient due to manual tracking, misplaced clothes, long queues, and lack of timely notifications. Students are unsure about laundry status, while staff struggle to manage workflows and resolve mix-ups. A smart laundry automation system can digitize the process by tracking laundry items, notifying students, and improving operational efficiency. The system should primarily function through a digital platform while integrating simple, feasible hardware for laundry identification and tracking. By combining item tagging, status updates, and analytics, the system can streamline laundry operations and improve the overall student experience.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Track laundry status from drop-off to completion in real time.",
      "Provide a tagging mechanism to identify clothes and prevent mix-ups.",
      "Notify students when laundry is ready for pickup.",
      "Manage queues and estimate completion times.",
      "Analyze laundry usage and operational efficiency.",
      "Use a web or mobile interface for students and staff.",
      "Support simple hardware integration for laundry identification.",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "A digital platform to track laundry items and their status.",
      "Tagging of clothes using QR codes, RFID tags, or digital IDs.",
      "A notification system for laundry completion and reminders.",
      "Queue management with estimated completion times.",
      "A dashboard for staff to manage laundry workflow.",
      "Analytics for laundry usage and efficiency trends.",
    ],
  },
  {
    id: "PS-020",
    title: "Digital Hostel Issue Tracking and Lost-and-Found Management System (Software Only)",
    description:
      "Hostel campuses frequently face infrastructure issues such as broken lights, damaged furniture, or safety hazards, along with difficulties in managing lost-and-found items across multiple blocks. Manual reporting methods delay resolution and reduce transparency. Similarly, students often struggle to locate lost belongings due to scattered or unorganized reporting systems. A centralized digital system can allow students to report defects and hazards easily, while enabling hostel authorities to track, prioritize, and resolve issues efficiently. In parallel, a student-accessible lost-and-found module can help report and search for lost items using block-wise and location-based filtering.",
    descriptionTitle: "Description:",
    keyRequirementsTitle: "Key Requirements:",
    keyRequirements: [
      "Allow students to report infrastructure defects and safety hazards.",
      "Provide role-based access for authorized hostel staff to manage issues.",
      "Include a lost-and-found module accessible to students.",
      "Enable block-wise and location-based filtering for lost items.",
      "Track complaint status from reporting to resolution.",
      "Provide a simple web or mobile interface.",
    ],
    expectedSolutionTitle: "Expected Solution:",
    expectedSolution: [
      "A digital platform for reporting and managing hostel issues.",
      "Role-based dashboards for students and hostel staff.",
      "Status tracking for reported defects and hazards.",
      "A lost-and-found module for item reporting and searching.",
      "Filters for block-wise and location-based searches.",
      "Analytics showing issue resolution trends.",
    ],
  },
];

export default function ProblemsSection() {
  const [selectedProblem, setSelectedProblem] = useState<(typeof problems)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProblem = (problem: (typeof problems)[0]) => {
    setSelectedProblem(problem);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProblem(null), 300);
  };

  return (
    <>
      <section className="relative px-4 md:px-8 lg:px-20 py-12 md:py-16 bg-neutral-900/70 border-t border-white/10 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Problem Statements</h2>
          <p className="mt-1 text-gray-400 text-xs md:text-sm">
            Explore 20 unique problem statements and build innovative solutions
          </p>

          {/* Problems Grid */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {problems.map((problem) => (
              <ProblemCard
                key={problem.id}
                id={problem.id}
                title={problem.title}
                description={problem.description}
                onClick={() => handleOpenProblem(problem)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProblemModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        problem={selectedProblem}
      />
    </>
  );
}
