import { Icons } from "@/components/icons";
import { NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Terraform } from "@/components/ui/svgs/terraform";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { AWS } from "@/components/ui/svgs/AWS";

export const DATA = {
  name: "Ammar Faruqui",
  initials: "MAF",
  url: "https://ammar-15.github.io/",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description: "Builder Vision. Engineer Brain.",
  summary:
    "I like building and experimenting with new ideas. Into startups, shipping fast, and working on things that feel exciting to create. Very proficiently a swiss army knife.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Terraform", icon: Terraform },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "AWS", icon: AWS },
  ],
  navbar: [
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    {
      href: "mailto:ammukuul15@gmail.com",
      icon: Icons.email,
      label: "ammukuul15@gmail.com",
    },
  ],
  contact: {
    email: "ammukuul15@gmail.com",
    tel: "+7092193314",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ammar-15",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ammarfaruqui/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ammar_tsx/highlights",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram (coming soon)",
        url: "https://www.instagram.com/ammar_tsx/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:ammukuul15@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Best Western Premier Carlingview Hotel",
      href: "https://www.google.com/maps/place/best+western+premier+carlingview/data=!4m2!3m1!1s0x882b3997cb4ec2e3:0x7efa6dcf925ddfed?sa=X&ved=1t:242&ictx=111",
      badges: [],
      location: "Toronto, ON",
      title: "Guest Service Agent",
      logoUrl: "/bestwesternpremier.png",
      start: "Sep 2026",
      end: "Present",
      description:
        "Served as first point of contact for 100+ guests daily, handling bookings, payments, requests, and complaints.",
    },
    {
      company: "Fiscal.ai",
      href: "https://fiscal.ai",
      badges: [],
      location: "Toronto, ON (Remote)",
      title: "Software Engineer – Back-End (Data)",
      logoUrl: "/fiscal.png",
      start: "Aug 2025",
      end: "Nov 2025",
      description:
        "Built Python and AWS-based data pipelines to extract EPS, weighted average shares outstanding, and share counts from SEC filings for 500+ companies. Optimized LLM-driven PDF extraction using chunking and model fallback strategies, improving processing speed by ~30%. Reduced pipeline errors by ~40% by implementing Pydantic-based validation frameworks and business rules. Debugged large-scale async workflows with rate limiting and integrated Sentry for error tracking.",
    },
    {
      company: "Paradigm Engineering (MUN)",
      href: "https://www.instagram.com/paradigm_mun/",
      badges: [],
      location: "St. John’s, NL",
      title: "Business Lead",
      logoUrl: "/paradigm.png",
      start: "Sep 2023",
      end: "Jun 2025",
      description:
        "Helped raise $65K+ in funding by producing pitch decks, managing outreach, and supporting grant applications. Increased social engagement by ~60% by analyzing audience behavior and launching targeted content strategies.",
    },
    {
      company: "Best Western Plus",
      href: "https://www.bestwestern.com",
      badges: [],
      location: "St. John’s, NL",
      title: "Guest Service Representative",
      logoUrl: "/bestwestern.png",
      start: "Oct 2021",
      end: "Oct 2025",
      description:
        "Primary point of contact for 100+ guests daily. Regularly led front desk operations as Acting Manager during peak seasons, maintaining a 99% guest satisfaction rate while handling scheduling, issue resolution, and staff coordination.",
    },
  ],
  projects: [
     {
      title: "Ontario AMIS Mine Hazard Explorer",
      href: "https://amis-data.vercel.app/",
      dates: "Sep 2026",
      active: true,
      description:
        "This project turns Ontario AMIS hazard data into a compact 3D terrain scene, scoring mine hazards and preparing them for Blender rendering.",
      technologies: [
        "Blender", 
        "Codex", 
        "Python",
        "3D Geospatial Analysis", 
        "Ontario AMIS Data"
      ],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/amis",
        },
      ],
      image: "/amis.png",
      video: "",
    },
     {
      title: "Ontario Hospital Quality Improvement Explorer",
      href: "https://hospitalopsdata.vercel.app/",
      dates: "Sep 2026",
      active: true,
      description:
        "A public dashboard for exploring Ontario hospital Quality Improvement Plan data, including planned and reported changes related to emergency department access and patient flow. It is not live operational data or a hospital comparison tool.",
      technologies: [
        "NextJS", 
        "shadcn/ui", 
        "Claude",
        "TanStack Table", 
        "Recharts", 
        "Pandas", 
        "NVIDIA Nemotron"
      ],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/hospital_ops_data",
        },
      ],
      image: "/qip.png",
      video: "",
    },
     {
      title: "LiverScope",
      href: "https://datathon-silk.vercel.app/",
      dates: "Feb 2026",
      active: true,
      description:
        "LiverScope is a web app built for the 2026 Memorial University / Canadian Medical Datathon. It explores the BUPA liver disorders dataset and provides an educational liver risk calculator based on routine biomarkers and reported alcohol intake.",
      technologies: [
        "TypeScript",
        "Supabase",
        "Recharts",
        "Python",
        "Scikit-learn"
      ],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/datathon",
        },
      ],
      image: "/liverscope.png",
      video: "",
    },
    {
      title: "Meridian",
      href: "https://meridian-transit.vercel.app/",
      dates: "Feb 2026 - in development",
      active: true,
      description:
        "Building a transit app that combines live bus tracking and personalized commuting tools into one clean interface tailored for everyday riders.",
      technologies: [
        "Flutter",
        "Supabase",
        "Riverpod",
        "Drift (local DB)",
        "Google Maps API",
      ],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/meridian",
        },
      ],
      image: "/videos/meridian.gif",
      video: "",
    },
    {
      title: "Local LLM Server (Self-Hosted AI Infra)",
      href: "https://ammar-15.github.io/blog/building_an_ai_server",
      dates: "Feb 2026 - in development",
      active: true,
      description:
        "Nuked Windows on my laptop to configure a lightweight no GUI Debian AI server to run local LLMs for extraction, parsing, and coding agents (ZeroClaw). More about this project on my blog!",
      technologies: [
        "Linux (Debian minimal)",
        "Ollama",
        "Qwen 7B",
        "ZeroClaw",
        "Tailscale",
      ],
      links: [
        {
          type: "Blog Post",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ammar-15.github.io/blog/building_an_ai_server",
        },
      ],
      image: "/videos/local-llm.gif",
      video: "",
    },
    {
      title: "Dosage Calculator API",
      href: "https://dosage-calculator-web.vercel.app/",
      dates: "Feb 2026",
      active: true,
      description:
        "Built an API that extracts and structures drug dosing data from Health Canada DPD product monographs for reliable dose calculations and easier programmatic access. (this project has been paused)",
      technologies: ["Python", "Supabase", "OpenAI", "NuExtract", "pdfplumber"],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/dosage-calculator-web",
        },
      ],
      image: "/videos/dosage-calculator.gif",
      video: "",
    },
    {
      title: "Goalzy (FIFA Stats Tracker)",
      href: "https://github.com/ammar-15/fifa-tracker-frontend",
      dates: "May 2025",
      active: true,
      description:
        "Developing a stat-tracking web app that converts FIFA match screenshots into structured data using OCR for post-game analysis. Enables players to compare long-term performance trends against friends and identify strengths and weaknesses. (this project has been paused)",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "SQLite",
        "Tesseract.js",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/fifa-tracker-frontend",
        },
      ],
      image: "/videos/goalzy.gif",
      video: "",
    },
    {
      title: "Snipr",
      href: "https://tweetsniper.vercel.app/",
      dates: "Jun 2025",
      active: false,
      description:
        "Built an AI-driven pipeline that fetches hundreds of finance-related tweets, classifies sentiment using GPT models, and verifies stock predictions against real market data via yFinance. Reduced manual research and validation effort by ~90%.",
      technologies: [
        "TypeScript",
        "Python",
        "React",
        "Flask",
        "Firebase",
        "OpenAI",
        "yFinance",
        "Tweepy",
        "snscrape",
      ],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/snipr",
        },
      ],
      image: "videos/snipr.gif",
      video: "",
    },
    {
      title: "Housekeepr",
      href: "https://housekeepr.vercel.app/",
      dates: "Oct 2024 - Apr 2025",
      active: false,
      description:
        "Built a web app to digitize hotel housekeeping workflows, reducing manual coordination by ~80% through real-time updates and centralized task tracking. Designed modular, responsive UI components for cross-device usage.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/housekeepr",
        },
      ],
      image: "/videos/housekeepr.gif",
      video: "",
    },
    {
      title: "GitHubElo",
      href: "https://githubelo.web.app/",
      dates: "Nov 2024",
      active: false,
      description:
        "Created a competitive GitHub Elo leaderboard that analyzes developer activity such as commits, repositories, and followers. Attracted 350+ users organically, primarily through Twitter.",
      technologies: ["React", "Node.js", "Firebase", "Express", "Tailwind CSS"],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/GitHubElo",
        },
      ],
      image: "/videos/githubelo.gif",
      video: "",
    },
    {
      title: "Roomer",
      href: "https://roomer1-demo.web.app/",
      dates: "Jun 2024 - Sep 2024",
      active: false,
      description:
        "Built a room-tracking tool that replaced paper logs with real-time digital check-outs, improving operational efficiency by ~70% for hospitality workflows.",
      technologies: ["HTML", "JavaScript", "CSS", "Bootstrap", "Firebase"],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/Roomer-demo",
        },
      ],
      image: "/videos/roomer.gif",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Toronto Stunt",
      dates: "Sep 2026",
      location: "Toronto, ON",
      description:
        "A 3D sandbox where you stunt through an endless blocky Toronto, earn money, and upgrade from skates to a flying car.",
      image: "/torontostunt.png",
      links: [
        {
          type: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://toronto-stunt-flow.base44.app/",
        },
      ],
    },
    {
      title: "Final POS Game Solver",
      dates: "July 2026",
      location: "St. John's, NL",
      description:
        "A solver for a match-3 game using Playwright browser automation. Features adjustable parameters, real-time leaderboards, and persistent score tracking.",
      image: "/pragma.png",
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://finalpos-game.vercel.app/",
        },
        {
          type: "Instagram",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.instagram.com/p/DZVBFp_yuY8/",
        },
      ],
    },
    {
      title: "Pragma",
      dates: "Jan 2026",
      location: "St. John's, NL",
      description:
        "Built a motion tracking web demo inspired by PragmaClin concepts that records short movement sessions and analyzes pose data to compare Parkinson’s motor performance.",
      image: "/pragma.png",
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/pragma",
        },
      ],
    },
    {
      title: "AdhanCast",
      dates: "Mar 2025",
      location: "St. John's, NL",
      description:
        "Built a lightweight application that plays the Adhan automatically on a Google Home device at prayer times based on user location. Designed for personal and small-community use, with customizable notification and playback behavior.",
      image: "/adhancast.png",
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/AdhanCast",
        },
        {
          type: "LinkedIn",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7301637061491531777/",
        },
      ],
    },
    {
      title: "Rot Launcher Hack Night",
      dates: "Mar 2025",
      location: "St. John's, NL",
      description: (
        <>
          Built a dopamine-inducing tool that launches Instagram Reels directly
          into the home screen to increase short-form content consumption.
          Focused on speed, minimal UI, and quick access. Collaborated with{" "}
          <a
            href="https://www.linkedin.com/in/pranay-bolem/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary"
          >
            Pranay Bolem
          </a>{" "}
          on design and implementation.
        </>
      ),
      image: "/rotlauncher.png",
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PranayBolem/InstaReelsLauncher",
        },
        {
          type: "LinkedIn",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7312811474488287232/",
        },
        {
          type: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/shorts/TT_48ZU72u8",
        },
      ],
    },

    // {
    //   title: "zubo.xyz",
    //   dates: "Feb 2026",
    //   location: "St. John's, NL",
    //   description:
    //     "fun stuff coming soon",
    //   image:
    //     "",
    //   links: [
    //     {
    //       title: "",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "",
    //     },
    //   ],
    // },
  ],
  education: [
    {
      school: "HubSpot Academy",
      href: "https://technl.ca/ai-skills-launchpad/",
      degree: "HubSpot Reporting CRM Certification",
      logoUrl: "/hubspot.jpg",
      start: "Aug 2026",
      end: "Sep 2026",
    },
    {
      school: "TechNL",
      href: "https://credsverse.com/credentials/ead55b76-cdcb-4ee8-946e-3d707d812169",
      degree: "AI in Data Engineering",
      logoUrl: "/technl.png",
      start: "Feb 2026",
      end: "Mar 2026",
    },
    {
      school: "Get Building",
      href: "https://getcoding.ca",
      degree: "Full-Stack Software Development (Mentor-led Program)",
      logoUrl: "/getbuilding.png",
      start: "May 2024",
      end: "August 2025",
    },
    {
      school: "Memorial University of Newfoundland",
      href: "https://www.mun.ca",
      degree: "Bachelor of Science, Computer Science (DNF 🥀)",
      logoUrl: "/mun.png",
      start: "Sep 2019",
      end: "May 2024",
    },
  ],
} as const;
