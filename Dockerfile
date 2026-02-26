
ARG NODE_VERSION=24
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=development

WORKDIR /app

EXPOSE 3000

# Debugger port for Node.js inspector
EXPOSE 9229

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN corepack enable
RUN pnpm install

COPY . .

# Allow remote debugging from outside the container (see: https://nextjs.org/docs/pages/guides/debugging)
# https://github.com/vercel/next.js/discussions/78434
CMD ["pnpm", "run", "dev:debug"]
