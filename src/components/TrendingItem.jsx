import "./TrendingSlider.css";
// import { items } from "./AllData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as contentful from "contentful";

const client = contentful.createClient({
  space: "bhzhs9zd5zjh",
  accessToken: "WvAbIw_8Hm-M38ZxGcdLTq6MhaWFmMX0vOCIhTx-yXw",
});

function TrendingItem() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from Contentful
    client
      .getEntries({
        content_type: "products", // Use the Content Type ID for "Products"
      })
      .then((response) => {
        // Update the state with the fetched items
        setItems(response.items);
      })
      .catch((error) => console.error("Error fetching data from Contentful:", error));
  }, []);

  const filteredItems = items.filter((item) => item.fields.id >= 8);
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.sys.id} className="row-item">
          <Link
            onClick={() => window.top(0, 0)}
            to={`/categories/product/${item.fields.id}`}
          >
            <div className="item-header">
              <img src={item.fields.img.fields.file.url} alt="product" />
            </div>
            <div className="item-description">
              <p>{item.fields.description}</p>
              <p className="item-price">{item.fields.price}$</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default TrendingItem;
