import Link from "next/link";

export default function CoursesPage() {
  function CourseSection({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
        <ul className="space-y-2 text-lg text-white/90">{children}</ul>
      </div>
    );
  }

  function CourseItem({ children }: { children: React.ReactNode }) {
    return (
      <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-white">
        {children}
      </li>
    );
  }

  return (
    <main className="bg-indigo-500 text-white min-h-screen pt-36 pb-24 px-6 sm:px-10 md:px-16">
      <section className="max-w-6xl mx-auto">
        {/* PAGE HEADING */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          Courses I&apos;ve Taken
        </h1>

        <p className="text-lg sm:text-xl italic text-white/90 mb-14">
          Undergraduate @ GITAM University
        </p>

        {/* COURSES GRID */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            <CourseSection title="Core Computer Science">
              <CourseItem>Data Structures</CourseItem>
              <CourseItem>Object Oriented Programming with Java</CourseItem>
              <CourseItem>Operating Systems</CourseItem>
              <CourseItem>Computer Networks</CourseItem>
              <CourseItem>Compiler Design</CourseItem>
              <CourseItem>Database Management Systems</CourseItem>
              <CourseItem>Formal Language & Automata Theory</CourseItem>
              <CourseItem>Design and Analysis of Algorithms</CourseItem>
              <CourseItem>Software Engineering</CourseItem>
              <CourseItem>Web Application Development</CourseItem>
            </CourseSection>

            <CourseSection title="AI, Data & Security">
              <CourseItem>Artificial Intelligence</CourseItem>
              <CourseItem>AI Applications</CourseItem>
              <CourseItem>Cryptography & Network Security</CourseItem>
              <CourseItem>Introduction to Data Science</CourseItem>
              <CourseItem>Big Data Analytics</CourseItem>
            </CourseSection>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10">
            <CourseSection title="General & Interdisciplinary">
              <CourseItem>Venture Development</CourseItem>
              <CourseItem>Environmental Studies</CourseItem>
              <CourseItem>Design Thinking</CourseItem>
              <CourseItem>Universal Human Values</CourseItem>
              <CourseItem>Disaster Management</CourseItem>
              <CourseItem>Personal Financial Planning</CourseItem>
              <CourseItem>Principles of Banking</CourseItem>
            </CourseSection>

            <CourseSection title="Creative & Communication">
              <CourseItem>Fundamentals of Graphic Design</CourseItem>
              <CourseItem>Photography</CourseItem>
              <CourseItem>Visual Arts</CourseItem>
              <CourseItem>Communication Skills in English</CourseItem>
              <CourseItem>Advanced Communication Skills</CourseItem>
              <CourseItem>Leadership Skills & Quantitative Aptitude</CourseItem>
            </CourseSection>
          </div>
        </div>

        {/* BACK TO RESUME */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/resume"
            className="
              inline-flex items-center gap-2
              border border-white
              px-8 py-3
              rounded-full
              text-lg font-semibold
              transition
              hover:bg-white hover:text-indigo-600
            "
          >
            Back to Resume
          </Link>
        </div>
      </section>
    </main>
  );
}
