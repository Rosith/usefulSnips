const ordersByCountryR = orders.reduce((acc, order) => {
  const { countryCode } = order;  // Extract countryCode from the current order

  // If the accumulator does not already have this countryCode, initialize it as an empty array
  if (!acc[countryCode]) {
    acc[countryCode] = [];
  }

  // Push the current order into the array for its corresponding countryCode
  acc[countryCode].push(order);

  // Return the updated accumulator for the next iteration
  return acc;
}, {}); // Start with an empty object as the initial accumulator
