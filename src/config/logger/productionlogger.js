import { createLogger , format , transports } from "winston";
let {combine , timestamp ,printf ,json} = format;

const customFormat = printf(({level, message, format}) => {
    return `${timestamp} : [${level}] : ${message}`;
});

const ProducitionLogger = createLogger({
    level: 'debug',
    format: combine(
        timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
        json()
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'combined.log'})
    ]
});


export default ProducitionLogger;