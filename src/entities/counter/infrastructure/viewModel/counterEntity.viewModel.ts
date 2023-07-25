import { COUNTER_ENTITY, type CounterInterfaces } from '@entities/counter';
import { type CoreInterfaces } from '@core';

/**
 * Custom hook that provides the view model functions for the counter
 * entity.
 *
 * @returns The counter view model functions.
 */
export function useCounterViewModel(): CounterInterfaces.ViewModel {
  const { USE_CASES, IMPLEMENTATIONS } = COUNTER_ENTITY;

  /**
   * Loads the initial counter value.
   *
   * @returns A Promise that resolves with the result of the initial value
   * retrieval.
   */
  const loadInitialState = async (): Promise<
    CoreInterfaces.UseCaseReturn<CounterInterfaces.Counter>
  > =>
    await USE_CASES.getInitialValue({
      ApiClientImplementation: IMPLEMENTATIONS.restApiClient(),
    });

  /**
   * Increments the counter value.
   *
   * @param count - The current counter value.
   *
   * @returns A Promise that resolves with the result of the increment
   * operation.
   */
  const incrementValue = async (
    count: CounterInterfaces.Counter['value'],
  ): Promise<CoreInterfaces.UseCaseReturn<number>> =>
    await USE_CASES.incrementValue(count, {
      ApiClientImplementation: IMPLEMENTATIONS.restApiClient(),
    });

  /**
   * Decrements the counter value.
   *
   * @param count - The current counter value.
   *
   * @returns A Promise that resolves with the result of the decrement
   * operation.
   */
  const decrementValue = async (
    count: CounterInterfaces.Counter['value'],
  ): Promise<CoreInterfaces.UseCaseReturn<number>> =>
    await USE_CASES.decrementValue(count, {
      ApiClientImplementation: IMPLEMENTATIONS.restApiClient(),
    });

  return {
    loadInitialState,
    incrementValue,
    decrementValue,
  };
}
