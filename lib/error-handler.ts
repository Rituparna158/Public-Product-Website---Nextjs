export function getErrorMessage(error: unknown): string {
  if (typeof error === 'string') return error;

  if (typeof error === 'object' && error !== null && 'message' in error) {
    const err = error as { message?: string };
    return err.message ?? 'Something went wrong';
  }

  return 'Something went wrong';
}

export function getStrapiErrorMessage(data: unknown): string {
  if (typeof data === 'object' && data !== null && 'error' in data) {
    const err = data as {
      error?: { message?: string };
    };

    return err.error?.message ?? 'Request failed';
  }

  return 'Request failed';
}
