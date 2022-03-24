import Horizon from "./img/cabana1.jpg"
import Bulat from "./img/cabana2.jpg"
import Abadi from "./img/cabana3.jpg"
import Akari from "./img/cabana4.jpg"
import React from 'react'

const mockData = [
    {
        src: Horizon,
        title: "Our Horizon cabin",
        description: "Our cabin has Spa space for 4 people or a small family, has experience in the river",
        price: 140000,
        cat: "cabain"
    },

    {
        src: Bulat,
        title: "Our Bulat cabin",
        description: "Our cabin has Spa space for 4 people or a small family, has experience in the river",
        price: 250000,
        cat: "cabain"
    },

    {
        src: Abadi,
        title: "Our Abadi cabain",
        description: "Our cabin has Spa space for 4 people or a small family, has experience in the river",
        price: 950000,
        cat: "cabain"
    },

    {
        src: Akari,
        title: "Our Akari cabain",
        description: "Our cabin has Spa space for 4 people or a small family, has experience in the river",
        price: 400000,
        cat: "cabain"

    }


];

export const chips = [
    {key: 0, label: "Cancellation Flexibility"},
    {key: 1, label: "Standard rooms"},
    {key: 2, label: "Executive rooms"},
    {key: 3, label: "Access to lounge"},
    {key: 4, label: "moreFilters"},
]

export default mockData

