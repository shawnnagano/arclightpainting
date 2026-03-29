const OwnersSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://arclightpainting.com/wp-content/uploads/2025/09/image__11_-removebg-preview.png"
              alt="Owners of Arclight Painting"
              className="max-w-[300px] w-full"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Meet the <span className="text-accent">Owners</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              As a veteran-owned, values-driven company based in Bothell, WA, we built Arclight Painting on the belief that great work starts with great people. Every project we take on reflects our commitment to honesty, craftsmanship, and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnersSection;
