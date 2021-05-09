const API = {
    getEmployees: function() {
        return fetch("https://randomuser.me/api/?results=10");
    }
}

export default API;
