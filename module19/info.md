# Git Terminologies

**git init**
git init is a git syntax that initializes a local git repository on your machine (computer).

**git repository**
It is simply a folder created on your computer that stores every git files that is being used to track the changes to your current project.

**git add <args>**
git add is a syntax that adds all your project changes into the git repository was created when you call git init.
The add takes an optional <argument> that specifies the file that should be added to the git repostory for tracking.
To add all your project files, you use the syntax **git add .**

**git commit -m "<message>"**
This syntax is what helps to stage your project files for readiness to be pushed to a remote repository.

**git branch**
git branch simply allows you to verify the branch on which you are currently tracking your project changes.

**git branch -M "<branch-name>"**
This syntax allows you to create a new git branch in your current git repo and immediately move into that branch.

**git checkout <name-of-branch>**
This syntax simply moves out of your current git branch into whichever git branch you have specified.

**git remote**
It verifies the name associated with your current remote repostiory.

**git remote -v**
This syntax verifies the remote repo associated with your current local git repo.

**git remote add <remote-name> <remote-url>**
This syntax add a new remote repository to your project. It takes a name that you wish to call your remote repository and it takes the URL to your remote repository.

**git remote remove <remote-name>**
This takes the name of the remote repo your want to remove and it removes the specified remote repository fromy your local repo.

**git push <remote-name> <branch-name>**
This push your project changes and project files, to a remote rempository that you have specified and have added to your project. It also takes the branch you are currently on as an argument. This allows git to know where to push your files and which branch to put them on.
