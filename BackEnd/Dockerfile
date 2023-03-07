# Builder image 
FROM node:17-alpine AS builder

WORKDIR /app

# Install dependecies
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY prisma/ .
COPY .env .

RUN npm install
RUN npm install ts-node

# Copy source (see .dockerignore)
COPY . .

###
# Production image
###
FROM node:17-alpine as app

WORKDIR /app

# Copy package manager
COPY --from=builder /app/package.json .
COPY --from=builder /app/tsconfig.json .

# Copy dependencies
COPY --from=builder /app/node_modules node_modules

# Copy code
COPY --from=builder /app/src src
COPY --from=builder /app/prisma prisma
COPY --from=builder /app/.env .env


EXPOSE 8000

# Prefix commands
ENTRYPOINT ["npm", "run"]

# Start production (migrate database, generate prisma client and run app)
CMD ["start:migrate:prod"]