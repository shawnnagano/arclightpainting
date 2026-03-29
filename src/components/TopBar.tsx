const services = [
  "House Painting",
  "Exterior Painting",
  "Interior Painting",
  "Cabinet Refinishing",
  "Drywall",
  "Commercial Painting",
  "Painter for a Day",
];

const TopBar = () => {
  return (
    <div className="bg-accent text-accent-foreground py-2 overflow-hidden">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...services, ...services].map((service, i) => (
          <span key={i} className="mx-6 text-sm font-semibold uppercase tracking-wider">
            {service}
            <span className="mx-6 opacity-60">|</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
