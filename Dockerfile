FROM node:18
WORKDIR /usr/app
COPY . .
RUN npm install
EXPOSE ${VITE_INNER_PORT}
CMD npm run dev