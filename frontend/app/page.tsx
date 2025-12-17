export default function Home() {
  return (
    <div className="bg-indigo-500 text-white min-h-screen">
      {/* HERO SECTION */}
      <section
        className="
        flex flex-col-reverse
        lg:flex-row
        items-center
        gap-10
        px-6 sm:px-10 md:px-16 lg:px-32
        pt-28 lg:pt-32
        pb-20
      "
      >
        {/* TEXT */}
        <h1
          className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-semibold
          leading-snug
          text-center lg:text-left
          max-w-xl
        "
        >
          Undergraduate student at GITAM University, Hyderabad, passionate about
          a future in tech and innovation.
        </h1>

        {/* IMAGE */}
        <img
          src="/my-images/my-img.jpeg"
          alt="Profile"
          className="
            w-48 h-60
            sm:w-56 sm:h-72
            md:w-64 md:h-80
            lg:w-72 lg:h-96
            object-cover
            rounded-t-full
            shadow-lg
          "
        />
      </section>

      {/* INTRO SECTION */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-32 pb-20">
        {/* LINE */}
        <div className="flex justify-center">
          <div className="w-56 sm:w-72 md:w-96 h-[2px] bg-white/60" />
        </div>

        {/* TITLE */}
        <h2
          className="
          mt-4
          text-lg sm:text-xl md:text-2xl
          font-medium
          text-center
        "
        >
          Intro
        </h2>

        {/* PARAGRAPH */}
        <p
          className="
          mt-6
          text-sm sm:text-base md:text-lg
          leading-relaxed
          text-center md:text-justify
          max-w-3xl
          mx-auto
        "
        >
          I'm a Computer Science undergraduate from Hyderabad with strong
          interest in web development, data analysis, and emerging technologies.
          I’ve explored research at NIT Warangal, contributed to university
          clubs, and built projects using Python, JavaScript, and modern web
          frameworks. Outside academics, I can speak 3 languages (Telugu,
          English, Hindi). I enjoy football, cricket, and following global
          geopolitics.
        </p>
      </section>

      {/* IMAGE GALLERY */}
      <section
        className="
        flex flex-col
        md:flex-row
        items-center
        justify-center
        gap-10 lg:gap-16
        px-6 sm:px-10 md:px-16
        pb-24
      "
      >
        <img
          src="/my-images/IMG_0880.jpg"
          alt="Gallery image 1"
          className="
            w-72 h-52
            sm:w-[420px] sm:h-64
            md:h-72
            object-cover
            shadow-lg
            transition-all duration-300
            hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl
          "
        />

        <img
          src="/my-images/IMG_1052.JPG"
          alt="Gallery image 2"
          className="
            w-72 h-52
            sm:w-[420px] sm:h-64
            md:h-72
            object-cover
            shadow-lg
            transition-all duration-300
            hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl
          "
        />
      </section>
    </div>
  );
}
