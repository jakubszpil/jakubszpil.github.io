const createUUID = (): (() => string) => {
  const ids = new Set();

  const gen = () => {
    const id =
      Math.random().toString(36).slice(2) +
      Date.now().toString(36) +
      Math.random().toString(36).slice(2);

    return id.slice(0, 20).match(/.{5}/g)!.join("-");
  };

  return () => {
    let id: string;

    do id = gen();
    while (ids.has(id));

    ids.add(id);

    return id;
  };
};

export const uuid = createUUID();
