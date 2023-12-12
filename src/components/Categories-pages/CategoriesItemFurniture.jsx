import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as contentful from "contentful";
// import { items } from "../AllData";

const client = contentful.createClient({
  space: "bhzhs9zd5zjh",
  accessToken: "WvAbIw_8Hm-M38ZxGcdLTq6MhaWFmMX0vOCIhTx-yXw",
});

function CategoriesItem() {
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

  const filteredItems = items.filter((item) => item.fields.category === "furniture");
  return (
    <>
      <div className="proud-container">
        <div className="container">
          <div className="products-grid">
            {filteredItems.map((item) => (
              <div key={item.sys.id} className="product normal">
                <Link to={`/categories/product/${item.fields.id}`}>
                  <div className="product-header">
                    <img src={item.fields.img.fields.file.url} alt="product1" />
                  </div>
                  <div className="product-details">
                    <p>{item.fields.description}</p>
                    <p className="item-price">{item.fields.price}$</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesItem;
