import "./App.css";
import b1 from "./Assets/fan/b1.png";
import b2 from "./Assets/fan/b2.png";
import b3 from "./Assets/fan/b3.png";
import b4 from "./Assets/fan/b4.png";
import b5 from "./Assets/fan/b5.png";
import b6 from "./Assets/fan/b6.png";
import b7 from "./Assets/fan/b7.png";
import b8 from "./Assets/fan/b8.png";
import b9 from "./Assets/fan/b9.png";
import c1 from "./Assets/fan/c1.png";
import c2 from "./Assets/fan/c2.png";
import c3 from "./Assets/fan/c3.png";
import c4 from "./Assets/fan/c4.png";
import c5 from "./Assets/fan/c5.png";
import c6 from "./Assets/fan/c6.png";
import c7 from "./Assets/fan/c7.png";
import c8 from "./Assets/fan/c8.png";
import c9 from "./Assets/fan/c9.png";
import d1 from "./Assets/fan/d1.png";
import d2 from "./Assets/fan/d2.png";
import d3 from "./Assets/fan/d3.png";
import d4 from "./Assets/fan/d4.png";
import d5 from "./Assets/fan/d5.png";
import d6 from "./Assets/fan/d6.png";
import d7 from "./Assets/fan/d7.png";
import d8 from "./Assets/fan/d8.png";
import d9 from "./Assets/fan/d9.png";
import gd from "./Assets/fan/gd.png";
import rd from "./Assets/fan/rd.png";
import wd from "./Assets/fan/wd.png";
import e from "./Assets/fan/e.png";
import s from "./Assets/fan/s.png";
import w from "./Assets/fan/w.png";
import n from "./Assets/fan/n.png";
import Navbar from "./navbar.js";
import React, { Component } from "react";
import _ from "lodash";

const tiles = [
  {
    img: b1,
    name: "b1",
    suit: "bamboo",
    num: "1",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b2,
    name: "b2",
    suit: "bamboo",
    num: "2",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b3,
    name: "b3",
    suit: "bamboo",
    num: "3",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b4,
    name: "b4",
    suit: "bamboo",
    num: "4",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b5,
    name: "b5",
    suit: "bamboo",
    num: "5",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b6,
    name: "b6",
    suit: "bamboo",
    num: "6",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b7,
    name: "b7",
    suit: "bamboo",
    num: "7",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b8,
    name: "b8",
    suit: "bamboo",
    num: "8",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b9,
    name: "b9",
    suit: "bamboo",
    num: "9",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b1,
    name: "b1",
    suit: "bamboo",
    num: "1",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b2,
    name: "b2",
    suit: "bamboo",
    num: "2",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b3,
    name: "b3",
    suit: "bamboo",
    num: "3",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b4,
    name: "b4",
    suit: "bamboo",
    num: "4",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b5,
    name: "b5",
    suit: "bamboo",
    num: "5",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b6,
    name: "b6",
    suit: "bamboo",
    num: "6",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b7,
    name: "b7",
    suit: "bamboo",
    num: "7",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b8,
    name: "b8",
    suit: "bamboo",
    num: "8",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b9,
    name: "b9",
    suit: "bamboo",
    num: "9",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b1,
    name: "b1",
    suit: "bamboo",
    num: "1",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b2,
    name: "b2",
    suit: "bamboo",
    num: "2",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b3,
    name: "b3",
    suit: "bamboo",
    num: "3",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b4,
    name: "b4",
    suit: "bamboo",
    num: "4",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b5,
    name: "b5",
    suit: "bamboo",
    num: "5",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b6,
    name: "b6",
    suit: "bamboo",
    num: "6",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b7,
    name: "b7",
    suit: "bamboo",
    num: "7",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b8,
    name: "b8",
    suit: "bamboo",
    num: "8",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b9,
    name: "b9",
    suit: "bamboo",
    num: "9",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b1,
    name: "b1",
    suit: "bamboo",
    num: "1",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b2,
    name: "b2",
    suit: "bamboo",
    num: "2",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b3,
    name: "b3",
    suit: "bamboo",
    num: "3",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b4,
    name: "b4",
    suit: "bamboo",
    num: "4",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b5,
    name: "b5",
    suit: "bamboo",
    num: "5",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b6,
    name: "b6",
    suit: "bamboo",
    num: "6",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b7,
    name: "b7",
    suit: "bamboo",
    num: "7",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b8,
    name: "b8",
    suit: "bamboo",
    num: "8",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: b9,
    name: "b9",
    suit: "bamboo",
    num: "9",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c1,
    name: "c1",
    suit: "characters",
    num: "1",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c2,
    name: "c2",
    suit: "characters",
    num: "2",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c3,
    name: "c3",
    suit: "characters",
    num: "3",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c4,
    name: "c4",
    suit: "characters",
    num: "4",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c5,
    name: "c5",
    suit: "characters",
    num: "5",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c6,
    name: "c6",
    suit: "characters",
    num: "6",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c7,
    name: "c7",
    suit: "characters",
    num: "7",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c8,
    name: "c8",
    suit: "characters",
    num: "8",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c9,
    name: "c9",
    suit: "characters",
    num: "9",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c1,
    name: "c1",
    suit: "characters",
    num: "1",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c2,
    name: "c2",
    suit: "characters",
    num: "2",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c3,
    name: "c3",
    suit: "characters",
    num: "3",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c4,
    name: "c4",
    suit: "characters",
    num: "4",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c5,
    name: "c5",
    suit: "characters",
    num: "5",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c6,
    name: "c6",
    suit: "characters",
    num: "6",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c7,
    name: "c7",
    suit: "characters",
    num: "7",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c8,
    name: "c8",
    suit: "characters",
    num: "8",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c9,
    name: "c9",
    suit: "characters",
    num: "9",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c1,
    name: "c1",
    suit: "characters",
    num: "1",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c2,
    name: "c2",
    suit: "characters",
    num: "2",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c3,
    name: "c3",
    suit: "characters",
    num: "3",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c4,
    name: "c4",
    suit: "characters",
    num: "4",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c5,
    name: "c5",
    suit: "characters",
    num: "5",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c6,
    name: "c6",
    suit: "characters",
    num: "6",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c7,
    name: "c7",
    suit: "characters",
    num: "7",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c8,
    name: "c8",
    suit: "characters",
    num: "8",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c9,
    name: "c9",
    suit: "characters",
    num: "9",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c1,
    name: "c1",
    suit: "characters",
    num: "1",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c2,
    name: "c2",
    suit: "characters",
    num: "2",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c3,
    name: "c3",
    suit: "characters",
    num: "3",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c4,
    name: "c4",
    suit: "characters",
    num: "4",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c5,
    name: "c5",
    suit: "characters",
    num: "5",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c6,
    name: "c6",
    suit: "characters",
    num: "6",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c7,
    name: "c7",
    suit: "characters",
    num: "7",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c8,
    name: "c8",
    suit: "characters",
    num: "8",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: c9,
    name: "c9",
    suit: "characters",
    num: "9",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d1,
    name: "d1",
    suit: "dots",
    num: "1",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d2,
    name: "d2",
    suit: "dots",
    num: "2",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d3,
    name: "d3",
    suit: "dots",
    num: "3",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d4,
    name: "d4",
    suit: "dots",
    num: "4",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d5,
    name: "d5",
    suit: "dots",
    num: "5",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d6,
    name: "d6",
    suit: "dots",
    num: "6",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d7,
    name: "d7",
    suit: "dots",
    num: "7",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d8,
    name: "d8",
    suit: "dots",
    num: "8",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d9,
    name: "d9",
    suit: "dots",
    num: "9",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d1,
    name: "d1",
    suit: "dots",
    num: "1",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d2,
    name: "d2",
    suit: "dots",
    num: "2",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d3,
    name: "d3",
    suit: "dots",
    num: "3",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d4,
    name: "d4",
    suit: "dots",
    num: "4",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d5,
    name: "d5",
    suit: "dots",
    num: "5",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d6,
    name: "d6",
    suit: "dots",
    num: "6",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d7,
    name: "d7",
    suit: "dots",
    num: "7",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d8,
    name: "d8",
    suit: "dots",
    num: "8",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d9,
    name: "d9",
    suit: "dots",
    num: "9",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d1,
    name: "d1",
    suit: "dots",
    num: "1",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d2,
    name: "d2",
    suit: "dots",
    num: "2",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d3,
    name: "d3",
    suit: "dots",
    num: "3",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d4,
    name: "d4",
    suit: "dots",
    num: "4",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d5,
    name: "d5",
    suit: "dots",
    num: "5",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d6,
    name: "d6",
    suit: "dots",
    num: "6",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d7,
    name: "d7",
    suit: "dots",
    num: "7",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d8,
    name: "d8",
    suit: "dots",
    num: "8",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d9,
    name: "d9",
    suit: "dots",
    num: "9",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d1,
    name: "d1",
    suit: "dots",
    num: "1",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d2,
    name: "d2",
    suit: "dots",
    num: "2",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d3,
    name: "d3",
    suit: "dots",
    num: "3",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d4,
    name: "d4",
    suit: "dots",
    num: "4",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d5,
    name: "d5",
    suit: "dots",
    num: "5",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d6,
    name: "d6",
    suit: "dots",
    num: "6",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d7,
    name: "d7",
    suit: "dots",
    num: "7",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d8,
    name: "d8",
    suit: "dots",
    num: "8",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: d9,
    name: "d9",
    suit: "dots",
    num: "9",
    type: "suit",
    status: "simple",
    meld: null,
    points: 0,
  },
  {
    img: e,
    name: "e",
    suit: "wind",
    num: "east",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: s,
    name: "s",
    suit: "wind",
    num: "south",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: w,
    name: "w",
    suit: "wind",
    num: "west",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: n,
    name: "n",
    suit: "wind",
    num: "north",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: e,
    name: "e",
    suit: "wind",
    num: "east",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: s,
    name: "s",
    suit: "wind",
    num: "south",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: w,
    name: "w",
    suit: "wind",
    num: "west",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: n,
    name: "n",
    suit: "wind",
    num: "north",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: e,
    name: "e",
    suit: "wind",
    num: "east",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: s,
    name: "s",
    suit: "wind",
    num: "south",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: w,
    name: "w",
    suit: "wind",
    num: "west",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: n,
    name: "n",
    suit: "wind",
    num: "north",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: e,
    name: "e",
    suit: "wind",
    num: "east",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: s,
    name: "s",
    suit: "wind",
    num: "south",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: w,
    name: "w",
    suit: "wind",
    num: "west",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: n,
    name: "n",
    suit: "wind",
    num: "north",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: gd,
    name: "gd",
    suit: "dragon",
    num: "green",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: rd,
    name: "rd",
    suit: "dragon",
    num: "red",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: wd,
    name: "wd",
    suit: "dragon",
    num: "white",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: gd,
    name: "gd",
    suit: "dragon",
    num: "green",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: rd,
    name: "rd",
    suit: "dragon",
    num: "red",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: wd,
    name: "wd",
    suit: "dragon",
    num: "white",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: gd,
    name: "gd",
    suit: "dragon",
    num: "green",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: rd,
    name: "rd",
    suit: "dragon",
    num: "red",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: wd,
    name: "wd",
    suit: "dragon",
    num: "white",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: gd,
    name: "gd",
    suit: "dragon",
    num: "green",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: rd,
    name: "rd",
    suit: "dragon",
    num: "red",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: wd,
    name: "wd",
    suit: "dragon",
    num: "white",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
];

const hand = [];
const tester = [
  {
    img: w,
    name: "w",
    suit: "wind",
    num: "west",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: n,
    name: "n",
    suit: "wind",
    num: "north",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: w,
    name: "w",
    suit: "wind",
    num: "west",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: n,
    name: "n",
    suit: "wind",
    num: "north",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: wd,
    name: "wd",
    suit: "dragon",
    num: "white",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: gd,
    name: "gd",
    suit: "dragon",
    num: "green",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: rd,
    name: "rd",
    suit: "dragon",
    num: "red",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: wd,
    name: "wd",
    suit: "dragon",
    num: "white",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: gd,
    name: "gd",
    suit: "dragon",
    num: "green",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: rd,
    name: "rd",
    suit: "dragon",
    num: "red",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: wd,
    name: "wd",
    suit: "dragon",
    num: "white",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: gd,
    name: "gd",
    suit: "dragon",
    num: "green",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: rd,
    name: "rd",
    suit: "dragon",
    num: "red",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
  {
    img: wd,
    name: "wd",
    suit: "dragon",
    num: "white",
    type: "honor",
    status: "honor",
    meld: null,
    points: 0,
  },
];

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      hand: hand,
      points: 0,
      fan: [],
    };
  }

  // generate fan to quiz
  makeRandomFan = () => {
    const picker = _.sampleSize(tiles, 14);
    let inCase = _.differenceBy(tiles, picker, "name");
    let newPick = [];
    let sortedHand = [];
    // adjust for kongs
    let kongs = _.countBy(_.map(picker, "name"));
    // if there are any FOK
    if (_.includes(kongs, 4)) {
      const fours = _.get(_.countBy(kongs), 4);
      if (fours === 1) {
        newPick = picker.concat(_.sampleSize(inCase, 1));
        inCase = _.differenceBy(
          inCase,
          _.differenceBy(tiles, newPick, "name"),
          "name"
        );
        kongs = _.countBy(_.map(newPick, "name"));
        if (_.get(_.countBy(kongs), 4) === 2) {
          newPick = picker.concat(_.sampleSize(inCase, 1));
          inCase = _.differenceBy(tiles, newPick, "name");
          kongs = _.countBy(_.map(newPick, "name"));
          if (_.get(_.countBy(kongs), 4) === 3) {
            newPick = picker.concat(_.sampleSize(inCase, 1));
            inCase = _.differenceBy(tiles, newPick, "name");
            kongs = _.countBy(_.map(newPick, "name"));
            if (_.get(_.countBy(kongs), 4) === 4) {
              newPick = picker.concat(_.sampleSize(inCase, 1));
              sortedHand = newPick.sort((a, b) => (a.name > b.name && 1) || -1);
              this.setState({
                ...this.state,
                hand: sortedHand,
                visible: !this.state.visible,
              });
            } else {
              newPick = picker.concat(_.sampleSize(inCase, 1));
              sortedHand = newPick.sort((a, b) => (a.name > b.name && 1) || -1);
              this.setState({
                ...this.state,
                hand: sortedHand,
                visible: !this.state.visible,
              });
            }
          } else {
            newPick = picker.concat(_.sampleSize(inCase, 1));
            sortedHand = newPick.sort((a, b) => (a.name > b.name && 1) || -1);
            this.setState({
              ...this.state,
              hand: sortedHand,
              visible: !this.state.visible,
            });
          }
        } else {
          newPick = picker.concat(_.sampleSize(inCase, 1));
          sortedHand = newPick.sort((a, b) => (a.name > b.name && 1) || -1);
          this.setState({
            ...this.state,
            hand: sortedHand,
            visible: !this.state.visible,
          });
        }
      } else if (fours === 2) {
        newPick = picker.concat(_.sampleSize(inCase, 2));
        inCase = _.differenceBy(tiles, newPick, "name");
        if (_.get(_.countBy(kongs), 4) === 3) {
          newPick = picker.concat(_.sampleSize(inCase, 1));
          inCase = _.differenceBy(tiles, newPick, "name");
          kongs = _.countBy(_.map(newPick, "name"));
          if (_.get(_.countBy(kongs), 4) === 4) {
            newPick = picker.concat(_.sampleSize(inCase, 1));
            sortedHand = newPick.sort((a, b) => (a.name > b.name && 1) || -1);
            this.setState({
              ...this.state,
              hand: sortedHand,
              visible: !this.state.visible,
            });
          } else {
            newPick = picker.concat(_.sampleSize(inCase, 1));
            sortedHand = newPick.sort((a, b) => (a.name > b.name && 1) || -1);
            this.setState({
              ...this.state,
              hand: sortedHand,
              visible: !this.state.visible,
            });
          }
        } else {
          newPick = picker.concat(_.sampleSize(inCase, 1));
          sortedHand = newPick.sort((a, b) => (a.name > b.name && 1) || -1);
          this.setState({
            ...this.state,
            hand: sortedHand,
            visible: !this.state.visible,
          });
        }
      } else if (fours === 3) {
        newPick = picker.concat(_.sampleSize(inCase, 3));
        inCase = _.differenceBy(tiles, newPick, "name");
        if (_.get(_.countBy(kongs), 4) === 4) {
          newPick = picker.concat(_.sampleSize(inCase, 1));
          sortedHand = newPick.sort((a, b) => (a.name > b.name && 1) || -1);
          this.setState({
            ...this.state,
            hand: sortedHand,
            visible: !this.state.visible,
          });
        } else {
          newPick = picker.concat(_.sampleSize(inCase, 1));
          sortedHand = newPick.sort((a, b) => (a.name > b.name && 1) || -1);
          this.setState({
            ...this.state,
            hand: sortedHand,
            visible: !this.state.visible,
          });
        }
      }
    } else {
      sortedHand = picker.sort((a, b) => (a.name > b.name && 1) || -1);
      this.setState({
        ...this.state,
        hand: sortedHand,
        visible: !this.state.visible,
      });
    }
  };

  validHand = () => {};

  // EXCLUSIONS
  // Big Three Winds
  // All Pungs
  // Prevalent Wind
  // Seat Wind
  // Pung of Terminals or Honors
  // Two Dragon Pungs
  // Dragon Pung
  // Full Flush
  // Concealed Hand
  // No Honors
  // Three Kongs
  // Single Wait
  // Seven Pairs
  // Full Flush
  // All Types
  // Outside Hand
  // Three Concealed Pungs
  // Two Concealed Pungs
  // All Chows
  // Pure Double Chow
  // Two Terminal Chows
  // Tile Hog
  // Pure Triple Chow
  // Pure Shifted Pungs
  // Pure Shifted Chows
  // All Simples
  // Upper Four
  // Lower Four
  // Short Straight
  // Mixed Double Chow
  // Double pungs
  // One Voided Suit
  // Self-Drawn
  // Last Tile
  // Melded Kong

  // fan logic
  // Big Four Winds
  fan1 = () => {
    let test = null;
    const group = _.map(this.state.hand, "name");
    const fan1 = ["e", "e", "e", "n", "n", "n", "s", "s", "s", "w", "w", "w"];
    for (let i = 0; i < fan1.length; i++) {
      test = _.includes(group, fan1[i]);
    }
    if (test === true) {
      this.setState({
        ...this.state,
        points: this.state.points + 88,
        fan: [...this.state.fan, "Big Four Winds"],
      });
    }
  };
  // Big Three Dragons
  fan2 = () => {
    let test = null;
    const group = _.map(this.state.hand, "name");
    const fan2 = ["gd", "gd", "gd", "rd", "rd", "rd", "wd", "wd", "wd"];
    for (let i = 0; i < fan2.length; i++) {
      test = _.includes(group, fan2[i]);
    }
    if (test === true) {
      this.setState({
        ...this.state,
        points: this.state.points + 88,
        fan: [...this.state.fan, "Big Three Dragons"],
      });
    }
  };
  // All Green
  fan3 = () => {
    const group = _.map(this.state.hand, "name");
    const greens = ["b2", "b3", "b4", "b6", "b8", "gd"];
    if (_.difference(group, greens).length === 0) {
      const pungs = _.get(_.invert(_.countBy(group)), 3);
      const leftovers = _.difference(group, pungs);
      const chows = this.setState({
        ...this.state,
        points: this.state.points + 88,
        fan: [...this.state.fan, "All Green"],
      });
    }
  };
  // Nine Gates
  fan4 = () => {
    let testN = null;
    const groupN = _.map(this.state.hand, "num");
    const fanN = [
      "1",
      "1",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "9",
      "9",
    ];
    for (let i = 0; i < fanN.length; i++) {
      testN = _.includes(groupN, fanN[i]);
    }
    const groupS = _.map(this.state.hand, "suit");
    const testS = groupS.every((s) => s === groupS[0]);
    if (testN && testS === true) {
      this.setState({
        ...this.state,
        points: this.state.points + 88,
      });
    }
  };

  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <body className="mBody">
          <h1>Fan Quiz</h1>
          <h3>
            Practice recognizing fan by guessing how many points the displayed
            hand is worth.
          </h3>
          <div className="fan">
            <div className="fanTiles">
              {this.state.hand.map((tile) => (
                <img
                  className="fanImgQ"
                  src={tile.img}
                  alt={tile.num + tile.suit + "mahjong tile"}
                ></img>
              ))}
            </div>
          </div>
          <button
            className="hollowButton"
            onClick={() => {
              this.makeRandomFan();
            }}
          >
            START
          </button>
        </body>
      </div>
    );
  }
}

export default Quiz;
