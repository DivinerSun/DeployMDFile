export default class GithubIssuesPlugin {
  onLoad() {
    console.log("GithubIssuesPlugin onLoad Function !!!");
  }
}

const gi = new GithubIssuesPlugin();
gi.onLoad();
