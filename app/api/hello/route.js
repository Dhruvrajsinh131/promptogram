import { NextResponse } from "next/server";

export function GET(req, res) {
  console.log("first");
  return NextResponse.json({ msg: "hi" });
}
