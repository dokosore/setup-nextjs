import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  // BASIC認証とかはここで実装できる
  return NextResponse.next();
};

export default middleware;
