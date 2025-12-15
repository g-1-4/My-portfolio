"use client";

const projects = [
  {
    title: "Real-Time QR Code Ticketing and Verification System",
    date: "Jan 2025",
    description:
      "Developed a QR code-based ticket verification system using Python and Node.js with Supabase-backed validation and real-time scanning.",
  },
  {
    title: "GIS-Based Land Parcel Management Web Application",
    date: "Oct 2024",
    description:
      "Built a GIS-based land parcel management system using React, Node.js, PostgreSQL, and PostGIS with Google Maps API.",
  },
  {
    title: "Content-Based Movie Recommendation Engine",
    date: "Aug 2024",
    description:
      "Developed a content-based movie recommendation engine using Python, scikit-learn, and Streamlit.",
  },
  {
    title: "Chatbot Help Desk Web Interface",
    date: "May 2024",
    description:
      "Worked on a chatbot-based help desk system for government departments with React UI migration.",
  },
];

export default function Timeline() {
  return (
    <div className="relative border-l border-white/30 pl-12 space-y-20">
      {projects.map((project, index) => (
        <div key={index} className="relative group">
          {/* TIMELINE CYLINDER */}
          <div
            className="
              absolute -left-[52px] top-6
              h-5 w-5
              bg-white
              rounded-full
              overflow-hidden
              transition-all duration-300
              group-hover:w-36
              group-hover:rounded-full
              flex items-center
              justify-end
              px-4
            "
          >
            {/* DATE TEXT */}
            <span
              className="
                text-indigo-600 text-sm font-semibold
                opacity-0 whitespace-nowrap
                transition-opacity duration-200 delay-150
                group-hover:opacity-100
              "
            >
              {project.date}
            </span>
          </div>

          {/* PROJECT CARD */}
          <div
            className="
              bg-white/10 backdrop-blur-xl
              rounded-2xl p-6 sm:p-8
              shadow-xl
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              {project.title}
            </h2>

            <p className="text-lg leading-relaxed opacity-90">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
