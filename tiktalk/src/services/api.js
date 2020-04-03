import axios from "axios";

export default {
    async getEventSingle() {
      let res = await axios.get("http://localhost:8081/conversations/1");
      return res.data;
    }
  }