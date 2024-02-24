import Projects from "../../../../models/projects";
import ConnectToDB from "../../../database/index";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export default async function POST(req: NextRequest) {
  try {
    await ConnectToDB();
    const data = await req.json();
    const updatedData = await Projects.create(data);

    if (updatedData) {
      return NextResponse.json({
        success: true,
        message: "data saved successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "something went wrong. Please try again",
      });
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "something went wrong. Please try again",
    });
  }
}
