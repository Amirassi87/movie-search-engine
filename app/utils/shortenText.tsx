export function shortenText(input: string) {
  const emptyStringIndex = input.substring(0, 190).lastIndexOf(' ');

  return input?.length > 200
    ? `${input.substring(0, emptyStringIndex)} ...`
    : input;
}
