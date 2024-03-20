import ConnectToDB from "@/database";
import { NextResponse, NextRequest } from "next/server";
import Assets from "../../../../../../models/assets";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    // connect to DB
    await ConnectToDB();

    //fetch data with type 'blinky'
    const assets = await Assets.find({ type: "blinky" });

    //return JSON response with data
    return NextResponse.json({
      success: true,
      data: assets,
      message: "Data fetched successfully",
    });
  } catch (error) {
    console.error(error);
    //return JSON error message
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again",
    });
  }
}
