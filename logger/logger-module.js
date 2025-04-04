import { TYPE_ERROR, TYPE_WARN, TYPE_LOG } from "../constain.js";

function logger_n(log, type = TYPE_LOG) {
  console[type](log);
}
export default logger_n;
