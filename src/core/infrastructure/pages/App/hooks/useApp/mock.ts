import { vitest } from 'vitest';

import type { CounterInterfaces } from '@entities/counter';

export const mockUseViewModelApp: CounterInterfaces.CounterReturn = {
  count: 0,
  error: '',
  onDecrementHandler: vitest.fn(),
  onIncrementHandler: vitest.fn(),
  onMount: vitest.fn(),
};
