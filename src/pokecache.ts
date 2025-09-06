type CacheEntry<T> = {
  createdAt: number;    // Timestamp when entry was created
  val: T;               // The actual cached value
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();                // Private cache storage
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;    // Interval ID for cleanup
  #interval: number;                                          // Cache entry lifetime in milliseconds

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();    // Start automatic cleanup on creation
  }

  add<T>(key: string, value: T) {
    const entry: CacheEntry<T> = {
      createdAt: Date.now(),
      val: value,
    };
    this.#cache.set(key, entry);  // Store entry with timestamp
  }

  get<T>(key: string) {
    const entry = this.#cache.get(key);
    if (entry !== undefined) {
      return entry.val as T;      // Return cached value if found
    }
    return undefined;   // Return undefined if not in cache
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => {
      this.#reap();       // Periodically clean expired entries
    }, this.#interval);
  }

  #reap() {
    const now = Date.now();
    for (const [key, entry] of this.#cache) {
      if (now - entry.createdAt > this.#interval) {
        this.#cache.delete(key);    // Remove entries older than interval
      }
    }
  }

  stopReapLoop() {
    if (this.#reapIntervalId) {
      clearInterval(this.#reapIntervalId);    // Stop cleanup interval
      this.#reapIntervalId = undefined;
    }
  }
}
