## This branch is..
This branch is **used for Git CI/CD integration to deploy the website to Hostinger**.  
The build output from the `main` branch (the contents of the `dist` folder) is placed at the root of this branch,  
so that Hostinger can automatically serve the static files.


## 🔧 Deployment Workflow

After updating the code and rebuilding the project on the `main` branch,

Then switch to this branch and run :
```bash
npm run hostinger
```
and finally push the changes to GitHub.

Manually deploy to hostinger

---

## ⚠️ Manual Deployment Required
To prevent accidental deployments, auto deployment is disabled.
After pushing to this branch, go to the following link and click the "Deploy" button to update your website manually:

👉 https://hpanel.hostinger.com/websites/sunnysong.me/advanced/git?redirectLocation=side_menu