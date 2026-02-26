# Node Version Management with pnpm

This project uses pnpm as both the package manager and Node.js version manager, leveraging Corepack for consistency and reliability.

## Using pnpm as Node Manager

- **Corepack** is included with Node.js 16.13+ and manages pnpm for you.
- **pnpm env add <version>** installs the specified Node.js version for your project.
- **pnpm env use <version>** activates the specified Node.js version for your shell or project.
- **pnpm env use --global <version>** sets the Node.js version globally for your user.

### Setting up your shell
To ensure pnpm-managed Node is used, add this to your shell profile:

```sh
export PATH="$HOME/Library/pnpm/node:$PATH"
```

## Updating Node Version

To update the Node.js version for your project:

1. Run the update_node.sh script:
   ```sh
   ./scripts/update_node.sh
   ```
   - You will be prompted for the new Node major version.
   - The script updates `.node-version`, `package.json` (engines.node), installs the new Node version with pnpm, and updates dependencies.

2. Open a new terminal to ensure your PATH is updated and the new Node version is active.

## Important: Global Node Activation

To activate the Node.js version globally for your user (so node -v matches everywhere), use:

```sh
pnpm env use --global <version>
```

This ensures your shell and all processes use the specified Node.js version. If you only use pnpm env use <version>, it may only affect the current shell or project.

## Troubleshooting
- If `node -v` does not match the expected version after running the script, check your PATH and ensure no other Node managers (nvm, asdf, brew) are overriding it.
- Always run `corepack enable` before using pnpm in scripts.

---

## pnpm env use Limitation

As of now, pnpm env use <version> can only be used with the --global option:

> ERR_PNPM_NOT_IMPLEMENTED_YET  "pnpm env use <version>" can only be used with the "--global" option currently

This means you must use:

```sh
pnpm env use --global <version>
```

Project-only activation is not yet supported. Always use --global to ensure Node.js is switched for your user.

---

## pnpm env add Limitation

Similarly, pnpm env add <version> can only be used with the --global option:

> ERR_PNPM_NOT_IMPLEMENTED_YET  "pnpm env add <version>" can only be used with the "--global" option currently

You must use:

```sh
pnpm env add --global <version>
```

Project-only activation is not yet supported. Always use --global to install Node.js for your user.

---

For more details, see [pnpm Node.js management docs](https://pnpm.io/nodejs-management) and [Corepack docs](https://nodejs.org/docs/latest-v16.x/api/corepack.html).
