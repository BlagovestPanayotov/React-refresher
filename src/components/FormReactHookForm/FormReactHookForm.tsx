import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const FormReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FieldValues) {}

  return (
    <>
      <h2>Form React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">The name field is required.</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">
              The name must be at least 3 characters.
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="forl-label">
            Age
          </label>
          <input
            {...register("age", { required: true })}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mb-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormReactHookForm;
