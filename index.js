const baseURL = 'https://api.github.com';
const user = 'jpier2012';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`${baseURL}/repos/${repo}/forks`,
    { method: "POST",
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(showResults);
}

function showResults(json) {
  //use this function to display the results from forking via the API
  console.log(json);
  let ul = document.createElement("ul");
  ul.innerHTML = `<li id="html_url">${json.html_url}</li>`;
  const results = document.getElementById("results").appendChild(ul);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  
  const repo = `${user}/js-ajax-fetch-lab`;
  const issueTitle = document.getElementById("title").value;
  const issueBody = document.getElementById("body").value;

  const issue = {
    title: `${issueTitle}`,
    body: `${issueBody}`
  }

  fetch(`${baseURL}/repos/${repo}/issues`,
    { method: "POST",
      body: JSON.stringify(issue),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(getIssues);
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `${user}/js-ajax-fetch-lab`;

  fetch(`${baseURL}/repos/${repo}/issues`,
    { headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(response => response.json())
    .then(response => {
      let ul = document.createElement("ul");
      response.forEach((issue, i) => {
        ul.innerHTML += `
          <li>${issue.title}</li>
          <ul>
            <li>${issue.state}</li>
            <li>${issue.body}</li>
          </ul>`
    })
    const results = document.getElementById("issues").appendChild(ul)
  });
}
