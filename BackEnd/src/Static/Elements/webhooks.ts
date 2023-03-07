import { enumAction } from "./actions";

export const webHookId: number[] = [
  enumAction.DISCORD_CAUGHT_MESSAGE,
  enumAction.GITHUB_CHECK_PUSH,
  enumAction.GITHUB_NEW_BRANCH,
  enumAction.GITHUB_DELETE_BRANCH,
  enumAction.GITHUB_ISSUES,
  enumAction.GITHUB_LABEL,
  enumAction.GITHUB_MILESTONES,
  enumAction.GITHUB_PULL_REQUEST,
  enumAction.GITHUB_PULL_REQUEST_REVIEWS,
  enumAction.GITHUB_PULL_REQUEST_COMMENTS,
  enumAction.GITHUB_RELEASE,
  enumAction.GITHUB_VISIBILITY_CHANGES,
  enumAction.GITHUB_ISSUES_COMMENTS,
];

export const doNotCallId: number[] = [
  enumAction.GITHUB_CHECK_PUSH,
  enumAction.GITHUB_NEW_BRANCH,
  enumAction.GITHUB_DELETE_BRANCH,
  enumAction.GITHUB_ISSUES,
  enumAction.GITHUB_LABEL,
  enumAction.GITHUB_MILESTONES,
  enumAction.GITHUB_PULL_REQUEST,
  enumAction.GITHUB_PULL_REQUEST_REVIEWS,
  enumAction.GITHUB_PULL_REQUEST_COMMENTS,
  enumAction.GITHUB_RELEASE,
  enumAction.GITHUB_VISIBILITY_CHANGES,
  enumAction.GITHUB_ISSUES_COMMENTS,
];