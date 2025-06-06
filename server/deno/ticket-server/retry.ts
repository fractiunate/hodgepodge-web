export interface RetryOptions {
  maxRetries?: number;
  baseDelayMs?: number;
}

export async function retry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const {
    maxRetries = 5,
    baseDelayMs = 1000,
  } = options;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      console.warn(`⚠️ Attempt ${attempt} failed:`, err.message || err);

      if (attempt < maxRetries) {
        const delay = baseDelayMs * 3 ** (attempt - 1);
        console.log(`🔁 Retrying in ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        console.error("❌ All retries failed. Giving up.");
        throw err;
      }
    }
  }
  throw new Error("Unexpected retry failure");
}
