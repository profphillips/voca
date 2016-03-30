import toString from '../utils/to_string'
import undefinedDefault from '../utils/undefined_default';

/**
 * Checks if `value` is numeric.
 * @param {string} [value=''] The string to verify.
 * @return {boolean} Returns `true` if `value` is numeric, `false` otherwise.
 */
export default function(value) {
  if (typeof value === 'object' && value != null) {
    value = Number(value);
  }
  return (typeof value === 'number' || typeof value === 'string') && !isNaN(value - parseFloat(value));
}