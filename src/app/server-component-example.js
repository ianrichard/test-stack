// sample API call
async function getData() {
  const res = await fetch('https://reqres.in/api/users');
  return res.json();
}

export default async function Home(test) {
  const data = await getData();
  console.log(data);
  return (
    <div>

    </div>
  )
}
