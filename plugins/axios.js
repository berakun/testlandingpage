export default function ({ $axios }, inject) {
  console.log($axios)
  const gorilla = $axios.create({
    baseURL: 'http://localhost:8000/api/post/books',
    timeout: 5000
    // headers: {
    //   Authorization: `Bearer FeUOw1LkQVnbXrZ8LozPtwVlumXI8ABfANNZfJaVBWg3_tPdzw`
    // }
  });

  inject('gorilla', gorilla)
}
