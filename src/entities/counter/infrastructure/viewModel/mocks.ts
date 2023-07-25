import { vitest } from 'vitest';

import type * as Entity from '@application/entities/counter/domain/entities';

export const mockUseCounterViewModel = (): Entity.CounterViewModel => ({
  loadInitialState: vitest.fn(async () => await Promise.resolve(0)),
  incrementValue: vitest.fn(
    async (count: number) => await Promise.resolve(count + 1),
  ),
  decrementValue: vitest.fn(
    async (count: number) => await Promise.resolve(count - 1),
  ),
});
