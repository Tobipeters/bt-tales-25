import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          fill
          quality={100}
          src="/hero-bg.JPG"
          alt="Boluwatife and Oluwatobi"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#66141D]/70 via-[#66141D]/50 to-[#D187AA]/60 dark:from-[#66141D]/80 dark:via-[#66141D]/60 dark:to-[#D187AA]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-center gap-5 flex-wrap text-shadow-[rgba(255,255,255,0.698)_0px_0px_26.6235px,rgba(244,114,182,0.396)_0px_0px_26.494px]">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight">
              Boluwatife
            </h1>
            <div className="text-3xl md:text-4xl font-light opacity-90">&</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight">
              Oluwatobi
            </h1>
          </div>

          <div className="space-y-4 mt-12">
            <p className="text-xl md:text-2xl font-light opacity-90">
              are getting married
            </p>
            <p className="text-lg md:text-xl opacity-80">December 31, 2025</p>
            <p className="text-base md:text-lg opacity-70">Lagos, Nigeria</p>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            // onClick={() => scrollToSection("gallery")}
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            {/* <ChevronDown className="w-8 h-8" /> */}
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};
