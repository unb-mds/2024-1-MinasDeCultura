import QueryForm from "@/components/QueryForm";
import { City } from "@/types";
export default async function Home() {
  const data = await fetch("https://queridodiario.ok.org.br/api/cities").then(
    (response) => response.json()
  );
  const cities: { territory_id: string; territory_name: string }[] = data.cities
    .filter((city: City) => city.state_code === "MG")
    .map((city: City) => ({
      territory_id: city.territory_id,
      territory_name: city.territory_name,
    }));
  return (
    <main className="min-h-screen flex items-center justify-center">
      <QueryForm cities={cities} />
    </main>
  );
}
