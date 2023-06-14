export function nonNullable<T> (value: T | null): value is NonNullable<T> {
  return value != null
}
