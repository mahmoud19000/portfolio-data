import {
  Code2,
  Database,
  Sparkles,
  GitBranch,
  FileImage,
  BarChart3,
  Globe,
  Mail,
  Github,
  Linkedin,
  Briefcase,
  Phone,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "scraping",
    icon: Globe,
    title: "Automated Web Scraping & Data Extraction",
    description:
      "Custom scrapers and crawlers that extract structured data from any website at scale — with anti-bot handling, pagination, and scheduled automation.",
  },
  {
    id: "cleaning",
    icon: Sparkles,
    title: "Data Cleaning, Preprocessing & Transformation",
    description:
      "Raw data transformed into analysis-ready datasets — handling missing values, outliers, type coercion, and schema normalization.",
  },
  {
    id: "eda",
    icon: BarChart3,
    title: "Exploratory Data Analysis (EDA) & Insights",
    description:
      "Deep statistical exploration with interactive visualizations that uncover trends, correlations, and actionable business insights.",
  },
  {
    id: "etl",
    icon: GitBranch,
    title: "End-to-End ETL Data Pipelines",
    description:
      "Production-grade Extract-Transform-Load pipelines with error handling, logging, scheduling, and data quality checks built in.",
  },
  {
    id: "docs",
    icon: FileImage,
    title: "Automated Document & Image Data Extraction",
    description:
      "OCR and intelligent document processing to extract text, tables, and structured data from PDFs, scans, and images automatically.",
  },
];

export interface Skill {
  name: string;
  category: string;
}

export const skills: Skill[] = [
  { name: "Python", category: "Language" },
  { name: "SQL", category: "Language" },
  { name: "Pandas", category: "Library" },
  { name: "NumPy", category: "Library" },
  { name: "Streamlit", category: "Framework" },
  { name: "Plotly", category: "Library" },
  { name: "BeautifulSoup", category: "Library" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Git", category: "Tool" },
  { name: "Linux", category: "Platform" },
  { name: "Docker", category: "DevOps" },
];

export interface ProjectGalleryImage {
  url: string;
  label: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  cover: string;
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  gallery: ProjectGalleryImage[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: "scraping-automation",
    title: "Web Scraping & Data Extraction Automation",
    cover:
      "./image_490a29.jpg",
    summary:
      "A robust scraping framework that automates data collection from multiple sources with scheduling, retry logic, and export to structured formats.",
    problem:
      "A client needed daily data from 15+ e-commerce competitor sites, but manual copy-paste was slow, error-prone, and couldn't scale with the growing list of targets.",
    solution:
      "Built a modular Python scraping engine using BeautifulSoup and requests with rotating user agents, retry with exponential backoff, and a cron-based scheduler. Data is validated, deduplicated, and exported as clean CSV/JSON — ready for downstream analysis.",
    techStack: ["Python", "BeautifulSoup", "Requests", "Pandas", "Cron", "Linux"],
    gallery: [
      {
        url: "./image_490a04.png",
        label: "Code",
        description: "Modular scraper architecture with configurable target definitions",
      },
      {
        url: "./image_4909cb.png",
        label: "Extracted Data (VS Code)",
        description: "Extracted data inspected directly in VS Code before export",
      },
      {
        url: "./image_4909a7.png",
        label: "Final Excel Sheet",
        description: "Final structured Excel export with validated, typed columns ready for analytics",
      },
    ],
    github: "https://github.com/mahmoudfayez",
    demo: "https://github.com/mahmoudfayez",
  },
  {
    id: "etl-pipeline",
    title: "Automated Data Cleaning & ETL Pipeline",
    cover:
      "./image_490324.png",
    summary:
      "An end-to-end ETL pipeline that ingests messy raw data, cleans and transforms it, and loads it into a structured warehouse with full audit logging.",
    problem:
      "Sales data arrived from 5 different regional systems in 3 different formats with inconsistent column names, missing fields, and duplicate records — making any consolidated report unreliable.",
    solution:
      "Designed a multi-stage ETL pipeline: extraction adapters per source, a Pandas-based transformation layer handling type casting, outlier detection, and deduplication, then bulk loading into PostgreSQL. Each stage logs row counts, errors, and processing time to an audit table for full traceability.",
    techStack: ["Python", "Pandas", "PostgreSQL", "Docker", "NumPy", "Git"],
    gallery: [
      {
        url: "./image_4902a4.png",
        label: "Raw Uncleaned Data",
        description: "Inconsistent regional exports with mixed formats and missing fields",
      },
      {
        url: "./image_4902a8.png",
        label: "ETL Code Script",
        description: "ETL orchestration script with stage-based transformation logic",
      },
      {
        url: "./image_4902c0.png",
        label: "Cleaned Data (CSV)",
        description: "Unified, validated dataset exported as clean CSV",
      },
      {
        url: "./image_4902c4.png",
        label: "Cleaned Data (Excel)",
        description: "Unified, validated data delivered as a structured Excel workbook",
      },
    ],
    github: "https://github.com/mahmoudfayez",
    demo: "https://github.com/mahmoudfayez",
  },
  {
    id: "sales-dashboard",
    title: "Interactive Sales Analytics Dashboard",
    cover:
      "./image_49022b.png",
    summary:
      "A real-time interactive dashboard built with Streamlit and Plotly that visualizes sales KPIs with drill-down filters and exportable reports.",
    problem:
      "The sales team relied on static monthly Excel reports that couldn't answer ad-hoc questions — they needed to filter by region, product, and time period on demand.",
    solution:
      "Developed a Streamlit web application with Plotly interactive charts: revenue trends, top products, regional breakdowns, and cohort analysis. Users can filter by date range, category, and region with instant visual updates. The dashboard pulls live data from PostgreSQL and supports CSV export of any filtered view.",
    techStack: ["Python", "Streamlit", "Plotly", "Pandas", "PostgreSQL", "SQL"],
    gallery: [
      {
        url: "./image_48f763.png",
        label: "Dashboard Interface",
        description: "Interactive dashboard with KPI cards, trend lines, and regional heatmaps",
      },
      {
        url: "./image_48f765.png",
        label: "Streamlit Code",
        description: "Streamlit app with Plotly chart definitions and filter callbacks",
      },
    ],
    github: "https://github.com/mahmoudfayez",
    demo: "https://github.com/mahmoudfayez",
  },
];

export const aboutHighlights = [
  { icon: Code2, label: "Python", description: "Core development language for all data work" },
  { icon: Database, label: "SQL & Databases", description: "PostgreSQL, schema design, query optimization" },
  { icon: GitBranch, label: "ETL Pipeline Architecture", description: "End-to-end data flow design and automation" },
  { icon: Sparkles, label: "Data Preprocessing", description: "Cleaning, transformation, and feature engineering" },
  { icon: BarChart3, label: "Interactive Visualization", description: "Streamlit & Plotly dashboards for data storytelling" },
];

export const contact = {
  email: "mahmoudfayez4100@gmail.com",
  phone: "+201503403134",
  socials: [
    { icon: Mail, label: "Email", href: "mailto:mahmoudfayez4100@gmail.com" },
    { icon: Phone, label: "WhatsApp / Call", href: "https://wa.me/201503403134" },
    { icon: Github, label: "GitHub", href: "https://github.com/mahmoudfayez" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mahmoud10fayez" },
    { icon: Briefcase, label: "Upwork", href: "https://www.upwork.com" },
  ],
};

export const profileImage =
  "./profile-no-bg.png";
