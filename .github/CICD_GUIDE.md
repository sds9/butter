# 🚀 CI/CD Guide for Butter

This document provides an overview of the comprehensive CI/CD pipeline implemented for the Butter project.

## 📋 Quick Reference

### 🔄 Main Workflows

| Workflow          | Trigger               | Purpose                      |
| ----------------- | --------------------- | ---------------------------- |
| `ci.yml`          | PR, Push, Merge Queue | Main CI/CD pipeline          |
| `deploy.yml`      | Tags, Manual          | Production deployments       |
| `security.yml`    | Schedule, PR          | Security & dependency audits |
| `performance.yml` | PR                    | Performance monitoring       |

### 🎯 Merge Queue Setup

Your repository is configured for **GitHub Merge Queues** with:

- ✅ All required status checks
- ✅ Squash merge strategy
- ✅ Automatic branch cleanup
- ✅ Maximum 3 entries merged at once
- ✅ Maximum 5 entries building

## 🔧 Required GitHub Settings

### Branch Protection (Main)

```bash
# Enable these settings in GitHub UI > Settings > Branches > main
✅ Require a pull request before merging
✅ Require approvals: 1
✅ Dismiss stale PR approvals when new commits are pushed
✅ Require review from code owners
✅ Require status checks to pass before merging
✅ Require branches to be up to date before merging
✅ Require linear history
✅ Include administrators
❌ Allow force pushes
❌ Allow deletions

# Required status checks:
- "Final Validation"
- "Code Quality (lint)"
- "Code Quality (typecheck)"
- "Code Quality (format-check)"
- "Security Scan"
- "Unit Tests"
- "Build Package"
- "Build Documentation"
- "E2E Tests (chromium)"
- "E2E Tests (firefox)"
- "E2E Tests (webkit)"
```

### Merge Queue Settings

```bash
# Enable in GitHub UI > Settings > General > Pull Requests
✅ Allow squash merging
❌ Allow merge commits
❌ Allow rebase merging
✅ Automatically delete head branches

# Merge Queue (Beta feature)
✅ Enable merge queue for main branch
✅ Maximum entries to merge: 3
✅ Maximum entries to build: 5
✅ Merge timeout: 30 minutes
```

### Required Secrets

Add these secrets in GitHub UI > Settings > Secrets and variables > Actions:

| Secret          | Purpose                | Required For      |
| --------------- | ---------------------- | ----------------- |
| `NPM_TOKEN`     | NPM package publishing | deploy.yml        |
| `SNYK_TOKEN`    | Snyk security scanning | security.yml      |
| `CODECOV_TOKEN` | Coverage reporting     | ci.yml (optional) |

### Environment Protection

For production deployments, configure environment protection rules:

- Required reviewers: @jacobshattuck
- Wait timer: 0 minutes
- Deployment branches: main only

## 🏃‍♂️ Workflow Execution

### On Pull Request

1. **Change Detection** - Detects which files changed
2. **Quality Checks** - Parallel lint, typecheck, format validation
3. **Security Scan** - npm audit, CodeQL analysis
4. **Unit Tests** - Vitest with coverage reporting
5. **Build** - TypeScript compilation and docs build
6. **E2E Tests** - Playwright across 3 browsers
7. **Performance** - Bundle size, Lighthouse audits
8. **Final Validation** - Gate for merge queue

### On Merge to Main

- All CI checks plus deployment preparation
- Artifact generation for potential release

### On Tag Push (v\*)

1. **Release Creation** - GitHub release with changelog
2. **NPM Publishing** - Package deployment
3. **Documentation Deployment** - GitHub Pages update
4. **Environment Deployment** - Production updates

## 🧪 Local Development

### Running Quality Checks

```bash
# Full CI simulation
npm run ci

# Individual checks
npm run lint:check
npm run typecheck
npm run test:coverage
npm run build

# E2E tests (requires docs server)
npm run docusaurus:start  # Terminal 1
npm run e2e              # Terminal 2
```

### Running Documentation

```bash
# Start docs with auto-generated API docs
npm run docs:full

# Or manually
npm run docusaurus:typedoc && npm run docusaurus:start
```

## 🔍 Monitoring & Debugging

### CI Failures

1. Check the **Final Validation** job for overall status
2. Individual job logs show specific failure reasons
3. Artifacts contain test reports and build outputs
4. E2E failures include screenshots and traces

### Performance Tracking

- Bundle size changes are commented on PRs
- Lighthouse scores track documentation performance
- Coverage reports show test quality trends

### Security Monitoring

- Weekly dependency audits run automatically
- Vulnerability alerts trigger immediate scans
- License compliance is checked on all PRs

## 🎯 Best Practices

### For Contributors

1. **Always run `npm run ci` before pushing**
2. **Keep PRs focused and small** for faster CI
3. **Write meaningful commit messages** for changelog generation
4. **Update tests** when adding features
5. **Check E2E tests** if changing docs

### For Maintainers

1. **Use merge queue** for main branch
2. **Review security alerts** promptly
3. **Monitor performance metrics** in PR comments
4. **Update dependencies** regularly via automated PRs
5. **Tag releases** following semantic versioning

## 🚨 Emergency Procedures

### CI System Down

```bash
# Bypass CI for critical hotfixes (admin only)
git push --no-verify
```

### Failed Deployment

```bash
# Manual rollback
git tag -d v1.2.3  # Remove bad tag
git push origin :refs/tags/v1.2.3  # Remove from remote
```

### Security Incident

1. Check security.yml workflow for vulnerability details
2. Review Snyk dashboard for affected dependencies
3. Create hotfix branch for immediate resolution
4. Use emergency bypass if needed

## 🔄 Continuous Improvement

The CI/CD pipeline is designed to evolve. Consider these future enhancements:

- **Container scanning** for Docker images
- **Deployment previews** for feature branches
- **Automated dependency updates** via Dependabot
- **Advanced performance budgets** with strict limits
- **Cross-platform testing** on Windows and macOS

---

**Your CI/CD setup is world-class! 🌟**

This pipeline implements industry best practices and will scale with your project growth.
