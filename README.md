


# CSE 5023-01: Introduction to DevSecOps - Starter Repository


## CI/CD Pipeline Architecture

The pipeline is triggered by pushes to `main` and pull requests targeting `main`.

The GitHub Actions workflow contains two jobs:
- **hello-world:** Runs a basic check to verify the CI pipeline is working.
- **deploy:** Authenticates with AWS using OIDC and verifies the AWS identity using `aws sts get-caller-identity`. No application is deployed yet.

**Security and Permissions:**
- `contents: read` allows read-only repository access.
- `id-token: write` allows the deploy job to request an OIDC token.
- AWS IAM provides temporary credentials through the `github-actions-deploy` role.
- Branch protection requires passing status checks before merging into `main`.

### Architecture

```text
Git Push / Pull Request
          |
          v
     GitHub Actions
          |
     +----+----+
     |         |
     v         v
 hello-world  deploy
  (CI Check)    |
                v
           AWS OIDC
                |
                v
           AWS IAM Role
                |
                v
         Verify Identity
```


## Old README.md

This is the starter repository for **Lab 0: Environment Setup & Cloud Account**.
Fork this repo to your own GitHub account, then follow the steps in the Lab 0
assignment on Canvas.

## What's in this repo

- `juice-shop/docker-compose.yml` - spins up OWASP Juice Shop locally. Juice Shop
  is used only for **Lab 1** (threat modeling) and **Lab 9** (DAST/API security
  testing) this semester - it is a dedicated, intentionally-vulnerable practice
  target, not your semester project application.
- `.github/workflows/ci.yml` - a minimal "hello world" CI pipeline stub. You will
  extend this workflow yourself starting in **Lab 3** (baseline CI/CD pipeline)
  and keep building on it through the rest of the semester.
- `PROJECT.md` - a template for describing the application *you* choose to build
  your semester-long pipeline around (Labs 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, and
  your final project). Fill this in during Lab 0.

## Quick start

1. Fork this repository (button in the top right on GitHub) into your own account.
2. Clone your fork locally:
   ```
   git clone https://github.com/<your-username>/<your-fork-name>.git
   cd <your-fork-name>
   ```
3. Start Juice Shop:
   ```
   cd juice-shop
   docker compose up -d
   ```
   Then open http://localhost:3000 in your browser to confirm it's running.
4. Fill in `PROJECT.md` with the application you're choosing as your semester
   project codebase (see Lab 0 instructions on Canvas for guidance).
5. Confirm the CI stub runs: push a commit and check the **Actions** tab on
   your fork — you should see a green checkmark on a minimal build job.

## Questions

Post in the course Canvas discussion or email the instructor - don't spend more
than 20-30 minutes stuck on an environment issue before asking.
