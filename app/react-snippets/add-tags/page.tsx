import { AddTagsContainer } from "./AddTagsContainer";

export const metadata = {
  title: "Add Tags | React Snippets",
  description: `A chip component which shows suggestions as you type and where you can
          add & remove tags. Also supports backspace keydown event to remove a
          tag from the selected tags.`,
  keywords: [
    "add-tags",
    "chip-component",
    "react-snippets",
    "web development",
    "frontend",
    "snippets",
    "react.js",
  ],
};

const AddTagsPage = () => {
  return <AddTagsContainer />;
};

export default AddTagsPage;
