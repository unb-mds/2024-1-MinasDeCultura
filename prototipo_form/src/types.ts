export interface City {
  territory_id: string;
  territory_name: string;
  state_code: string;
  level: string;
  publication_urls: string | null;
}

export interface Gazettes {
  territory_id: string;
  date: string;
  scraped_at: string;
  url: string;
  territory_name: string;
  state_code: string;
  excerpts: string[];
  edition: string;
  is_extra_edition: boolean;
  txt_url: string;
}
