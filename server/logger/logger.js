const { format, createLogger, transports } = require("winston"),
  { timestamp, combine, errors, printf } = format;
chalk = require("chalk");

const logFormat = printf(({ level, message, stack, timestamp }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});
const logger = createLogger({
  level: "debug",
  format: combine(
    format.colorize(),
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    errors({
      stack: true,
    }),
    logFormat
  ),
  defaultMeta: {
    service: "user-service",
  },
  transports: [new transports.Console()],
});
module.exports = logger;
