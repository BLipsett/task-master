export function generateId() {
  let newId = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklomnopqrstuvwxyz";

  for (let i = 0; i < 10; i++) {
    newId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return newId;
}
