import ConnectToDB from "@/database";
import { NextRequest, NextResponse } from "next/server";
import Projects from "../../../../../models/projects";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    // Connect to the database
    await ConnectToDB();

    //check for search params
    const searchInput = req.nextUrl.searchParams.get("search");

    // if search params present, return projects with names matching query input
    if (searchInput) {
      const projects = await Projects.find({
        name: { $regex: searchInput, $options: "i" },
      });
      return NextResponse.json({
        success: true,
        data: projects,
        message: "Data fetched successfully",
      });
      //else fetch all projects
    } else {
      // Fetch projects data
      const projects = await Projects.find({ type: "art" });

      // Return JSON response with fetched data
      return NextResponse.json({
        success: true,
        data: projects, // Sending fetched data in the response
        message: "Data fetched successfully",
      });
    }
  } catch (error) {
    console.error(error);
    // Return error JSON response
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again",
    });
  }
}
