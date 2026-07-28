/**
 * Módulo de Rate Limiting por IP para Next.js.
 * Implementa una ventana deslizante (Sliding Window) para prevenir spam en endpoints sensibles.
 * 
 * Configuración predeterminada: Máximo 3 peticiones por IP cada 10 minutos.
 */

interface RateLimitStore {
  count: number;
  resetTime: number;
}

// Almacenamiento en memoria para entorno local / fallback
const memoryStore = new Map<string, RateLimitStore>();

// Limpieza periódica de IPs caducadas para evitar fugas de memoria
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of memoryStore.entries()) {
    if (now > data.resetTime) {
      memoryStore.delete(ip);
    }
  }
}, 5 * 60 * 1000);

export interface RateLimitOptions {
  /** Número máximo de solicitudes permitidas en la ventana */
  limit?: number;
  /** Duración de la ventana en segundos (por defecto 600s = 10 minutos) */
  windowSeconds?: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetInSeconds: number;
}

/**
 * Evalúa el límite de peticiones para una dirección IP específica.
 */
export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = {}
): RateLimitResult {
  const limit = options.limit ?? 3;
  const windowMs = (options.windowSeconds ?? 600) * 1000;
  const now = Date.now();

  const record = memoryStore.get(identifier);

  if (!record || now > record.resetTime) {
    // Primera petición o ventana expirada: reiniciar contador
    memoryStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      resetInSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (record.count >= limit) {
    // Límite alcanzado
    const resetInSeconds = Math.ceil((record.resetTime - now) / 1000);
    return {
      success: false,
      limit,
      remaining: 0,
      resetInSeconds: Math.max(1, resetInSeconds),
    };
  }

  // Incrementar contador
  record.count += 1;
  const resetInSeconds = Math.ceil((record.resetTime - now) / 1000);
  return {
    success: true,
    limit,
    remaining: limit - record.count,
    resetInSeconds: Math.max(1, resetInSeconds),
  };
}
