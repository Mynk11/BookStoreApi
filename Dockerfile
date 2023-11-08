FROM node:alpine

# Add the following lines

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]