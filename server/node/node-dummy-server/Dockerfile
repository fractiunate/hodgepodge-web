# --------------------------
# Stage 1: Build
# --------------------------
FROM node:22-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN chmod +x ./node_modules/.bin/tsc # Ensure tsc is executable in alpine image
RUN npm run build

# --------------------------
# Stage 2: Run
# --------------------------
FROM node:22-alpine AS run

WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
RUN npm install --omit=dev
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000
CMD ["node", "dist/server.js"]