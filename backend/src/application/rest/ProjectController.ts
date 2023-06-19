import simpleGit from "simple-git";
import path from "path";

// TODO: Implement Get List of Projects
export const getProjects = async (req, res) => {
  return res.sendSuccess({
    projects: [],
  });
};

interface ProjectCloneRequest {
  url: string;
  clonePath: string;
  name: string;
}

// Implement Clone GitHub Repository
export const cloneRepository = async (req, res) => {
  const { url, clonePath, name } = req.body as ProjectCloneRequest;

  if (!url || !path) {
    return res.sendError({ message: "Invalid Request Body" }, 400);
  }

  try {
    // Clone Repository
    // TODO: Add config for credentials
    await simpleGit().clone(url, path.join(clonePath, name));
  } catch (error) {
    // Send error response
    return res.sendError(
      {
        message: "An error occurred while cloning the repository",
        error: error.message,
      },
      500
    );
  }

  return res.sendSuccess({
    message: `GitHub Repository ${name} cloned successfully`,
  });
};
