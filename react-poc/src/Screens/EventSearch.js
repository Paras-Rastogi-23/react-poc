import EventGrid from "../components/EventGrid";
import SearchBar from "../components/SearchBar";
import { CATEGORIES } from "../data/dummy-data";

function EventSearch() {
  const EventCategories = CATEGORIES.map((event) => (
    <EventGrid key={event.id} Events={event} />
  ));

  return (
    <div>
      <SearchBar />

      <div>{EventCategories}</div>
    </div>
  );
}

export default EventSearch;
