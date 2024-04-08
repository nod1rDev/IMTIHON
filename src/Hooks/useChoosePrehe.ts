const alphabet: string[] = [..."abcdefghijklmnopqrstuvwxyz"];

const random = () => {
  const randomNumber: number = Math.ceil(Math.random() * 23);
  return randomNumber;
};
const randomOne = () => {
  const randomNumber: number = Math.ceil(Math.random() * 9);
  return randomNumber;
};
export const useChosePrahe = () => {
  const firstletter: string = alphabet[random()];
  const Seconletter: string = alphabet[random()];
  const Prahe: string = `${firstletter}${Seconletter}${randomOne()}${randomOne()}${randomOne()}${randomOne()}`;
  const UpperCasePrahe: string = Prahe.toUpperCase();
  return UpperCasePrahe;
};
