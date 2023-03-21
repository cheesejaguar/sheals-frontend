# sheals-frontend

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/cheesejaguar/sheals-frontend/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/cheesejaguar/sheals-frontend/tree/main)

## Contributing to this code

This repository is set to auto-deploy every commit to the main branch into the production environment.  I know this isn't an ideal long term solution, but for now it is how we'll do it.

1. Create a new branch, make your code modications in that branch, and commit changes to that branch.

```bash
git checkout -b sheals-my-fancy-branch
git add file_i_changed.png
git commit -m "a helpful description change message, and definitely not just "fixed"
git push --set-upstream origin sheals-my-fancy-branch```

2. Create a pull request on GitHub, and have Aaron review it before merging.

3. Pass CircleCI integration tests

4.  When everything is ready, merge the branch into main from the pull request page.  This will trigger an auto-deploy to production, which generally takes 2-3 minutes from the time you click merge.
