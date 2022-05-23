import React, { useRef } from "react";
import { FileUpload } from "primereact/fileupload";
import "./test.css";
export const Test = () => {
    return (
        <div id="container">
            <div class="product-details">
                <h1>Biru Putaran</h1>
                <span class="hint new">New</span>
                <span class="hint free-shipping">Free Shipping</span>

                <span class="hint-star star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                </span>

                <p class="information">" Especially good for container gardening, the Angelonia will keep blooming all summer even if old flowers are removed. Once tall enough to cut, bring them inside and you'll notice a light scent that some say is reminiscent of apples. "</p>

                <div class="control">
                    <button class="btn">
                        <span class="price">49 $</span>

                        <span class="shopping-cart">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </span>

                        <span class="buy">Buy Now</span>
                    </button>
                </div>
            </div>

            <div class="product-image">
                <img src="https://sc01.alicdn.com/kf/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3/200006212/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3.jpg" alt="Omar Dsoky" />

                <div class="info">
                    <h2>The Description</h2>
                    <ul>
                        <li>
                            <strong>Sun Needs: </strong>Full Sun
                        </li>
                        <li>
                            <strong>Soil Needs: </strong>Damp
                        </li>
                        <li>
                            <strong>Zones: </strong>9 - 11
                        </li>
                        <li>
                            <strong>Height: </strong>2 - 3 feet
                        </li>
                        <li>
                            <strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall
                        </li>
                        <li>
                            <strong>Features: </strong>Tolerates heat
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
