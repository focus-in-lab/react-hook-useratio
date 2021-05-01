import { useRatio } from './'
import { renderHook } from "@testing-library/react-hooks";
import React from 'react';

// mock timer using jest
jest.useFakeTimers();

describe('useRatio', () => {
  it('Checks ratio on init', () => {
    const { result } = renderHook(() => useRatio(1,1, React.createRef()));

    expect(result.current.height).toBe(0);
  })
})
