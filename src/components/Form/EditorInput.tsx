import * as Icons from "@/assets";
import Document from "@tiptap/extension-document";
import {
  BubbleMenu,
  EditorContent,
  useEditor,
  useEditorState,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import clsx from "clsx";
import { StrictMode } from "react";

interface EditorInputProps {
  content: string;
  onChange: (value: string) => void;
  className?: string;
}

const CustomDocument = Document.extend({
  content: "heading block*",
});

export const EditorInput = ({
  content,
  onChange,
  className,
}: EditorInputProps) => {
  const editor = useEditor({
    immediatelyRender: true,
    shouldRerenderOnTransaction: false,
    extensions: [
      CustomDocument,
      StarterKit.configure({
        document: false,
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class: clsx(
          "!min-h-16 h-auto bg-white dark:bg-dark-secondary",
          className
        ),
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const currentEditorState = useEditorState({
    editor,
    selector: (ctx) => ({
      isBold: ctx.editor.isActive("bold"),
      isItalic: ctx.editor.isActive("italic"),
      isStrike: ctx.editor.isActive("strike"),
    }),
    equalityFn: (prev, next) => {
      if (!next) {
        return false;
      }
      return (
        prev.isBold === next.isBold &&
        prev.isItalic === next.isItalic &&
        prev.isStrike === next.isStrike
      );
    },
  });

  return (
    <StrictMode>
      <BubbleMenu
        className="bg-light-primary dark:bg-dark-primary px-2 py-1 rounded-md flex items-center gap-x-1 border-2"
        tippyOptions={{ duration: 100 }}
        editor={editor}
      >
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={clsx(
            currentEditorState.isBold
              ? "bg-light-secondary dark:bg-dark-secondary"
              : "bg-light-primary dark:bg-dark-primary",
            "text-sm font-medium leading-6 rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-slate-700"
          )}
        >
          <Icons.BoldIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={clsx(
            currentEditorState.isItalic
              ? "bg-light-secondary dark:bg-dark-secondary"
              : "bg-light-primary dark:bg-dark-primary",
            "text-sm font-medium leading-6 rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-slate-700"
          )}
        >
          <Icons.ItalicIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={clsx(
            currentEditorState.isStrike
              ? "bg-light-secondary dark:bg-dark-secondary"
              : "bg-light-primary dark:bg-dark-primary",
            "text-sm font-medium leading-6 rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-slate-700"
          )}
        >
          <Icons.StrikethroughIcon />
        </button>
      </BubbleMenu>
      <EditorContent editor={editor} className="border-none" />
    </StrictMode>
  );
};

export default EditorInput;
