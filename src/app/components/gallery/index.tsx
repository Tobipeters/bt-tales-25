export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
          Gallery
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          A collection of our most precious moments together, captured in time
          to share with you.
        </p>
        <div className="h-64 bg-gradient-to-r from-[#66141D]/20 to-[#D187AA]/20 rounded-lg flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Gallery Carousel (SwiperJS) - Coming Next
          </p>
        </div>
      </div>
    </section>
  );
};
