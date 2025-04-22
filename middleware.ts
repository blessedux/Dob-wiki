import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple middleware to protect admin routes with basic auth
export function middleware(request: NextRequest) {
  // Only apply to admin routes and admin API routes
  if (request.nextUrl.pathname.startsWith('/admin') || 
      request.nextUrl.pathname.startsWith('/api/docs')) {
    
    // Check for the authorization header
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !isValidAuthHeader(authHeader)) {
      // Return a response requesting authentication
      return new NextResponse(null, {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Area"'
        }
      })
    }
  }
  
  return NextResponse.next()
}

// This function validates the auth header
function isValidAuthHeader(authHeader: string): boolean {
  // The header should look like "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
  // where dXNlcm5hbWU6cGFzc3dvcmQ= is base64 encoded "username:password"
  if (!authHeader.startsWith('Basic ')) {
    return false
  }
  
  // Get the encoded credentials
  const encoded = authHeader.substring(6)
  
  // Decode them
  const decoded = Buffer.from(encoded, 'base64').toString()
  const [username, password] = decoded.split(':')
  
  // Replace these with your actual credentials
  // For better security, use environment variables
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'dobprotocol'
  
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ['/admin/:path*', '/api/docs/:path*']
} 