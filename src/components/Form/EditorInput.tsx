import { BoldIcon } from "@/assets";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";

interface EditorInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const EditorInput = ({ value, onChange }: EditorInputProps) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: value,
    editorProps: {
      attributes: {
        class: "prose prose-invert",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });
  return (
    <div>
      <BoldIcon />
      <EditorContent editor={editor} />
    </div>
  );
};

export default EditorInput;
