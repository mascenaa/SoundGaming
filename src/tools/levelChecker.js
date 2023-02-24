function clean(response) {
    const res = response.toUpperCase();
    return res.replace(/\s/g, "");
}


export { clean }