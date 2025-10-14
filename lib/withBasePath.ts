export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
