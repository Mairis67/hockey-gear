import React from "react";
import MenuItem from "../menu-item/MenuItem";

import "./Directory.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Ice Skates",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0261/3159/5346/products/SUPREME2SPROSkate_6cbca97c-2c83-44a2-94e6-28eea75ef57a_1024x1024.jpg?v=1580497890",
          id: 1,
          linkUrl: "Ice Skates",
        },
        {
          title: "Hockey Helmets",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/2336/0143/files/Annotation_2020-08-15_153042_1400x.jpg?v=1597530699",
          id: 2,
          linkUrl: "",
        },
        {
          title: "Hockey Bags",
          imageUrl:
            "https://www.monkeysports.eu/media/catalog/product/cache/9/image/480x/9df78eab33525d08d6e5fb8d27136e95/b/a/bauer-elite-35-sr-carry-hockey-equipment-bag-2.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "Hockey Protective",
          imageUrl:
            "https://ccmhockey.com/sites/all/themes/custom/ccm/assets/images/ccm-blocks/product-categories/players/protectives/super_tacks_as1_product.png",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "Hockey Sticks",
          imageUrl:
            "https://cdn.shortpixel.ai/spai/w_880+q_+ret_img+to_webp/https://www.startplayinghockey.com/wp-content/uploads/2018/01/hockey_sticks.jpg",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="homepage__directoryMenu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
