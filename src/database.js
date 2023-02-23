import { v4 as uuid } from "uuid";
import char1 from "./assets/celebrities_images/ryan-reynolds.jpg";
import char2 from "./assets/celebrities_images/Meryl-Streep.jpg";
import char3 from "./assets/celebrities_images/timothee_chalamet.jpg";
import char4 from "./assets/celebrities_images/Chris_Hemsworth.jpg";
import char5 from "./assets/celebrities_images/julie-andrews.jpg";

export const celebrities = [
  {
    id: uuid(),
    image: char1,
    description: "Ryan Gosling",
    correctAnswer: false,
  },
  {
    id: uuid(),
    image: char2,
    description: "Meryl Streep",
    correctAnswer: true,
  },
  {
    id: uuid(),
    image: char3,
    description: "Tom Holland",
    correctAnswer: false,
  },
  {
    id: uuid(),
    image: char4,
    description: "Liam Hemsworth",
    correctAnswer: false,
  },
  {
    id: uuid(),
    image: char5,
    description: "Julie Andrews",
    correctAnswer: true,
  },
];
