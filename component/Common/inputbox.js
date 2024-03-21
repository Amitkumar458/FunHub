import { Field, useField, ErrorMessage } from "formik";
import "../../app/page.module.css";

export default function TextField({type , label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3">
      <input
        type={type}
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} component="div" className="text-danger" />
    </div>
  );
}

export function FieldText({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3">
      {label && <label htmlFor={field.name}>{label}</label>}
      <input
        type="text"
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
}

export const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      {label && <label htmlFor={field.name}>{label}</label>}
      <Field
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        } `}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} component="div" className="form-error" />
    </div>
  );
};

export const CheckField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-check form-check-inline mb-2">
      <Field
        className={`form-check-input ${
          meta.touched && meta.error && "is-invalid"
        } `}
        {...field}
        {...props}
      />
      <label className="form-check-label" htmlFor={field.name}>
        {label}
      </label>
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};

export const RadioField = ({ options, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label style={{ color: "gray", fontSize: "12px" }}>{label}</label>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {options.map((option, i) => (
          <div className="form-check" key={i}>
            <input
              className="form-check-input"
              type="radio"
              {...field}
              {...props}
              value={option.value}
              checked={meta.value === option.value && true}
            />
            <label className="form-check-label">{option.label}</label>
          </div>
        ))}
      </div>
      {/* <div>{meta.touched && meta.error}</div> */}
    </>
  );
};
