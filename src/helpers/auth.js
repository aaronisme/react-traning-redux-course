export default function auth() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        uid: 'aaronisme',
        avator: '',
        name: 'aaron chen',
      });
    }, 2000);
  });
}
