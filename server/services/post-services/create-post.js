import { v4 as uuidv4 } from "uuid";

export const create_post = (_, data) => {
  const { title, body } = data.input;
  const id = uuidv4();
  return {
    id,
    title,
    body,
  };
};
