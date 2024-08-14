import React, { useRef, useEffect, forwardRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

interface CustomQuillProps {
  value: string;
  onChange: (value: string) => void;
  className: string;
}

export const CustomQuill = forwardRef(
  ({ value, onChange, className }: CustomQuillProps, ref) => {
    const quillRef = useRef(null);

    useEffect(() => {
      if (quillRef.current) {
        const quillInstance = quillRef.current.getEditor();
        quillInstance.on("text-change", () => {
          onChange(quillInstance.root.innerHTML);
        });
      }
    }, [onChange]);

    useEffect(() => {
      if (ref) {
        ref.current = quillRef.current;
      }
    }, [ref]);

    return (
      <ReactQuill
        ref={quillRef}
        className={className}
        value={value}
        theme="bubble"
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          ],
        }}
      />
    );
  }
);

CustomQuill.displayName = "CustomQuill";
export default CustomQuill;
