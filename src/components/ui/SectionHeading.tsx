type Props = {
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  label?: string;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  inverse = false,
  label,
}: Props) {
  return (
    <div className={`section-heading section-heading--${align}${inverse ? " section-heading--inverse" : ""}`}>
      {label && <p className="section-label">{label}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
