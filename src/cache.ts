/**
 * Local WeakRef based cache
 */
export class Cache<T extends object = object> {
  private store: Map<string, WeakRef<T>> = new Map();

  private finalizer = new FinalizationRegistry((key: string) => {
    console.log(`Finalizing cache: ${key}`);
    delete this.store[key];
  });

  set(key: string, value: T) {
    const cached = this.get(key);
    if (cached) {
      if (cached === value) return;
      this.finalizer.unregister(cached);
    }
    this.store.set(key, new WeakRef(value));
    this.finalizer.register(value, key, value);
  }

  get(key: string): T | undefined {
    return this.store.get(key)?.deref();
  }
}
