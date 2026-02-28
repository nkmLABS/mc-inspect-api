import { createResponse } from '../../shared/response';

// Servers api endpoint
export async function handleServer(server: string, origin: string): Promise<Response> {
  try {
    return createResponse({ server }, origin, 200, { 'Cache-Control': 'public, max-age=600' });
  } catch (error) {
    // Log error and send 404 response
    console.error(error);
    return createResponse({ error: 'Server Not Found' }, origin, 404);
  }
}
