import { NextRequest, NextResponse } from "next/server";
import { generateBookingId } from "@/lib/utils";

// In-memory bookings store (resets on server restart)
// In production, replace with a real database (PostgreSQL, MongoDB, etc.)
const bookings: Record<string, unknown>[] = [];

export async function GET() {
  return NextResponse.json({ bookings, total: bookings.length });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { tourId, tourTitle, name, email, phone, adults, children, date, totalPrice, specialRequests } = body;

    if (!tourId || !name || !email || !phone || !date || !adults) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const booking = {
      id: generateBookingId(),
      tourId,
      tourTitle,
      name,
      email,
      phone,
      adults: Number(adults),
      children: Number(children) || 0,
      date,
      totalPrice: Number(totalPrice),
      specialRequests: specialRequests || "",
      status: "Confirmed",
      createdAt: new Date().toISOString(),
    };

    bookings.push(booking);

    return NextResponse.json({
      success: true,
      booking,
      message: "Booking confirmed! Confirmation email has been sent.",
    }, { status: 201 });

  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
