export function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  const cls =
    "w-full rounded-xl bg-background/50 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring/40 transition-all duration-300";
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground tracking-wide">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          placeholder={placeholder}
          className={`${cls} mt-1.5 resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={`${cls} mt-1.5`}
        />
      )}
    </label>
  );
}

export function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground tracking-wide">{label}</span>
      <select
        name={name}
        className="mt-1.5 w-full rounded-xl bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring/40 transition-all duration-300"
      >
        {options.map((o) => (
          <option key={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
