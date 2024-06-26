export const isEnum =
  <T extends Record<string, string>>(_enum: T) =>
  (value: unknown): value is T[keyof T] =>
    Object.values(_enum).includes(value as T[keyof T]);
