import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const FormReactHookForm = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data: FieldValues) {
    console.log(data);
  }

  return (
    <>
      <h2>Form React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="forl-label">
            Age
          </label>
          <input
            {...register("age")}
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
