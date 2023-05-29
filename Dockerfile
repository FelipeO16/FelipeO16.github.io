FROM node:18-alpine
WORKDIR /frontend
COPY . .
RUN yarn install
CMD ["yarn", "dev", "--force"]
EXPOSE 3000