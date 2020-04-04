import axios from "axios";
const ipAddress = "192.168.1.105:8081";
const http = "http://";

export default {
  async getConversation(id) {
    let res = await axios.get(http + ipAddress + "/conversations/" + id);
    return res;
  },
  sendMessage(id) {
    axios.post(http + ipAddress + "/conversations/" + id, {
      content: 'Message de test'
    })
    .then( function (response) {
      console.log(response);
    })
  }
}