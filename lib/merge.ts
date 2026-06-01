/** Deep-merge CMS patches onto static fallback. Objects recurse; arrays replace when non-empty. */

export function deepMerge<T extends object>(base: T, patch: Partial<T> | null | undefined): T {
  if (!patch || typeof patch !== 'object' || Array.isArray(patch)) {
    return base;
  }

  const out = { ...base } as Record<string, unknown>;

  for (const key of Object.keys(patch) as (keyof T)[]) {
    const pv = patch[key];
    if (pv === undefined) continue;

    const bv = base[key];

    if (
      pv !== null &&
      typeof pv === 'object' &&
      !Array.isArray(pv) &&
      bv !== null &&
      typeof bv === 'object' &&
      !Array.isArray(bv)
    ) {
      out[key as string] = deepMerge(
        bv as object,
        pv as object,
      );
      continue;
    }

    if (Array.isArray(pv)) {
      out[key as string] = pv.length > 0 ? pv : bv;
      continue;
    }

    if (pv !== '' && pv !== null) {
      out[key as string] = pv;
    }
  }

  return out as T;
}
