import { useState } from "react";

let globalId = 0;
const generateId = (prefix: string) => `${prefix}-${globalId++}`;

export const useUniqueId = (prefix: string = "id", providedId?: string) => {
  const [uniqueId] = useState(() => providedId || generateId(prefix));
  return uniqueId;
};
