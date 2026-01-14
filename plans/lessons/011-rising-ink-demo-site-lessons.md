# Lessons Learned: Rising Ink Demos Site

- The speed-first exception required updates in both `.rules/10-design-system.md` and `.rules/11-design-system-extensions.md` to avoid conflict with the "no hardcoded values" rule.
- Pointer rule files (`.cursor/` and `.kilocode/`) needed explicit mention of the exception to prevent future agent confusion.
- Duplicate Tailwind/PostCSS configs in `sites/` can linger after refactors; verify references before removal.
- The Georgi demo already carries inline animation CSS, avoiding separate Tailwind extensions for this pass.
