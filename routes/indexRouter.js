import express from "express";

// Creating the router
const indexRouter = express.Router();

// Initial messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Router middleware
indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("newMessage");
});

indexRouter.get("/messages/:messageId", (req, res) => {
  res.render("messageDetails", {
    message: messages[req.params.messageId - 1],
    index: req.params.messageId - 1,
  });
});

indexRouter.post("/new", (req, res) => {
  const newMessage = {
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect("/");
});

export default indexRouter;
