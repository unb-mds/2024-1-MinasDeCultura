"use client";
import { Gazettes } from "@/types";
import React, { useState } from "react";

export default function QueryForm(cities: any) {
  const [query, setQuery] = useState({
    territory_id: "",
    querystring: "",
    published_since: "",
    published_until: "",
  });
  const [gazettes, setGazettes] = useState<Gazettes[]>([]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const filteredQuery = Object.fromEntries(
      Object.entries(query).filter(([_, value]) => value !== "")
    );
    const queryString = new URLSearchParams(filteredQuery).toString();

    const urlQuery = `https://queridodiario.ok.org.br/api/gazettes?${queryString}`;
    fetch(urlQuery)
      .then((response) => response.json())
      .then((data) => {
        setGazettes(data.gazettes);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };
  return (
    <main className="min-h-screen flex flex-col gap-10 items-center justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justifty-center gap-6"
      >
        <div>
          <label>Cidade:</label>
          <select
            name="territory_id"
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-2 text-zinc-400"
          >
            <option value="">Selecione uma cidade</option>
            {cities.cities.map((city: any) => (
              <option key={city.territory_id} value={city.territory_id}>
                {city.territory_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Termo de busca:</label>
          <input
            type="text"
            name="querystring"
            value={query.querystring}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-2 text-zinc-500"
          />
        </div>
        <div>
          <label>Início</label>
          <input
            type="date"
            name="published_since"
            value={query.published_since}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-2 text-zinc-400"
          />
        </div>
        <div>
          <label>Fim</label>
          <input
            type="date"
            name="published_until"
            value={query.published_until}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-2 text-zinc-400"
          />
        </div>
        <button type="submit" className="p-6 bg-zinc-800 rounded">
          Consultar API
        </button>
      </form>
      <div className="grid grid-cols-3 gap-4  max-w-[700px] w-full">
        {gazettes &&
          gazettes.map((gazette: Gazettes) => (
            <div
              key={gazette.url}
              className="flex flex-col gap-2 border p-4 rounded-xl w-fit"
            >
              <h3 className="text-xl font-bold">{gazette.territory_name}</h3>
              {/*DATAS*/}
              <p>Publicado em: {new Date(gazette.date).toLocaleDateString()}</p>
              <a href={gazette.url} target="_blank" rel="noreferrer">
                Link aqui
              </a>
            </div>
          ))}
      </div>
    </main>
  );
}
