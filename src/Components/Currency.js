import React from "react";

// Function to get the currency symbol based on the country code
export default function getCurrencySymbol(country) {
  // Define a mapping of country codes to their respective currency symbols
  const currencies = {
    e: "none",  // Placeholder for unspecified or unsupported countries
    gb: "£",    // British Pound Sterling
    us: "$",    // United States Dollar
    au: "$",    // Australian Dollar
    ca: "$",    // Canadian Dollar
  };

  // Return the currency symbol for the given country code
  return currencies[country];
};
