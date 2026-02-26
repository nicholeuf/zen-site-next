# Node Version Management with Volta

This project uses [Volta](https://volta.sh/) for Node.js and package manager version management. Volta provides seamless, per-project control and automatic switching.

## Why Volta?
- Per-project Node.js and package manager versions (no need for global switching)
- Automatic version switching when entering a project directory
- Fast, reliable, and cross-platform

## Getting Started

1. **Install Volta:**
   - macOS/Linux:
     ```sh
     curl https://get.volta.sh | bash
     ```
   - Windows: Download from [volta.sh](https://volta.sh/)

2. **Set Node.js and pnpm for your project:**
   ```sh
   volta pin node@24
   volta pin pnpm
   ```
   - This creates a `package.json` entry and a `volta` block for Node and pnpm.

3. **Using Volta:**
   - When you enter your project directory, Volta automatically activates the pinned Node and pnpm versions.
   - No need to manually switch versions or update PATH.

## Updating Node Version

To update Node.js for your project:
```sh
volta pin node@<new_version>
```

## Troubleshooting
- If you have other Node managers (nvm, asdf, etc.), Volta will take precedence in your project directory.
- See [Volta docs](https://docs.volta.sh/guide/) for advanced usage and troubleshooting.

---

## Why We Don't Pin Volta

For this project, we do not pin the Node version with Volta. Instead, we rely on the engines.node field in package.json and the .node-version file. This allows Vercel and CI to automatically use the latest patch release for Node 24, reducing maintenance and ensuring you benefit from security and bug fixes without manual updates.

Pinning with Volta is best for teams/projects that require exact reproducibility. For solo or personal projects, automatic patch updates are simpler and safer.

---

For more details, see the [Volta Guide](https://docs.volta.sh/guide/).
