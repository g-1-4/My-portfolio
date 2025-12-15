import { data } from "framer-motion/client";

const projects = [
  {
    title: "Real-Time QR Code Ticketing and Verification System",
    date: "Jan 2025",
    description:
      "Developed a QR code-based ticket verification system using Python and Node.js. QR codes were generated with the qrcode Python library and stored in a Supabase database. The web interface, built with HTML and a JS QR scanner, allows event staff to scan tickets in real time. Upon scanning, the system returns whether the ticket is valid, already used, or invalid. The frontend was deployed on Netlify, and the backend was hosted on Render for seamless cloud integration.",
  },
  {
    title: "GIS-Based Land Parcel Management Web Application",
    date: "Oct 2024",
    description:
      "Developed a GIS-based land parcel management web application using React, Node.js, and PostgreSQL with PostGIS. Users can draw polygons on a map to mark land boundaries, with real-time area and perimeter calculations. Integrated Google Maps API for interactive mapping and built RESTful APIs for CRUD operations. Included a form to collect and store landowner details linked to each parcel. Geospatial data was stored and queried efficiently using PostGIS.",
  },
  {
    title: "Content-Based Movie Recommendation Engine",
    date: "Aug 2024",
    description:
      "Developed a content-based movie recommendation system using Python and a Kaggle movie dataset. The system suggests similar movies based on user input by analyzing genres, keywords, and metadata. Performed exploratory data analysis (EDA) using Pandas, Matplotlib, and scikit-learn for data preprocessing and feature engineering. Deployed the recommendation engine with an interactive Streamlit web interface for easy user interaction.",
  },
  {
    title: "Chatbot Help Desk Web Interface",
    date: "May 2024",
    description:
      "Worked on a group project to build a chatbot-based help desk for automating support in government departments. Initially developed the UI/UX using HTML and CSS, and later migrated the interface to React to create a more responsive single-page application. Focused on frontend development and collaborated with teammates to connect the chatbot backend with the interface. The project was built locally and not deployed.",
  },
];

/* ---------------- PAGE ---------------- */
export default function ProjectsPage() {
  return (
    <div className="bg-indigo-500 text-white min-h-screen pt-32 px-6 sm:px-10 md:px-16 lg:px-24">
      <section className="max-w-6xl mx-auto pb-24">
        {/* PAGE TITLE */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-20">
          My Projects
        </h1>

        {/* TIMELINE */}
        <div className="relative border-l border-white/30 pl-8 space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group transition-all duration-300"
            >
              {/* TIMELINE DOT */}
              <span className="absolute -left-[42px] top-3 w-4 h-4 rounded-full bg-white transition-transform duration-300 group-hover:scale-125" />

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
                <h3 className="text-xl sm:text-xl font-semibold mb-4">
                  {project.date}
                </h3>
                <p className="text-lg leading-relaxed opacity-90">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
