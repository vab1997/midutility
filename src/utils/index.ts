export function nonNullable<T> (value: T | null): value is NonNullable<T> {
  return value != null
}

export function formatDate (timestamp: number | string) {
  return Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(timestamp))
}
