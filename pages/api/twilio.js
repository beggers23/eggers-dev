const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require("twilio")(accountSid, authToken);

export default (req, res) => {
  const getTextContent = () => {
    const { type, idea } = req.body;
    return `${type}: ${idea}`;
  };
  const textMessage = getTextContent();

  if (req.body) {
    client.messages.create({
      body: textMessage,
      from: "+12286419593",
      to: "+19149073990",
    });
    res.status = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ...req.body, success: true }));
  }
};
