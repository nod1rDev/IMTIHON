export const useDate = () => {
  var curr = new Date(); // get current date
  var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

  var firstday: string = new Date(curr.setDate(first)).toUTCString();

  const date = firstday.slice(0, 3) + firstday.slice(4, 16);
  return date;
};
