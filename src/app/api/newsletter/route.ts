import { NextRequest, NextResponse } from "next/server";

const subscribers: string[] = [];

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    if (subscribers.includes(email)) {
      return NextResponse.json({ message: "Already subscribed!" });
    }

    subscribers.push(email);

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed! Welcome to the Brownline Tours community.",
    });

  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ count: subscribers.length });
}
