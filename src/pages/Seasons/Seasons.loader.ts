import { json } from "react-router-dom";

export async function loader() {
  const response = await fetch("https://v1.formula-1.api-sports.io/seasons");

  if (!response.ok) {
    throw json({ message: "Could not fetch seasons" }, { status: 500 });
  } else {
    const data = response.json();
    return data;
  }
}
