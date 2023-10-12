import { json } from "react-router-dom";

export async function loader() {
  const response = await fetch("https://v1.formula-1.api-sports.io/seasons", {
    headers: { "x-apisports-key": "a9437af1b730727e25d449c1aae20697" },
  });

  if (!response.ok) {
    throw json({ message: "Could not fetch seasons" }, { status: 500 });
  } else {
    const data = response.json();
    return data;
  }
}
