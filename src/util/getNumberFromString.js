const getNumberFromString = (input) => {
  const string = input;
  const number = string.match(/\/\d+\//)[0];
  const extractedNumber = number.replace(/\//g, '');
  const finalNumber = parseInt(extractedNumber, 10);

  return finalNumber;
};

export default getNumberFromString;
