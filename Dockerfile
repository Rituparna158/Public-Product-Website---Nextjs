# =========================
# Stage 1: Dependencies
# =========================
FROM node:20-alpine AS deps

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile


# =========================
# Stage 2: Builder
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

ENV NEXT_PUBLIC_API_URL=http://strapi:1337/api

# Install pnpm
RUN npm install -g pnpm

COPY --from=deps /app/node_modules ./node_modules

COPY . .

# Build Next.js
RUN pnpm build


# =========================
# Stage 3: Runner
# =========================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# 🔥 IMPORTANT: Set API URL at RUNTIME too
ENV NEXT_PUBLIC_API_URL=http://strapi:1337/api

# Copy only required files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expose port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]