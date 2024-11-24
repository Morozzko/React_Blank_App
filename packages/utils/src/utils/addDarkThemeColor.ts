/**
 * This function is used to generate a CSS rule for applying a dark theme color.
 * It takes a single parameter, `color`, which represents the base color to be used.
 * The function returns a string that represents a CSS rule, combining the base color with the 'dark:' prefix.
 *
 * @param color - The base color to be used for the dark theme.
 * @returns A string representing a CSS rule in the format: `${color} dark:${color}`.
 *
 * @example
 * ```typescript
 * const baseColor = 'bg-red';
 * const darkThemeRule = addDarkThemeColor(baseColor);
 * console.log(darkThemeRule); // Output: 'bg-red dark:bg-red-dark'
 * ```
 */
export const addDarkThemeColor = (color: string) =>
  `${color} dark:${color}-dark`
