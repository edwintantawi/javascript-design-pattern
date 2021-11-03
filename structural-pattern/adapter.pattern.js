class GoogleSDKAuthentication {
  authenticate() {
    return 'authenticate';
  }
}

class GithubSDKAuthentication {
  setToken(token) {
    this.token = token;
  }

  setMode(mode) {
    this.mode = mode;
  }

  signIn() {
    if (!this.token || !this.mode) {
      throw new Error('Need to define token and mode');
    }

    return 'authenticate';
  }
}

class GithubAuthenticationAdapter {
  constructor(githubSDKAuthentication, token, mode) {
    this.githubSDKAuthentication = githubSDKAuthentication;
    this.token = token;
    this.mode = mode;
  }

  authenticate() {
    this.githubSDKAuthentication.setToken(this.token);
    this.githubSDKAuthentication.setMode(this.mode);
    return this.githubSDKAuthentication.signIn();
  }
}

const authenticateApps = (authenticator) => {
  console.log(authenticator.authenticate());
};

const googleSDKAuthentication = new GoogleSDKAuthentication();
const githubSDKAuthentication = new GithubSDKAuthentication();
const githubAuthenticationAdapter = new GithubAuthenticationAdapter(
  githubSDKAuthentication,
  'abc-def',
  'read'
);

authenticateApps(googleSDKAuthentication);
authenticateApps();
