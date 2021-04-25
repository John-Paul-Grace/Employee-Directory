const API = {
    getEmployees: function() {
        return fetch("https://randomuser.me/api/?results=5", {});
    }
}

export default API;
