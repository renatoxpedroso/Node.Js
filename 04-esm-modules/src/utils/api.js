export const key = {
    value: "someValue",
    permission: "admin"
}

export const getDataFromApi = async (endpoint) => {
    // Simulate an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from API endpoint: ${endpoint}`);
        }, 1000);
    });
};
