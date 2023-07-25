import type { CounterInterfaces } from '@entities/counter';

/**
 * Represents an implementation of the API client for the counter entity.
 */
export interface ApiClient {
  /**
   * Retrieves counter values from the API.
   *
   * @returns A Promise that resolves with an array of counter values.
   */
  get: () => Promise<CounterInterfaces.Counter[]>;

  /**
   * Updates the counter value on the API.
   *
   * @param value - The new counter value to be updated.
   *
   * @returns A Promise that resolves with the updated counter value.
   */
  update: (value: CounterInterfaces.Counter['value']) => Promise<number>;
}
