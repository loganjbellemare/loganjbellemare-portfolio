import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    technologies: String,
    website: String,
    github: String,
    thumbnail: String,
  },
  { timestamps: true }
);

const Projects =
  mongoose.models.Projects || mongoose.model("Projects", ProjectSchema);

export default Projects;
