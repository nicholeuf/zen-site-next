FROM node:18-alpine

ENV NODE_ENV=development

WORKDIR /app

EXPOSE 3000

# debugging ports
EXPOSE 9229
EXPOSE 9230

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN corepack enable
RUN pnpm install

COPY . .

CMD ["pnpm", "run", "dev:debug"]
