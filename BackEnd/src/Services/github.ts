import { enumAction } from "../Static/Elements/actions";
import { enumServices } from "../Static/Elements/services";
import axios from "axios";
import { hooksHandler } from "../Webhooks/hooks";

const getGithubUserIdbyToken = async (token: string) => {
  try {
    const user = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `bearer ${token}`,
        Accept: 'application/json',
      },
    });

    return user.data.id;
  } catch (error) {
    console.log(error);
  }
}

class Github {
  public async checkPush(pusherId: number) {
    try {
      hooksHandler(enumServices.GITHUB, enumAction.GITHUB_CHECK_PUSH, pusherId, getGithubUserIdbyToken);
    } catch (error) {
      console.log(error);
    }
  }

  public async newBranch(pusherId: number) {
    try {
      hooksHandler(enumServices.GITHUB, enumAction.GITHUB_NEW_BRANCH, pusherId, getGithubUserIdbyToken);
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteBranch(pusherId: number) {
    try {
      hooksHandler(enumServices.GITHUB, enumAction.GITHUB_DELETE_BRANCH, pusherId, getGithubUserIdbyToken);
    } catch (error) {
      console.log(error);
    }
  }

  public async issuesUpdated(pusherId: number) {
    try {
      hooksHandler(enumServices.GITHUB, enumAction.GITHUB_ISSUES, pusherId, getGithubUserIdbyToken);
    } catch (error) {
      console.log(error);
    }
  }

  public async labelUpdated(pusherId: number) {
    try {
      hooksHandler(enumServices.GITHUB, enumAction.GITHUB_LABEL, pusherId, getGithubUserIdbyToken);
    } catch (error) {
      console.log(error);
    }
  }

  public async milestonesUpdated(pusherId: number) {
    try {
      hooksHandler(enumServices.GITHUB, enumAction.GITHUB_MILESTONES, pusherId, getGithubUserIdbyToken);
    } catch (error) {
      console.log(error);
    }
  }

  public async pullRequest(pusherId: number) {
    try {
      hooksHandler(enumServices.GITHUB, enumAction.GITHUB_PULL_REQUEST, pusherId, getGithubUserIdbyToken);
    } catch (error) {
      console.log(error);
    }
  }

  public async pullRequestReviews(pusherId: number) {
    try {
      hooksHandler(enumServices.GITHUB, enumAction.GITHUB_PULL_REQUEST_REVIEWS, pusherId, getGithubUserIdbyToken);
    } catch (error) {
      console.log(error);
    }
  }

  public async pullRequestComments(pusherId: number) {
    try {
      hooksHandler(enumServices.GITHUB, enumAction.GITHUB_PULL_REQUEST_COMMENTS, pusherId, getGithubUserIdbyToken);
    } catch (error) {
      console.log(error);
    }
  }

  public async releaseUpdated(pusherId: number) {
    try {
      hooksHandler(enumServices.GITHUB, enumAction.GITHUB_RELEASE, pusherId, getGithubUserIdbyToken);
    } catch (error) {
      console.log(error);
    }
  }

  public async visibilityChanges(pusherId: number) {
    try {
      hooksHandler(enumServices.GITHUB, enumAction.GITHUB_VISIBILITY_CHANGES, pusherId, getGithubUserIdbyToken);
    } catch (error) {
      console.log(error);
    }
  }

  public async issuesComments(pusherId: number) {
    try {
      hooksHandler(enumServices.GITHUB, enumAction.GITHUB_ISSUES_COMMENTS, pusherId, getGithubUserIdbyToken);
    } catch (error) {
      console.log(error);
    }
  }
}

export default Github;
