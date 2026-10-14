

/**
 * 服务端：将图片 URL 转换为站内代理 URL（供 OrionTV 等外部客户端直接加载封面）
 */
export function proxyPosterUrl(originalUrl: string): string {
  if (!originalUrl) return originalUrl;

  const proxyUrl = process.env.NEXT_PUBLIC_IMAGE_PROXY;
  if (!proxyUrl) return originalUrl;

  // 已经是代理地址或本站地址则直接返回
  if (originalUrl.startsWith(proxyUrl)) return originalUrl;
  if (originalUrl.startsWith('/')) return originalUrl;
  try {
    const u = new URL(originalUrl);
    if (u.hostname.includes('netlify.app')) return originalUrl;
  } catch {
    return originalUrl;
  }

  return `${proxyUrl}${encodeURIComponent(originalUrl)}`;
}
