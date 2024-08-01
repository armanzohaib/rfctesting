/**
 * Generates a full name from given first and last names.
 *
 * @param firstName - The first name of the user.
 * @param lastName - The last name of the user.
 * @returns A string representing the full name.
 */
export const getFullName = (firstName?: string, lastName?: string): string => {
  return [firstName, lastName].filter(Boolean).join(" ");
};
