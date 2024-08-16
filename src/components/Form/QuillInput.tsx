import React, { useEffect, useRef } from "react";
import { useController, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

interface QuillInputProps {
  name: string;
}

export const QuillInput: React.FC<QuillInputProps> = ({ name }) => {
  const quillRef = useRef<ReactQuill | null>(null);
  const { register, setValue } = useFormContext();

  useEffect(() => {
    if (quillRef.current) {
      register(name, {
        setValueAs: () => quillRef.current?.getEditor().root.innerHTML,
      });
    }
  }, [register, name]);

  return (
    <ReactQuill
      ref={quillRef}
      onChange={(value) => setValue(name, value)}
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
};

export default QuillInput;
