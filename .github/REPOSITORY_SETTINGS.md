# 🔧 Repository Settings Configuration

# This file documents the recommended repository settings for optimal CI/CD

# Branch Protection Rules

branch_protection:
main:
required_status_checks:
strict: true
contexts: - "Final Validation" - "Code Quality (lint)" - "Code Quality (typecheck)" - "Code Quality (format-check)" - "Security Scan" - "Unit Tests" - "Build Package" - "Build Documentation" - "E2E Tests (chromium)" - "E2E Tests (firefox)" - "E2E Tests (webkit)"

    enforce_admins: true
    required_pull_request_reviews:
      required_approving_review_count: 1
      dismiss_stale_reviews: true
      require_code_owner_reviews: true
      require_last_push_approval: true

    restrictions: null
    required_linear_history: true
    allow_force_pushes: false
    allow_deletions: false

develop:
required_status_checks:
strict: true
contexts: - "Final Validation" - "Code Quality (lint)" - "Unit Tests" - "Build Package"

    enforce_admins: false
    required_pull_request_reviews:
      required_approving_review_count: 1
      dismiss_stale_reviews: true

    allow_force_pushes: false
    allow_deletions: false

# Merge Queue Configuration

merge_queue:
main: # Enable merge queue for main branch
enabled: true

    # Merge method
    merge_method: squash

    # Required checks (same as branch protection)
    required_checks:
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

    # Queue settings
    maximum_entries_to_merge: 3
    maximum_entries_to_build: 5
    merge_timeout_minutes: 30

# Repository Settings

repository:

# General settings

allow_squash_merge: true
allow_merge_commit: false
allow_rebase_merge: false
delete_branch_on_merge: true

# Security settings

enable_vulnerability_alerts: true
enable_automated_security_fixes: true

# Pages settings

pages:
source: "gh-actions"

# Environment Protection Rules

environments:
production:
protection_rules: - type: required_reviewers
reviewers: - teams: ["maintainers"] - type: wait_timer
minutes: 5
deployment_branch_policy:
protected_branches: true
custom_branch_policies: false

staging:
protection_rules: - type: required_reviewers
reviewers: - teams: ["developers"]
deployment_branch_policy:
protected_branches: false
custom_branch_policies: true
custom_branches: ["main", "develop"]

# Required Status Checks Documentation

status_checks:
ci_pipeline:
name: "🔄 CI/CD Pipeline"
description: "Main CI/CD pipeline with quality checks, testing, and builds"
contexts: - "Detect Changes": "Analyzes file changes to optimize workflow execution" - "Setup Dependencies": "Installs and caches project dependencies" - "Code Quality (lint)": "ESLint code quality checks" - "Code Quality (typecheck)": "TypeScript type checking" - "Code Quality (format-check)": "Prettier formatting verification" - "Security Scan": "Vulnerability scanning and CodeQL analysis" - "Unit Tests": "Jest/Vitest unit test execution with coverage" - "Build Package": "TypeScript compilation and artifact creation" - "Build Documentation": "Docusaurus documentation build" - "E2E Tests": "Playwright end-to-end testing across browsers" - "Final Validation": "Validates all pipeline jobs completed successfully"

security:
name: "🔒 Security & Dependencies"
description: "Weekly security scans and dependency management"
contexts: - "Vulnerability Scan": "npm audit and high/critical vulnerability detection" - "License Compliance": "Ensures all dependencies use compatible licenses" - "Dependency Review": "Reviews new dependencies in PRs"

performance:
name: "⚡ Performance Monitor"
description: "Performance benchmarks and bundle analysis"
contexts: - "Bundle Size Analysis": "Monitors package size and detects large files" - "Performance Benchmarks": "Runtime performance measurements" - "Documentation Performance": "Lighthouse audits for documentation site"

# Automated Workflows

automation:
dependency_updates:
schedule: "weekly"
auto_merge: false
description: "Automated dependency updates with safety checks"

security_scans:
schedule: "weekly"
description: "Regular security vulnerability scanning"

performance_monitoring:
schedule: "daily"
description: "Daily performance benchmarks and monitoring"

# Labels Configuration

labels:
bug:
color: "d73a4a"
description: "Something isn't working"

enhancement:
color: "a2eeef"
description: "New feature or request"

documentation:
color: "0075ca"
description: "Improvements or additions to documentation"

good-first-issue:
color: "7057ff"
description: "Good for newcomers"

help-wanted:
color: "008672"
description: "Extra attention is needed"

needs-triage:
color: "fef2c0"
description: "Needs initial review and categorization"

priority-high:
color: "d93f0b"
description: "High priority issue"

priority-low:
color: "0e8a16"
description: "Low priority issue"

security:
color: "b60205"
description: "Security-related issue"

performance:
color: "ff9500"
description: "Performance-related issue"

# Code Owners

# Create .github/CODEOWNERS file with:

# \* @your-username

# /.github/ @your-username @team-lead

# /docs/ @docs-team

# /e2e/ @qa-team
