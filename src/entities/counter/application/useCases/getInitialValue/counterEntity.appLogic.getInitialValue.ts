import { COUNTER_ENTITY, type CounterInterfaces } from '@entities/counter';
import { type CoreInterfaces } from '@core';

/**
 * Retrieves the initial counter value.
 *
 * @param resourceImplementations - The resource implementations required for
 * the operation.
 *
 * @returns A Promise that resolves with the result of the initial value
 * retrieval.
 */
export async function getInitialValue({
  ApiClientImplementation,
}: CounterInterfaces.ResourceImplementations): Promise<
  CoreInterfaces.UseCaseReturn<CounterInterfaces.Counter>
> {
  const { ADAPTERS } = COUNTER_ENTITY;

  try {
    const result = await ApiClientImplementation.get();

    const adaptedResult = ADAPTERS.initialValue(result);

    return {
      fulfilled: true,
      output: adaptedResult,
      error: '',
    };
  } catch (error) {
    return {
      fulfilled: false,
      output: { id: 0, value: 0 },
      error: `There was an error when getting the initial value. Details: ${
        error as string
      }`,
    };
  }
}
