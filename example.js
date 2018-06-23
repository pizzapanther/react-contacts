function add (x, y) {
  return axios.get(`/narf-add?x=${x}&y=${y}`);
}
