import axios from "axios";

function API(enteredNumber) {
  const searchQuery = "https://randomuser.me/api/?results=";
  let searchNumber = "50";
  if (enteredNumber != null || NaN || undefined) {
    let usednumber = enteredNumber.toString();
    searchNumber = usednumber;
    
    return axios.get(searchQuery + searchNumber);
  }
  return axios.get(searchQuery + searchNumber);
}

export default API;
