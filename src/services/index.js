import { NextResponse } from "next/server";

export async function list(searchInput) {
  try {
    const response = await fetch(`/api/projects/get`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "something went wrong. Please try again",
    });
  }
}

export async function readArtProjects() {
  try {
    const response = await fetch(`/api/art/get`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "something went wrong. Please try again",
    });
  }
}

export async function readAppProjects() {
  try {
    const response = await fetch(`/api/apps/get`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "something went wrong. Please try again",
    });
  }
}
