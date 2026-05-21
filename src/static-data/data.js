import { Plane, Clock, Luggage, ShieldCheck } from "lucide-react";

export const flightSummaryRows = [
  {
    kind: "airline",
    icon: Plane,
    label: "Airline and flight",
    value: "Lufthansa . LU1422",
  },
  {
    kind: "schedule",
    icon: Clock,
    labelLeft: "Departure",
    valueLeft: "2026-06-12 . 09:25",
    labelRight: "Arrival",
    valueRight: "2026-06-12 . 12:55",
  },
];

export const flightLegs = [
  {
    title: "Outbound Flight",
    badge: ". A321",
    status: "Direct",
    departureTime: "11:20",
    departureCode: "AMS",
    duration: "3h 25m",
    arrivalTime: "15:45",
    arrivalCode: "BCN",
    hasBottomBorder: true,
  },
  {
    title: "Return Flight",
    badge: ". A321",
    status: "1 Stop",
    departureTime: "11:20",
    departureCode: "BCN",
    duration: "3h 25m",
    arrivalTime: "15:45",
    arrivalCode: "AMS",
    hasBottomBorder: false,
  },
];

export const flightInfoRows = [
  {
    icon: Luggage,
    label: "Baggage",
    value: "1 cabin + 1 checked bag (23kg) included",
  },
  {
    icon: ShieldCheck,
    label: "Cabin class",
    value: "Economy",
  },
];
