import * as Icons from "@/assets/Icons";
import {
  BubbleMenu,
  EditorContent,
  useEditor,
  useEditorState,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import clsx from "clsx";
import { StrictMode, useEffect } from "react";
import { EditorButton, EditorButtonProps } from "./editor-button";

interface EditorInputProps {
  content: string;
  onChange: (value: string) => void;
  className?: string;
}

export const EditorInput = ({
  content,
  onChange,
  className,
}: EditorInputProps) => {
  const editor = useEditor({
    immediatelyRender: true,
    shouldRerenderOnTransaction: false,
    extensions: [StarterKit],
    content: content,
    editorProps: {
      attributes: {
        class: clsx(
          "!min-h-16 h-auto bg-white dark:bg-dark-secondary outline-none",
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
      isBulletList: ctx.editor.isActive("bulletList"),
      isOrderedList: ctx.editor.isActive("orderedList"),
    }),
  });

  const editorOptions: EditorButtonProps[] = [
    {
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: currentEditorState.isBold,
      icon: <Icons.BoldIcon />,
      description: "Negrilla",
    },
    {
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: currentEditorState.isItalic,
      icon: <Icons.ItalicIcon />,
      description: "Cursiva",
    },
    {
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: currentEditorState.isStrike,
      icon: <Icons.StrikethroughIcon />,
      description: "Tachado",
    },
    {
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: currentEditorState.isBulletList,
      icon: <Icons.ListIcon />,
      description: "Lista",
    },
    {
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: currentEditorState.isOrderedList,
      icon: <Icons.OrderedListIcon />,
      description: "Lista ordenada",
    },
  ];

  useEffect(() => {
    if (content !== editor.getHTML()) {
      editor.commands.setContent(content);
      onChange(content);
    }
  }, [content]);

  return (
    <StrictMode>
      <BubbleMenu
        className=" bg-light-primary dark:bg-dark-primary px-2 py-1 rounded-md flex items-center gap-x-1 border-2"
        tippyOptions={{ duration: 100 }}
        editor={editor}
      >
        {editorOptions.map((option, index) => (
          <EditorButton key={index} {...option} />
        ))}
      </BubbleMenu>
      <EditorContent editor={editor} className="border-none" />
    </StrictMode>
  );
};

export default EditorInput;
