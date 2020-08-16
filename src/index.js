import('./dynamic')
  .then(data => {
    console.log(data.default);
    data.default();
  });

console.log('index.js');

export default function main() {}
// export default
