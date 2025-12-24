interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12`}>
      {subtitle && (
        <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight ${
          light ? 'text-primary-foreground' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-primary-foreground/80' : 'text-muted-foreground'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
