


# CSE 5023-01: Introduction to DevSecOps 


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