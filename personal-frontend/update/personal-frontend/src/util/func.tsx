type DebouncedFunction<F extends (...args: any[]) => void> = (...args: Parameters<F>) => void;

export const debounce = <F extends (...args: any[]) => void>(func: F, delay: number): DebouncedFunction<F> => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};