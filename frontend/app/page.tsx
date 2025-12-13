export default function Home() {
  return (
    <div className="bg-indigo-500 text-white min-h-screen">
      <section className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-32 pt-32 pb-20">
        <img
          src="/my-img.jpeg"
          alt="Profile"
          className="w-150 h-70 object-cover rounded-t-full shadow-lg"
        />

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Undergraduate student at GITAM University, Hyderabad, passionate about
          a future in tech and innovation.
        </h1>
      </section>

      {/* Intro Section */}
      <section className="flex flex-col items-center px-6 md:px-32 pb-20">
        {/* Line */}
        <div className="w-full flex justify-center">
          <div className="w-160 md:w-64 h-[2px] bg-white opacity-60"></div>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-xl md:text-2xl font-medium text-center">
          Intro
        </h2>

        {/* Paragraph */}
        <div className="w-full flex justify-center">
          <p
            className="
        mt-6 
        text-base md:text-lg 
        leading-relaxed 
        text-center md:text-justify 
        max-w-[90%] sm:max-w-[80%] md:max-w-3xl
      "
          >
            I'm a Computer Science undergraduate from Hyderabad with strong
            interest in web development, data analysis, and emerging
            technologies. I’ve explored research at NIT Warangal, contributed to
            university clubs, and built projects using Python, JavaScript, and
            modern web frameworks. Outside academics, I enjoy football, cricket,
            and following global geopolitics.
          </p>
        </div>
      </section>

      {/* Images */}
      <section className="flex flex-col md:flex-row justify-center gap-16 px-6 pb-20">
        <img
          src="/images/IMG_0880.jpg"
          className="h-96 w-72 object-cover shadow-lg"
        />
        <img
          src="/images/IMG_1052.JPG"
          className="h-72 w-[450px] object-cover shadow-lg"
        />
      </section>
    </div>
  );
}
