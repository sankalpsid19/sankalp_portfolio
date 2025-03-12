import { RevealOnScroll } from "../RevealOnScroll";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Sankalp
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto ">
            I'm a full-stack developer based in India. I love building web
            applications and learning new technologies.
          </p>
          <div className="flex space-x-4 justify-center">
            <a
              href="#projects"
              className="bg-blue-500 text-white  py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_15_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact "
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_0_15_rgba(59,130,246,0.4)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Home;
