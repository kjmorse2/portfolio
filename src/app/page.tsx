export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <span className="text-xl font-bold">Your Name</span>
        <ul className="flex gap-6 text-sm">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-8">
        <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Your Name</h1>
        <p className="text-xl text-gray-600 max-w-xl">
          Placeholder tagline — a short sentence describing what you do.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          View My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto py-20 px-8">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-gray-600 leading-relaxed">
          Placeholder about section. Write a few sentences about yourself, your background,
          your skills, and what you are passionate about.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-50 py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-2">Project {n}</h3>
                <p className="text-gray-500 text-sm">
                  Placeholder project description. Describe what this project does and the
                  technologies you used.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto py-20 px-8">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-600 mb-4">
          Placeholder contact section. Add your email, social links, or a contact form here.
        </p>
        <a
          href="mailto:your@email.com"
          className="text-black font-medium hover:underline"
        >
          your@email.com
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-400 border-t border-gray-200">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </main>
  );
}
