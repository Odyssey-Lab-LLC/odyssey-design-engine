# Lessons Learned: Rising Ink Demo Images + Vercel Nested Roots

- Nested Vercel roots under `sites/[vertical]/[site]` require an extra `../` in install/build commands; documenting this in the deployment rule prevents repeat failures.
- Keeping demo images under `public/images/[demo]/` avoids future cross-demo asset collisions.
- Group hover and active states are sufficient to hide overlay icons for tap/hover without additional JS.
