// data/projects.ts
export const projects = [
  {
    title: "Personal Portfolio",
    description: "A sleek, fully responsive portfolio site built with React, Tailwind, and Framer Motion.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/Trevor-Kayeyia-Madara/trevor-portfolio",
    demo: "https://yourdomain.com",
    image: "/images/portfolio.png",
    details: `
                This is a full-stack portfolio project with:
                - Light/Dark toggle
                - Responsive layout
                - Framer motion transitions
` // optional
  },
  {
    title: "School Management System",
    description: "A full-featured School Management System built with Flask (Python) for the backend and React + TypeScript for the frontend. The system supports multi-role dashboards for Admins, Teachers, Parents, and optionally Students.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Trevor-Kayeyia-Madara/Mahiu-Girls-School-System",
    demo: "https://mahiu-girls-school-system.vercel.app/",
    image: "/images/school.png",
    details: `
                ✅ Admin Panel
                        User management (create, read, update, delete)
                        Manage Teachers, Students, Subjects, Classrooms
                        Assign Subjects and Class Teachers
                        Create Timetables with inline editing
                        Manage Exam Types and Schedules
                        View and export Class and Student Reports (CSV/PDF)
                        View KCSE-style rankings and class mean scores
                      ✅ Teacher Panel
                        View assigned subjects and classes
                        Enter and update student grades per exam
                        View and export performance summaries
                        Generate class reports
                        Student performance breakdown and analysis
                      ✅ Parent Panel
                        View child’s academic performance
                        Download child’s report cards (CSV/PDF)
                        View class position and KCSE grade summaries

` // optional
  },
  {
    title: "Deliverance Church Utawala",
    description: "We are an Apostolic Church Of Choice that Vision to Transform and Empower Mankind in Africa and Beyond.",
    tech: ["React"],
    github: "https://github.com/Trevor-Kayeyia-Madara/Mahiu-Girls-School-System",
    demo: "https://www.dcutawala.org",
    image: "/images/church.png", // optional
        details: `
                Church of choice
` 
    
  },
  {
    title: "Online Hair Finder",
    description: "Online web portal for specialists and customers",
    tech: ["React","Node Js"],
    github: "https://github.com/Trevor-Kayeyia-Madara/hair-specialist",
    demo: "https://hair-specialist.vercel.app/",
    image: "/images/hair.png", // optional
    details: `
        Online web portal for specialists and customers
` 
  },
    {
    title: "Alertsphere",
    description: "Security.",
    tech: ["REACT","Node Js"],
    github: "https://github.com/Trevor-Kayeyia-Madara/alertsphere",
    demo: "https://alertsphere.vercel.app/",
    image: "/images/security.png", // optional
    details: `Security` 
  },
];
