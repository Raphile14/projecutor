import simpleGit from "simple-git";
import path from "path";

// TODO: Implement Get List of Projects
export const getProjects = async (req, res) => {
  return res.status(200).json({
    message: "Get List of Projects",
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
    return res.status(400).json({
      message: "Invalid Request Body",
    });
  }

  try {
    // Clone Repository
    // TODO: Add config for credentials
    await simpleGit().clone(url, path.join(clonePath, name));
  } catch (error) {
    // Send error response
    return res.status(500).json({
      message: "An error occurred while cloning the repository",
      error: error.message,
    });
  }

  return res.status(200).json({
    message: "Clone GitHub Repository",
  });
};
