export const countHtmlLines = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const blockTags = ["P", "H1", "H2", "H3", "H4", "H5", "H6"];

  let lineCount = 0;

  blockTags.forEach((tag) => {
    lineCount += doc.getElementsByTagName(tag).length;
  });

  return lineCount;
};
