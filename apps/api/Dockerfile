FROM --platform=linux/amd64 node:18-alpine AS base
# for turbo - https://turbo.build/repo/docs/handbook/deploying-with-docker#example
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /workspace
# enable corepack for pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base as fetcher
# pnpm fetch only requires lockfile, but we'll need to build workspaces
COPY pnpm*.yaml ./
# mount pnpm store as cache & fetch dependencies
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm-store \
  pnpm fetch --ignore-scripts

FROM fetcher as builder
# specify the app in apps/ we want to build
ARG APP_NAME="api"
ENV APP_NAME=${APP_NAME}
WORKDIR /workspace
COPY . .
RUN pnpm install --frozen-lockfile --offline --silent
# build app
RUN pnpm turbo run build --filter=${APP_NAME}
RUN pnpm --filter ${APP_NAME} deploy --prod ./out

FROM base as runner
WORKDIR /workspace
# Don't run production as root
RUN addgroup --system --gid 1001 mygroup
RUN adduser --system --uid 1001 myuser
USER myuser
# copy files needed to run the app
COPY --chown=myuser:mygroup --from=builder /workspace/out/package.json .
COPY --chown=myuser:mygroup --from=builder /workspace/out/node_modules/ ./node_modules
COPY --chown=myuser:mygroup --from=builder /workspace/out/dist ./dist
# # start the app
CMD [ "node", "dist/main.js" ]