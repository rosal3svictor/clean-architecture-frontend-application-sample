import type { CounterInterfaces } from '@entities/counter';

/**
 * Adapts the result of retrieving initial counter values to a single counter
 * object.
 *
 * @param result - The result of retrieving initial counter values.
 *
 * @returns The adapted counter object.
 */
export const initialValue = (
  result: CounterInterfaces.Counter[],
): CounterInterfaces.Counter => result[0];
