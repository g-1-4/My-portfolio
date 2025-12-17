export default function Footer() {
  return (
    <footer className="w-full bg-[#ababf3] text-white py-6">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl font-bold mb-1">Gowtham Sriram Arepalli</h1>

        <p className="italic underline text-lg mb-4">Current song on repeat:</p>
        <div className="flex justify-center">
          <iframe
            width="200"
            height="140"
            src="https://www.youtube.com/embed/5JoPeWHkKJg?si=jdFB625gZQpP7GZ1&amp;start=7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-6 italic text-base leading-relaxed">
          “When faced with two choices, simply toss a coin. It works not because
          it settles the question for you, but because in that brief moment when
          the coin is in the air, you suddenly know what you are hoping for.”
        </p>
        <p className="mt-2 text-sm opacity-80">— Author Unknown</p>
        <p className="mt-6 text-sm opacity-90">
          © {new Date().getFullYear()} Gowtham Sriram Arepalli. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
