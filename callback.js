console.log("Before");

getUser(1)
  .then((user) => getRepositories(user.gitHubUsername))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => console.log("commits", commits))
  .catch((err) => console.log("Error", err.message));

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log("getUserCallId", id);
    //kick off async work
    setTimeout(() => {
      console.log("Reading a user from a database");
      resolve({ id: id, gitHubUsername: "manish" });
    }, 2000);
  });
}

function getRepositories(username) {
  console.log("getRepOusernameCall", username);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading from repository");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  console.log("getCommitCall", repo);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("call github api");
      resolve(["returnedcommit"]);
    }, 2000);
  });
}
