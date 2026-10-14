import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // 放行所有请求：不弹警告、不跳登录、API不返回401
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
