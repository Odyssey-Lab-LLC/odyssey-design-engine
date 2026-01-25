# Lessons Learned: Tailwind Content Scope Update

- Tailwind `content` should list only deployable site roots; broad globs can match nested toolchains and slow builds.
- Make content-scope updates part of the site creation checklist to prevent future warnings.
