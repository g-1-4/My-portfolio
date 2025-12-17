"use client";
import Link from "next/link";
import { useState } from "react";
import AccordionItem from "../components/AccordionItem";

export default function ResumePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-40 pb-28 px-6 sm:px-12 md:px-20 bg-indigo-500 text-white">
      <section
        className="
          max-w-6xl mx-auto
          grid gap-12
          lg:grid-cols-[40%_60%]
        "
      >
        {/* LEFT */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold">
          My Resume
        </h1>

        {/* RIGHT – SINGLE BOX */}
        <div
          className="
            border border-white/40
            rounded-sm
            divide-y divide-white/30
          "
        >
          <AccordionItem
            title="Education"
            isOpen={openIndex === 0}
            onToggle={() => setOpenIndex(openIndex === 0 ? null : 0)}
          >
            <p>
              <strong>GITAM University - Class of 2025</strong>
            </p>
            <p>B.Tech in Computer Science and Engineering</p>
            <p>Cumulative GPA: 8.5</p>
            <p>
              <strong>Narayana Junior College - Class of 2021</strong>
            </p>
            <p>Intermediate Education</p>
            <p>Percentage: 95.8</p>
            <p>
              <strong>Narayana High School - Class of 2019</strong>
            </p>
            <p>High School</p>
            <p>Cumulative GPA: 10</p>
            <p>
              <Link
                href="/courses"
                className="text-white underline italic hover:text-white/70"
              >
                Courses I've Taken
              </Link>
            </p>
          </AccordionItem>

          <AccordionItem
            title="Work Experience"
            isOpen={openIndex === 1}
            onToggle={() => setOpenIndex(openIndex === 1 ? null : 1)}
          >
            <p>
              <strong>Research Intern - NIT Warangal (2024)</strong>
            </p>
            <p>
              Developed machine learning models for cardiovascular disease
              prediction using bioinformatics data, achieving 88.13% accuracy.
              Co-authored a research paper under the guidance of an associate
              professor.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Extracurriculars"
            isOpen={openIndex === 2}
            onToggle={() => setOpenIndex(openIndex === 2 ? null : 2)}
          >
            <p>
              Presented my GIS project research paper at an International
              conference hosted by Aditya University, Andhra Pradesh.
            </p>
            <p>
              Member of Kalakriti (Cultural Club, GITAM University); part of the
              organizing team for "Musical Tambola" conducted during Ethnic Day
              celebrations.
            </p>
            <p>
              Member of The Debate Society (Debate Club, GITAM University),
              GITAM University.
            </p>
          </AccordionItem>

          <AccordionItem
            title="Skills"
            isOpen={openIndex === 3}
            onToggle={() => setOpenIndex(openIndex === 3 ? null : 3)}
          >
            <div>
              <p className="font-semibold">Programming</p>
              <div className="flex flex-wrap gap-4 items-center mt-3">
                <div className="flex flex-col items-center text-sm">
                  <img
                    src="/resume-images/clang.png"
                    alt="C"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="mt-1">C</span>
                </div>

                <div className="flex flex-col items-center text-sm">
                  <img
                    src="/resume-images/plang.png"
                    alt="Python"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="mt-1">Python</span>
                </div>

                <div className="flex flex-col items-center text-sm">
                  <img
                    src="/resume-images/jlang.png"
                    alt="Java"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="mt-1">Java</span>
                </div>

                <div className="flex flex-col items-center text-sm">
                  <img
                    src="/resume-images/jslang.png"
                    alt="JavaScript"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="mt-1">JavaScript</span>
                </div>

                <div className="flex flex-col items-center text-sm">
                  <img
                    src="/resume-images/sql.png"
                    alt="JavaScript"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="mt-1">SQL</span>
                </div>
              </div>

              <p className="font-semibold mt-4">Databases</p>
              <div className="flex flex-wrap gap-4 items-center mt-3">
                <div className="flex flex-col items-center text-sm">
                  <img
                    src="/resume-images/postgresql.png"
                    alt="PostgreSQL"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="mt-1">PostgreSQL</span>
                </div>

                <div className="flex flex-col items-center text-sm">
                  <img
                    src="/resume-images/mongodb.png"
                    alt="MongoDB"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="mt-1">MongoDB</span>
                </div>
              </div>

              <p className="font-semibold mt-4">Tools</p>
              <div className="flex flex-wrap gap-4 items-center mt-3">
                <div className="flex flex-col items-center text-sm">
                  <img
                    src="/resume-images/git.png"
                    alt="Git"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="mt-1">Git</span>
                </div>

                <div className="flex flex-col items-center text-sm">
                  <img
                    src="/resume-images/docker.png"
                    alt="Docker"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="mt-1">Docker</span>
                </div>

                <div className="flex flex-col items-center text-sm">
                  <img
                    src="/resume-images/powerbi.png"
                    alt="Power BI"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="mt-1">Power BI</span>
                </div>

                <div className="flex flex-col items-center text-sm">
                  <img
                    src="/resume-images/github.png"
                    alt="Github"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="mt-1">Github</span>
                </div>

                <div className="flex flex-col items-center text-sm">
                  <img
                    src="/resume-images/gitlab.png"
                    alt="Gitlab"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="mt-1">Gitlab</span>
                </div>

                <div className="flex flex-col items-center text-sm">
                  <img
                    src="/resume-images/k8s.png"
                    alt="Kubernetes"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="mt-1">Kubernetes</span>
                </div>
              </div>
            </div>
          </AccordionItem>
        </div>
      </section>
    </main>
  );
}
