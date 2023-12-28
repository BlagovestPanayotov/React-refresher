import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  onClose: () => void;
}
const Alert2 = ({ children, onClose }: TextProps) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show">
        <strong>{children}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert2;
