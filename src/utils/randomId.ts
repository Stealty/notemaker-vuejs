export function randomId() {
  let currentDate = new Date().getTime();
  let id = currentDate.toString();
  return id;
}
