import { NextResponse } from "next/server";

//list all projects in database
export async function list() {
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

//list all projects with `type` of `art`, these will be art pieces I have made
export async function listArtProjects() {
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

//list all projects with `type` of `app`, these will be software related projects
export async function listAppProjects() {
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

//search algorithm for SearchBar.tsx, takes a string value to search for and returns projects with `name` containing search input
export async function readProjectsByName(nameToSearch) {
  try {
    const response = await fetch(`api/projects/get?search=${nameToSearch}`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      massage: "something went wrong. Please try again",
    });
  }
}
