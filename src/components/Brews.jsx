import React from "react";
import { brewLists } from "../../constants";

const Brews = () => {
  return (
    <section id="brews" className="back">
        <div className="list">
            <div className="popular">
                <h2>Popular Brews</h2>
                <ul>
                    {brewLists.map((brew) => (
                        <li key={brew.name}>
                            <div className="md:me-28">
                                <h3 className="font-bold">{brew.name}</h3>
                                <p className="text-sm text-gray-500">{brew.country}</p>
                                <p className="text-sm">{brew.detail}</p>
                            </div>
                            <span>{brew.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="modern">
                <h2>Modern Brews</h2>
                <ul>
                    {brewLists.map((brew) => (
                        <li key={brew.name}>
                            <div className="md:me-28">
                                <h3 className="font-bold">{brew.name}</h3>
                                <p className="text-sm text-gray-500">{brew.country}</p>
                                <p className="text-sm">{brew.detail}</p>
                            </div>
                            <span>{brew.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </section>
    )
}

export default Brews;