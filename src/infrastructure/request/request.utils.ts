type ParsedData = { [key: string]: string };

export const parseServerData = (data: unknown): ParsedData => {
  const obj = {} as ParsedData;
  const stringifiedData = JSON.stringify(data);
  JSON.parse(stringifiedData, (name: string, value: string) => (obj[name] = value));

  return obj;
};
