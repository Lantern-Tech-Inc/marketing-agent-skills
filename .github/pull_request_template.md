## Change

Describe the workflow or metadata change.

## Validation

- [ ] `node scripts/validate-skills.mjs` passes
- [ ] Ran `node scripts/sync-shared.mjs` if anything in `shared/` changed
- [ ] `evals/<skill>.json` updated for changed behavior
- [ ] `metadata.version`/`status` bumped and mirrored in `registry.json` where needed
- [ ] Folder and frontmatter names match
- [ ] Description includes concrete invocation triggers
- [ ] Required inputs and expected outputs are explicit
- [ ] External or consequential actions require approval
- [ ] No credentials, private data, or fabricated evidence are included
