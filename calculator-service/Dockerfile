# docker build -t microservices-learn/calculator-service:0.1 .
# docker run -dp 8080:8080 microservices-learn/calculator-service:0.1

##### STAGE 1 #####
FROM node:16-alpine3.14 as builder

# Create app directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn

# Bundle app source
COPY . .
RUN yarn build

##### STAGE 2 #####
FROM node:16-alpine3.14

WORKDIR /app
COPY package.json yarn.lock tsconfig.json ./
RUN yarn --production

COPY --from=builder /app/dist ./dist

RUN ls

EXPOSE 8080
CMD yarn start