
# Node Version Management with nvm

This project uses [nvm](https://github.com/nvm-sh/nvm) for Node.js version management. nvm allows you to easily switch between Node versions and pin a project to a major version using a `.nvmrc` file.

## Using nvm

- **.nvmrc**: The file `.nvmrc` in the project root specifies the Node.js major version to use (e.g., `24`).
- **nvm install**: Installs the version specified in `.nvmrc`.
- **nvm use**: Switches your shell to use the version specified in `.nvmrc`.

### Setting up your shell
To ensure nvm is loaded, add this to your shell profile (if not already present):

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```


## Updating Node Version

To update the Node.js version for your project:

1. Run the update_node.sh script:
   ```sh
   ./scripts/update_node.sh
   ```
   - You will be prompted for the new Node major version.
   - The script updates `.nvmrc`, `package.json` (engines.node), installs the new Node version with nvm, and updates dependencies.

2. Open a new terminal or run `nvm use` to ensure your shell is using the new Node version.


## Important: Node Activation

To activate the Node.js version specified in `.nvmrc` for your shell, use:

```sh
nvm use
```

This ensures your shell and all processes use the specified Node.js version. You can also add `nvm use` to your shell profile.


## Troubleshooting
- If `node -v` does not match the expected version after running the script, check your PATH and ensure no other Node managers (asdf, brew, Volta, etc.) are overriding it.


---

For more details, see [nvm docs](https://github.com/nvm-sh/nvm#usage).
