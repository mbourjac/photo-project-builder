type LabelProps = {
  label: string;
  htmlFor: string;
  isInputRequired?: boolean;
};

export const Label = ({ label, htmlFor, isInputRequired }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className="flex items-baseline">
      <span className="font-semibold">{label}</span>
      {isInputRequired && (
        <>
          &nbsp;<span aria-hidden="true">*</span>
        </>
      )}
    </label>
  );
};
