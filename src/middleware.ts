import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export const middleware = (req: NextRequest) => {
  const authorizationHeader = req.headers.get('authorization');

  if (authorizationHeader) {
    const basicAuth = authorizationHeader.split(' ')[1];
    const [user, password] = atob(basicAuth).split(':');

    if (user === 'dokosore' && password === 'dokosore') {
      return NextResponse.next();
    }
  }

  const url = req.nextUrl;
  url.pathname = '/api/basic';

  return NextResponse.rewrite(url);
};
