import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import clsx from "clsx";
import { StrictMode, useEffect } from "react";
import "../styles/tiptap.styles.scss";

interface TipTapProps {
  content: string;
  className?: string;
}

export const TipTap = ({ content, className }: TipTapProps) => {
  const editor = useEditor({
    editable: false,
    immediatelyRender: true,
    extensions: [StarterKit],
    content,
    editorProps: {
      attributes: {
        class: clsx(
          "!min-h-16 h-auto bg-white dark:bg-dark-secondary",
          className
        ),
      },
    },
  });

  useEffect(() => {
    if (content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content]);

  return (
    <StrictMode>
      <EditorContent editor={editor} />
    </StrictMode>
  );
};

export default TipTap;
